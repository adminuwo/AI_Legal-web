import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateLightSocialCard() {
  const logoPath = 'd:/AI Legal/AI_Legal_App-backend-webpage-/AI-Legal_App_Webapp/public/logo/logo_transparent.png';
  const logoBuf = fs.readFileSync(logoPath);
  const logoBase64 = 'data:image/png;base64,' + logoBuf.toString('base64');

  // Real Tools Suite screenshot - cropped to focus directly on the 3 tool cards!
  const toolsPath = 'd:/AI Legal/AI_Legal_App-backend-webpage-/AI-Legal_App_Webapp/public/assets/ai-legal-tools-suite.png';
  const croppedToolsBuf = await sharp(toolsPath)
    .extract({ left: 245, top: 20, width: 775, height: 495 })
    .png()
    .toBuffer();
  const toolsBase64 = 'data:image/png;base64,' + croppedToolsBuf.toString('base64');

  const FONT = 'Arial, Helvetica, sans-serif';

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient (Clean Crisp Light Platinum) -->
    <linearGradient id="light-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#F1F5F9" />
    </linearGradient>

    <!-- Gold Accent Gradient -->
    <linearGradient id="gold-brand" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B88B2A" />
      <stop offset="50%" stop-color="#D4AF37" />
      <stop offset="100%" stop-color="#996515" />
    </linearGradient>

    <!-- Shadow for Uniform Dark App Window -->
    <filter id="app-window-shadow" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="20" stdDeviation="24" flood-color="#0F172A" flood-opacity="0.22" />
    </filter>

    <!-- Border Glow for App Window -->
    <linearGradient id="app-border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(184, 139, 42, 0.45)" />
      <stop offset="50%" stop-color="rgba(51, 65, 85, 0.6)" />
      <stop offset="100%" stop-color="rgba(184, 139, 42, 0.25)" />
    </linearGradient>

    <clipPath id="tools-clip">
      <rect x="0" y="0" width="484" height="380" rx="4" />
    </clipPath>
  </defs>

  <!-- Clean Base Background -->
  <rect width="1200" height="630" fill="url(#light-bg)" />

  <!-- Subtle Blueprint Dot Grid -->
  <g opacity="0.20" fill="#94A3B8">
    ${Array.from({ length: 25 }, (_, i) => 
      Array.from({ length: 13 }, (_, j) => 
        `<circle cx="${50 + i * 46}" cy="${30 + j * 48}" r="1" />`
      ).join('')
    ).join('')}
  </g>

  <!-- Outer Frame -->
  <rect x="20" y="20" width="1160" height="590" rx="20" fill="none" stroke="#E2E8F0" stroke-width="1.5" />

  <!-- ================= LEFT COLUMN: CLEAN TYPOGRAPHY & BRANDING ================= -->
  <!-- Top Category Pill Badge -->
  <g transform="translate(60, 48)">
    <rect x="0" y="0" width="280" height="32" rx="16" fill="#FEF3C7" stroke="#FDE68A" stroke-width="1" />
    <circle cx="16" cy="16" r="4" fill="#D97706" />
    <text x="28" y="21" font-family="${FONT}" font-size="11" font-weight="bold" fill="#92400E" letter-spacing="1.2">LEGAL AI &amp; LITIGATION SUITE</text>
  </g>

  <!-- Brand Logo + Name -->
  <g transform="translate(60, 96)">
    <image href="${logoBase64}" x="0" y="0" width="56" height="56" />
    <text x="68" y="40" font-family="${FONT}" font-size="34" font-weight="bold" fill="#0F172A" letter-spacing="-0.5">AI LEGAL<tspan fill="#B88B2A" font-size="18" dy="-13">™</tspan></text>
  </g>

  <!-- Main Headline -->
  <text x="60" y="202" font-family="${FONT}" font-size="38" font-weight="bold" fill="#0F172A" letter-spacing="-1">
    All Your Legal Work,
  </text>
  <text x="60" y="248" font-family="${FONT}" font-size="38" font-weight="bold" fill="url(#gold-brand)" letter-spacing="-1">
    One Powerful System
  </text>

  <!-- Subheadline -->
  <text x="60" y="290" font-family="${FONT}" font-size="15" font-weight="bold" fill="#334155">
    All-in-one case management &amp; litigation platform built for India.
  </text>
  <text x="60" y="312" font-family="${FONT}" font-size="13.5" font-weight="normal" fill="#64748B">
    Track court hearings, research precedents &amp; draft court petitions with AI.
  </text>

  <!-- 3 Clean Value Cards -->
  <g transform="translate(60, 344)">
    <!-- Pill 1: Court Tracking -->
    <g transform="translate(0, 0)">
      <rect width="180" height="74" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" />
      <g transform="translate(14, 16)">
        <circle cx="14" cy="14" r="14" fill="#FEF3C7" />
        <path d="M14 5 L5 10 L23 10 Z M7 12 L9 12 L9 19 L7 19 Z M11 12 L13 12 L13 19 L11 19 Z M15 12 L17 12 L17 19 L15 19 Z M19 12 L21 12 L21 19 L19 19 Z M4 20 L24 20 L24 22 L4 22 Z" fill="#B88B2A" />
      </g>
      <text x="50" y="32" font-family="${FONT}" font-size="13" font-weight="bold" fill="#0F172A">Case Tracking</text>
      <text x="14" y="58" font-family="${FONT}" font-size="11" fill="#64748B">SC, High Courts &amp; Dist.</text>
    </g>

    <!-- Pill 2: AI Precedents -->
    <g transform="translate(192, 0)">
      <rect width="180" height="74" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" />
      <g transform="translate(14, 16)">
        <circle cx="14" cy="14" r="14" fill="#EFF6FF" />
        <path d="M6 7 C6 6 7 5.5 8 5.5 L20 5.5 C21 5.5 22 6 22 7 L22 21 C22 22 21 22.5 20 22.5 L8 22.5 C7 22.5 6 22 6 21 Z M8 7 L8 21 L20 21 L20 7 Z M10 10 L18 10 M10 13 L16 13 M10 16 L14 16" stroke="#2563EB" stroke-width="1.6" stroke-linecap="round" fill="none" />
      </g>
      <text x="50" y="32" font-family="${FONT}" font-size="13" font-weight="bold" fill="#0F172A">AI Precedents</text>
      <text x="14" y="58" font-family="${FONT}" font-size="11" fill="#64748B">Fast Precedent Search</text>
    </g>

    <!-- Pill 3: BNS Drafting -->
    <g transform="translate(384, 0)">
      <rect width="180" height="74" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2" />
      <g transform="translate(14, 16)">
        <circle cx="14" cy="14" r="14" fill="#ECFDF5" />
        <path d="M14 6 L14 22 M6 10 L22 10 M9 10 L6 17 L12 17 Z M19 10 L16 17 L22 17 Z M11 22 L17 22" stroke="#059669" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      </g>
      <text x="50" y="32" font-family="${FONT}" font-size="13" font-weight="bold" fill="#0F172A">BNS / BNSS AI</text>
      <text x="14" y="58" font-family="${FONT}" font-size="11" fill="#64748B">Petitions &amp; Notices</text>
    </g>
  </g>

  <!-- Bottom Action Bar (App Store & Google Play Badges + Trust) -->
  <g transform="translate(60, 460)">
    <!-- Google Play Button -->
    <g transform="translate(0, 0)">
      <rect width="154" height="44" rx="8" fill="#0F172A" />
      <path d="M18 14 L28 22 L18 30 Z" fill="#38BDF8" />
      <text x="36" y="19" font-family="${FONT}" font-size="8" font-weight="bold" fill="#94A3B8" letter-spacing="0.5">GET IT ON</text>
      <text x="36" y="32" font-family="${FONT}" font-size="12" font-weight="bold" fill="#FFFFFF">Google Play</text>
    </g>

    <!-- App Store Button -->
    <g transform="translate(166, 0)">
      <rect width="154" height="44" rx="8" fill="#0F172A" />
      <path d="M15 17.5 C15 15.5 16.5 14.2 16.6 14.1 C15.5 12.6 13.9 12.4 13.4 12.3 C12 12.2 10.6 13.1 9.9 13.1 C9.1 13.1 8 12.3 6.9 12.3 C5.5 12.3 4.1 13.1 3.4 14.4 C1.8 17.1 3.1 21.1 4.6 23.3 C5.4 24.3 6.2 25.5 7.4 25.5 C8.5 25.5 8.9 24.8 10.3 24.8 C11.6 24.8 12 25.5 13.2 25.5 C14.4 25.5 15.2 24.4 15.9 23.4 C16.8 22.1 17.1 20.9 17.2 20.8 C17.1 20.7 15 19.9 15 17.5 Z M12.5 10.8 C13.1 10.1 13.5 9.1 13.4 8 C12.5 8 11.4 8.6 10.8 9.3 C10.3 9.9 9.8 10.9 10 12 C11 12.1 12 11.5 12.5 10.8 Z" fill="#FFFFFF" transform="translate(10, 4) scale(0.85)" />
      <text x="36" y="19" font-family="${FONT}" font-size="8" font-weight="bold" fill="#94A3B8" letter-spacing="0.5">Download on the</text>
      <text x="36" y="32" font-family="${FONT}" font-size="12" font-weight="bold" fill="#FFFFFF">App Store</text>
    </g>

    <!-- Security & Web URL -->
    <g transform="translate(340, 2)">
      <path d="M6 9 L6 6 C6 4 8 2.5 10 2.5 C12 2.5 14 4 14 6 L14 9 M3 9 L17 9 C18 9 18.5 9.5 18.5 10.5 L18.5 18.5 C18.5 19.5 18 20 17 20 L3 20 C2 20 1.5 19.5 1.5 18.5 L1.5 10.5 C1.5 9.5 2 9 3 9 Z" stroke="#B88B2A" stroke-width="1.8" stroke-linecap="round" fill="none" transform="translate(0, 4) scale(0.9)" />
      <text x="24" y="16" font-family="${FONT}" font-size="12" font-weight="bold" fill="#0F172A">Enterprise Security &amp; Client Privacy</text>
      <text x="24" y="32" font-family="${FONT}" font-size="11" font-weight="normal" fill="#64748B">Web • iOS • Android  |  <tspan fill="#B88B2A" font-weight="bold">ailegal.aisa24.com</tspan></text>
    </g>
  </g>

  <!-- ================= RIGHT COLUMN: UNIFORM DARK LUXURY APP WINDOW (TOOLS SUITE) ================= -->
  <g transform="translate(666, 75)" filter="url(#app-window-shadow)">
    <!-- Entire Window Frame in uniform deep navy #0B0F19 -->
    <rect width="494" height="475" rx="18" fill="#0B0F19" stroke="url(#app-border-glow)" stroke-width="1.5" />
    
    <!-- Top Browser Header Bar (Seamless #0B0F19) -->
    <g transform="translate(18, 16)">
      <!-- Mac-style 3 dots -->
      <circle cx="6" cy="11" r="5" fill="#EF4444" />
      <circle cx="22" cy="11" r="5" fill="#F59E0B" />
      <circle cx="38" cy="11" r="5" fill="#10B981" />
      
      <!-- URL Bar inside Dark Frame -->
      <rect x="58" y="1" width="264" height="22" rx="6" fill="#161F30" stroke="#1E293B" stroke-width="1" />
      <text x="72" y="16" font-family="${FONT}" font-size="10.5" font-weight="500" fill="#94A3B8">🔒 ailegal.aisa24.com/ai-tools</text>

      <!-- Golden Live Badge -->
      <rect x="334" y="1" width="118" height="22" rx="11" fill="rgba(184, 139, 42, 0.18)" stroke="rgba(184, 139, 42, 0.4)" stroke-width="1" />
      <circle cx="346" cy="12" r="3.5" fill="#D4AF37" />
      <text x="356" y="16" font-family="${FONT}" font-size="10" font-weight="bold" fill="#FDE047">AI TOOLS SUITE</text>
    </g>

    <!-- Subtle Divider -->
    <line x1="0" y1="48" x2="494" y2="48" stroke="#1E293B" stroke-width="1" />

    <!-- Cropped Tools Suite Screenshot (Draft Maker, Argument Builder, Legal Precedents) -->
    <g transform="translate(5, 50)">
      <g clip-path="url(#tools-clip)">
        <image href="${toolsBase64}" x="0" y="0" width="484" height="380" preserveAspectRatio="xMinYMin meet" />
      </g>
    </g>

    <!-- Bottom Feature Bar (Seamless #0B0F19) -->
    <line x1="0" y1="432" x2="494" y2="432" stroke="#1E293B" stroke-width="1" />
    <g transform="translate(18, 442)">
      <text x="0" y="15" font-family="${FONT}" font-size="11" font-weight="bold" fill="#FDE047">⚡ Enterprise AI Litigation Suite:</text>
      <text x="175" y="15" font-family="${FONT}" font-size="10.5" font-weight="500" fill="#94A3B8">Draft Maker • Precedents • Argument Builder</text>
    </g>
  </g>
</svg>
`;

  const outputPath = 'd:/AI Legal/AI_Legal_App-backend-webpage-/AI-Legal_App_Webapp/public/og-preview.png';

  const res = await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Regenerated Uniform Cropped Tools Social Card successfully:', res);
}

generateLightSocialCard().catch(err => {
  console.error('Failed to regenerate card:', err);
  process.exit(1);
});
