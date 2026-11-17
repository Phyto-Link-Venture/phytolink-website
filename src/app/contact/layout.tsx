import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Free Demo | Phyto Link Venture",
  description: "Book a free 15-minute ChatBranch demo or ask a question. WhatsApp +60 11-3319 9692 or email phytolinkventure@gmail.com. Based in Klang, Selangor, Malaysia.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
