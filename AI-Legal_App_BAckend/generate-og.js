import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateSocialCard() {
  const logoPath = 'd:/AI Legal/AI_Legal_App-backend-webpage-/AI-Legal_App_Webapp/public/logo/logo_transparent.png';
  const logoBuf = fs.readFileSync(logoPath);
  const logoBase64 = 'data:image/png;base64,' + logoBuf.toString('base64');

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060911" />
      <stop offset="50%" stop-color="#0E1626" />
      <stop offset="100%" stop-color="#080D18" />
    </linearGradient>

    <!-- Gold Gradient -->
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FEE08B" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>

    <!-- Border Glow -->
    <linearGradient id="border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(245, 158, 11, 0.7)" />
      <stop offset="40%" stop-color="rgba(56, 189, 248, 0.35)" />
      <stop offset="100%" stop-color="rgba(245, 158, 11, 0.15)" />
    </linearGradient>

    <!-- Glass Card Gradient -->
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(26, 36, 56, 0.95)" />
      <stop offset="100%" stop-color="rgba(13, 20, 36, 0.98)" />
    </linearGradient>

    <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="65" result="blur" />
    </filter>

    <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="80" result="blur" />
    </filter>

    <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#000000" flood-opacity="0.8" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bg-grad)" />

  <!-- Ambient Glowing Orbs -->
  <circle cx="160" cy="130" r="260" fill="#D97706" opacity="0.22" filter="url(#glow-gold)" />
  <circle cx="1080" cy="190" r="320" fill="#1E40AF" opacity="0.30" filter="url(#glow-blue)" />
  <circle cx="600" cy="590" r="240" fill="#B45309" opacity="0.14" filter="url(#glow-gold)" />

  <!-- Subtle Blueprint Court Grid -->
  <g opacity="0.04" stroke="#FFFFFF" stroke-width="1">
    <line x1="0" y1="105" x2="1200" y2="105" />
    <line x1="0" y1="210" x2="1200" y2="210" />
    <line x1="0" y1="315" x2="1200" y2="315" />
    <line x1="0" y1="420" x2="1200" y2="420" />
    <line x1="0" y1="525" x2="1200" y2="525" />
    <line x1="150" y1="0" x2="150" y2="630" />
    <line x1="300" y1="0" x2="300" y2="630" />
    <line x1="450" y1="0" x2="450" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="750" y1="0" x2="750" y2="630" />
    <line x1="900" y1="0" x2="900" y2="630" />
    <line x1="1050" y1="0" x2="1050" y2="630" />
  </g>

  <!-- Outer Luxury Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="url(#border-glow)" stroke-width="1.8" />

  <!-- ================= LEFT COLUMN ================= -->
  <!-- Top Category Pill Badge -->
  <g transform="translate(60, 52)">
    <rect x="0" y="0" width="310" height="34" rx="17" fill="rgba(245, 158, 11, 0.12)" stroke="rgba(245, 158, 11, 0.5)" stroke-width="1.2" />
    <circle cx="16" cy="17" r="4.5" fill="#F59E0B" />
    <text x="30" y="22" font-family="'Inter', -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="#FDE047" letter-spacing="1.5">INDIA'S PREMIER LEGAL AI SUITE</text>
  </g>

  <!-- Brand Logo + Name -->
  <g transform="translate(60, 102)">
    <image href="${logoBase64}" x="0" y="0" width="60" height="60" />
    <text x="74" y="43" font-family="'Inter', -apple-system, sans-serif" font-size="36" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">AI LEGAL<tspan fill="#F59E0B" font-size="20" dy="-14">™</tspan></text>
  </g>

  <!-- Main Headline (Tightened font size to give plenty of breathing room) -->
  <text x="60" y="214" font-family="'Inter', -apple-system, sans-serif" font-size="35" font-weight="800" fill="#FFFFFF" letter-spacing="-0.6">
    India's #1 Legal AI &amp;
  </text>
  <text x="60" y="260" font-family="'Inter', -apple-system, sans-serif" font-size="35" font-weight="800" fill="url(#gold-grad)" letter-spacing="-0.6">
    Litigation Case Management
  </text>

  <!-- Subheadline -->
  <text x="60" y="306" font-family="'Inter', -apple-system, sans-serif" font-size="14.5" font-weight="400" fill="#94A3B8">
    AI Research across 3.8 Cr+ Judgments, Real-Time Cause Lists &amp; BNS Drafting
  </text>

  <!-- 3 Pillar Stat Cards -->
  <g transform="translate(60, 344)">
    <!-- Pill 1: Courts -->
    <g transform="translate(0, 0)">
      <rect width="186" height="78" rx="14" fill="rgba(30, 41, 59, 0.75)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.2" />
      <!-- Court SVG Icon -->
      <g transform="translate(16, 18)">
        <circle cx="16" cy="16" r="16" fill="rgba(245, 158, 11, 0.15)" />
        <path d="M16 6 L6 12 L26 12 Z M8 14 L10 14 L10 22 L8 22 Z M13 14 L15 14 L15 22 L13 22 Z M17 14 L19 14 L19 22 L17 22 Z M22 14 L24 14 L24 22 L22 22 Z M5 23 L27 23 L27 25 L5 25 Z" fill="#F59E0B" />
      </g>
      <text x="56" y="36" font-family="'Inter', -apple-system, sans-serif" font-size="19" font-weight="800" fill="#FFFFFF">8,200+</text>
      <text x="16" y="62" font-family="'Inter', -apple-system, sans-serif" font-size="11.5" font-weight="500" fill="#94A3B8">Courts &amp; Tribunals</text>
    </g>

    <!-- Pill 2: Judgments -->
    <g transform="translate(198, 0)">
      <rect width="186" height="78" rx="14" fill="rgba(30, 41, 59, 0.75)" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.2" />
      <!-- Book SVG Icon -->
      <g transform="translate(16, 18)">
        <circle cx="16" cy="16" r="16" fill="rgba(245, 158, 11, 0.15)" />
        <path d="M7 8 C7 6.9 7.9 6 9 6 L23 6 C24.1 6 25 6.9 25 8 L25 24 C25 25.1 24.1 26 23 26 L9 26 C7.9 26 7 25.1 7 24 Z M9 8 L9 24 L23 24 L23 8 Z M11 11 L21 11 M11 15 L19 15 M11 19 L17 19" stroke="#FDE047" stroke-width="1.8" stroke-linecap="round" fill="none" />
      </g>
      <text x="56" y="36" font-family="'Inter', -apple-system, sans-serif" font-size="19" font-weight="800" fill="#FDE047">3.8 Cr+</text>
      <text x="16" y="62" font-family="'Inter', -apple-system, sans-serif" font-size="11.5" font-weight="500" fill="#94A3B8">Judgments &amp; Precedents</text>
    </g>

    <!-- Pill 3: BNS Drafting -->
    <g transform="translate(396, 0)">
      <rect width="186" height="78" rx="14" fill="rgba(30, 41, 59, 0.75)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.2" />
      <!-- Scales / Balance SVG Icon -->
      <g transform="translate(16, 18)">
        <circle cx="16" cy="16" r="16" fill="rgba(56, 189, 248, 0.15)" />
        <path d="M16 7 L16 25 M7 11 L25 11 M11 11 L7 19 L15 19 Z M21 11 L17 19 L25 19 Z M12 25 L20 25" stroke="#38BDF8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>
      <text x="56" y="36" font-family="'Inter', -apple-system, sans-serif" font-size="18" font-weight="800" fill="#38BDF8">BNS / BNSS</text>
      <text x="16" y="62" font-family="'Inter', -apple-system, sans-serif" font-size="11.5" font-weight="500" fill="#94A3B8">Court Petition Drafting</text>
    </g>
  </g>

  <!-- Bottom Badges / Store CTAs -->
  <g transform="translate(60, 466)">
    <!-- Google Play Badge -->
    <g transform="translate(0, 0)">
      <rect width="160" height="46" rx="10" fill="#000000" stroke="#334155" stroke-width="1.2" />
      <!-- Play Icon -->
      <path d="M18 15 L28 23 L18 31 Z" fill="#38BDF8" />
      <text x="36" y="20" font-family="'Inter', -apple-system, sans-serif" font-size="8.5" font-weight="600" fill="#94A3B8" letter-spacing="0.5">GET IT ON</text>
      <text x="36" y="34" font-family="'Inter', -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Google Play</text>
    </g>

    <!-- App Store Badge -->
    <g transform="translate(172, 0)">
      <rect width="160" height="46" rx="10" fill="#000000" stroke="#334155" stroke-width="1.2" />
      <!-- Apple Silhouette -->
      <path d="M15 17.5 C15 15.5 16.5 14.2 16.6 14.1 C15.5 12.6 13.9 12.4 13.4 12.3 C12 12.2 10.6 13.1 9.9 13.1 C9.1 13.1 8 12.3 6.9 12.3 C5.5 12.3 4.1 13.1 3.4 14.4 C1.8 17.1 3.1 21.1 4.6 23.3 C5.4 24.3 6.2 25.5 7.4 25.5 C8.5 25.5 8.9 24.8 10.3 24.8 C11.6 24.8 12 25.5 13.2 25.5 C14.4 25.5 15.2 24.4 15.9 23.4 C16.8 22.1 17.1 20.9 17.2 20.8 C17.1 20.7 15 19.9 15 17.5 Z M12.5 10.8 C13.1 10.1 13.5 9.1 13.4 8 C12.5 8 11.4 8.6 10.8 9.3 C10.3 9.9 9.8 10.9 10 12 C11 12.1 12 11.5 12.5 10.8 Z" fill="#FFFFFF" transform="translate(12, 4) scale(0.9)" />
      <text x="38" y="20" font-family="'Inter', -apple-system, sans-serif" font-size="8.5" font-weight="600" fill="#94A3B8" letter-spacing="0.5">Download on the</text>
      <text x="38" y="34" font-family="'Inter', -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">App Store</text>
    </g>

    <!-- Security & Trust -->
    <g transform="translate(350, 4)">
      <!-- Lock SVG -->
      <path d="M6 10 L6 7 C6 4.8 7.8 3 10 3 C12.2 3 14 4.8 14 7 L14 10 M3 10 L17 10 C18.1 10 19 10.9 19 12 L19 20 C19 21.1 18.1 22 17 22 L3 22 C1.9 22 1 21.1 1 20 L1 12 C1 10.9 1.9 10 3 10 Z" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" fill="none" transform="translate(0, 4) scale(0.9)" />
      <text x="24" y="16" font-family="'Inter', -apple-system, sans-serif" font-size="12" font-weight="600" fill="#CBD5E1">AES-256 Bank-Grade Security</text>
      <text x="24" y="32" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="500" fill="#94A3B8">ISO 27001 &amp; Indian Court Compliance</text>
      <text x="24" y="48" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="600" fill="#FDE047">Web • Android • iOS  |  ailegal.aisa24.com</text>
    </g>
  </g>

  <!-- ================= RIGHT COLUMN: INTERACTIVE GLASS COCKPIT ================= -->
  <g transform="translate(712, 72)" filter="url(#card-shadow)">
    <!-- Container -->
    <rect width="428" height="486" rx="22" fill="url(#card-grad)" stroke="rgba(255, 255, 255, 0.14)" stroke-width="1.4" />

    <!-- Window Top Header -->
    <g transform="translate(22, 22)">
      <circle cx="8" cy="11" r="5" fill="#EF4444" />
      <circle cx="24" cy="11" r="5" fill="#F59E0B" />
      <circle cx="40" cy="11" r="5" fill="#10B981" />
      <text x="60" y="16" font-family="'Inter', -apple-system, sans-serif" font-size="13" font-weight="600" fill="#94A3B8">AI Litigation Cockpit</text>
      <rect x="274" y="1" width="108" height="22" rx="11" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1" />
      <circle cx="286" cy="12" r="3.5" fill="#34D399" />
      <text x="296" y="16" font-family="'Inter', -apple-system, sans-serif" font-size="10.5" font-weight="700" fill="#34D399">LIVE SYNC</text>
    </g>

    <line x1="22" y1="56" x2="406" y2="56" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />

    <!-- Metric Card 1: Cause List -->
    <g transform="translate(22, 70)">
      <rect width="384" height="84" rx="14" fill="rgba(15, 23, 42, 0.7)" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.2" />
      <text x="18" y="27" font-family="'Inter', -apple-system, sans-serif" font-size="10.5" font-weight="800" fill="#F59E0B" letter-spacing="1">DAILY CAUSE LIST TRACKER</text>
      <text x="18" y="50" font-family="'Inter', -apple-system, sans-serif" font-size="14.5" font-weight="700" fill="#F8FAFC">Supreme Court of India • Item #14</text>
      <text x="18" y="69" font-family="'Inter', -apple-system, sans-serif" font-size="11" fill="#94A3B8">Hearing: Tomorrow, Courtroom 4 (Hon'ble CJI Bench)</text>
      <rect x="310" y="16" width="58" height="24" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.4)" stroke-width="1" />
      <text x="321" y="32" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="700" fill="#4ADE80">Active</text>
    </g>

    <!-- Metric Card 2: AI Precedents -->
    <g transform="translate(22, 168)">
      <rect width="384" height="84" rx="14" fill="rgba(15, 23, 42, 0.7)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.2" />
      <text x="18" y="27" font-family="'Inter', -apple-system, sans-serif" font-size="10.5" font-weight="800" fill="#38BDF8" letter-spacing="1">AI JUDICIAL PRECEDENT</text>
      <text x="18" y="50" font-family="'Inter', -apple-system, sans-serif" font-size="14.5" font-weight="700" fill="#F8FAFC">Section 482 CrPC &amp; BNSS Equivalent</text>
      <text x="18" y="69" font-family="'Inter', -apple-system, sans-serif" font-size="11" fill="#94A3B8">98.4% Match to Facts • 3 Landmark Citations Grounded</text>
      <rect x="306" y="16" width="62" height="24" rx="6" fill="rgba(56, 189, 248, 0.2)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1" />
      <text x="315" y="32" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="700" fill="#38BDF8">Verified</text>
    </g>

    <!-- Metric Card 3: Automated Drafting -->
    <g transform="translate(22, 266)">
      <rect width="384" height="84" rx="14" fill="rgba(15, 23, 42, 0.7)" stroke="rgba(129, 140, 248, 0.3)" stroke-width="1.2" />
      <text x="18" y="27" font-family="'Inter', -apple-system, sans-serif" font-size="10.5" font-weight="800" fill="#818CF8" letter-spacing="1">AUTOMATED PETITION DRAFT</text>
      <text x="18" y="50" font-family="'Inter', -apple-system, sans-serif" font-size="14.5" font-weight="700" fill="#F8FAFC">Special Leave Petition (Civil) Generated</text>
      <text x="18" y="69" font-family="'Inter', -apple-system, sans-serif" font-size="11" fill="#94A3B8">Strictly formatted per Supreme Court Rules 2013</text>
      <rect x="310" y="16" width="58" height="24" rx="6" fill="rgba(129, 140, 248, 0.2)" stroke="rgba(129, 140, 248, 0.4)" stroke-width="1" />
      <text x="322" y="32" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="700" fill="#A5B4FC">Ready</text>
    </g>

    <!-- Rating / Trust Banner inside Glass -->
    <g transform="translate(22, 366)">
      <rect width="384" height="96" rx="14" fill="rgba(245, 158, 11, 0.08)" stroke="rgba(245, 158, 11, 0.25)" stroke-width="1.2" />
      <!-- Star Ratings Vector -->
      <g transform="translate(20, 24)">
        <!-- 5 gold stars -->
        <path d="M6 1 L8 5 L12 5 L9 8 L10 12 L6 9 L2 12 L3 8 L0 5 L4 5 Z" fill="#F59E0B" transform="translate(0, 0) scale(1.1)" />
        <path d="M6 1 L8 5 L12 5 L9 8 L10 12 L6 9 L2 12 L3 8 L0 5 L4 5 Z" fill="#F59E0B" transform="translate(18, 0) scale(1.1)" />
        <path d="M6 1 L8 5 L12 5 L9 8 L10 12 L6 9 L2 12 L3 8 L0 5 L4 5 Z" fill="#F59E0B" transform="translate(36, 0) scale(1.1)" />
        <path d="M6 1 L8 5 L12 5 L9 8 L10 12 L6 9 L2 12 L3 8 L0 5 L4 5 Z" fill="#F59E0B" transform="translate(54, 0) scale(1.1)" />
        <path d="M6 1 L8 5 L12 5 L9 8 L10 12 L6 9 L2 12 L3 8 L0 5 L4 5 Z" fill="#F59E0B" transform="translate(72, 0) scale(1.1)" />
        <text x="96" y="12" font-family="'Inter', -apple-system, sans-serif" font-size="13" font-weight="800" fill="#FDE047">4.9 / 5.0 RATED BY ADVOCATES</text>
      </g>
      <text x="20" y="58" font-family="'Inter', -apple-system, sans-serif" font-size="12" font-weight="500" fill="#E2E8F0">Empowering 10,000+ Indian Lawyers &amp; Law Firms</text>
      <text x="20" y="78" font-family="'Inter', -apple-system, sans-serif" font-size="11" font-weight="400" fill="#94A3B8">Zero Hallucination Precedent Research &amp; Legal Intelligence</text>
    </g>
  </g>
</svg>
`;

  const outputPath = 'd:/AI Legal/AI_Legal_App-backend-webpage-/AI-Legal_App_Webapp/public/og-preview.png';

  const res = await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Regenerated final pixel-perfect OG Preview Image successfully:', res);
}

generateSocialCard().catch(err => {
  console.error('Failed to regenerate image:', err);
  process.exit(1);
});
