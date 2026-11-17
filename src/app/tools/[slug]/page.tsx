import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, TOOLS, jsonLd } from "@/lib/site";

const tools = TOOLS;

export function generateStaticParams() {
  return Object.keys(tools).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools[slug];
  if (!tool) return {};
  return {
    title: `${tool.name} — Free Online Tool | Phyto Link Venture`,
    description: tool.description,
    alternates: { canonical: `/tools/${slug}` },
    openGraph: { title: tool.name, description: tool.description, url: `/tools/${slug}` },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools[slug];
  if (!tool) notFound();

  const toolLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: `${SITE_URL}/tools/${slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (runs in the browser)",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    publisher: { "@id": `${SITE_URL}/#org` },
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(toolLd)} />
      {/* Header bar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/tools"
              className="text-gray-500 hover:text-green-600 transition-colors text-sm font-medium flex items-center gap-1"
            >
              ← All Tools
            </Link>
            <span className="text-gray-300">|</span>
            <h1 className="text-lg font-bold text-gray-900">{tool.name}</h1>
          </div>
          <a
            href={`/tools/${tool.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            Open in New Tab ↗
          </a>
        </div>
      </div>

      {/* Crawlable summary: the tool itself lives in an iframe, which search engines and AI assistants don't attribute to this page. */}
      <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-sm text-gray-600">{tool.description}</p>

      {/* Tool iframe */}
      <iframe
        src={`/tools/${tool.file}`}
        className="w-full border-0"
        style={{ height: "calc(100vh - 8rem)" }}
        title={tool.name}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
      />
    </div>
  );
}
