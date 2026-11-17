import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Free Online Tools — EPF/KWSP Calculators, JSON to Chart, WebSocket Tester | Phyto Link Venture",
  description: "Free browser tools from Phyto Link Venture: EPF and KWSP retirement calculators for Malaysians, a JSON-to-chart converter, a WebSocket tester and setup guides. No sign-up.",
  alternates: { canonical: "/tools" },
};

import Link from "next/link";

const tools = [
  {
    name: "EPF + Investment Calculator",
    slug: "epf-calculator",
    description: "Calculate your EPF contributions, project future savings, and explore investment scenarios for Malaysian employees.",
    icon: "💰",
    category: "Finance",
  },
  {
    name: "KWSP Projection Calculator",
    slug: "kwsp-calculator",
    description: "Project your KWSP (EPF) retirement savings with detailed breakdowns by account and contribution rates.",
    icon: "📊",
    category: "Finance",
  },
  {
    name: "Airdrop Strategy Calculator",
    slug: "airdrop-calculator",
    description: "Plan and calculate crypto airdrop strategies with token allocation and distribution analysis.",
    icon: "🪂",
    category: "Crypto",
  },
  {
    name: "JSON to Chart Tool",
    slug: "json-to-chart",
    description: "Paste JSON data and instantly visualize it as interactive charts. Supports bar, line, pie, and more.",
    icon: "📈",
    category: "Developer",
  },
  {
    name: "WebSocket Tester",
    slug: "websocket-tester",
    description: "Test WebSocket connections in real-time. Send messages, monitor responses, and debug your WebSocket servers.",
    icon: "🔌",
    category: "Developer",
  },
  {
    name: "Auto Rotator",
    slug: "auto-rotator",
    description: "DOGGO MBKS automated rotation tool for managing and rotating entries efficiently.",
    icon: "🔄",
    category: "Utility",
  },
  {
    name: "n8n + Odoo Setup Guide",
    slug: "n8n-odoo-setup",
    description: "Complete documentation for setting up n8n workflow automation with Odoo ERP and PostgreSQL.",
    icon: "📖",
    category: "Documentation",
  },
];

const categoryColors: Record<string, string> = {
  Finance: "bg-emerald-100 text-emerald-700",
  Crypto: "bg-purple-100 text-purple-700",
  Developer: "bg-blue-100 text-blue-700",
  Utility: "bg-orange-100 text-orange-700",
  Documentation: "bg-gray-100 text-gray-700",
};

export default function ToolsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Tools
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            A collection of useful calculators, developer tools, and utilities — all free to use, no sign-up required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-green-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[tool.category] || "bg-gray-100 text-gray-600"}`}>
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tool.description}
                </p>
                <div className="mt-4 text-green-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Open Tool →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
