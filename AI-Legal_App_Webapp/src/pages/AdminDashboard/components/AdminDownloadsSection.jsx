import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Download, RefreshCw, RotateCw, Calendar, Globe, Smartphone, Apple, 
  TrendingUp, Users, ArrowLeft, Search, Filter, FileSpreadsheet, FileText, 
  FileDown, ChevronRight, CheckCircle, Info, Layers, ChevronDown, Award, BarChart3,
  Radio, Zap, X, MapPin, UserX, UserCheck, Clock, ArrowUpRight
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, 
  CartesianGrid, Legend 
} from 'recharts';
import { toast } from 'react-hot-toast';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import apiService from '../../../services/apiService';
import { COUNTRIES } from '../../../constants/countries';
import { STATES_BY_COUNTRY, INDIAN_STATES_LIST } from '../../../constants/states';

const DATE_PRESETS = [
  { id: 'today', label: 'Today' },
  { id: 'yesterday', label: 'Yesterday' },
  { id: '7d', label: '7 Days' },
  { id: '30d', label: '30 Days' },
  { id: '60d', label: '60 Days' },
  { id: '90d', label: '90 Days' },
  { id: '1y', label: '1 Year' },
  { id: '2y', label: '2 Years' },
  { id: 'all', label: 'All Time' },
  { id: 'custom', label: 'Custom' }
];

export default function AdminDownloadsSection() {
  // Global Filters
  const [dateRange, setDateRange] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  // UI / State Drill-down
  const [selectedCountryDetail, setSelectedCountryDetail] = useState(null);
  const [countryDetailData, setCountryDetailData] = useState(null);
  const [loadingCountryDetail, setLoadingCountryDetail] = useState(false);
  const [stateViewMode, setStateViewMode] = useState('cards'); // 'cards' | 'table'
  const [stateDaysFilter, setStateDaysFilter] = useState('7d'); // '7d' | '30d' | 'today'
  const [countryDaysFilter, setCountryDaysFilter] = useState('7d'); // '7d' | '30d' | 'today'
  const [kpiPeriod, setKpiPeriod] = useState('today'); // 'today' | 'yesterday' | '7d' | '30d'

  // Data States
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [syncingHistorical, setSyncingHistorical] = useState(false);
  const [syncingGa4, setSyncingGa4] = useState(false);
  const [syncingSilent, setSyncingSilent] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const [summary, setSummary] = useState({
    total: 0,
    today: 0,
    yesterday: 0,
    last7Days: 0,
    last30Days: 0,
    last90Days: 0,
    last2Years: 0,
    android: 0,
    ios: 0,
    web: 0,
    firstTimeInstallers: 0,
    uninstalls: 0,
    activeInstalls: 0
  });

  const [countriesList, setCountriesList] = useState([]);
  const [countriesTotalCount, setCountriesTotalCount] = useState(0);
  const [countrySummaryTotals, setCountrySummaryTotals] = useState(null);
  const [countrySearch, setCountrySearch] = useState('');
  const [countrySortBy, setCountrySortBy] = useState('totalInstalls');
  const [countrySortOrder, setCountrySortOrder] = useState('desc');
  const [countryPage, setCountryPage] = useState(1);
  const [countryPageSize, setCountryPageSize] = useState(25);

  const [trendsData, setTrendsData] = useState([]);
  const [chartMode, setChartMode] = useState('split'); // 'split' | 'total'
  const [exportOpen, setExportOpen] = useState(false);
  const [stateSearch, setStateSearch] = useState('');

  // Uninstalls Modal States
  const [showUninstallsModal, setShowUninstallsModal] = useState(false);
  const [uninstallsLoading, setUninstallsLoading] = useState(false);
  const [uninstallsList, setUninstallsList] = useState([]);
  const [uninstallsPagination, setUninstallsPagination] = useState({ page: 1, limit: 10, total: 0, totalPages: 1 });
  const [uninstallsStats, setUninstallsStats] = useState({ total: 0, android: 0, ios: 0, registered: 0, guest: 0 });
  const [uninstallsSearch, setUninstallsSearch] = useState('');
  const [uninstallsPlatform, setUninstallsPlatform] = useState('all');
  const [uninstallsUserType, setUninstallsUserType] = useState('registered'); // Strictly registered
  const [uninstallsPage, setUninstallsPage] = useState(1);

  const fetchUninstalledUsers = useCallback(async (
    page = 1,
    search = uninstallsSearch,
    platform = uninstallsPlatform,
    userType = 'registered'
  ) => {
    setUninstallsLoading(true);
    try {
      const params = {
        page,
        limit: 10,
        search: (search || '').trim(),
        platform,
        userType: 'registered',
        range: dateRange,
        country: countryFilter
      };
      if (dateRange === 'custom') {
        if (startDate) params.startDate = startDate;
        if (endDate) params.endDate = endDate;
      }
      const res = await apiService.getUninstalledUsers(params);
      if (res?.success) {
        setUninstallsList(res.uninstalls || []);
        setUninstallsPagination(res.pagination || { page: 1, limit: 10, total: 0, totalPages: 1 });
        setUninstallsStats(res.stats || { total: 0, android: 0, ios: 0, registered: 0, guest: 0 });
        setUninstallsPage(page);
      }
    } catch (err) {
      console.error('Failed to load uninstalled users:', err);
      toast.error('Failed to load uninstalled users data.');
    } finally {
      setUninstallsLoading(false);
    }
  }, [dateRange, countryFilter, startDate, endDate, uninstallsSearch, uninstallsPlatform]);

  const handleOpenUninstallsModal = (initialUserType = 'registered') => {
    setShowUninstallsModal(true);
    setUninstallsSearch('');
    setUninstallsPlatform('all');
    setUninstallsUserType('registered');
    fetchUninstalledUsers(1, '', 'all', 'registered');
  };

  const handleExportUninstallsCSV = () => {
    if (!uninstallsList || uninstallsList.length === 0) {
      toast.error('No uninstalls data to export');
      return;
    }
    const rows = uninstallsList.map((item, idx) => ({
      '#': idx + 1,
      'User Name': item.user?.name || 'Registered User',
      'Email': item.user?.email || 'N/A',
      'Phone': item.user?.phone || 'N/A',
      'Platform': (item.platform || 'android').toUpperCase(),
      'Country': item.country || 'India',
      'State': item.state || 'Unspecified Region',
      'City': item.city || 'N/A',
      'Device Type': item.deviceType || 'phone',
      'OS Version': item.deviceOSVersion || 'N/A',
      'Registered User': 'Yes',
      'Uninstalled On': item.uninstalledAt ? new Date(item.uninstalledAt).toLocaleString('en-IN') : 'N/A'
    }));
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Uninstalled Users');
    XLSX.writeFile(workbook, `Uninstalled_Registered_Users_${new Date().toISOString().slice(0, 10)}.xlsx`);
    toast.success('Registered uninstalls report exported to Excel!');
  };

  // Available states for selected country filter
  const availableStates = useMemo(() => {
    if (!countryFilter) return [];
    if (countryFilter.toLowerCase() === 'india') {
      return INDIAN_STATES_LIST.map(s => s.name);
    }
    const match = Object.keys(STATES_BY_COUNTRY).find(
      c => c.toLowerCase() === countryFilter.toLowerCase()
    );
    return match ? STATES_BY_COUNTRY[match] : [];
  }, [countryFilter]);

  // Load summary, countries, trends
  const fetchAnalytics = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    else setRefreshing(true);

    try {
      const params = {
        range: dateRange,
        platform: platformFilter,
        country: countryFilter,
        state: stateFilter
      };

      if (dateRange === 'custom') {
        if (startDate) params.startDate = startDate;
        if (endDate) params.endDate = endDate;
      }

      const [sumRes, countRes, trendRes] = await Promise.all([
        apiService.getDownloadAnalyticsSummary(params),
        apiService.getDownloadAnalyticsCountries({
          ...params,
          search: countrySearch,
          sortBy: countrySortBy,
          sortOrder: countrySortOrder,
          page: countryPage,
          limit: countryPageSize
        }),
        apiService.getDownloadAnalyticsTrends({
          ...params,
          granularity: (dateRange === 'today' || dateRange === 'yesterday') ? 'hour' : 'day'
        })
      ]);

      if (sumRes?.success && sumRes.summary) {
        setSummary(sumRes.summary);
        setLastUpdated(new Date());
      }

      if (countRes?.success) {
        setCountriesList(countRes.countries || []);
        const total = countRes.pagination?.totalItems ?? countRes.pagination?.total ?? (countRes.countries || []).length;
        setCountriesTotalCount(total);
        if (countRes.summaryTotals) {
          setCountrySummaryTotals(countRes.summaryTotals);
        } else if (countRes.totalDownloadsSum !== undefined) {
          setCountrySummaryTotals({ totalInstalls: countRes.totalDownloadsSum });
        }
      }

      if (trendRes?.success) {
        setTrendsData(trendRes.trends || []);
      }
    } catch (err) {
      console.error("Failed to load downloads analytics:", err);
      toast.error("Failed to fetch download analytics.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [dateRange, startDate, endDate, platformFilter, countryFilter, stateFilter, countrySearch, countrySortBy, countrySortOrder, countryPage, countryPageSize]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  // Fetch Country Drill-Down when a country is selected
  const fetchCountryDetail = useCallback(async (countryName) => {
    if (!countryName) return;
    setLoadingCountryDetail(true);
    try {
      const params = {
        range: dateRange,
        platform: platformFilter
      };
      if (dateRange === 'custom') {
        if (startDate) params.startDate = startDate;
        if (endDate) params.endDate = endDate;
      }
      const res = await apiService.getDownloadAnalyticsCountryDetails(countryName, params);
      if (res?.success) {
        setCountryDetailData(res);
      }
    } catch (err) {
      console.error("Failed to load country detail:", err);
      toast.error(`Failed to load details for ${countryName}`);
    } finally {
      setLoadingCountryDetail(false);
    }
  }, [dateRange, platformFilter, startDate, endDate]);

  const handleSelectCountry = (countryName) => {
    setSelectedCountryDetail(countryName);
    setStateSearch('');
    fetchCountryDetail(countryName);
  };

  const handleBackToCountries = () => {
    setSelectedCountryDetail(null);
    setCountryDetailData(null);
  };

  // Sync historical users to AppInstall
  const handleSyncHistorical = async () => {
    setSyncingHistorical(true);
    try {
      const res = await apiService.syncHistoricalDownloads();
      if (res?.success) {
        toast.success(res.message || "Historical install telemetry synced successfully!");
        fetchAnalytics(true);
      } else {
        toast.error("Sync completed with warnings.");
      }
    } catch (err) {
      console.error("Sync error:", err);
      toast.error("Failed to sync historical users.");
    } finally {
      setSyncingHistorical(false);
    }
  };

  // Sync GA4 Uninstalls
  const handleSyncGa4 = async () => {
    setSyncingGa4(true);
    try {
      const res = await apiService.syncGaUninstalls();
      if (res?.success) {
        toast.success(res.message || "GA4 uninstalls synced successfully!");
        fetchAnalytics(true);
      } else if (res?.needsConfig) {
        toast((t) => (
          <div className="text-xs">
            <p className="font-bold text-slate-900 dark:text-white">GA4 Setup Required</p>
            <p className="mt-1 text-slate-600 dark:text-zinc-300">{res.message}</p>
            <p className="mt-1 text-[11px] text-[#B88B2A] font-semibold">
              Add GA4_PROPERTY_ID to .env &amp; invite {res.serviceAccountEmail} in GA4 console.
            </p>
          </div>
        ), { duration: 6000 });
      } else {
        toast.error(res?.message || "GA4 sync completed with warnings.");
      }
    } catch (err) {
      console.error("GA4 sync error:", err);
      const msg = err.response?.data?.message || err.message || "Failed to sync GA4 uninstalls.";
      if (err.response?.data?.needsConfig) {
        toast.error("GA4 Property ID not set in .env. See docs.");
      } else {
        toast.error(msg);
      }
    } finally {
      setSyncingGa4(false);
    }
  };

  // Sync Real-Time Uninstalls via Silent Mobile Push Ping (Same-day live detection)
  const handleSyncSilent = async () => {
    setSyncingSilent(true);
    try {
      const res = await apiService.syncSilentUninstalls();
      if (res?.success) {
        toast.success(res.message || `Live sync complete: ${res.uninstalledDetected || 0} uninstalls detected today!`);
        fetchAnalytics(true);
      } else {
        toast.error(res?.message || "Live uninstall sync completed with warnings.");
      }
    } catch (err) {
      console.error("Silent uninstall sync error:", err);
      const msg = err.response?.data?.message || err.message || "Failed to execute live uninstall sync.";
      toast.error(msg);
    } finally {
      setSyncingSilent(false);
    }
  };

  // Export handlers
  const handleExportCSV = async () => {
    try {
      toast.loading("Generating CSV export...", { id: 'export-csv' });
      const params = {
        range: dateRange,
        platform: platformFilter,
        country: countryFilter,
        state: stateFilter
      };
      const res = await apiService.exportDownloadAnalyticsReport(params);
      const rows = res?.data || res?.records;
      if (res?.success && rows) {
        if (!rows.length) {
          toast.error("No data to export", { id: 'export-csv' });
          return;
        }
        const headers = Object.keys(rows[0]).join(',');
        const csvContent = "data:text/csv;charset=utf-8," 
          + [headers, ...rows.map(r => Object.values(r).map(v => `"${(v ?? '').toString().replace(/"/g, '""')}"`).join(','))].join('\n');
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `AI_Legal_Downloads_Report_${dateRange}_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("CSV export downloaded successfully!", { id: 'export-csv' });
      }
    } catch (err) {
      console.error("CSV Export failed:", err);
      toast.error("CSV export failed", { id: 'export-csv' });
    }
    setExportOpen(false);
  };

  const handleExportExcel = async () => {
    try {
      toast.loading("Generating Excel workbook...", { id: 'export-excel' });
      const params = {
        range: dateRange,
        platform: platformFilter,
        country: countryFilter,
        state: stateFilter
      };
      const res = await apiService.exportDownloadAnalyticsReport(params);
      const rows = res?.data || res?.records;
      if (res?.success && rows) {
        const workbook = XLSX.utils.book_new();

        // Sheet 1: Summary KPIs
        const summaryRows = [
          { Metric: "Scope Range", Value: dateRange.toUpperCase() },
          { Metric: "Total Installs / Downloads", Value: summary.total },
          { Metric: "Active Installs", Value: summary.activeInstalls },
          { Metric: "Android Installs", Value: summary.android },
          { Metric: "iOS Installs", Value: summary.ios },
          { Metric: "Web Portal Active Users", Value: summary.web },
          { Metric: "Today", Value: summary.today },
          { Metric: "Yesterday", Value: summary.yesterday },
          { Metric: "Last 7 Days", Value: summary.last7Days },
          { Metric: "Last 30 Days", Value: summary.last30Days },
          { Metric: "Last 90 Days", Value: summary.last90Days },
          { Metric: "Last 2 Years", Value: summary.last2Years },
          { Metric: "First-time Installers", Value: summary.firstTimeInstallers },
          { Metric: "Reported Uninstalls", Value: summary.uninstalls }
        ];
        const wsSummary = XLSX.utils.json_to_sheet(summaryRows);
        wsSummary['!cols'] = [{ wch: 32 }, { wch: 20 }];
        XLSX.utils.book_append_sheet(workbook, wsSummary, "Overview KPIs");

        // Sheet 2: Countries Breakdown
        if (countriesList.length > 0) {
          const wsCountries = XLSX.utils.json_to_sheet(countriesList);
          wsCountries['!cols'] = [{ wch: 25 }, { wch: 10 }, { wch: 15 }, { wch: 15 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 12 }];
          XLSX.utils.book_append_sheet(workbook, wsCountries, "Country Breakdown");
        }

        // Sheet 3: State / Regional Breakdown
        if (filteredStates.length > 0) {
          const stateRows = filteredStates.map(st => ({
            "Region / State": st.state,
            "Total Installs": st.totalInstalls,
            "Market Share (%)": `${st.percentageOfCountry || 0}%`,
            "Android Installs": st.android || 0,
            "iOS Installs": st.ios || 0,
            "Last 7 Days": st.last7Days || 0,
            "Last 30 Days": st.last30Days || 0
          }));
          const wsStates = XLSX.utils.json_to_sheet(stateRows);
          wsStates['!cols'] = [{ wch: 30 }, { wch: 15 }, { wch: 18 }, { wch: 18 }, { wch: 15 }, { wch: 15 }, { wch: 15 }];
          XLSX.utils.book_append_sheet(workbook, wsStates, "Regional Breakdown");
        }

        // Sheet 4: Raw Telemetry Records
        const wsRaw = XLSX.utils.json_to_sheet(rows);
        wsRaw['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 20 }, { wch: 20 }];
        XLSX.utils.book_append_sheet(workbook, wsRaw, "Detailed Records");

        XLSX.writeFile(workbook, `AI_Legal_Installs_Analytics_${new Date().toISOString().split('T')[0]}.xlsx`);
        toast.success("Excel report downloaded with auto-formatted columns!", { id: 'export-excel' });
      }
    } catch (err) {
      console.error("Excel Export failed:", err);
      toast.error("Excel export failed", { id: 'export-excel' });
    }
    setExportOpen(false);
  };

  const handleExportPDF = () => {
    try {
      toast.loading("Generating PDF report...", { id: 'export-pdf' });
      const doc = new jsPDF('p', 'mm', 'a4');

      doc.setFillColor(248, 250, 252);
      doc.rect(0, 0, 210, 36, 'F');

      doc.setTextColor(15, 23, 42);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("AI Legal App — Downloads & Installs Report", 14, 18);

      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text(`Generated: ${new Date().toLocaleString()} | Filter: ${dateRange.toUpperCase()} | Platform: ${platformFilter.toUpperCase()}`, 14, 28);

      doc.setDrawColor(226, 232, 240);
      doc.line(14, 34, 196, 34);

      doc.setTextColor(15, 23, 42);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("1. Executive Summary KPIs", 14, 46);

      doc.setFontSize(9);
      let y = 54;
      const kpis = [
        ["Total Installs / Downloads", (summary.total || 0).toLocaleString()],
        ["Active Devices", (summary.activeInstalls || summary.total || 0).toLocaleString()],
        ["Android Platform Installs", (summary.android || 0).toLocaleString()],
        ["iOS Platform Installs", (summary.ios || 0).toLocaleString()],
        ["Web Portal Active Users", (summary.web || 0).toLocaleString()],
        ["Installs Today", (summary.today || 0).toLocaleString()],
        ["Installs Yesterday", (summary.yesterday || 0).toLocaleString()],
        ["Last 7 Days Velocity", (summary.last7Days || 0).toLocaleString()],
        ["Last 30 Days Velocity", (summary.last30Days || 0).toLocaleString()],
        ["Last 90 Days", (summary.last90Days || 0).toLocaleString()],
        ["Last 2 Years", (summary.last2Years || 0).toLocaleString()],
        ["First-time Installers", (summary.firstTimeInstallers || 0).toLocaleString()],
        ["Reported Uninstalls", (summary.uninstalls || 0).toLocaleString()]
      ];

      kpis.forEach(([label, val], idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const xPos = col === 0 ? 14 : 110;
        const yPos = y + (row * 8);
        
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text(`${label}:`, xPos, yPos);

        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.text(val, xPos + 55, yPos);
      });

      y = y + (Math.ceil(kpis.length / 2) * 8) + 12;
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text("2. Top Geographic Regions", 14, y);

      y += 8;
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setFillColor(241, 245, 249);
      doc.rect(14, y - 4, 182, 7, 'F');
      doc.text("Country", 18, y);
      doc.text("Total Installs", 75, y);
      doc.text("Market Share", 115, y);
      doc.text("7-Day Velocity", 155, y);

      y += 7;
      doc.setFont("helvetica", "normal");
      countriesList.slice(0, 15).forEach((c, idx) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
        if (idx % 2 === 1) {
          doc.setFillColor(248, 250, 252);
          doc.rect(14, y - 4, 182, 6.5, 'F');
        }
        doc.setTextColor(30, 41, 59);
        doc.text(c.country || 'Unknown', 18, y);
        doc.text((c.totalInstalls || 0).toLocaleString(), 75, y);
        doc.text(`${c.percentageOfTotal || 0}%`, 115, y);
        doc.text((c.last7Days || 0).toLocaleString(), 155, y);
        y += 6.5;
      });

      doc.save(`AI_Legal_Downloads_Summary_${new Date().toISOString().split('T')[0]}.pdf`);
      toast.success("PDF summary downloaded!", { id: 'export-pdf' });
    } catch (err) {
      console.error("PDF Export failed:", err);
      toast.error("PDF export failed", { id: 'export-pdf' });
    }
    setExportOpen(false);
  };

  // Filtered states in country detail (Unified Delhi, Central / Capital Region & Delhi (NCT) into one entry)
  const filteredStates = useMemo(() => {
    if (!countryDetailData?.states) return [];
    
    // Group and merge Central / Capital Region, Delhi, and Delhi (NCT) into one unified entry
    const map = new Map();
    countryDetailData.states.forEach(st => {
      const raw = (st.state || '').trim();
      const isDelhiOrCapital = /delhi|capital region|nct/i.test(raw);
      const key = isDelhiOrCapital ? 'Delhi (NCT)' : (raw || 'General Territory');

      if (map.has(key)) {
        const ex = map.get(key);
        ex.totalInstalls = (ex.totalInstalls || 0) + (st.totalInstalls || 0);
        ex.totalDownloads = (ex.totalDownloads || 0) + (st.totalDownloads || 0);
        ex.today = (ex.today || 0) + (st.today || 0);
        ex.last7Days = (ex.last7Days || 0) + (st.last7Days || 0);
        ex.last30Days = (ex.last30Days || 0) + (st.last30Days || 0);
        ex.android = (ex.android || 0) + (st.android || 0);
        ex.ios = (ex.ios || 0) + (st.ios || 0);
      } else {
        map.set(key, { ...st, state: key });
      }
    });

    const countryTotal = countryDetailData?.countryMetrics?.total || 1;
    const list = Array.from(map.values()).map(item => ({
      ...item,
      percentageOfCountry: ((item.totalInstalls / countryTotal) * 100).toFixed(1)
    }));

    list.sort((a, b) => (b.totalInstalls || 0) - (a.totalInstalls || 0));

    if (!stateSearch.trim()) return list;
    return list.filter(s => 
      s.state?.toLowerCase().includes(stateSearch.toLowerCase())
    );
  }, [countryDetailData, stateSearch]);

  return (
    <div className="space-y-3.5 sm:space-y-4">
      {/* 1. Header & Actions Bar (Phone Responsive) */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-3.5 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#B88B2A]/10 text-[#B88B2A] border border-[#B88B2A]/20 shrink-0">
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">Downloads & Installs</h2>
              <span className="px-2 py-0.5 text-[9px] sm:text-[10px] font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 rounded-full flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live {lastUpdated ? `(${lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })})` : 'Telemetry'}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-snug">
              Production install tracking across Android, iOS, country jurisdictions, and regional territories.
            </p>
          </div>
        </div>

        {/* Global Action Buttons: Refresh and Export */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={() => fetchAnalytics(true)}
            disabled={refreshing}
            className="flex items-center justify-center space-x-1 sm:space-x-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-zinc-200 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 rounded-xl transition-all disabled:opacity-50 cursor-pointer shadow-2xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 shrink-0 ${refreshing ? 'animate-spin text-[#B88B2A]' : 'text-slate-500'}`} />
            <span className="truncate">{refreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>

          {/* Export Dropdown */}
          <div className="relative">
            <button
              onClick={() => setExportOpen(!exportOpen)}
              className="flex items-center justify-center space-x-1 sm:space-x-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#B88B2A] hover:bg-[#a67c24] rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 shrink-0" />
              <span>Export</span>
              <ChevronDown className="w-3 h-3 opacity-90 shrink-0" />
            </button>

            {exportOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-zinc-700 rounded-xl shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setExportOpen(false)}
              >
                <button
                  onClick={handleExportCSV}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-bold">Export CSV</p>
                    <p className="text-[10px] text-slate-400">Raw install data</p>
                  </div>
                </button>
                <button
                  onClick={handleExportExcel}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-bold">Export Excel (.xlsx)</p>
                    <p className="text-[10px] text-slate-400">Multi-sheet workbook</p>
                  </div>
                </button>
                <button
                  onClick={handleExportPDF}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg transition-colors text-left cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-rose-600 shrink-0" />
                  <div>
                    <p className="font-bold">Export PDF</p>
                    <p className="text-[10px] text-slate-400">Printable summary</p>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. COMPACT SUMMARY KPI CARDS (6 Essential Cards: Total Installs, Android, iOS, Web, Velocity Dropdown, Uninstall Rate) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
        {/* Card 1: Total Installs */}
        <div className="bg-white dark:bg-[#1E293B] border border-amber-200/60 dark:border-amber-500/20 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Total Installs</span>
            <div className="p-1 rounded-md bg-[#B88B2A]/10 text-[#B88B2A] border border-[#B88B2A]/20">
              <Download className="w-3 h-3" />
            </div>
          </div>
          <div className="mt-1">
            <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {loading ? '...' : (summary.total || 0).toLocaleString()}
            </p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5 truncate flex items-center gap-1">
              <CheckCircle className="w-2.5 h-2.5 shrink-0" />
              {summary.activeInstalls || summary.total} active devices
            </p>
          </div>
        </div>

        {/* Card 2: Android */}
        <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-between hover:border-emerald-300 dark:hover:border-emerald-800 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Android</span>
            <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              <Smartphone className="w-3 h-3" />
            </div>
          </div>
          <div className="mt-1">
            <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {loading ? '...' : (summary.android || 0).toLocaleString()}
            </p>
            <p className="text-[10px] text-emerald-600 font-semibold mt-0.5 truncate">
              {summary.total > 0 ? `${Math.round((summary.android / summary.total) * 100)}% share` : '0%'}
            </p>
          </div>
        </div>

        {/* Card 3: iOS */}
        <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-800 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">iOS</span>
            <div className="p-1 rounded-md bg-sky-500/10 text-sky-600 border border-sky-500/20">
              <Apple className="w-3 h-3" />
            </div>
          </div>
          <div className="mt-1">
            <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {loading ? '...' : (summary.ios || 0).toLocaleString()}
            </p>
            <p className="text-[10px] text-sky-600 font-semibold mt-0.5 truncate">
              {summary.total > 0 ? `${Math.round((summary.ios / summary.total) * 100)}% share` : '0%'}
            </p>
          </div>
        </div>

        {/* Card 4: Web */}
        <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-800 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Web</span>
            <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
              <Globe className="w-3 h-3" />
            </div>
          </div>
          <div className="mt-1">
            <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {loading ? '...' : (summary.web || 0).toLocaleString()}
            </p>
            <p className="text-[10px] text-indigo-600 font-semibold mt-0.5 truncate">
              Active Users
            </p>
          </div>
        </div>

        {/* Card 5: Days Dropdown (Today / Yesterday / 7 Days / 30 Days) */}
        <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-zinc-700 transition-all">
          <div className="flex items-center justify-between gap-1">
            <select
              value={kpiPeriod}
              onChange={(e) => setKpiPeriod(e.target.value)}
              className="bg-slate-100 dark:bg-zinc-800 text-[10px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-zinc-200 rounded-md px-1.5 py-0.5 border border-slate-200 dark:border-zinc-700 focus:outline-none cursor-pointer"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="all">All Time</option>
            </select>
            <div className="p-1 rounded-md bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shrink-0">
              <TrendingUp className="w-3 h-3" />
            </div>
          </div>
          <div className="mt-1">
            <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {loading ? '...' : (
                kpiPeriod === 'all'
                  ? (summary.totalAllTime || summary.total || 0).toLocaleString()
                  : kpiPeriod === 'yesterday'
                  ? (summary.yesterday || 0).toLocaleString()
                  : kpiPeriod === '7d'
                  ? (summary.last7Days || 0).toLocaleString()
                  : kpiPeriod === '30d'
                  ? (summary.last30Days || 0).toLocaleString()
                  : (summary.today || 0).toLocaleString()
              )}
            </p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">
              {kpiPeriod === 'all'
                ? 'All-time cumulative'
                : kpiPeriod === 'yesterday'
                ? 'Previous day installs'
                : kpiPeriod === '7d'
                ? 'Weekly installs'
                : kpiPeriod === '30d'
                ? 'Monthly run-rate'
                : 'First 24 hrs installs'}
            </p>
          </div>
        </div>

        {/* Card 6: Uninstall Rate */}
        <div 
          onClick={handleOpenUninstallsModal}
          className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-between hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
          title="Click to view detailed list of uninstalled devices & users"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 group-hover:text-rose-600 flex items-center gap-1">
              Uninstall Rate
            </span>
            <div className="p-1 rounded-md bg-rose-500/10 text-rose-600 border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white transition-all shadow-xs">
              <ArrowLeft className="w-3 h-3 rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
          <div className="mt-1">
            <div className="flex items-baseline justify-between">
              <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                {loading ? '...' : (summary.total > 0 ? `${((summary.uninstalls / summary.total) * 100).toFixed(1)}%` : '0%')}
              </p>
              <span className="text-[10px] text-rose-500 font-bold group-hover:underline flex items-center gap-0.5">
                Details &rarr;
              </span>
            </div>
            <p className="text-[10px] text-rose-500 font-semibold mt-0.5 truncate">
              Overall churn rate
            </p>
          </div>
        </div>
      </div>

      {/* 4. Time-Series Trends Chart (Phone Responsive) */}
      <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-3.5 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#B88B2A]" />
              Installation & Download Trends
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400">
              Daily telemetry velocity for {dateRange.toUpperCase()} ({platformFilter.toUpperCase()})
            </p>
          </div>

          <div className="flex items-center self-start sm:self-auto bg-slate-100 dark:bg-zinc-900 p-0.5 rounded-lg border border-slate-200/60 dark:border-zinc-800 text-xs">
            <button
              onClick={() => setChartMode('split')}
              className={`px-2.5 py-0.5 rounded-md font-bold text-xs transition-all cursor-pointer ${
                chartMode === 'split' 
                  ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-xs' 
                  : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900'
              }`}
            >
              Split Platforms
            </button>
            <button
              onClick={() => setChartMode('total')}
              className={`px-2.5 py-0.5 rounded-md font-bold text-xs transition-all cursor-pointer ${
                chartMode === 'total' 
                  ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-xs' 
                  : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900'
              }`}
            >
              Total
            </button>
          </div>
        </div>

        <div className="h-56 sm:h-64 lg:h-72 w-full pt-2">
          {loading ? (
            <div className="h-full flex items-center justify-center text-slate-400 text-xs font-semibold">
              <RefreshCw className="w-4 h-4 animate-spin mr-2 text-[#B88B2A]" />
              Loading trends...
            </div>
          ) : trendsData.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-xs font-semibold">
              <Calendar className="w-6 h-6 mb-1 opacity-40" />
              No telemetry in range
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendsData} margin={{ top: 10, right: 10, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotalLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#B88B2A" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#B88B2A" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAndroidLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorIosLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0284c7" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorWebLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:stroke-zinc-800" />
                <XAxis 
                  dataKey="date" 
                  stroke="#94a3b8" 
                  fontSize={9} 
                  tickLine={false}
                  tickFormatter={(val) => {
                    if (!val) return '';
                    const parts = val.split('-');
                    return parts.length >= 3 ? `${parts[2]}/${parts[1]}` : val;
                  }}
                />
                <YAxis stroke="#94a3b8" fontSize={9} tickLine={false} allowDecimals={false} domain={[0, 'auto']} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    color: '#0f172a',
                    fontSize: '11px',
                    fontWeight: 600
                  }}
                  itemStyle={{ fontWeight: 700 }}
                  formatter={(value, name) => {
                    const n = String(name || '').toLowerCase();
                    const label = n.includes('android') ? 'Android' : n.includes('ios') ? 'iOS' : n.includes('web') ? 'Web' : 'Total Installs';
                    return [(value || 0).toLocaleString(), label];
                  }}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Legend verticalAlign="top" height={30} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 600 }} />
                {chartMode === 'total' ? (
                  <Area
                    type="monotone"
                    dataKey="total"
                    name="Total Installs"
                    stroke="#B88B2A"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorTotalLight)"
                  />
                ) : (
                  <>
                    <Area
                      type="monotone"
                      dataKey="android"
                      name="Android"
                      stroke="#10b981"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorAndroidLight)"
                    />
                    <Area
                      type="monotone"
                      dataKey="ios"
                      name="iOS"
                      stroke="#0284c7"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorIosLight)"
                    />
                    <Area
                      type="monotone"
                      dataKey="web"
                      name="Web"
                      stroke="#6366f1"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorWebLight)"
                    />
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* 5. Country Breakdown OR State Drill-Down (Light Theme & Phone Responsive) */}
      {selectedCountryDetail ? (
        /* State/Region Drill-Down View */
        <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-3.5 sm:p-5 shadow-xs space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100 dark:border-zinc-800">
            <div className="flex items-center space-x-2.5 flex-wrap">
              <button
                onClick={handleBackToCountries}
                className="flex items-center space-x-1 px-2.5 py-1 text-xs font-bold text-slate-700 dark:text-zinc-200 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 rounded-lg transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span>All Countries</span>
              </button>
              <span className="text-slate-300 dark:text-zinc-700">/</span>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#B88B2A] shrink-0" />
                <span>{selectedCountryDetail} — State & Regional Downloads</span>
              </h3>
            </div>

            <div className="relative w-full sm:w-auto">
              <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter states..."
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
                className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-xs text-slate-800 dark:text-zinc-200 pl-7 pr-2.5 py-1.5 rounded-lg focus:outline-none focus:border-[#B88B2A] w-full sm:w-44"
              />
            </div>
          </div>

          {/* Country Snapshot KPIs */}
          {countryDetailData?.countryMetrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              <div className="bg-slate-50 dark:bg-zinc-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-zinc-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">Total in {selectedCountryDetail}</p>
                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5">
                  {(countryDetailData.countryMetrics.total || 0).toLocaleString()}
                </p>
                <p className="text-[10px] text-[#B88B2A] font-semibold mt-0.5 truncate">
                  {countryDetailData.countryMetrics.percentageOfTotal || 0}% of global
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-zinc-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Smartphone className="w-3 h-3 shrink-0" />
                  <span>Android</span>
                </p>
                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5">
                  {(countryDetailData.countryMetrics.android || 0).toLocaleString()}
                </p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5 truncate">
                  {countryDetailData.countryMetrics.total > 0 ? Math.round((countryDetailData.countryMetrics.android / countryDetailData.countryMetrics.total) * 100) : 0}% country share
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-zinc-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1">
                  <Apple className="w-3 h-3 shrink-0" />
                  <span>iOS</span>
                </p>
                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5">
                  {(countryDetailData.countryMetrics.ios || 0).toLocaleString()}
                </p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5 truncate">
                  {countryDetailData.countryMetrics.total > 0 ? Math.round((countryDetailData.countryMetrics.ios / countryDetailData.countryMetrics.total) * 100) : 0}% country share
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-zinc-900 p-2.5 rounded-xl border border-slate-200/60 dark:border-zinc-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">30-Day Installs</p>
                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white mt-0.5">
                  {(countryDetailData.countryMetrics.last30Days || 0).toLocaleString()}
                </p>
                <p className="text-[10px] text-indigo-600 font-semibold mt-0.5 truncate">velocity run-rate</p>
              </div>
            </div>
          )}

          {/* Mobile view controls: Toggle between Card View and Excel Table */}
          <div className="flex sm:hidden items-center justify-between gap-2 px-1">
            <span className="text-[10px] text-slate-500 dark:text-zinc-400 font-bold">
              {filteredStates.length} Regions Recorded
            </span>
            <div className="flex items-center bg-slate-100 dark:bg-zinc-800 p-0.5 rounded-lg border border-slate-200 dark:border-zinc-700/60">
              <button
                type="button"
                onClick={() => setStateViewMode('cards')}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  stateViewMode === 'cards'
                    ? 'bg-white dark:bg-[#1E293B] text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-zinc-400'
                }`}
              >
                Cards (No Cutoff)
              </button>
              <button
                type="button"
                onClick={() => setStateViewMode('table')}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  stateViewMode === 'table'
                    ? 'bg-white dark:bg-[#1E293B] text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 dark:text-zinc-400'
                }`}
              >
                Excel Table
              </button>
            </div>
          </div>

          {/* Swipe indicator for mobile when in table view */}
          <div className={`${stateViewMode === 'table' ? 'flex' : 'hidden'} sm:hidden text-[10px] text-slate-400 dark:text-zinc-500 items-center justify-between px-1`}>
            <span>← Swipe horizontally (State pinned on left)</span>
            <span>All metrics →</span>
          </div>

          {/* Responsive Mobile Cards View (100% width, No Cutoff) */}
          <div className={`${stateViewMode === 'cards' ? 'block sm:hidden' : 'hidden'} space-y-2`}>
            {loadingCountryDetail ? (
              <div className="py-6 text-center text-slate-400 font-semibold bg-slate-50 dark:bg-zinc-900 rounded-xl">
                <RefreshCw className="w-4 h-4 animate-spin mx-auto mb-1 text-[#B88B2A]" />
                Loading regions...
              </div>
            ) : filteredStates.length === 0 ? (
              <div className="py-6 text-center text-slate-400 bg-slate-50 dark:bg-zinc-900 rounded-xl">
                No state telemetry recorded for {selectedCountryDetail}.
              </div>
            ) : (
              filteredStates.map((st, idx) => {
                const countryTotal = countryDetailData?.countryMetrics?.total || 1;
                const pct = Math.round(((st.totalInstalls || 0) / countryTotal) * 100);
                return (
                  <div
                    key={st.state || idx}
                    className="p-3 bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800 rounded-xl space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center space-x-1.5 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-[#B88B2A] shrink-0" />
                        <span className="font-extrabold text-xs text-slate-900 dark:text-white truncate">
                          {st.state}
                        </span>
                      </div>
                      <span className="text-xs font-black text-[#B88B2A] shrink-0">
                        {(st.totalInstalls || 0).toLocaleString()} installs
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-zinc-400 font-medium">
                        <span>Share: <strong className="text-slate-800 dark:text-zinc-200 font-bold">{pct}%</strong></span>
                        <span>7d: <strong className="text-slate-800 dark:text-zinc-200 font-bold">{(st.last7Days || 0).toLocaleString()}</strong> · 30d: <strong className="text-slate-800 dark:text-zinc-200 font-bold">{(st.last30Days || 0).toLocaleString()}</strong></span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#B88B2A] h-full rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(100, Math.max(5, pct))}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-slate-200/60 dark:border-zinc-800/80">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        Android: {(st.android || 0).toLocaleString()}
                      </span>
                      <span className="text-sky-600 dark:text-sky-400 font-bold">
                        iOS: {(st.ios || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* State/Region Table with sticky first column so state never scrolls off */}
          <div className={`${stateViewMode === 'table' ? 'block' : 'hidden sm:block'} overflow-x-auto rounded-xl border border-slate-200/80 dark:border-zinc-800 custom-scrollbar`}>
            <table className="w-full text-left border-collapse text-xs min-w-[540px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 font-bold border-b border-slate-200 dark:border-zinc-800">
                  <th className="py-2.5 px-3 sticky left-0 z-10 bg-slate-50 dark:bg-zinc-900 border-r border-slate-200/80 dark:border-zinc-800 shadow-xs whitespace-nowrap min-w-[160px]">
                    State / Province / Region
                  </th>
                  <th className="py-2.5 px-3 whitespace-nowrap min-w-[95px]">Total Installs</th>
                  <th className="py-2.5 px-3 whitespace-nowrap min-w-[90px]">Country Share</th>
                  <th className="py-2.5 px-3 whitespace-nowrap min-w-[110px]">Android / iOS</th>
                  <th className="py-2 px-3 whitespace-nowrap min-w-[130px]">
                    <div className="inline-flex items-center gap-1.5">
                      <select
                        value={stateDaysFilter}
                        onChange={(e) => setStateDaysFilter(e.target.value)}
                        className="bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-xs font-bold rounded-lg px-2 py-1 border border-slate-300 dark:border-zinc-700 shadow-2xs hover:border-[#B88B2A] focus:outline-none focus:ring-1 focus:ring-[#B88B2A] cursor-pointer"
                        title="Select timeframe"
                      >
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                        <option value="today">Today</option>
                      </select>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-200">
                {loadingCountryDetail ? (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-slate-400 font-semibold">
                      <RefreshCw className="w-4 h-4 animate-spin mx-auto mb-1 text-[#B88B2A]" />
                      Loading regions...
                    </td>
                  </tr>
                ) : filteredStates.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-slate-400">
                      No state telemetry recorded for {selectedCountryDetail}.
                    </td>
                  </tr>
                ) : (
                  filteredStates.map((st, idx) => {
                    const countryTotal = countryDetailData?.countryMetrics?.total || 1;
                    const pct = Math.round(((st.totalInstalls || 0) / countryTotal) * 100);
                    return (
                      <tr key={st.state || idx} className="hover:bg-slate-50/80 dark:hover:bg-zinc-800/40 transition-colors">
                        <td className="py-2 px-3 font-bold text-slate-900 dark:text-white sticky left-0 z-10 bg-white dark:bg-[#1E293B] border-r border-slate-100 dark:border-zinc-800 shadow-xs whitespace-nowrap min-w-[160px]">
                          <div className="flex items-center space-x-1.5 whitespace-nowrap">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B88B2A] shrink-0" />
                            <span className="truncate max-w-[220px]">{st.state || 'General Territory'}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 font-black text-slate-900 dark:text-white whitespace-nowrap min-w-[95px]">
                          {(st.totalInstalls || 0).toLocaleString()}
                        </td>
                        <td className="py-2 px-3 whitespace-nowrap min-w-[90px]">
                          <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                            <div className="w-12 sm:w-14 bg-slate-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden shrink-0">
                              <div 
                                className="bg-[#B88B2A] h-full rounded-full" 
                                style={{ width: `${Math.min(100, Math.max(5, pct))}%` }}
                              />
                            </div>
                            <span className="text-[11px] font-bold text-slate-600 dark:text-zinc-400 whitespace-nowrap shrink-0">{pct}%</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 text-xs whitespace-nowrap min-w-[110px]">
                          <div className="inline-flex items-center gap-1 font-bold whitespace-nowrap">
                            <span className="text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                              {(st.android || 0).toLocaleString()}
                            </span>
                            <span className="text-slate-300 dark:text-zinc-700 select-none">/</span>
                            <span className="text-sky-600 dark:text-sky-400 whitespace-nowrap">
                              {(st.ios || 0).toLocaleString()}
                            </span>
                          </div>
                        </td>
                        <td className="py-2 px-3 font-semibold text-slate-700 dark:text-zinc-300 whitespace-nowrap min-w-[130px]">
                          {stateDaysFilter === '30d'
                            ? (st.last30Days || 0).toLocaleString()
                            : stateDaysFilter === 'today'
                            ? (st.today || 0).toLocaleString()
                            : (st.last7Days || 0).toLocaleString()}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
              {filteredStates.length > 0 && (
                <tfoot className="border-t-2 border-slate-200 dark:border-zinc-700 text-xs">
                  <tr className="bg-amber-50/40 dark:bg-amber-950/20 font-black text-slate-900 dark:text-white">
                    <td className="py-2.5 px-3 sticky left-0 z-10 bg-amber-50/90 dark:bg-zinc-900 border-r border-slate-200/80 dark:border-zinc-800 shadow-xs whitespace-nowrap min-w-[160px]">
                      Total ({filteredStates.length} Regions in {selectedCountryDetail})
                    </td>
                    <td className="py-2.5 px-3 text-[#B88B2A] whitespace-nowrap font-black min-w-[95px]">
                      {(countryDetailData?.countryMetrics?.total ?? filteredStates.reduce((acc, s) => acc + (s.totalInstalls || 0), 0)).toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-700 dark:text-zinc-300 whitespace-nowrap min-w-[90px]">
                      100%
                    </td>
                    <td className="py-2.5 px-3 text-xs whitespace-nowrap min-w-[110px]">
                      <div className="inline-flex items-center gap-1 font-bold whitespace-nowrap">
                        <span className="text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                          {(countryDetailData?.countryMetrics?.android ?? filteredStates.reduce((acc, s) => acc + (s.android || 0), 0)).toLocaleString()}
                        </span>
                        <span className="text-slate-300 dark:text-zinc-700 select-none">/</span>
                        <span className="text-sky-600 dark:text-sky-400 whitespace-nowrap">
                          {(countryDetailData?.countryMetrics?.ios ?? filteredStates.reduce((acc, s) => acc + (s.ios || 0), 0)).toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-700 dark:text-zinc-300 whitespace-nowrap min-w-[130px]">
                      {stateDaysFilter === '30d'
                        ? (countryDetailData?.countryMetrics?.last30Days ?? filteredStates.reduce((acc, s) => acc + (s.last30Days || 0), 0)).toLocaleString()
                        : stateDaysFilter === 'today'
                        ? (countryDetailData?.countryMetrics?.today ?? filteredStates.reduce((acc, s) => acc + (s.today || 0), 0)).toLocaleString()
                        : (filteredStates.reduce((acc, s) => acc + (s.last7Days || 0), 0)).toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      ) : (
        /* Countries Master Table (Light theme & Phone Responsive) */
        <div className="bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-3.5 sm:p-5 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#B88B2A] shrink-0" />
                <span>Downloads by Country & Territory</span>
                {countriesTotalCount > 0 && (
                  <span className="text-[10px] font-bold text-[#B88B2A] bg-[#B88B2A]/10 border border-[#B88B2A]/20 px-2 py-0.5 rounded-full">
                    {countriesTotalCount} Countries
                  </span>
                )}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400">
                Click any country row to drill-down into its state / regional distribution
              </p>
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={countrySearch}
                  onChange={(e) => {
                    setCountrySearch(e.target.value);
                    setCountryPage(1);
                  }}
                  className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-xs text-slate-800 dark:text-zinc-200 pl-7 pr-2.5 py-1.5 rounded-lg focus:outline-none focus:border-[#B88B2A] w-full sm:w-36"
                />
              </div>

              {/* Page Size */}
              <select
                value={countryPageSize}
                onChange={(e) => {
                  setCountryPageSize(Number(e.target.value));
                  setCountryPage(1);
                }}
                className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-xs font-medium text-slate-700 dark:text-zinc-200 px-2.5 py-1.5 rounded-lg focus:outline-none cursor-pointer"
                title="Rows per page"
              >
                <option value={10}>10 / page</option>
                <option value={25}>25 / page</option>
                <option value={50}>50 / page</option>
                <option value={100}>All (100)</option>
              </select>

              {/* Sort */}
              <select
                value={countrySortBy}
                onChange={(e) => setCountrySortBy(e.target.value)}
                className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-xs font-medium text-slate-700 dark:text-zinc-200 px-2.5 py-1.5 rounded-lg focus:outline-none cursor-pointer"
              >
                <option value="totalInstalls">Most Installs</option>
                <option value="today">Today's Installs</option>
                <option value="last7Days">7-Day Velocity</option>
                <option value="last30Days">30-Day Velocity</option>
                <option value="country">Country Name</option>
              </select>
            </div>
          </div>

          {/* Swipe indicator for mobile */}
          <div className="sm:hidden text-[10px] text-slate-400 dark:text-zinc-500 flex items-center justify-between px-1">
            <span>← Swipe table horizontally</span>
            <span>All metrics →</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-zinc-800">
            <table className="w-full text-left border-collapse text-xs min-w-[580px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 font-bold border-b border-slate-200 dark:border-zinc-800">
                  <th className="py-2.5 px-3 whitespace-nowrap min-w-[150px]"># & Country</th>
                  <th className="py-2.5 px-3 whitespace-nowrap min-w-[95px]">Total Installs</th>
                  <th className="py-2.5 px-3 whitespace-nowrap min-w-[90px]">% Share</th>
                  <th className="py-2.5 px-3 whitespace-nowrap min-w-[110px]">Android / iOS</th>
                  <th className="py-2 px-3 whitespace-nowrap min-w-[130px]">
                    <div className="inline-flex items-center gap-1.5">
                      <select
                        value={countryDaysFilter}
                        onChange={(e) => setCountryDaysFilter(e.target.value)}
                        className="bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 text-xs font-bold rounded-lg px-2 py-1 border border-slate-300 dark:border-zinc-700 shadow-2xs hover:border-[#B88B2A] focus:outline-none focus:ring-1 focus:ring-[#B88B2A] cursor-pointer"
                        title="Select timeframe"
                      >
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                        <option value="today">Today</option>
                      </select>
                    </div>
                  </th>
                  <th className="py-2.5 px-3 text-right whitespace-nowrap min-w-[70px]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-200">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-slate-400 font-semibold">
                      <RefreshCw className="w-4 h-4 animate-spin mx-auto mb-1 text-[#B88B2A]" />
                      Loading country breakdown...
                    </td>
                  </tr>
                ) : countriesList.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-slate-400">
                      No country telemetry matches your filter.
                    </td>
                  </tr>
                ) : (
                  countriesList.map((item, idx) => {
                    const isTop1 = idx === 0 && countryPage === 1;
                    const countryMeta = COUNTRIES.find(
                      c => c.name.toLowerCase() === item.country?.toLowerCase() || c.code === item.countryCode
                    );
                    const flag = countryMeta?.flag || '🌐';

                    return (
                      <tr 
                        key={item.country || idx}
                        onClick={() => handleSelectCountry(item.country)}
                        className="hover:bg-slate-50/80 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer group"
                      >
                        <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white flex items-center space-x-2 whitespace-nowrap min-w-[150px]">
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[9px] font-black shrink-0 ${
                            isTop1 ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300' : 'bg-slate-100 dark:bg-zinc-800 text-slate-500'
                          }`}>
                            {idx + 1 + ((countryPage - 1) * countryPageSize)}
                          </span>
                          <span className="text-sm shrink-0">{flag}</span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="font-black text-slate-900 dark:text-white group-hover:text-[#B88B2A] transition-colors truncate">
                                {item.country || 'Unknown Region'}
                              </span>
                              {isTop1 && (
                                <span className="px-1 py-0.2 text-[8px] font-black bg-amber-100 text-amber-800 border border-amber-300 rounded flex items-center gap-0.5 shrink-0">
                                  <Award className="w-2.5 h-2.5" />
                                  #1
                                </span>
                              )}
                            </div>
                            <span className="text-[9px] text-slate-400 uppercase tracking-wider">{item.countryCode || 'GL'}</span>
                          </div>
                        </td>

                        <td className="py-2.5 px-3 font-black text-slate-900 dark:text-white whitespace-nowrap min-w-[95px]">
                          {(item.totalInstalls || 0).toLocaleString()}
                        </td>

                        <td className="py-2.5 px-3 whitespace-nowrap min-w-[90px]">
                          <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                            <div className="w-12 sm:w-14 bg-slate-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden shrink-0">
                              <div 
                                className="bg-[#B88B2A] h-full rounded-full" 
                                style={{ width: `${Math.min(100, Math.max(3, item.percentageOfTotal || 0))}%` }}
                              />
                            </div>
                            <span className="text-[11px] font-bold text-slate-700 dark:text-zinc-300 whitespace-nowrap shrink-0">{item.percentageOfTotal || 0}%</span>
                          </div>
                        </td>

                        <td className="py-2.5 px-3 text-xs whitespace-nowrap min-w-[110px]">
                          <div className="inline-flex items-center gap-1 font-bold whitespace-nowrap">
                            <span className="text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                              {(item.android || 0).toLocaleString()}
                            </span>
                            <span className="text-slate-300 dark:text-zinc-700 select-none">/</span>
                            <span className="text-sky-600 dark:text-sky-400 whitespace-nowrap">
                              {(item.ios || 0).toLocaleString()}
                            </span>
                          </div>
                        </td>

                        <td className="py-2.5 px-3 font-semibold text-slate-700 dark:text-zinc-300 whitespace-nowrap min-w-[130px]">
                          {countryDaysFilter === '30d'
                            ? (item.last30Days || 0).toLocaleString()
                            : countryDaysFilter === 'today'
                            ? (item.today || 0).toLocaleString()
                            : (item.last7Days || 0).toLocaleString()}
                        </td>

                        <td className="py-2.5 px-3 text-right whitespace-nowrap min-w-[70px]">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectCountry(item.country);
                            }}
                            className="inline-flex items-center space-x-0.5 text-xs font-bold text-[#B88B2A] hover:text-[#9e7520] px-2 py-1 rounded-md hover:bg-[#B88B2A]/10 transition-all cursor-pointer"
                          >
                            <span>States</span>
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>

              {/* Table Footer with Summary & Totals */}
              {countriesList.length > 0 && (
                <tfoot className="border-t-2 border-slate-200 dark:border-zinc-700 text-xs">
                  {countriesTotalCount > countriesList.length && (
                    <tr className="bg-slate-50/70 dark:bg-zinc-900/70 text-slate-600 dark:text-zinc-400 font-semibold border-b border-slate-100 dark:border-zinc-800">
                      <td className="py-2.5 px-3 whitespace-nowrap min-w-[150px]">
                        <span className="font-bold text-slate-700 dark:text-zinc-300">
                          Current Page ({countriesList.length} of {countriesTotalCount})
                        </span>
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-800 dark:text-zinc-200 whitespace-nowrap min-w-[95px]">
                        {countriesList.reduce((acc, c) => acc + (c.totalInstalls || 0), 0).toLocaleString()}
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap min-w-[90px]">
                        {countriesList.reduce((acc, c) => acc + (c.percentageOfTotal || 0), 0).toFixed(1)}%
                      </td>
                      <td className="py-2.5 px-3 text-xs whitespace-nowrap min-w-[110px]">
                        <div className="inline-flex items-center gap-1 font-bold whitespace-nowrap">
                          <span className="text-emerald-600 whitespace-nowrap">{countriesList.reduce((acc, c) => acc + (c.android || 0), 0).toLocaleString()}</span>
                          <span className="text-slate-300 dark:text-zinc-700 select-none">/</span>
                          <span className="text-sky-600 whitespace-nowrap">{countriesList.reduce((acc, c) => acc + (c.ios || 0), 0).toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 font-semibold whitespace-nowrap min-w-[130px]">
                        {countryDaysFilter === '30d'
                          ? countriesList.reduce((acc, c) => acc + (c.last30Days || 0), 0).toLocaleString()
                          : countryDaysFilter === 'today'
                          ? countriesList.reduce((acc, c) => acc + (c.today || 0), 0).toLocaleString()
                          : countriesList.reduce((acc, c) => acc + (c.last7Days || 0), 0).toLocaleString()}
                      </td>
                      <td className="py-2.5 px-3 text-right text-[10px] text-slate-400 whitespace-nowrap min-w-[70px]">
                        Page Sum
                      </td>
                    </tr>
                  )}
                  <tr className="bg-amber-50/40 dark:bg-amber-950/20 font-black text-slate-900 dark:text-white">
                    <td className="py-2.5 px-3 flex items-center space-x-1.5 text-slate-900 dark:text-white whitespace-nowrap min-w-[150px]">
                      <Globe className="w-3.5 h-3.5 text-[#B88B2A] shrink-0" />
                      <span>Grand Total ({countriesTotalCount} Countries)</span>
                    </td>
                    <td className="py-2.5 px-3 text-[#B88B2A] text-sm whitespace-nowrap font-black min-w-[95px]">
                      {(countrySummaryTotals?.totalInstalls ?? summary.total).toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-700 dark:text-zinc-300 whitespace-nowrap min-w-[90px]">
                      100%
                    </td>
                    <td className="py-2.5 px-3 text-xs whitespace-nowrap min-w-[110px]">
                      <div className="inline-flex items-center gap-1 font-bold whitespace-nowrap">
                        <span className="text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                          {(countrySummaryTotals?.android ?? summary.android).toLocaleString()}
                        </span>
                        <span className="text-slate-300 dark:text-zinc-700 select-none">/</span>
                        <span className="text-sky-600 dark:text-sky-400 whitespace-nowrap">
                          {(countrySummaryTotals?.ios ?? summary.ios).toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-700 dark:text-zinc-300 whitespace-nowrap min-w-[130px]">
                      {countryDaysFilter === '30d'
                        ? (countrySummaryTotals?.last30Days ?? summary.last30Days).toLocaleString()
                        : countryDaysFilter === 'today'
                        ? (countrySummaryTotals?.today ?? summary.today).toLocaleString()
                        : (countrySummaryTotals?.last7Days ?? summary.last7Days).toLocaleString()}
                    </td>
                    <td className="py-2.5 px-3 text-right text-[10px] text-slate-400 font-normal whitespace-nowrap min-w-[70px]">
                      Overall
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>

          {/* Pagination */}
          {countriesTotalCount > countryPageSize && (
            <div className="flex flex-col xs:flex-row items-center justify-between gap-2 pt-2 text-xs text-slate-500">
              <span className="font-medium">
                Showing {((countryPage - 1) * countryPageSize) + 1} - {Math.min(countryPage * countryPageSize, countriesTotalCount)} of {countriesTotalCount} countries
              </span>
              <div className="flex items-center space-x-1">
                <button
                  disabled={countryPage <= 1}
                  onClick={() => setCountryPage(p => Math.max(1, p - 1))}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-slate-700 dark:text-zinc-200 cursor-pointer"
                >
                  Prev
                </button>
                {Array.from({ length: Math.ceil(countriesTotalCount / countryPageSize) }, (_, i) => i + 1).map((pg) => (
                  <button
                    key={pg}
                    onClick={() => setCountryPage(pg)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      countryPage === pg 
                        ? 'bg-[#B88B2A] text-white shadow-xs' 
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                    }`}
                  >
                    {pg}
                  </button>
                ))}
                <button
                  disabled={countryPage * countryPageSize >= countriesTotalCount}
                  onClick={() => setCountryPage(p => p + 1)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-slate-700 dark:text-zinc-200 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 6. Uninstalled Devices & Users Drill-down Modal */}
      {showUninstallsModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-zinc-800 rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-5xl h-[92vh] sm:h-auto sm:max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 md:p-5 border-b border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 shrink-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-rose-500/10 text-rose-600 border border-rose-500/20 shrink-0">
                    <UserX className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base md:text-lg font-black text-slate-900 dark:text-white tracking-tight truncate">
                        Uninstalled Registered Users
                      </h3>
                      <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 font-bold border border-rose-200 dark:border-rose-900 shrink-0">
                        {(uninstallsPagination.total || 0).toLocaleString()} Users
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 mt-0.5 truncate hidden sm:block">
                      Telemetry and churn tracking strictly for registered user accounts.
                    </p>
                  </div>
                </div>

                {/* Right Actions: Desktop & Mobile Close */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  {/* Live Scan Trigger (Desktop) */}
                  <button
                    onClick={async () => {
                      await handleSyncSilent();
                      fetchUninstalledUsers(1, uninstallsSearch, uninstallsPlatform, 'registered');
                    }}
                    disabled={syncingSilent}
                    className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs transition-colors cursor-pointer disabled:opacity-50"
                    title="Run real-time silent push ping to detect uninstalled devices"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 ${syncingSilent ? 'animate-spin' : ''}`} />
                    <span>{syncingSilent ? 'Scanning...' : 'Live Scan'}</span>
                  </button>

                  {/* Export Excel (Desktop) */}
                  <button
                    onClick={handleExportUninstallsCSV}
                    className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs transition-colors cursor-pointer"
                    title="Export Registered Uninstalls List to Excel"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Export Excel</span>
                  </button>

                  {/* Close Button (Always visible top-right) */}
                  <button
                    onClick={() => setShowUninstallsModal(false)}
                    className="p-1.5 sm:p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    title="Close Modal"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Sub-Bar: Subtitle + Action Buttons */}
              <div className="flex sm:hidden items-center justify-between gap-2 mt-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
                <p className="text-[10px] text-slate-500 dark:text-zinc-400 truncate flex-1">
                  Strictly registered accounts (FCM / APNs)
                </p>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={async () => {
                      await handleSyncSilent();
                      fetchUninstalledUsers(1, uninstallsSearch, uninstallsPlatform, 'registered');
                    }}
                    disabled={syncingSilent}
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 font-bold text-[11px] transition-colors"
                  >
                    <RefreshCw className={`w-3 h-3 text-indigo-600 dark:text-indigo-400 ${syncingSilent ? 'animate-spin' : ''}`} />
                    <span>{syncingSilent ? 'Scanning...' : 'Live Scan'}</span>
                  </button>
                  <button
                    onClick={handleExportUninstallsCSV}
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 font-bold text-[11px] transition-colors"
                  >
                    <FileSpreadsheet className="w-3 h-3 text-emerald-600" />
                    <span>Excel</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats Banner - Phone Optimized 3-Column Strip */}
            <div className="px-2.5 sm:px-5 py-2 sm:py-2.5 bg-slate-100/70 dark:bg-zinc-900/60 border-b border-slate-100 dark:border-zinc-800 grid grid-cols-3 gap-1.5 sm:gap-2.5 text-xs shrink-0">
              {/* Registered Users Total */}
              <div 
                className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg border bg-indigo-50/90 dark:bg-indigo-950/50 border-indigo-500/80 ring-1 sm:ring-2 ring-indigo-500/20 shadow-2xs"
                title="Total registered users who uninstalled"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="p-1 sm:p-1.5 rounded-md bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300 shrink-0">
                    <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-zinc-400 uppercase font-bold tracking-tight truncate">Total</p>
                    <p className="font-black text-indigo-700 dark:text-indigo-300 text-xs sm:text-base leading-tight">{uninstallsStats.registered || uninstallsStats.total || 0}</p>
                  </div>
                </div>
                <span className="hidden xs:inline-block text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded bg-indigo-600 text-white shrink-0">
                  Registered
                </span>
              </div>

              {/* Android Uninstalls Card */}
              <div 
                onClick={() => {
                  const next = uninstallsPlatform === 'android' ? 'all' : 'android';
                  setUninstallsPlatform(next);
                  fetchUninstalledUsers(1, uninstallsSearch, next, 'registered');
                }}
                className={`flex items-center justify-between p-2 sm:p-2.5 rounded-lg border transition-all cursor-pointer select-none group hover:shadow-2xs ${
                  uninstallsPlatform === 'android'
                    ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 ring-1 sm:ring-2 ring-emerald-500/30'
                    : 'bg-white dark:bg-zinc-800/80 border-slate-200/60 dark:border-zinc-700/60 hover:border-emerald-300'
                }`}
                title="Click to filter by Android devices"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="p-1 sm:p-1.5 rounded-md bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 shrink-0">
                    <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold truncate">Android</p>
                    <p className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-base leading-tight">{uninstallsStats.android || 0}</p>
                  </div>
                </div>
                <span className={`text-[8px] sm:text-[9px] font-bold px-1 sm:px-1.5 py-0.5 rounded shrink-0 ${uninstallsPlatform === 'android' ? 'bg-emerald-600 text-white' : 'text-slate-400 group-hover:text-emerald-600'}`}>
                  {uninstallsPlatform === 'android' ? 'Active' : 'Filter'}
                </span>
              </div>

              {/* iOS Uninstalls Card */}
              <div 
                onClick={() => {
                  const next = uninstallsPlatform === 'ios' ? 'all' : 'ios';
                  setUninstallsPlatform(next);
                  fetchUninstalledUsers(1, uninstallsSearch, next, 'registered');
                }}
                className={`flex items-center justify-between p-2 sm:p-2.5 rounded-lg border transition-all cursor-pointer select-none group hover:shadow-2xs ${
                  uninstallsPlatform === 'ios'
                    ? 'bg-sky-50/80 dark:bg-sky-950/40 border-sky-500 ring-1 sm:ring-2 ring-sky-500/30'
                    : 'bg-white dark:bg-zinc-800/80 border-slate-200/60 dark:border-zinc-700/60 hover:border-sky-300'
                }`}
                title="Click to filter by iOS devices"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="p-1 sm:p-1.5 rounded-md bg-sky-50 text-sky-600 dark:bg-sky-950/50 shrink-0">
                    <Apple className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold truncate">iOS</p>
                    <p className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-base leading-tight">{uninstallsStats.ios || 0}</p>
                  </div>
                </div>
                <span className={`text-[8px] sm:text-[9px] font-bold px-1 sm:px-1.5 py-0.5 rounded shrink-0 ${uninstallsPlatform === 'ios' ? 'bg-sky-600 text-white' : 'text-slate-400 group-hover:text-sky-600'}`}>
                  {uninstallsPlatform === 'ios' ? 'Active' : 'Filter'}
                </span>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-2.5 sm:p-3.5 border-b border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 shrink-0">
              {/* Search */}
              <div className="relative flex-1 w-full sm:max-w-xs">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search user, email, state..."
                  value={uninstallsSearch}
                  onChange={(e) => {
                    setUninstallsSearch(e.target.value);
                    fetchUninstalledUsers(1, e.target.value, uninstallsPlatform, 'registered');
                  }}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:border-[#B88B2A] dark:focus:border-[#B88B2A] text-slate-900 dark:text-white placeholder-slate-400"
                />
              </div>

              {/* Controls Group: Platform Filter Selector */}
              <div className="flex items-center justify-between sm:justify-end gap-1.5">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-400">Platform:</span>
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-900 p-1 rounded-lg border border-slate-200/60 dark:border-zinc-800 text-xs">
                  {['all', 'android', 'ios'].map((plat) => (
                    <button
                      key={plat}
                      onClick={() => {
                        setUninstallsPlatform(plat);
                        fetchUninstalledUsers(1, uninstallsSearch, plat, 'registered');
                      }}
                      className={`px-2 sm:px-2.5 py-1 rounded-md font-bold text-[11px] sm:text-xs capitalize transition-all cursor-pointer ${
                        uninstallsPlatform === plat
                          ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-2xs'
                          : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900'
                      }`}
                    >
                      {plat === 'all' ? 'All OS' : plat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area: Dual Display (Mobile Cards + Desktop Table) */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-0">
              {uninstallsLoading ? (
                <div className="py-16 flex flex-col items-center justify-center gap-3 text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin text-[#B88B2A]" />
                  <p className="text-xs font-semibold">Loading registered uninstalls...</p>
                </div>
              ) : uninstallsList.length === 0 ? (
                <div className="py-16 text-center text-slate-400 space-y-1">
                  <UserX className="w-8 h-8 mx-auto text-slate-300 dark:text-zinc-600 mb-2" />
                  <p className="text-sm font-bold text-slate-700 dark:text-zinc-300">No uninstalls found</p>
                  <p className="text-xs text-slate-400">No records match the active search or platform filter.</p>
                </div>
              ) : (
                <>
                  {/* A. Mobile View: Responsive User Cards (< md) */}
                  <div className="block md:hidden divide-y divide-slate-100 dark:divide-zinc-800/80">
                    {uninstallsList.map((item) => {
                      const isIos = (item.platform || '').toLowerCase() === 'ios';
                      const formattedDate = item.uninstalledAt 
                        ? new Date(item.uninstalledAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                        : 'Recent';
                      const formattedTime = item.uninstalledAt
                        ? new Date(item.uninstalledAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
                        : '';
                      return (
                        <div key={item.id || item.installId} className="p-3.5 hover:bg-slate-50/70 dark:hover:bg-zinc-800/40 transition-colors space-y-2.5">
                          {/* Row 1: Avatar, Name, Email, Platform Badge */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-black text-xs flex items-center justify-center border border-indigo-200 dark:border-indigo-800 shrink-0 shadow-2xs">
                                {item.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-900 dark:text-white text-xs truncate">
                                  {item.user?.name || 'Registered User'}
                                </p>
                                <p className="text-[10px] text-slate-500 dark:text-zinc-400 truncate">
                                  {item.user?.email || item.user?.phone || 'Account Verified'}
                                </p>
                              </div>
                            </div>

                            {/* Platform badge */}
                            {isIos ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 text-white dark:bg-zinc-700 dark:text-zinc-100 text-[10px] font-bold shrink-0 shadow-2xs">
                                <Apple className="w-2.5 h-2.5" />
                                iOS
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800 shrink-0 shadow-2xs">
                                <Smartphone className="w-2.5 h-2.5 text-emerald-600" />
                                Android
                              </span>
                            )}
                          </div>

                          {/* Row 2: Location & Device Specs */}
                          <div className="flex items-center justify-between gap-2 text-[10px] pt-1 border-t border-slate-100 dark:border-zinc-800/60">
                            <div className="flex items-center gap-1 text-slate-600 dark:text-zinc-300 truncate">
                              <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                              <span className="font-semibold truncate">{item.state || 'Unspecified'}, {item.countryCode || 'IN'}</span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-500 dark:text-zinc-400 shrink-0">
                              <Smartphone className="w-2.5 h-2.5 opacity-60" />
                              <span className="truncate">{item.deviceOSVersion || (isIos ? 'iOS Device' : 'Android Phone')}</span>
                            </div>
                          </div>

                          {/* Row 3: Uninstalled Timestamp */}
                          <div className="flex items-center justify-between text-[10px] bg-slate-50 dark:bg-zinc-900/60 px-2 py-1 rounded-md text-slate-500 dark:text-zinc-400">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                              Uninstalled:
                            </span>
                            <span className="font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5" />
                              {formattedDate} {formattedTime && `• ${formattedTime}`}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* B. Desktop View: Full Data Table (>= md) */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200/80 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/80 text-[11px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider sticky top-0 z-10 backdrop-blur-xs">
                          <th className="py-2.5 px-3.5">Registered User Account</th>
                          <th className="py-2.5 px-3.5">Platform</th>
                          <th className="py-2.5 px-3.5">Country & State</th>
                          <th className="py-2.5 px-3.5">Device Type / OS</th>
                          <th className="py-2.5 px-3.5">Uninstalled On</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60">
                        {uninstallsList.map((item) => {
                          const isIos = (item.platform || '').toLowerCase() === 'ios';
                          return (
                            <tr key={item.id || item.installId} className="hover:bg-slate-50/70 dark:hover:bg-zinc-800/50 transition-colors">
                              {/* User Account */}
                              <td className="py-3 px-3.5">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-black text-xs flex items-center justify-center border border-indigo-200 dark:border-indigo-800 shadow-2xs">
                                    {item.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                  </div>
                                  <div>
                                    <p className="font-bold text-slate-900 dark:text-white truncate max-w-[200px]">
                                      {item.user?.name || 'Registered User'}
                                    </p>
                                    <p className="text-[10px] text-slate-400 truncate max-w-[200px]">
                                      {item.user?.email || item.user?.phone || item.installId}
                                    </p>
                                  </div>
                                </div>
                              </td>

                              {/* Platform */}
                              <td className="py-3 px-3.5">
                                {isIos ? (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 text-white dark:bg-zinc-700 dark:text-zinc-100 text-[10px] font-bold shadow-2xs">
                                    <Apple className="w-3 h-3" />
                                    iOS
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                                    <Smartphone className="w-3 h-3 text-emerald-600" />
                                    Android
                                  </span>
                                )}
                              </td>

                              {/* Country & State */}
                              <td className="py-3 px-3.5">
                                <div className="flex items-start gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                                  <div>
                                    <p className="font-bold text-slate-900 dark:text-white">
                                      {item.state || 'Unspecified Region'}
                                    </p>
                                    <p className="text-[10px] text-slate-400">
                                      {item.country || 'India'} ({item.countryCode || 'IN'})
                                    </p>
                                  </div>
                                </div>
                              </td>

                              {/* Device Type / OS */}
                              <td className="py-3 px-3.5">
                                <span className="font-medium text-slate-700 dark:text-zinc-300">
                                  {item.deviceOSVersion ? item.deviceOSVersion : (isIos ? 'iOS Device' : 'Android Device')}
                                </span>
                                <p className="text-[10px] text-slate-400 capitalize">
                                  {item.deviceType || 'Phone'}
                                </p>
                              </td>

                              {/* Uninstalled On */}
                              <td className="py-3 px-3.5">
                                <div className="flex items-center gap-1 text-slate-600 dark:text-zinc-300 font-medium">
                                  <Clock className="w-3 h-3 text-slate-400" />
                                  {item.uninstalledAt ? new Date(item.uninstalledAt).toLocaleDateString('en-IN', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                  }) : 'Recent'}
                                </div>
                                <p className="text-[10px] text-slate-400 pl-4">
                                  {item.uninstalledAt ? new Date(item.uninstalledAt).toLocaleTimeString('en-IN', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  }) : ''}
                                </p>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer / Pagination (Responsive) */}
            {uninstallsPagination.totalPages > 1 && (
              <div className="p-2.5 sm:p-4 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 bg-slate-50/50 dark:bg-zinc-900/40 shrink-0">
                <span className="font-medium text-[11px] sm:text-xs order-2 sm:order-1 text-center sm:text-left">
                  Showing {((uninstallsPagination.page - 1) * uninstallsPagination.limit) + 1} - {Math.min(uninstallsPagination.page * uninstallsPagination.limit, uninstallsPagination.total)} of {uninstallsPagination.total}
                </span>
                <div className="flex items-center gap-1.5 order-1 sm:order-2 w-full sm:w-auto justify-between sm:justify-end">
                  <button
                    disabled={uninstallsPagination.page <= 1}
                    onClick={() => fetchUninstalledUsers(uninstallsPagination.page - 1, uninstallsSearch, uninstallsPlatform, 'registered')}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-slate-700 dark:text-zinc-200 cursor-pointer transition-colors text-xs"
                  >
                    Prev
                  </button>
                  <span className="px-2 font-bold text-slate-900 dark:text-white text-xs">
                    Page {uninstallsPagination.page} of {uninstallsPagination.totalPages}
                  </span>
                  <button
                    disabled={uninstallsPagination.page >= uninstallsPagination.totalPages}
                    onClick={() => fetchUninstalledUsers(uninstallsPagination.page + 1, uninstallsSearch, uninstallsPlatform, 'registered')}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-slate-700 dark:text-zinc-200 cursor-pointer transition-colors text-xs"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
