import type { Metadata } from "next";
import Link from "next/link";
import VideoShowcase from "@/components/chatbranch/VideoShowcase";
import UpdateCard from "@/components/chatbranch/UpdateCard";
import { getLatestUpdates } from "@/data/chatbranch-updates";

const APP_URL = "https://chatbranch.phytolink-venture.com";
const WHATSAPP_URL = "https://wa.me/601133199692?text=Hi%2C%20I%27m%20interested%20in%20ChatBranch";

export const metadata: Metadata = {
  title: "ChatBranch — One Inbox for WhatsApp, Email & Social, with AI | Phyto Link Venture",
  description:
    "ChatBranch brings WhatsApp, email, Messenger, Instagram, Telegram, LINE, Viber, SMS, WeChat, Zalo and website chat into one shared inbox, with an AI that answers customers, journeys, bookings and AI voice calls. Built in Malaysia.",
  alternates: { canonical: "/chatbranch" },
  openGraph: {
    title: "ChatBranch — every customer conversation in one inbox",
    description:
      "One inbox for WhatsApp, email, social and website chat, an AI that answers your customers, journeys, bookings and AI voice calls.",
    url: "/chatbranch",
    type: "website",
  },
};

const channels = [
  { name: "WhatsApp", icon: "🟢" },
  { name: "Email", icon: "📧" },
  { name: "Messenger", icon: "💬" },
  { name: "Instagram", icon: "📸" },
  { name: "Telegram", icon: "✈️" },
  { name: "LINE", icon: "🟩" },
  { name: "Viber", icon: "🟣" },
  { name: "SMS", icon: "📱" },
  { name: "WeChat", icon: "🗨️" },
  { name: "Zalo", icon: "🔵" },
  { name: "Website chat", icon: "🌐" },
];

const features = [
  {
    icon: "📥",
    title: "One Shared Inbox",
    body: "Every chat from every channel in one list. Assign to teammates, add labels and private notes, save your own views, and see photos, voice notes, videos and documents right in the conversation.",
    bg: "from-green-50 to-emerald-50",
  },
  {
    icon: "🤖",
    title: "AI That Answers Customers",
    body: "Your AI replies 24/7 in your own tone, using your knowledge base and house rules. It hands over to a person when it should — and you can review replies before they are sent.",
    bg: "from-indigo-50 to-purple-50",
  },
  {
    icon: "🧭",
    title: "Journeys & Automations",
    body: "Build follow-ups, reminders and hand-overs as simple step lists. Wait for a reply, check a condition or let the AI decide which path to take. Automations handle the routine rules.",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    icon: "📅",
    title: "Bookings with Google Calendar",
    body: "The AI offers free times, books, reschedules and cancels — on Google Calendar or ChatBranch's own calendar — and can attach a Zoom or Google Meet link. Every appointment on one calendar.",
    bg: "from-orange-50 to-yellow-50",
  },
  {
    icon: "📞",
    title: "AI Voice Calls & Voice Cloning",
    body: "Let the AI make and answer phone calls with a live transcript you can guide, take over or end. Reply with voice notes, and clone your own voice for a personal touch.",
    bg: "from-red-50 to-rose-50",
  },
  {
    icon: "👥",
    title: "Contacts & CRM",
    body: "One record per customer across every channel. Import from CSV, Excel, phone contacts or Google Contacts, with tags, custom fields, a full conversation timeline and AI summaries.",
    bg: "from-teal-50 to-cyan-50",
  },
  {
    icon: "🏢",
    title: "Teams, Roles & Outlets",
    body: "Run several branches or companies from one account. Teams with round-robin assignment, role-based permissions, and staff who only see their own outlet's customers.",
    bg: "from-purple-50 to-pink-50",
  },
  {
    icon: "📊",
    title: "Analytics & Activity Log",
    body: "A live dashboard, reports with CSV export, AI usage per company or branch with monthly caps, and an activity log of who did what — from the dashboard, the app or the API.",
    bg: "from-green-50 to-teal-50",
  },
  {
    icon: "📲",
    title: "Phone App",
    body: "Answer customers on the go with the ChatBranch app for iOS and Android, with push notifications for new chats and hand-overs. Or install it straight from your browser.",
    bg: "from-blue-50 to-cyan-50",
  },
];

const aiPoints = [
  { title: "Persona & house rules", body: "Set the AI's name, tone and the rules it must always follow — per business or per outlet." },
  { title: "Knowledge base", body: "Upload price lists, FAQs and documents. The AI answers from your facts, not guesses." },
  { title: "Skills", body: "Ready-made skills for bookings, PDF quotations and invoices, payment links and more — or describe a new one in plain words." },
  { title: "Human hand-off", body: "When a customer needs a person, the AI hands over and the chat appears in \"Needs human\"." },
  { title: "Review before sending", body: "Send automatically, review risky replies, review everything, or run in shadow mode while you build trust." },
  { title: "Learns from your team", body: "Every 👍, 👎, edit or rejection becomes a suggested lesson a manager can approve." },
];

const industries = [
  {
    icon: "🦷",
    title: "Clinics & Wellness",
    points: [
      "Answer patient enquiries on WhatsApp 24/7",
      "Book, reschedule and remind appointments automatically",
      "Hand urgent cases straight to front-desk staff",
      "Separate inboxes and staff per branch",
    ],
  },
  {
    icon: "🛍️",
    title: "Retail & E-commerce",
    points: [
      "Answer product and delivery questions instantly",
      "Shopee, Lazada and TikTok Shop buyer chats in the same inbox",
      "Send catalogues, photos and PDF quotations from the chat",
      "Follow up when a customer goes quiet",
    ],
  },
  {
    icon: "🏢",
    title: "Property & Services",
    points: [
      "Qualify enquiries from every channel in one place",
      "Book viewings and site visits on your calendar",
      "AI phone calls for reminders and follow-ups",
      "Track every conversation per agent",
    ],
  },
  {
    icon: "🍽️",
    title: "F&B & Hospitality",
    points: [
      "Take reservations and pre-orders through chat",
      "Answer opening hours, menu and location questions",
      "Reply in English, Bahasa Malaysia or Chinese",
      "Manage several outlets from one dashboard",
    ],
  },
];

export default function ChatBranchPage() {
  const latest = getLatestUpdates(3);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💬 ChatBranch — Multi-Channel Conversation Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Every Customer Chat.<br />
            <span className="text-purple-200">One Inbox. One AI.</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            WhatsApp, email, Messenger, Instagram, Telegram, LINE and more — answered by your team
            and an AI that knows your business, around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition"
            >
              Book Free Demo
            </Link>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition"
            >
              Open ChatBranch ↗
            </a>
          </div>
          <p className="mt-4 text-purple-200 text-sm">
            Free 15-minute demo • Set up for you •{" "}
            <Link href="/chatbranch/updates" className="underline hover:text-white">
              See what&apos;s new
            </Link>
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 font-semibold uppercase tracking-wide text-sm mb-6">
            All your channels, one inbox
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {channels.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-gray-700 text-sm font-medium"
              >
                <span aria-hidden="true">{c.icon}</span>
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* See it in action (renders nothing until the videos are added) */}
      <VideoShowcase />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Team Needs to Talk to Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Replace the pile of phones, apps and spreadsheets with one place your whole team works from.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className={`bg-gradient-to-br ${f.bg} p-8 rounded-2xl`}>
                <div className="text-4xl mb-4" aria-hidden="true">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI deep dive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🤖 The ChatBranch AI
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                An AI Agent You Stay in Control Of
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The same AI answers on every channel, speaks like your best staff member, and always
                knows when to pass the conversation to a person.
              </p>
              <ul className="grid sm:grid-cols-2 gap-6">
                {aiPoints.map((p) => (
                  <li key={p.title}>
                    <h3 className="font-bold text-gray-900 mb-1">
                      <span className="text-indigo-500 mr-2" aria-hidden="true">✅</span>
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{p.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustrative mock-up */}
            <div className="bg-white rounded-xl shadow-xl p-6" aria-hidden="true">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Chat · WhatsApp</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">AI on</span>
              </div>
              <div className="space-y-3">
                <div className="max-w-[80%] bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-4 py-2">
                  Hi, can I book a cleaning this Saturday morning?
                </div>
                <div className="max-w-[80%] ml-auto bg-indigo-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2">
                  Of course! Saturday has 9:30 AM or 11:00 AM free. Which works better for you?
                </div>
                <div className="max-w-[80%] bg-gray-100 text-gray-800 text-sm rounded-2xl rounded-tl-sm px-4 py-2">
                  11 please
                </div>
                <div className="max-w-[80%] ml-auto bg-indigo-50 border border-dashed border-indigo-300 text-indigo-900 text-sm rounded-2xl rounded-tr-sm px-4 py-2">
                  Done — you&apos;re booked for Saturday at 11:00 AM. See you then! 😊
                  <div className="mt-2 text-xs text-indigo-600 font-semibold">⏸ Waiting for review · 📅 1 booking</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500">Knowledge</div>
                  <div className="text-sm font-semibold text-gray-900">3 sources</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500">Skill</div>
                  <div className="text-sm font-semibold text-gray-900">Bookings</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500">Checks</div>
                  <div className="text-sm font-semibold text-green-600">Passed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Two Ways to Connect WhatsApp
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use the official API, link an existing number, or run both side by side.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-3xl mb-3" aria-hidden="true">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Official WhatsApp Cloud API</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Meta&apos;s official business platform</li>
                <li>✅ Approved message templates for reminders and updates</li>
                <li>✅ Best for higher volumes and long-term stability</li>
                <li>✅ Also available through providers such as Twilio and YCloud</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-3xl mb-3" aria-hidden="true">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Link Your Existing Number</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Link a number you already use by QR code or pairing code</li>
                <li>✅ Your existing chats come along when you link</li>
                <li>✅ Voice notes, stickers, polls and WhatsApp calls</li>
                <li>✅ Replies typed on the phone show up in ChatBranch</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Linked numbers use WhatsApp&apos;s companion-device feature, which is not an official
                Meta API. See our{" "}
                <Link href="/terms#unofficial-whatsapp" className="text-indigo-600 hover:underline">
                  Terms
                </Link>{" "}
                before you choose it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built For Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ChatBranch is configured, not coded — the same platform adapts to how your business works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-3xl mb-3" aria-hidden="true">{ind.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{ind.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {ind.points.map((p) => (
                    <li key={p}>✅ {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🧩 For Developers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                MCP Server & API
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Every ChatBranch feature is available as a tool for AI apps through our MCP server — connect
                Claude or any MCP client simply by signing in. Your own systems can send messages,
                files and one-time codes through the REST API with API keys.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="text-indigo-500 mr-3">✅</span>MCP server with sign-in (OAuth) — no keys to copy</li>
                <li className="flex items-center"><span className="text-indigo-500 mr-3">✅</span>REST API and API keys with your permissions</li>
                <li className="flex items-center"><span className="text-indigo-500 mr-3">✅</span>Transactional messages with WhatsApp template fallback</li>
                <li className="flex items-center"><span className="text-indigo-500 mr-3">✅</span>Google, Shopify and Stripe integrations</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-xl shadow-xl p-6 font-mono text-sm text-gray-100 overflow-x-auto" aria-hidden="true">
              <div className="text-gray-500 mb-2"># Ask your AI assistant</div>
              <div className="text-green-400 mb-4">
                &gt; &quot;Which customers asked about delivery today and still need a reply?&quot;
              </div>
              <div className="text-gray-500 mb-2"># ChatBranch MCP tools it can use</div>
              <div>conversations_search</div>
              <div>conversations_list_needing_human</div>
              <div>send_message</div>
              <div>bookings_check_availability</div>
              <div className="text-gray-500">…and every other dashboard feature</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's new */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">What&apos;s New</h2>
              <p className="text-xl text-gray-600">ChatBranch improves every week.</p>
            </div>
            <Link href="/chatbranch/updates" className="text-indigo-600 font-semibold hover:underline">
              See all updates →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latest.map((u) => (
              <UpdateCard key={u.slug} update={u} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Steps
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Free Demo</h3>
                <p className="text-gray-600">A 15-minute call where we show you how ChatBranch fits your business. No obligation.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Connect Your Channels</h3>
                <p className="text-gray-600">Our team connects your WhatsApp, email and social accounts, loads your knowledge base and sets up your AI persona and rules.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Your Team and AI Go Live</h3>
                <p className="text-gray-600">Start in review mode, approve the AI&apos;s replies while it learns, then let it handle the routine questions on its own.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Bring Every Conversation Together?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Talk to us about your channels and we&apos;ll show you ChatBranch working for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition"
            >
              WhatsApp Us Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition"
            >
              Book Free Demo
            </Link>
          </div>
          <p className="mt-6 text-purple-200 text-sm">
            📞 +60 11-3319 9692 • phytolinkventure@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
