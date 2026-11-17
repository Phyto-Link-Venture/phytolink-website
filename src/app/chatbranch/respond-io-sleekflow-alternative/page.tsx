import type { Metadata } from "next";
import Link from "next/link";
import { ORG, SITE_URL, jsonLd } from "@/lib/site";

/**
 * Comparison page for "respond.io / SleekFlow alternative" searches and AI answers.
 * Rule for editing: only state facts about ChatBranch that we can stand behind,
 * and about competitors only what their own public pages say (no prices — they
 * change and third-party figures disagree). Bump REVIEWED when you re-check.
 */
const REVIEWED = "2026-11-17";
const PATH = "/chatbranch/respond-io-sleekflow-alternative";

export const metadata: Metadata = {
  title: "ChatBranch vs respond.io vs SleekFlow — a Malaysian Alternative | Phyto Link Venture",
  description:
    "Comparing ChatBranch with respond.io and SleekFlow for Malaysian businesses: channels, AI replies in BM and Chinese, Shopee/Lazada/TikTok Shop chats, WhatsApp options, setup and how each one charges.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "ChatBranch vs respond.io vs SleekFlow",
    description: "How to choose a WhatsApp and multi-channel inbox with AI in Malaysia.",
    url: PATH,
    type: "article",
  },
};

const differences = [
  {
    title: "Built and supported in Malaysia",
    body: "ChatBranch is made by Phyto Link Venture in Klang, Selangor. Support is on WhatsApp with a local team, and the AI replies in English, Bahasa Malaysia or Chinese out of the box.",
  },
  {
    title: "Set up for you",
    body: "We connect your WhatsApp, email and social accounts, load your knowledge base and write your AI persona and house rules with you. You start in review mode and switch the AI to automatic when you trust it.",
  },
  {
    title: "Marketplace chats in the same inbox",
    body: "Shopee, Lazada and TikTok Shop buyer chats arrive next to WhatsApp, Instagram and email, so e-commerce sellers answer everything from one place.",
  },
  {
    title: "Two ways to connect WhatsApp",
    body: "Use Meta's official WhatsApp Cloud API (directly, or through Twilio or YCloud), or link a number you already use by QR code and keep its chat history. You can run both side by side.",
  },
  {
    title: "AI voice calls and voice cloning",
    body: "The same AI can make and answer phone calls with a live transcript your staff can guide or take over, and reply with voice notes in a cloned voice.",
  },
  {
    title: "Branches and separate companies",
    body: "Run several outlets or companies from one account, each with its own inbox, staff, AI rules and monthly AI usage cap — staff only see their own outlet's customers.",
  },
  {
    title: "Open to your AI tools",
    body: "Every ChatBranch feature is available through an MCP server with sign-in, so Claude and other AI assistants can search chats, reply and book on your behalf, plus a REST API.",
  },
];

const chooseIf = [
  {
    name: "ChatBranch",
    points: [
      "You are a Malaysian SME and want the setup done for you",
      "Customers write in BM, Chinese and English",
      "You sell on Shopee, Lazada or TikTok Shop as well as WhatsApp",
      "You have several outlets or run more than one company",
      "You want AI phone calls as well as chat",
    ],
  },
  {
    name: "respond.io",
    points: [
      "You want a self-serve global platform with a large integration catalogue",
      "Your team is comfortable configuring workflows yourselves",
      "Pricing by monthly active contacts suits your volume",
    ],
    url: "https://respond.io/pricing",
  },
  {
    name: "SleekFlow",
    points: [
      "You want a self-serve platform with broadcast and social commerce tools",
      "You operate across several Asia-Pacific markets",
      "Pricing by users and contacts suits your team",
    ],
    url: "https://sleekflow.io/pricing",
  },
];

const faqs = [
  {
    q: "Is ChatBranch a respond.io or SleekFlow alternative for Malaysia?",
    a: "Yes. ChatBranch covers the same core job — one shared inbox for WhatsApp, Instagram, Messenger, email and website chat with an AI that answers customers — and adds Shopee, Lazada and TikTok Shop chats, AI voice calls and a local Malaysian team that sets it up for you.",
  },
  {
    q: "How is ChatBranch priced compared with respond.io and SleekFlow?",
    a: "respond.io and SleekFlow publish self-serve plans that charge by seats and monthly active contacts, with WhatsApp's own message fees on top. ChatBranch is quoted per business after a free 15-minute demo, based on the channels you connect, your team size and your AI usage, and includes setup. Always check each vendor's current pricing page.",
  },
  {
    q: "Can I move from respond.io or SleekFlow to ChatBranch?",
    a: "Yes. Contacts can be imported from CSV or Excel, and an official WhatsApp Business number can be moved to ChatBranch's WhatsApp Cloud API connection. We help with the move as part of setup.",
  },
  {
    q: "Does ChatBranch use the official WhatsApp Business API?",
    a: "Yes — Meta's WhatsApp Cloud API, directly or through Twilio or YCloud. Linking an existing number by QR code is also available; that uses WhatsApp's companion-device feature, which is not an official Meta API.",
  },
];

export default function ComparePage() {
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "ChatBranch vs respond.io vs SleekFlow — a Malaysian alternative",
      description: metadata.description,
      url: `${SITE_URL}${PATH}`,
      dateModified: REVIEWED,
      author: { "@id": `${SITE_URL}/#org` },
      publisher: { "@id": `${SITE_URL}/#org` },
      about: { "@id": `${SITE_URL}/chatbranch#software` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "ChatBranch", item: `${SITE_URL}/chatbranch` },
        { "@type": "ListItem", position: 3, name: "vs respond.io & SleekFlow", item: `${SITE_URL}${PATH}` },
      ],
    },
  ];

  return (
    <div className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(ld)} />

      <section className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-purple-200 mb-4">
            <Link href="/chatbranch" className="hover:text-white">ChatBranch</Link> › Comparison
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">ChatBranch vs respond.io vs SleekFlow</h1>
          <p className="text-xl text-purple-100">
            All three give your team one inbox for WhatsApp and social messages with AI help. Here is
            what ChatBranch does differently, and when each one is the better fit for a Malaysian business.
          </p>
          <p className="mt-4 text-sm text-purple-200">Last reviewed {REVIEWED}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The short answer</h2>
          <p className="text-lg text-gray-700">
            <strong>ChatBranch</strong> is a multi-channel inbox with an AI agent, built in Malaysia and set up
            for you, that also handles Shopee, Lazada and TikTok Shop chats and AI phone calls.{" "}
            <strong>respond.io</strong> and <strong>SleekFlow</strong> are established self-serve platforms sold
            across many countries, priced by seats and monthly active contacts. If you want a local team to set it
            up and support you in BM, Chinese and English, ChatBranch is the closer fit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What ChatBranch does differently</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {differences.map((d) => (
              <div key={d.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-gray-600">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Which one should you choose?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {chooseIf.map((c) => (
              <div key={c.name} className={`p-6 rounded-2xl border ${c.name === "ChatBranch" ? "border-indigo-400 bg-indigo-50" : "border-gray-200 bg-white"}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Choose {c.name} if…</h3>
                <ul className="space-y-2 text-gray-700">
                  {c.points.map((p) => <li key={p}>• {p}</li>)}
                </ul>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer nofollow" className="mt-4 inline-block text-sm text-indigo-600 hover:underline">
                    {c.name} pricing ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <summary className="cursor-pointer font-semibold text-gray-900 text-lg">{f.q}</summary>
                <p className="mt-4 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">
            respond.io and SleekFlow are trademarks of their owners. This page reflects their public websites as
            of {REVIEWED}; check their pricing pages for current details.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">See ChatBranch with your own channels</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition">Book Free Demo</Link>
            <a href={`${ORG.whatsapp}?text=Hi%2C%20I%27m%20comparing%20ChatBranch`} className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
