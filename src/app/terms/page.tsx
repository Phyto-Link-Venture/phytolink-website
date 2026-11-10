import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Placeholder, type LegalSection } from "@/components/legal/LegalPage";

const EFFECTIVE_DATE = "10 November 2026";
const EMAIL = "phytolinkventure@gmail.com";

export const metadata: Metadata = {
  title: "Terms & Conditions | Phyto Link Venture",
  description:
    "The terms that apply to Phyto Link Venture's Services, including ChatBranch: acceptable use, messaging rules, AI output, fees, termination, liability and governing law (Malaysia).",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms & Conditions — Phyto Link Venture", url: "/terms", type: "article" },
};

const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    content: (
      <>
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;) are an agreement between you and{" "}
          <strong>Phyto Link Venture</strong> (SSM registration no.{" "}
          <Placeholder>[Company registration no.]</Placeholder>, address{" "}
          <Placeholder>[Registered business address]</Placeholder>) (&quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;). They govern your use of our website, <strong>ChatBranch</strong> (including its
          dashboard, phone app, website chat widget, API and MCP server), our IoT System, and related setup and
          support services (the &quot;Services&quot;).
        </p>
        <p>
          By signing up, accessing or using the Services you agree to these Terms and to our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you use the Services for an organisation, you confirm
          you are authorised to bind it, and &quot;you&quot; means that organisation (the
          &quot;Customer&quot;). If a signed quotation, order form or agreement with us conflicts with these
          Terms, that document prevails for the matters it covers.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and access",
    content: (
      <ul>
        <li>You must be at least 18 and provide accurate account information.</li>
        <li>You are responsible for everyone you invite to your account, the roles and access you give them, and all activity under your account, API keys and connections.</li>
        <li>Keep passwords and API keys confidential, use two-step sign-in where available, and tell us promptly at <Mail /> if you suspect unauthorised access.</li>
      </ul>
    ),
  },
  {
    id: "services",
    title: "The Services",
    content: (
      <>
        <p>
          ChatBranch lets you connect messaging channels (such as WhatsApp, email, Messenger, Instagram,
          Telegram, LINE, Viber, SMS, WeChat, Zalo and website chat), manage contacts, use AI to reply to
          customers, run journeys and automations, take bookings, make AI voice calls and integrate with other
          software. Features depend on your configuration, the channels you connect and the third-party
          platforms involved.
        </p>
        <p>
          We continuously improve the Services and may add, change or remove features. If we remove a feature
          that is material to your subscription, we will give you reasonable notice. Recent changes are listed
          on <Link href="/chatbranch/updates">What&apos;s new</Link>.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>You must not use the Services to:</p>
        <ul>
          <li>Send spam, bulk unsolicited messages or cold messages to people who have not agreed to hear from you, or buy or scrape contact lists for messaging.</li>
          <li>Ignore opt-outs: when someone replies STOP or otherwise asks not to be contacted, you must stop messaging them for marketing.</li>
          <li>Send unlawful, misleading, fraudulent, defamatory, harassing, hateful or sexually explicit content, or content that infringes others&apos; rights.</li>
          <li>Phish, distribute malware, impersonate others, or collect sensitive data (such as passwords or full card numbers) through chat.</li>
          <li>Offer goods or services prohibited by law or by the policies of the channels you use.</li>
          <li>Target children or process their data without the consent required by law.</li>
          <li>Clone or imitate a person&apos;s voice without that person&apos;s clear consent, or use AI calls or voices to deceive people.</li>
          <li>Probe, overload or attack the Services, bypass limits or security, or reverse-engineer them except where the law allows.</li>
          <li>Resell the Services or use them to build a competing product without our written agreement.</li>
        </ul>
        <p>We may remove content, pause sending, or suspend accounts that break these rules.</p>
      </>
    ),
  },
  {
    id: "messaging-policies",
    title: "Channel and messaging policies",
    content: (
      <>
        <p>
          Each channel has its own rules, and you must follow them for every account you connect, including the{" "}
          <a href="https://business.whatsapp.com/policy">WhatsApp Business Messaging Policy</a> and{" "}
          <a href="https://www.whatsapp.com/legal/commerce-policy">WhatsApp Commerce Policy</a>, Meta&apos;s
          Platform Terms and Messenger/Instagram messaging policies, and the terms of Telegram, LINE, Viber,
          WeChat, Zalo, TikTok, marketplaces, SMS carriers and email providers.
        </p>
        <ul>
          <li>Respect messaging windows (such as WhatsApp&apos;s 24-hour customer-service window) and use approved templates where required. ChatBranch applies some of these guards automatically, but compliance remains your responsibility.</li>
          <li>Platforms may limit, review, suspend or ban your numbers, pages or accounts at their discretion. We are not responsible for platform decisions, outages or policy changes, or for fees charged by platforms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    title: "Your responsibilities for your customers' data",
    content: (
      <>
        <p>
          You are the controller (data user) of the personal data of your own customers and contacts that you
          bring into or collect through ChatBranch, and we process it on your behalf. You are responsible for:
        </p>
        <ul>
          <li>Having a lawful basis and any required <strong>consent</strong> to collect your contacts&apos; data, to message them on each channel, to record calls, and to let AI respond to them.</li>
          <li>Telling your customers, in your own privacy notice, that you use ChatBranch and AI providers to handle their messages, and that calls may be recorded or answered by AI where that is the case.</li>
          <li>Handling your customers&apos; requests to access, correct or delete their data (we will help you as described in our <Link href="/privacy#data-deletion">Privacy Policy</Link>).</li>
          <li>Complying with the Personal Data Protection Act 2010 and any other privacy, consumer-protection, anti-spam and telemarketing laws that apply to you.</li>
        </ul>
      </>
    ),
  },
  {
    id: "unofficial-whatsapp",
    title: "Linked (QR) WhatsApp numbers — risk notice",
    content: (
      <>
        <p>
          Besides the official WhatsApp Business Platform (Cloud API), ChatBranch can link an ordinary WhatsApp
          or WhatsApp Business app number using WhatsApp&apos;s linked-device feature, by QR code or pairing
          code. This connection is <strong>not an official Meta API</strong> and is not endorsed by WhatsApp or
          Meta.
        </p>
        <ul>
          <li>WhatsApp may restrict, temporarily ban or permanently ban a linked number, particularly if it sends high volumes, messages people who have not saved it, or receives reports or blocks.</li>
          <li>WhatsApp may change its app at any time, which can interrupt linked numbers without warning until we adapt.</li>
          <li>You choose to use linked numbers at your own risk. We are not liable for any ban, loss of the number, its chat history or contacts, or lost business that results.</li>
          <li>For business-critical or higher-volume messaging, we recommend the official WhatsApp Cloud API.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-output",
    title: "AI features and output",
    content: (
      <>
        <ul>
          <li>AI replies, summaries, transcriptions, decisions, documents, voice calls and cloned voices are generated automatically using third-party and/or self-hosted models. They may be inaccurate, incomplete or inappropriate.</li>
          <li>You are responsible for configuring the AI (persona, rules, knowledge and review settings), for checking output where accuracy matters, and for everything sent from your account — including messages sent automatically by the AI. Use review-before-sending where mistakes would be costly.</li>
          <li>Do not rely on AI output as professional (for example medical, legal or financial) advice without human review.</li>
          <li>AI usage may be subject to quotas or caps you or we set. When a cap is reached, AI features may pause until the next period.</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services",
    content: (
      <p>
        The Services connect to third-party services (such as Meta, Google, Telegram, LINE, AI and telephony
        providers, Zoom, Shopify and Stripe). Your use of them is governed by their own terms and privacy
        policies. We are not responsible for third-party services, and their availability may change outside
        our control.
      </p>
    ),
  },
  {
    id: "fees",
    title: "Fees and subscriptions",
    content: (
      <ul>
        <li>Fees, subscription terms, setup charges and any usage-based charges (such as AI usage) are as agreed in your quotation/order.</li>
        <li>Unless your quotation/order says otherwise, fees are payable in advance in Malaysian Ringgit, are non-refundable except where required by law, and exclude taxes (such as SST), which are added where applicable.</li>
        <li>Charges made by third parties — for example Meta&apos;s WhatsApp conversation fees, SMS or telephony charges, or AI provider charges on your own keys — are your responsibility unless your quotation/order includes them.</li>
        <li>Subscriptions renew for the period stated in your quotation/order unless either party gives notice before renewal. We may change fees for a renewal period with at least 30 days&apos; notice.</li>
        <li>If payment is overdue, we may suspend the Services after giving notice.</li>
      </ul>
    ),
  },
  {
    id: "suspension-termination",
    title: "Suspension and termination",
    content: (
      <>
        <ul>
          <li>You may stop using the Services at any time, subject to the minimum term in your quotation/order.</li>
          <li>We may suspend or terminate access immediately if you seriously or repeatedly breach these Terms, break the law, put the Services or others at risk, or if a platform requires it. Otherwise we will give reasonable notice.</li>
          <li>On termination, your right to use the Services ends. You may request an export of your data within 30 days; after that we delete it as described in our <Link href="/privacy#retention">Privacy Policy</Link>.</li>
          <li>Sections that by their nature should survive termination (including fees owed, intellectual property, disclaimers, liability, indemnity and governing law) continue to apply.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: (
      <>
        <p>
          We (and our licensors) own the Services, including the software, design, documentation and the
          ChatBranch name and logo. We grant you a non-exclusive, non-transferable right to use the Services
          during your subscription, in line with these Terms.
        </p>
        <p>
          You own your content and data — your messages, contacts, knowledge base, documents and recordings. You
          grant us a licence to host, process and transmit it only as needed to provide and support the
          Services. If you give us feedback or suggestions, we may use them without obligation to you.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        To the extent permitted by law, the Services are provided &quot;as is&quot; and &quot;as available&quot;.
        We do not guarantee that the Services will be uninterrupted or error-free, that messages will always
        be delivered, or that any channel will remain available. Nothing in these Terms excludes rights you have
        under the Consumer Protection Act 1999 or other law that cannot be excluded.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <ul>
        <li>To the extent permitted by law, we are not liable for any indirect, incidental, special or consequential loss, or for loss of profits, revenue, business, goodwill, data or numbers/accounts, however caused.</li>
        <li>Our total liability arising out of or relating to the Services in any 12-month period is limited to the fees you paid us for the Services in the 12 months before the event giving rise to the claim.</li>
        <li>These limits do not apply to liability that cannot be limited by law, such as for fraud or for death or personal injury caused by negligence.</li>
      </ul>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <p>
        You will indemnify and hold us harmless from claims, losses, fines and reasonable costs (including legal
        fees) arising from your content, your messages to your customers, your breach of these Terms or of any
        channel&apos;s policies, or your failure to obtain consents required by law.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these Terms from time to time. The date at the top shows the latest version. For
        significant changes we will notify account holders by email or in ChatBranch at least 14 days before
        they take effect. Continuing to use the Services after that means you accept the updated Terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law and disputes",
    content: (
      <p>
        These Terms are governed by the laws of Malaysia. We will first try to resolve any dispute with you in
        good faith. If that fails, the courts of Malaysia have exclusive jurisdiction. If any part of these
        Terms is found unenforceable, the rest remains in effect. You may not transfer your rights under these
        Terms without our consent.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <ul>
        <li><strong>Phyto Link Venture</strong> (SSM registration no. <Placeholder>[Company registration no.]</Placeholder>)</li>
        <li>Address: <Placeholder>[Registered business address]</Placeholder></li>
        <li>Email: <Mail /></li>
        <li>WhatsApp / phone: +60 11-3319 9692</li>
      </ul>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      effectiveDate={EFFECTIVE_DATE}
      intro={
        <>
          <p className="text-lg">
            Please read these Terms carefully. They explain the rules for using Phyto Link Venture&apos;s
            Services, including ChatBranch, and what you and we can expect from each other.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
