import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ORG, SITE_URL, CHATBRANCH_APP_URL, jsonLd } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://phytolink-venture.com"),
  title: "Phyto Link Venture - Business Solutions",
  description: "Business software built in Malaysia: ChatBranch, the multi-channel inbox with an AI that answers your customers on WhatsApp, email and social, plus IoT monitoring.",
  openGraph: {
    siteName: "Phyto Link Venture",
    locale: "en_MY",
    type: "website",
  },
  icons: { icon: "/logo.jpg", apple: "/logo.jpg" },
};

const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: ORG.name,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.jpg`,
      email: ORG.email,
      telephone: ORG.phone,
      identifier: ORG.legalId,
      address: { "@type": "PostalAddress", ...ORG.address },
      areaServed: "MY",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: ORG.phone,
        email: ORG.email,
        url: ORG.whatsapp,
        availableLanguage: ["English", "Malay", "Chinese"],
      },
      makesOffer: { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/chatbranch#software` } },
      sameAs: [CHATBRANCH_APP_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: ORG.name,
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en-MY",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(orgLd)} />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* ChatBranch live chat assistant. Keep it here at the end of <body>
            and keep `defer`, not `async`: widget.js mounts itself with
            document.body.appendChild the moment it runs, and React hoists an
            `async` script into <head>, where it can run before <body> exists
            and silently fail. `defer` runs after parsing, still non-blocking. */}
        <script
          src="https://chatbranch.phytolink-venture.com/api/widget.js"
          data-token="wgt_3a9e5c527bf7c91889fbee4d"
          defer
        />
      </body>
    </html>
  );
}
