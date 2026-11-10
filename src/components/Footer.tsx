import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="Phyto Link Venture" width={48} height={48} className="rounded-lg" />
              <h3 className="text-2xl font-bold text-white">Phyto Link Venture</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Malaysian businesses with modern software.
              ChatBranch brings every customer conversation — WhatsApp, email, social and calls — into one inbox with an AI that answers for you.
            </p>
            <p className="text-gray-400">
              📧 phytolinkventure@gmail.com
            </p>
            <p className="text-gray-400 mt-1">
              💬 +60 11-3319 9692
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/chatbranch" className="hover:text-green-400 transition">ChatBranch</Link>
              </li>
              <li>
                <Link href="/chatbranch/updates" className="hover:text-green-400 transition">What&apos;s New</Link>
              </li>
              <li>
                <Link href="/iot-system" className="hover:text-green-400 transition">IoT System</Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-green-400 transition">Tools</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-green-400 transition">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/privacy#data-deletion" className="hover:text-green-400 transition">Data Deletion</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Phyto Link Venture. All rights reserved.</p>
          <p className="mt-2 text-sm">
            SSM Registration: [Company registration no.] | Based in Malaysia 🇲🇾
          </p>
        </div>
      </div>
    </footer>
  );
}
