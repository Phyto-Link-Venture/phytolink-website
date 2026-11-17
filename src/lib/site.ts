/** Shared facts about the business, used by metadata, JSON-LD, sitemap and llms.txt. */
export const SITE_URL = "https://phytolink-venture.com";
export const CHATBRANCH_APP_URL = "https://chatbranch.phytolink-venture.com";

export const ORG = {
  name: "Phyto Link Venture",
  legalId: "202503038465 (TR0316513-W)",
  email: "phytolinkventure@gmail.com",
  phone: "+601133199692",
  whatsapp: "https://wa.me/601133199692",
  address: {
    streetAddress: "74, Lorong Bawal Tambak, Taman Gadung Permai 1A",
    addressLocality: "Klang",
    postalCode: "41100",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
};

/** Tool pages under /tools/[slug]. Shared by the tools index, tool pages and sitemap. */
export const TOOLS: Record<string, { name: string; file: string; description: string }> = {
  "epf-calculator": {
    name: "EPF + Investment Calculator",
    file: "epf-calculator.html",
    description: "Free EPF (KWSP) calculator for Malaysian employees: calculate employee and employer contributions, project future savings and compare investment scenarios.",
  },
  "kwsp-calculator": {
    name: "KWSP Projection Calculator",
    file: "kwsp-calculator.html",
    description: "Free KWSP (EPF) retirement projection calculator: see your savings by account and contribution rate up to retirement age in Malaysia.",
  },
  "airdrop-calculator": {
    name: "Airdrop Strategy Calculator",
    file: "airdrop-calculator.html",
    description: "Plan and calculate crypto airdrop strategies with token allocation and distribution analysis.",
  },
  "json-to-chart": {
    name: "JSON to Chart Tool",
    file: "json-to-chart.html",
    description: "Paste JSON data and instantly turn it into an interactive bar, line or pie chart in your browser. Free, no sign-up.",
  },
  "websocket-tester": {
    name: "WebSocket Tester",
    file: "websocket-tester.html",
    description: "Free online WebSocket tester: connect to a ws:// or wss:// server, send messages and watch responses in real time.",
  },
  "auto-rotator": {
    name: "Auto Rotator",
    file: "auto-rotator.html",
    description: "Automated rotation tool for managing and rotating entries efficiently.",
  },
  "n8n-odoo-setup": {
    name: "n8n + Odoo Setup Guide",
    file: "n8n-odoo-setup.html",
    description: "Step-by-step guide to setting up n8n workflow automation with Odoo ERP and PostgreSQL.",
  },
};

export function jsonLd(data: unknown) {
  // Escape "<" so a value can never close the <script> tag.
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
