import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Business Solutions for<br />
              <span className="text-green-200">Malaysian Enterprises</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Modern, compliant, and affordable software solutions. 
              Built locally, designed for Malaysian businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
              >
                Start 14-Day Free Trial
              </Link>
              <Link 
                href="/invoice-system"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition"
              >
                Learn More
              </Link>
            </div>
            <p className="mt-4 text-green-200 text-sm">
              No credit card required for trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete business solutions for Malaysian enterprises
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🏆 #1 e-Invoice Solution in Malaysia
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Invoice Management System
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  The only invoice software with <strong>native LHDN e-Invoice integration</strong>. 
                  Stay compliant with Malaysian tax regulations effortlessly.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✅</span>
                    LHDN MyInvois e-Invoice Ready
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✅</span>
                    SST Compliant
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✅</span>
                    Multi-Company Support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✅</span>
                    Custom Invoice Templates (FREE)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✅</span>
                    AI-Powered Assistant
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/invoice-system"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
                  >
                    View Features
                  </Link>
                  <Link 
                    href="/pricing"
                    className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition text-center"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Invoice #INV-2026-0001</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">e-Invoice ✓</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">RM 5,250.00</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Customer</span>
                    <span className="text-gray-900">ABC Sdn Bhd</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className="text-green-600 font-semibold">Paid</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">e-Invoice ID</span>
                    <span className="text-blue-600 font-mono text-xs">LHDN-2026-XXXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IoT System Service */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🚀 Coming Soon
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  IoT System (ThingsBoard)
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Professional IoT platform powered by <strong>ThingsBoard</strong>. 
                  Monitor devices, collect data, and visualize insights in real-time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-3">✅</span>
                    Real-time Device Monitoring
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-3">✅</span>
                    Custom Dashboards & Widgets
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-3">✅</span>
                    Rule Engine & Alerts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-3">✅</span>
                    Data Analytics & Visualization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-500 mr-3">✅</span>
                    REST API & MQTT Support
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/iot-system"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition text-center"
                  >
                    Learn More
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Connected Devices</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Online</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">247 Devices</div>
                  <div className="text-sm text-gray-600">Across 12 locations</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">Temperature Sensors</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">98 active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">Energy Meters</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">76 active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">Smart Gateways</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">73 active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Automation Service */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  🤖 NEW — AI Automation
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI Automation Service
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Your 24/7 AI assistant that handles <strong>WhatsApp replies, email organization, 
                  receipt capture, and automated reports</strong>. Save 10+ hours per week.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    WhatsApp Auto-Reply 24/7
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    Smart Email Organization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    Receipt Capture & Expense Tracking
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    Automated Daily/Weekly Reports
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    100% Private — Your Own Server
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/ai-automation"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-center"
                  >
                    Learn More
                  </Link>
                  <a 
                    href="https://wa.me/601133199692?text=Hi%2C%20I%27m%20interested%20in%20AI%20Automation%20Service"
                    className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">AI Assistant Status</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active 24/7</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">47 Tasks Today</div>
                  <div className="text-sm text-gray-600">12 WhatsApp replies • 28 emails sorted • 7 receipts captured</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">💬</span>
                      <span className="text-sm text-gray-700">Customer inquiry replied</span>
                    </div>
                    <span className="text-xs text-gray-500">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">🧾</span>
                      <span className="text-sm text-gray-700">Receipt captured: RM 245.00</span>
                    </div>
                    <span className="text-xs text-gray-500">15 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">📊</span>
                      <span className="text-sm text-gray-700">Daily report generated</span>
                    </div>
                    <span className="text-xs text-gray-500">1 hr ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Malaysian Businesses Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🇲🇾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built for Malaysia</h3>
              <p className="text-gray-600">
                Native LHDN e-Invoice integration, SST compliance, and Bahasa Malaysia support. 
                We understand Malaysian business needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Support</h3>
              <p className="text-gray-600">
                WhatsApp support with response in hours, not days. 
                We speak your language and understand your timezone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                Enterprise features at SME prices. Starting from just RM79/month. 
                No hidden fees, no per-invoice charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* e-Invoice Compliance CTA */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚠️ Important Notice
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            e-Invoice is Mandatory in 2026
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            LHDN requires ALL businesses to submit e-Invoices starting 2026. 
            Non-compliance can result in penalties. Get ready now with our fully compliant system.
          </p>
          <Link 
            href="/signup"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition inline-block"
          >
            Get Compliant Today →
          </Link>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Malaysian Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "Finally, an invoice system that understands Malaysian tax requirements. 
                The e-Invoice integration saved us hours of manual work."
              </p>
              <p className="font-semibold text-gray-900">- Coming Soon</p>
              <p className="text-sm text-gray-500">Manufacturing Company</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "Setup was quick, support is responsive. 
                Much better than the international alternatives we tried."
              </p>
              <p className="font-semibold text-gray-900">- Coming Soon</p>
              <p className="text-sm text-gray-500">Trading Company</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">
                "The custom template design was a nice surprise. 
                Our invoices look professional and match our branding."
              </p>
              <p className="font-semibold text-gray-900">- Coming Soon</p>
              <p className="text-sm text-gray-500">Service Provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join Malaysian businesses already using our Invoice Management System.
          </p>
          <Link 
            href="/signup"
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition inline-block"
          >
            Start Your 14-Day Free Trial
          </Link>
          <p className="mt-4 text-green-200 text-sm">
            No credit card required • Full features • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
