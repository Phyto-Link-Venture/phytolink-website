import type { Metadata } from "next";
import Link from "next/link";
import { UpdateTagBadge } from "@/components/chatbranch/UpdateCard";
import { formatUpdateDate, getUpdates, type ChatBranchUpdate } from "@/data/chatbranch-updates";

export const metadata: Metadata = {
  title: "What's New in ChatBranch — Product Updates | Phyto Link Venture",
  description:
    "The latest ChatBranch features and improvements: group chats, voice cloning, the phone app, bookings, marketplace chat and more.",
  alternates: { canonical: "/chatbranch/updates" },
  openGraph: {
    title: "What's new in ChatBranch",
    description: "The latest ChatBranch features and improvements, newest first.",
    url: "/chatbranch/updates",
    type: "website",
  },
};

function monthLabel(date: string): string {
  const [y, m] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function groupByMonth(updates: ChatBranchUpdate[]) {
  const groups: { month: string; items: ChatBranchUpdate[] }[] = [];
  for (const u of updates) {
    const month = monthLabel(u.date);
    const last = groups[groups.length - 1];
    if (last && last.month === month) last.items.push(u);
    else groups.push({ month, items: [u] });
  }
  return groups;
}

export default function ChatBranchUpdatesPage() {
  const groups = groupByMonth(getUpdates());

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ ChatBranch Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What&apos;s New in ChatBranch</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            New features and improvements, newest first. ChatBranch updates automatically — there is
            nothing to install.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/chatbranch" className="inline-block text-indigo-600 font-semibold hover:underline mb-10">
            ← Back to ChatBranch
          </Link>

          {groups.map((group) => (
            <div key={group.month} className="mb-12">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-6">
                {group.month}
              </h2>
              <ol className="relative border-l-2 border-indigo-200 ml-2 space-y-8">
                {group.items.map((u) => (
                  <li key={u.slug} id={u.slug} className="relative pl-6 sm:pl-8 scroll-mt-24">
                    <span
                      className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-gray-50"
                      aria-hidden="true"
                    />
                    <article className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <time dateTime={u.date} className="text-sm text-gray-500">
                          {formatUpdateDate(u.date)}
                        </time>
                        <UpdateTagBadge tag={u.tag} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        <a href={`#${u.slug}`} className="hover:text-indigo-700 transition">
                          {u.title}
                        </a>
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{u.summary}</p>
                      {u.highlights && u.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 text-gray-600">
                          {u.highlights.map((h) => (
                            <li key={h} className="flex items-start">
                              <span className="text-indigo-500 mr-3 mt-0.5" aria-hidden="true">✅</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to see these in action?</h2>
          <p className="text-gray-600 mb-6">Book a free 15-minute demo and we&apos;ll walk you through ChatBranch.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Book Free Demo
            </Link>
            <Link
              href="/chatbranch"
              className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Explore ChatBranch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
