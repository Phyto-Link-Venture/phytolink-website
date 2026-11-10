import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Placeholder, type LegalSection } from "@/components/legal/LegalPage";

const EFFECTIVE_DATE = "10 November 2026";
const EMAIL = "phytolinkventure@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Phyto Link Venture",
  description:
    "How Phyto Link Venture and ChatBranch collect, use, share and protect personal data, including AI processing, Google user data, Malaysia PDPA 2010 rights and how to delete your data.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy — Phyto Link Venture", url: "/privacy", type: "article" },
};

const Mail = ({ subject }: { subject?: string }) => (
  <a href={`mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}>{EMAIL}</a>
);

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: (
      <>
        <p>
          This Privacy Policy is issued by <strong>Phyto Link Venture</strong> (SSM registration no.{" "}
          <Placeholder>[Company registration no.]</Placeholder>), a business registered in Malaysia with
          its address at <Placeholder>[Registered business address]</Placeholder> (&quot;Phyto Link
          Venture&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
        </p>
        <p>
          It applies to our website <a href="https://phytolink-venture.com">phytolink-venture.com</a>, to{" "}
          <strong>ChatBranch</strong> (our multi-channel conversation platform at{" "}
          <a href="https://chatbranch.phytolink-venture.com">chatbranch.phytolink-venture.com</a>, including
          its phone app, website chat widget, API and MCP server), to our IoT System, and to the related
          setup and support services we provide (together, the &quot;Services&quot;).
        </p>
        <p>
          You can reach us about privacy at <Mail subject="Privacy enquiry" /> or on WhatsApp at +60 11-3319 9692.
        </p>
      </>
    ),
  },
  {
    id: "our-role",
    title: "Our role: controller and processor",
    content: (
      <>
        <p>We handle personal data in two different capacities:</p>
        <ul>
          <li>
            <strong>As a data user / controller</strong> for the data of our own customers, prospects and
            website visitors — for example when you contact us, sign up, or manage your account.
          </li>
          <li>
            <strong>As a data processor on behalf of businesses</strong> that use ChatBranch (our
            &quot;Customers&quot;). When you message a business that uses ChatBranch — on WhatsApp, email,
            Messenger, Instagram, Telegram, LINE, Viber, SMS, WeChat, Zalo, website chat or by phone — that
            business decides why and how your data is used and is responsible for it. We process that
            data only on the business&apos;s instructions and under our{" "}
            <Link href="/terms">Terms &amp; Conditions</Link>.
          </li>
        </ul>
        <p>
          If you are a customer of a business that uses ChatBranch, please contact that business first about
          your data. We will help them answer your request, and you can also write to us — see{" "}
          <a href="#data-deletion">How to delete your data</a>.
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Personal data we collect",
    content: (
      <>
        <h3>Account and business data</h3>
        <ul>
          <li>Name, business name, email address, phone number and job role of account holders and their staff.</li>
          <li>Sign-in details (passwords are stored only as secure hashes), two-step sign-in settings and device/session information.</li>
          <li>Billing and invoicing details, and records of our communications with you.</li>
        </ul>
        <h3>Contact and customer data (processed for our Customers)</h3>
        <ul>
          <li>
            Details of the business&apos;s own customers and contacts: names, phone numbers, email addresses,
            channel usernames or IDs, profile names and pictures supplied by the channel, tags, custom fields,
            notes, bookings and documents (such as quotations, invoices and receipts).
          </li>
          <li>Contacts that a Customer imports from files, phone contact books or Google Contacts.</li>
        </ul>
        <h3>Message content from connected channels</h3>
        <ul>
          <li>
            Messages, replies, reactions, attachments, photos, videos, documents, voice notes, stickers,
            locations and contact cards sent or received through channels a Customer connects, including
            group chats in which a connected number or bot takes part, and the metadata that comes with them
            (timestamps, delivery and read status, sender name and number).
          </li>
          <li>Emails and attachments from connected mailboxes.</li>
          <li>Marketplace buyer messages from connected stores (for example Shopee, Lazada or TikTok Shop).</li>
        </ul>
        <h3>Calls, recordings and voice samples</h3>
        <ul>
          <li>Audio and transcripts of AI or staff voice calls made or received through ChatBranch, where enabled.</li>
          <li>Transcripts of voice notes, so the AI and staff can read them.</li>
          <li>
            Voice recordings that a Customer uploads to create a cloned voice. Voice cloning requires the
            Customer to confirm it has the speaker&apos;s consent.
          </li>
        </ul>
        <h3>Usage and technical data</h3>
        <ul>
          <li>Log data such as IP address, browser and device type, pages and features used, and errors.</li>
          <li>An activity log of actions taken in ChatBranch (who did what, when, and from the dashboard, API, MCP or an automation).</li>
          <li>AI usage records such as the model used, token counts and cost, used for billing and quality.</li>
          <li>Push-notification tokens for the browser or phone app, if you turn notifications on.</li>
        </ul>
        <h3>Data from third-party sign-ins and integrations</h3>
        <p>
          When a Customer connects Google, Meta (Facebook, Instagram, WhatsApp), Telegram, LINE, TikTok or
          another platform, we receive the data that platform makes available under the permissions granted —
          for example page or account IDs, access tokens, messages, calendar events or contacts. See{" "}
          <a href="#google-user-data">Google user data</a> for details on Google.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    content: (
      <>
        <p>
          Our website and ChatBranch use cookies and browser storage that are <strong>strictly necessary</strong>{" "}
          to keep you signed in, protect against misuse and remember your preferences (such as language, theme
          or a closed guide). The ChatBranch website chat widget stores an identifier in the visitor&apos;s
          browser so a conversation can continue across pages.
        </p>
        <p>
          We do not use advertising cookies or sell browsing data. If we introduce analytics cookies in the
          future, we will update this policy and ask for consent where required. You can block or delete
          cookies in your browser settings, but parts of the Services may stop working.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use personal data",
    content: (
      <>
        <ul>
          <li>To provide the Services: deliver and receive messages, show conversations in the inbox, run AI replies, journeys, automations, bookings, calls and documents as configured by the Customer.</li>
          <li>To create and manage accounts, verify identity, and keep the Services secure (for example rate limits, sign-in lockouts and abuse detection).</li>
          <li>To provide support, onboarding and the setup work you ask us to do.</li>
          <li>To bill for the Services and keep accounting and tax records.</li>
          <li>To monitor, debug and improve the reliability and quality of the Services.</li>
          <li>To send service messages (such as security alerts, welcome emails and important changes) and, with your consent where required, product news. You can opt out of marketing at any time.</li>
          <li>To comply with law, respond to lawful requests, and establish or defend legal claims.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell personal data, and we do not use our Customers&apos; contact or message
          data for our own marketing or advertising.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal basis for processing",
    content: (
      <>
        <p>Depending on the activity, we rely on:</p>
        <ul>
          <li><strong>Contract</strong> — to provide the Services you or your organisation signed up for.</li>
          <li><strong>Consent</strong> — for example optional marketing, push notifications, voice cloning, and connecting third-party accounts. You can withdraw consent at any time.</li>
          <li><strong>Legitimate interests</strong> — keeping the Services secure, preventing fraud and improving our products, balanced against your rights.</li>
          <li><strong>Legal obligation</strong> — record-keeping, tax and responding to lawful requests.</li>
        </ul>
        <p>
          For data we process on behalf of a Customer, the Customer is responsible for having a valid legal
          basis — including any consent required from its own customers — for collecting and using that data
          and for messaging them.
        </p>
      </>
    ),
  },
  {
    id: "ai-processing",
    title: "AI processing",
    content: (
      <>
        <p>
          ChatBranch includes AI features that a Customer can turn on or off: drafting and sending replies,
          summarising conversations, reading attachments and images, transcribing voice notes, deciding paths
          in journeys, speaking in voice calls and voice notes, and generating cloned voices.
        </p>
        <ul>
          <li>
            To do this, the relevant parts of a conversation, contact details, the Customer&apos;s knowledge base
            and instructions are sent to <strong>third-party AI providers</strong> — large-language-model,
            speech-to-text and text-to-speech providers (such as OpenAI, Anthropic, Google, OpenRouter and
            ElevenLabs, depending on the configuration chosen) — or to models hosted on our own or the
            Customer&apos;s servers.
          </li>
          <li>
            We use these providers through their business APIs, under terms that restrict them from using API
            data to train their models, as published by each provider.
          </li>
          <li>
            AI output can be wrong. Customers can choose to review AI replies before they are sent, and every
            conversation can be handed over to a person.
          </li>
          <li>
            The AI can learn from a Customer&apos;s own feedback (for example 👍/👎 and corrections) to improve
            that Customer&apos;s replies. We do not use one Customer&apos;s data to train AI for another Customer.
          </li>
          <li>
            AI features are not used to make decisions that produce legal or similarly significant effects on
            individuals without human involvement.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "google-user-data",
    title: "Google user data",
    content: (
      <>
        <p>
          If you connect a Google account to ChatBranch, we access only the Google data needed for the features
          you turn on:
        </p>
        <ul>
          <li><strong>Google Calendar</strong> — to read free/busy times and create, update or cancel booking events, so the AI and your team can offer and manage appointments.</li>
          <li><strong>Google Contacts</strong> — to import contacts you choose into your ChatBranch contact book.</li>
          <li><strong>Gmail, Google Drive and Google Sheets</strong> — only if you connect them, to send or read the messages and files you choose, or to read and write the sheets you select for your automations.</li>
          <li>Your basic profile (name and email address) to identify the connected account.</li>
        </ul>
        <p className="bg-green-50 border-l-4 border-green-500 p-4 text-gray-800">
          Phyto Link Venture&apos;s use and transfer to any other app of information received from Google APIs
          will adhere to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <p>In particular:</p>
        <ul>
          <li>We use Google user data only to provide and improve the user-facing features described above.</li>
          <li>We do not transfer Google user data to others except as needed to provide those features, to comply with law, for security, or as part of a merger or acquisition with notice to you.</li>
          <li>We do not use or transfer Google user data for advertising, and we do not sell it.</li>
          <li>We do not allow humans to read Google user data unless you give us permission for a specific item (for example during support), it is needed for security or to investigate abuse, or it is required by law.</li>
          <li>We do not use Google Workspace API data to develop, improve or train generalised or non-personalised AI or machine-learning models.</li>
        </ul>
        <p>
          You can disconnect Google at any time from ChatBranch (Settings → My connections) or at{" "}
          <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>. When you
          disconnect, we delete the stored access tokens.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing and sub-processors",
    content: (
      <>
        <p>We share personal data only as needed to run the Services, with these categories of recipients:</p>
        <ul>
          <li><strong>Hosting and infrastructure</strong> — cloud servers, databases, backups and content delivery.</li>
          <li><strong>Messaging platforms</strong> — Meta (WhatsApp, Messenger, Instagram), Telegram, LINE, Viber, WeChat, Zalo, TikTok, marketplace platforms, and messaging providers such as Twilio and YCloud, to send and receive the messages a Customer connects.</li>
          <li><strong>AI providers</strong> — language-model, speech-to-text and text-to-speech providers described in <a href="#ai-processing">AI processing</a>.</li>
          <li><strong>Voice and telephony</strong> — real-time media and phone-network (SIP) providers used for calls.</li>
          <li><strong>Email delivery</strong> — services used to send sign-in, notification and system emails.</li>
          <li><strong>Push notifications</strong> — browser push services and Firebase Cloud Messaging for the phone app.</li>
          <li><strong>Integrations the Customer connects</strong> — for example Google, Zoom, Shopify or Stripe.</li>
          <li><strong>Payment processors</strong>, where applicable, to collect fees.</li>
          <li><strong>Professional advisers and authorities</strong> — lawyers, auditors, or regulators and law enforcement where the law requires it.</li>
          <li><strong>A buyer or successor</strong> if our business is reorganised, sold or merged, under equivalent protection.</li>
        </ul>
        <p>
          A Customer&apos;s staff, according to the roles and outlet access that Customer sets, can see the
          conversations and contacts of that Customer. An up-to-date list of our sub-processors is available
          on request at <Mail subject="Sub-processor list" />.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International transfers",
    content: (
      <p>
        Some of our providers (for example AI and messaging platforms) process data outside Malaysia,
        including in the United States, the European Union and Singapore. When personal data is transferred
        outside Malaysia, we take the steps required by the Personal Data Protection Act 2010 (as amended) —
        such as relying on contracts that require an equivalent level of protection, or on your consent — and,
        for individuals in the EEA or UK, appropriate safeguards such as standard contractual clauses.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    content: (
      <>
        <ul>
          <li><strong>Account data</strong> — for as long as the account is active, then for up to 90 days to allow for reactivation and handover, unless the law requires us to keep it longer.</li>
          <li><strong>Customer data</strong> (contacts, messages, recordings, documents) — for as long as the Customer keeps it in ChatBranch or as its retention settings specify. After a subscription ends, we delete or anonymise it within 90 days, unless the Customer asks us to export or delete it sooner.</li>
          <li><strong>Media library files</strong> — kept for 30 days unless removed earlier.</li>
          <li><strong>Voice samples and cloned voices</strong> — until the Customer deletes the voice; we then also ask the voice provider to delete its copy.</li>
          <li><strong>Logs and backups</strong> — security and system logs for up to 12 months; backups are overwritten on a rolling basis within 35 days.</li>
          <li><strong>Billing records</strong> — for 7 years, as required by Malaysian tax and company law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <>
        <p>We protect personal data with technical and organisational measures appropriate to the risk, including:</p>
        <ul>
          <li>Encryption in transit (HTTPS/TLS) and hashed passwords.</li>
          <li>Two-step sign-in, sign-in lockouts and rate limits.</li>
          <li>Role-based access controls so staff see only what their role and outlet allow, and an activity log of actions.</li>
          <li>Short-lived signed links for media, and API keys and connections that can be revoked at any time.</li>
          <li>Regular dependency and security scanning, and limited access for our own personnel on a need-to-know basis.</li>
        </ul>
        <p>
          No system is completely secure. If a personal data breach occurs that is likely to cause significant
          harm, we will notify affected Customers, individuals and the Personal Data Protection Commissioner as
          required by law.
        </p>
      </>
    ),
  },
  {
    id: "data-deletion",
    title: "How to delete your data",
    content: (
      <>
        <p>
          You can ask us to delete your personal data at any time. This section also serves as our data
          deletion instructions for Meta (Facebook, Instagram, WhatsApp), Google, TikTok, LINE and Telegram.
        </p>
        <h3>If you are a ChatBranch account holder or staff member</h3>
        <ul>
          <li>Account owners and admins can delete contacts, conversations, recordings, voices and media directly in ChatBranch.</li>
          <li>To close your account and delete your organisation&apos;s data, email <Mail subject="Data deletion request" /> from the account owner&apos;s email address.</li>
        </ul>
        <h3>If you messaged a business that uses ChatBranch</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Email <Mail subject="Data deletion request" /> with the subject &quot;Data deletion request&quot;.</li>
          <li>Tell us the name of the business you contacted and the channel and identifier you used (for example your WhatsApp number, email address, or Facebook/Instagram/Telegram/LINE username).</li>
          <li>We may ask you to confirm you control that number or account, to protect you from false requests.</li>
          <li>We will pass the request to that business and, unless the law requires the data to be kept, delete your messages, contact record, recordings and related data within <strong>30 days</strong>, and confirm to you by email.</li>
        </ol>
        <h3>Removing a platform connection</h3>
        <ul>
          <li><strong>Facebook / Instagram:</strong> go to Settings &amp; privacy → Settings → Apps and websites (or Business integrations), and remove ChatBranch. Then email us if you also want the data already received deleted.</li>
          <li><strong>Google:</strong> remove ChatBranch at <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>.</li>
          <li><strong>Telegram, LINE and other chat apps:</strong> block or delete the business&apos;s bot or chat, then email us to delete existing data.</li>
          <li><strong>Stop messages:</strong> reply STOP (or a similar opt-out) to a business on ChatBranch and it will no longer send you marketing messages.</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: (
      <>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal data we hold about you and receive a copy.</li>
          <li><strong>Correct</strong> data that is inaccurate, incomplete or out of date.</li>
          <li><strong>Delete</strong> your data (see <a href="#data-deletion">How to delete your data</a>).</li>
          <li><strong>Withdraw consent</strong> at any time, without affecting earlier processing.</li>
          <li><strong>Object</strong> to or <strong>limit</strong> processing, including direct marketing.</li>
          <li><strong>Data portability</strong> — receive data you provided in a commonly used format, or have it sent to another provider where technically feasible.</li>
          <li><strong>Complain</strong> to the Personal Data Protection Commissioner of Malaysia or, in the EEA/UK, your local data protection authority.</li>
        </ul>
        <p>
          Email <Mail subject="Personal data request" />. We will respond within 21 days as required by the
          PDPA (or within one month where the GDPR applies), and may need to verify your identity first. We
          may charge a fee for access requests only where the law allows.
        </p>
      </>
    ),
  },
  {
    id: "pdpa",
    title: "Malaysia PDPA 2010 compliance",
    content: (
      <>
        <p>
          We process personal data in line with the seven Personal Data Protection Principles of the Personal
          Data Protection Act 2010 (as amended by the Personal Data Protection (Amendment) Act 2024):
        </p>
        <ul>
          <li><strong>General</strong> — we process personal data only for lawful purposes connected to our Services.</li>
          <li><strong>Notice and Choice</strong> — this policy tells you what we collect, why, and your choices.</li>
          <li><strong>Disclosure</strong> — we disclose data only for the purposes described or with your consent.</li>
          <li><strong>Security</strong> — we take practical steps to protect data from loss, misuse and unauthorised access.</li>
          <li><strong>Retention</strong> — we keep data no longer than needed, as set out in <a href="#retention">Data retention</a>.</li>
          <li><strong>Data Integrity</strong> — we take reasonable steps to keep data accurate, complete and up to date.</li>
          <li><strong>Access</strong> — you can access and correct your data, as set out in <a href="#your-rights">Your rights</a>.</li>
        </ul>
        <p>
          Providing personal data is voluntary, but if you do not provide the data needed for an account or a
          service, we may not be able to provide it. A Bahasa Malaysia version of this notice is available on
          request.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p>
        The Services are intended for businesses and are not directed to children under 18. We do not knowingly
        collect personal data from children for our own purposes. Businesses using ChatBranch must not use it to
        target children and are responsible for obtaining any parental consent the law requires. If you believe
        a child has given us personal data, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. The &quot;last updated&quot; date at the top shows when it
        last changed. If a change is significant, we will notify account holders by email or in ChatBranch
        before it takes effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>For any question or request about this policy or your personal data:</p>
        <ul>
          <li><strong>Phyto Link Venture</strong> (SSM registration no. <Placeholder>[Company registration no.]</Placeholder>)</li>
          <li>Address: <Placeholder>[Registered business address]</Placeholder></li>
          <li>Email: <Mail subject="Privacy enquiry" /></li>
          <li>WhatsApp / phone: +60 11-3319 9692</li>
          <li>Business hours: Monday–Friday 9:00 AM–6:00 PM, Saturday 9:00 AM–1:00 PM (Malaysia time)</li>
        </ul>
        <p>
          See also our <Link href="/terms">Terms &amp; Conditions</Link>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate={EFFECTIVE_DATE}
      intro={
        <>
          <p className="text-lg">
            Your privacy matters to us. This policy explains what personal data Phyto Link Venture collects
            when you use our website, ChatBranch and our other Services, how we use and protect it, and the
            choices and rights you have — including{" "}
            <a href="#data-deletion">how to delete your data</a>.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
