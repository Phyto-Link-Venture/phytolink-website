/**
 * ChatBranch "What's new" changelog.
 *
 * To add an update, put a new object at the TOP of the list:
 *   - date:       "YYYY-MM-DD" (the day it went live)
 *   - slug:       short unique id, used as the #anchor on /chatbranch/updates
 *   - tag:        "New" | "Improved" | "AI" | "Channels" | "Mobile" | "Security"
 *   - title:      a short headline, customer language (no commit-speak)
 *   - summary:    one or two sentences on what it means for the business
 *   - highlights: optional bullet points
 * The list is sorted by date (newest first) when it is read, so order is forgiving.
 */

export type UpdateTag = "New" | "Improved" | "AI" | "Channels" | "Mobile" | "Security";

export interface ChatBranchUpdate {
  date: string;
  slug: string;
  tag: UpdateTag;
  title: string;
  summary: string;
  highlights?: string[];
}

const updates: ChatBranchUpdate[] = [
  {
    date: "2026-11-10",
    slug: "group-chats",
    tag: "Channels",
    title: "Group chats in the shared inbox",
    summary:
      "WhatsApp, Telegram and LINE groups now arrive in the same inbox as your one-to-one chats, so your team can follow and answer group conversations without picking up a phone.",
    highlights: [
      "A Group badge on each group chat, and every message shows which member sent it",
      "The AI stays off in groups unless you switch it on — and then only replies when it is mentioned or replied to",
      "Group chats are kept out of journeys, automations and follow-ups, so customers never get a broadcast meant for one person",
    ],
  },
  {
    date: "2026-11-10",
    slug: "persona-rules-redesign",
    tag: "AI",
    title: "Redesigned Persona & rules page",
    summary:
      "Shaping how your AI talks is now simpler. The Persona & rules page has been rebuilt so the AI's personality, tone and house rules are easier to read, edit and keep consistent across your outlets.",
    highlights: [
      "A two-column layout with a live preview of exactly what the AI will be told",
      "For each branch, choose to inherit the rules or write its own",
      "Jump straight to any section, with character counts and unsaved-change markers",
    ],
  },
  {
    date: "2026-11-09",
    slug: "voice-cloning",
    tag: "AI",
    title: "Voice cloning for AI voice notes and calls",
    summary:
      "Give your AI your own voice. Upload a few recordings and ChatBranch builds a cloned voice that can be used for AI voice-note replies and AI phone calls.",
    highlights: [
      "Use several recordings per voice for a more natural result — even a voice note from a chat",
      "Choose a cloned voice as the default voice for your business",
      "Option to run voice generation on a self-hosted voice engine",
      "Cloning always asks for confirmation that you have the speaker's consent",
    ],
  },
  {
    date: "2026-11-08",
    slug: "mobile-app",
    tag: "Mobile",
    title: "ChatBranch phone app and push notifications",
    summary:
      "Answer customers on the go. ChatBranch now has a phone app for iOS and Android, and notifications reach your phone or browser even when ChatBranch is closed.",
    highlights: [
      "Real push notifications for new chats and hand-overs",
      "Each person chooses which notifications they want",
      "The app updates itself whenever ChatBranch improves — no store update needed",
    ],
  },
  {
    date: "2026-11-08",
    slug: "whatsapp-link-by-phone",
    tag: "Channels",
    title: "Link a WhatsApp number with a code — and bring its chats along",
    summary:
      "Connecting a WhatsApp number no longer needs a second device to scan a QR code: link it by entering a pairing code on the phone, and its existing chats are imported into ChatBranch.",
  },
  {
    date: "2026-11-08",
    slug: "media-library-stickers",
    tag: "New",
    title: "Media library, stickers and sign-in for AI apps",
    summary:
      "Upload a price list, photo or brochure once and send it again from the dashboard, the phone app or the AI. You can now also send real WhatsApp stickers, and connect Claude or other AI apps to ChatBranch just by signing in.",
  },
  {
    date: "2026-11-04",
    slug: "email-sync-server",
    tag: "Improved",
    title: "Email stays in sync around the clock",
    summary:
      "Connected mailboxes now sync on our servers continuously, so new emails appear in the inbox — and the AI can answer them — even when nobody has ChatBranch open.",
  },
  {
    date: "2026-10-30",
    slug: "marketplace-chat",
    tag: "Channels",
    title: "Marketplace buyer chat and richer WhatsApp messages",
    summary:
      "Buyer messages from Shopee, Lazada and TikTok Shop can now be answered from the unified inbox. WhatsApp also gained locations, contact cards, polls, forwarding, voice notes, editing and delete-for-everyone.",
  },
  {
    date: "2026-10-16",
    slug: "email-and-attachments",
    tag: "Improved",
    title: "Emails that look like email, and AI that reads attachments",
    summary:
      "Emails in the inbox now look like they do in your mail app, forwards keep their full content, and the AI can read Word, Excel, PowerPoint and even scanned PDF attachments.",
  },
  {
    date: "2026-10-13",
    slug: "bookings-calendar",
    tag: "New",
    title: "A real bookings calendar with meeting links",
    summary:
      "Bookings now open on a Month, Week and Day calendar of every appointment, with Google Calendar as an optional layer. Each booking can come with a Zoom or Google Meet link.",
    highlights: [
      "Bookings of variable length (e.g. 2 × 30 minutes)",
      "Automatic appointment reminders with a \"Before a booking\" journey trigger",
      "The AI confirms times naturally, once, like a person would",
    ],
  },
  {
    date: "2026-10-12",
    slug: "ai-answers-in-parts",
    tag: "AI",
    title: "The AI answers every question — each in its own reply",
    summary:
      "When a customer asks several things at once, the AI now answers each topic in a separate bubble that quotes the message it is answering, just like a careful human agent.",
  },
  {
    date: "2026-10-11",
    slug: "voice-notes-security",
    tag: "Security",
    title: "Voice-note replies, photo understanding and two-step sign-in",
    summary:
      "The AI can now listen to customers' voice notes, look at the photos they send, and reply with voice notes of its own. Accounts are better protected with two-step sign-in and automatic lockouts after repeated failed sign-ins.",
  },
];

/** All updates, newest first. */
export function getUpdates(): ChatBranchUpdate[] {
  return [...updates].sort((a, b) => b.date.localeCompare(a.date));
}

/** The newest `count` updates. */
export function getLatestUpdates(count = 3): ChatBranchUpdate[] {
  return getUpdates().slice(0, count);
}

/** "10 November 2026" */
export function formatUpdateDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
