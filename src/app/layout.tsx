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
      </body>
    </html>
  );
}
