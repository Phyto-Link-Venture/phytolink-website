import Link from "next/link";
import UpdateCard from "@/components/chatbranch/UpdateCard";
import { getLatestUpdates } from "@/data/chatbranch-updates";

export default function Home() {
  const latestUpdates = getLatestUpdates(3);

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
              Modern software that talks to your customers and watches over your operations.
              Built locally, designed for Malaysian businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
              >
                Book Free Demo
              </Link>
              <Link 
                href="/chatbranch"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition"
              >
                Discover ChatBranch
              </Link>
            </div>
            <p className="mt-4 text-green-200 text-sm">
              Free 15-minute demo • Local support on WhatsApp
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

          {/* ChatBranch */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  💬 Multi-Channel Conversations + AI
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  ChatBranch
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  One inbox for <strong>WhatsApp, email, Messenger, Instagram, Telegram, LINE and more</strong> —
                  with an AI that answers your customers 24/7 and hands over to your team when it matters.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    Every Channel in One Shared Inbox
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    AI Replies with Your Persona & Knowledge
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    Bookings with Google Calendar
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    Journeys, Follow-ups & Automations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-indigo-500 mr-3">✅</span>
                    AI Voice Calls & Phone App
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/chatbranch"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-center"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://wa.me/601133199692?text=Hi%2C%20I%27m%20interested%20in%20ChatBranch"
                    className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-xl p-6" aria-hidden="true">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Shared Inbox</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">AI on 24/7</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">11 Channels</div>
                  <div className="text-sm text-gray-600">One conversation history per customer</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">🟢</span>
                      <span className="text-sm text-gray-700">WhatsApp · Booking confirmed by AI</span>
                    </div>
                    <span className="text-xs text-gray-500">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">📸</span>
                      <span className="text-sm text-gray-700">Instagram · Price question answered</span>
                    </div>
                    <span className="text-xs text-gray-500">15 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">🙋</span>
                      <span className="text-sm text-gray-700">Email · Handed over to Aisyah</span>
                    </div>
                    <span className="text-xs text-gray-500">1 hr ago</span>
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
                ChatBranch speaks English, Bahasa Malaysia and Chinese, and works on the channels
                your customers already use. We understand Malaysian business needs.
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
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Up For You</h3>
              <p className="text-gray-600">
                We connect your channels, load your knowledge and configure the AI with you —
                so your team can start working on day one.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What's new in ChatBranch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                What&apos;s New in ChatBranch
              </h2>
              <p className="text-xl text-gray-600">The latest features, shipped for our customers.</p>
            </div>
            <Link href="/chatbranch/updates" className="text-green-600 font-semibold hover:underline">
              See all updates →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestUpdates.map((u) => (
              <UpdateCard key={u.slug} update={u} />
            ))}
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
            Book a free demo and see how ChatBranch can answer your customers on every channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition"
            >
              Book Free Demo
            </Link>
            <Link
              href="/signup"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition"
            >
              Get Started
            </Link>
          </div>
          <p className="mt-4 text-green-200 text-sm">
            📞 +60 11-3319 9692 • phytolinkventure@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
