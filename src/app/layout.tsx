import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
