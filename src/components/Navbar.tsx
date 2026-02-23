"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image src="/logo.jpg" alt="Phyto Link Venture" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold text-green-600">Phyto Link</span>
              <span className="text-2xl font-light text-gray-600">Venture</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
            <Link href="/invoice-system" className="text-gray-700 hover:text-green-600 transition">
              Invoice System
            </Link>
            <Link href="/ai-automation" className="text-gray-700 hover:text-green-600 transition">
              AI Automation
            </Link>
            <Link href="/iot-system" className="text-gray-700 hover:text-green-600 transition">
              IoT System
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-green-600 transition">
              Tools
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-green-600 transition">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
              Contact
            </Link>
            <Link 
              href="/signup" 
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/invoice-system" className="block py-2 text-gray-700 hover:text-green-600">Invoice System</Link>
            <Link href="/ai-automation" className="block py-2 text-gray-700 hover:text-green-600">AI Automation</Link>
            <Link href="/iot-system" className="block py-2 text-gray-700 hover:text-green-600">IoT System</Link>
            <Link href="/tools" className="block py-2 text-gray-700 hover:text-green-600">Tools</Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-green-600">Pricing</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-green-600">Contact</Link>
            <Link href="/signup" className="block py-2 bg-green-600 text-white text-center rounded-lg">
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
