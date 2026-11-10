import Link from "next/link";
import { formatUpdateDate, type ChatBranchUpdate, type UpdateTag } from "@/data/chatbranch-updates";

const tagStyles: Record<UpdateTag, string> = {
  New: "bg-green-100 text-green-800",
  Improved: "bg-blue-100 text-blue-800",
  AI: "bg-purple-100 text-purple-800",
  Channels: "bg-indigo-100 text-indigo-800",
  Mobile: "bg-orange-100 text-orange-800",
  Security: "bg-gray-200 text-gray-800",
};

export function UpdateTagBadge({ tag }: { tag: UpdateTag }) {
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[tag]}`}>
      {tag}
    </span>
  );
}

/** Compact card used on the ChatBranch page and the home page. */
export default function UpdateCard({ update }: { update: ChatBranchUpdate }) {
  return (
    <Link
      href={`/chatbranch/updates#${update.slug}`}
      className="group block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition h-full"
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <time dateTime={update.date} className="text-sm text-gray-500">
          {formatUpdateDate(update.date)}
        </time>
        <UpdateTagBadge tag={update.tag} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition">
        {update.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{update.summary}</p>
    </Link>
  );
}
