import { CHATBRANCH_APP_URL, ORG, SITE_URL, TOOLS } from "@/lib/site";
import { getUpdates } from "@/data/chatbranch-updates";
import { CHATBRANCH_FAQS } from "@/data/chatbranch-faqs";

// llms.txt (https://llmstxt.org): a plain-Markdown summary for AI assistants.
// Built from the same data as the site so it never drifts.
export const dynamic = "force-static";

export function GET() {
  const updates = getUpdates().slice(0, 8);
  const body = `# ${ORG.name}

> ${ORG.name} is a Malaysian software company (SSM ${ORG.legalId}, Klang, Selangor) that builds ChatBranch, a multi-channel customer conversation platform with an AI that answers customers, plus an IoT monitoring system and free online tools.

## ChatBranch

ChatBranch puts every customer conversation into one shared inbox for a team: WhatsApp, email, Facebook Messenger, Instagram, Telegram, LINE, Viber, SMS, WeChat, Zalo and website live chat. Shopee, Lazada and TikTok Shop buyer chats can also arrive in the same inbox.

Key facts:
- AI agent answers customers 24/7 on every channel, in English, Bahasa Malaysia or Chinese, using the business's own persona, house rules and knowledge base (price lists, FAQs, documents).
- The AI hands over to a human when needed; replies can be sent automatically, reviewed when risky, all reviewed, or run in shadow mode.
- The AI learns from staff feedback: thumbs up/down, edits and rejections become lessons a manager approves.
- Bookings: the AI offers free slots, books, reschedules and cancels on Google Calendar or ChatBranch's own calendar, with optional Zoom or Google Meet links.
- Journeys and automations for follow-ups, reminders and hand-overs.
- AI voice calls (inbound and outbound) with live transcript, voice-note replies and voice cloning.
- Contacts/CRM with one record per customer across channels; import from CSV, Excel, phone or Google Contacts.
- Multi-branch and multi-company: teams, round-robin assignment, role-based permissions, per-outlet visibility.
- Analytics, CSV reports, AI usage caps per company or branch, and a full activity log.
- iOS and Android phone app with push notifications.
- WhatsApp: official WhatsApp Cloud API (direct or via Twilio/YCloud), or linking an existing number by QR code (companion device, not an official Meta API).
- Developers: an MCP server with OAuth sign-in exposing every dashboard feature to AI apps such as Claude, plus a REST API with API keys; integrations with Google, Shopify and Stripe.
- Suits clinics and wellness, retail and e-commerce, property and services, F&B and hospitality.
- Price: from RM100 per month (depends on channels, team size and AI usage; setup included; Meta's WhatsApp message fees billed separately where they apply).
- Onboarding: free 15-minute demo, then the team connects the channels and sets up the AI for the customer.

- [ChatBranch product page](${SITE_URL}/chatbranch): features, WhatsApp options, industries
- [What's new in ChatBranch](${SITE_URL}/chatbranch/updates): dated changelog
- [ChatBranch vs respond.io vs SleekFlow](${SITE_URL}/chatbranch/respond-io-sleekflow-alternative): how ChatBranch differs and when each fits
- [ChatBranch user manual](${CHATBRANCH_APP_URL}/help/manual): every feature step by step, troubleshooting, glossary
- [ChatBranch help centre](${CHATBRANCH_APP_URL}/help): help articles
- [ChatBranch app](${CHATBRANCH_APP_URL}): sign in

## Frequently asked questions

${CHATBRANCH_FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Recent ChatBranch updates

${updates.map((u) => `- ${u.date}: ${u.title}. ${u.summary}`).join("\n")}

## Free tools

${Object.entries(TOOLS).map(([slug, t]) => `- [${t.name}](${SITE_URL}/tools/${slug}): ${t.description}`).join("\n")}

## Other

- [IoT System](${SITE_URL}/iot-system): ThingsBoard-based device monitoring, dashboards, alerts, REST API and MQTT (coming soon)

## Contact

- Free demo: ${SITE_URL}/contact
- WhatsApp: ${ORG.whatsapp} (+60 11-3319 9692)
- Email: ${ORG.email}
- Address: ${Object.values(ORG.address).slice(0, 4).join(", ")}, Malaysia

## Optional

- [Terms & Conditions](${SITE_URL}/terms)
- [Privacy Policy](${SITE_URL}/privacy)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
