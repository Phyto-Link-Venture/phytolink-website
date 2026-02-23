import Link from "next/link";

export const metadata = {
  title: "AI Automation Service - Phyto Link Venture",
  description: "AI-powered business automation for Malaysian SMEs. WhatsApp auto-reply, email organization, smart reminders, receipt capture and more. From RM 199/month.",
};

export default function AIAutomation() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🤖 AI-Powered Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your 24/7 AI Assistant<br />
            <span className="text-purple-200">for Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Automate WhatsApp replies, organize emails, capture receipts, and generate reports — 
            all running on your own private server.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition"
            >
              Book Free Demo
            </Link>
            <a
              href="https://wa.me/601133199692?text=Hi%2C%20I%27m%20interested%20in%20AI%20Automation%20Service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="mt-4 text-purple-200 text-sm">
            Free 15-minute demo • No commitment • Cancel anytime
          </p>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Can AI Do For Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save 10-15 hours per week on repetitive tasks. Your AI assistant works 24/7, never takes leave.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Auto-Reply</h3>
              <p className="text-gray-600">
                Answer customer inquiries instantly — bookings, FAQs, directions, pricing. 
                Works 24/7 even after office hours. Never miss a lead again.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Organization</h3>
              <p className="text-gray-600">
                AI reads, labels, and prioritizes your emails. Urgent ones get flagged. 
                Spam gets filtered. You only see what matters.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🧾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receipt Capture</h3>
              <p className="text-gray-600">
                Snap a photo of any receipt — AI extracts the data and logs it automatically. 
                No more manual data entry for expenses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Auto Reports</h3>
              <p className="text-gray-600">
                Get daily/weekly summaries delivered to your WhatsApp or email. 
                Sales, expenses, appointments — all automated.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Reminders</h3>
              <p className="text-gray-600">
                Appointment reminders for clients, deadline alerts for staff, 
                payment follow-ups — all handled automatically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Private</h3>
              <p className="text-gray-600">
                Your AI runs on your own dedicated server. No data shared with third parties. 
                Full PDPA compliance. Your data stays yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built For Every Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl mb-3">🦷</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dental & Medical Clinics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Auto-reply patient WhatsApp inquiries 24/7</li>
                <li>✅ Send appointment reminders (reduce no-shows by 40%)</li>
                <li>✅ Daily schedule summary every morning</li>
                <li>✅ Organize patient communications by urgency</li>
                <li>✅ Multi-branch coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Accounting & Audit Firms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Auto-remind clients about document submissions</li>
                <li>✅ Organize emails by client and urgency</li>
                <li>✅ Generate weekly task summaries</li>
                <li>✅ Receipt capture from client photos</li>
                <li>✅ Tax deadline tracking & alerts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Property Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Auto-reply tenant inquiries via WhatsApp/email</li>
                <li>✅ Track maintenance requests automatically</li>
                <li>✅ Send automated rent reminders</li>
                <li>✅ Monthly occupancy & revenue reports</li>
                <li>✅ Expense receipt filing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">F&B / Restaurant</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✅ Take pre-orders via WhatsApp automatically</li>
                <li>✅ Track daily expenses — snap receipt photos</li>
                <li>✅ Daily sales & inventory reports</li>
                <li>✅ Staff shift reminders</li>
                <li>✅ Customer inquiry auto-reply 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Less than the cost of one part-time staff. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Basic */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="text-green-600 font-semibold mb-2">🟢 Basic</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">RM 199</div>
              <div className="text-gray-500 mb-6">/month</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✅ AI Assistant (WhatsApp)</li>
                <li>✅ Email Organization</li>
                <li>✅ Smart Reminders</li>
                <li>✅ 1 vCPU, 4GB RAM Server</li>
                <li>✅ WhatsApp Support</li>
              </ul>
              <Link href="/contact" className="block text-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Get Started
              </Link>
            </div>

            {/* Standard */}
            <div className="bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-400 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="text-indigo-600 font-semibold mb-2">🟡 Standard</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">RM 349</div>
              <div className="text-gray-500 mb-6">/month</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✅ Everything in Basic</li>
                <li>✅ Receipt Capture</li>
                <li>✅ Auto-Reports</li>
                <li>✅ Multi-platform Support</li>
                <li>✅ 2 vCPU, 8GB RAM Server</li>
              </ul>
              <Link href="/contact" className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="text-red-600 font-semibold mb-2">🔴 Pro</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">RM 499</div>
              <div className="text-gray-500 mb-6">/month</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✅ Everything in Standard</li>
                <li>✅ Custom Automation</li>
                <li>✅ Invoice System</li>
                <li>✅ IoT Monitoring</li>
                <li>✅ 4 vCPU, 16GB RAM Server</li>
              </ul>
              <Link href="/contact" className="block text-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Get Started
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="text-gray-800 font-semibold mb-2">⚫ Enterprise</div>
              <div className="text-4xl font-bold text-gray-900 mb-1">RM 899</div>
              <div className="text-gray-500 mb-6">/month</div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✅ Everything in Pro</li>
                <li>✅ Dedicated Server</li>
                <li>✅ Priority Support</li>
                <li>✅ Custom Integrations</li>
                <li>✅ 8 vCPU, 32GB RAM Server</li>
              </ul>
              <Link href="/contact" className="block text-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Contact Us
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            All plans include: One-time RM 199 setup fee • 30-day money-back guarantee • Free onboarding support
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Steps
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Free Demo</h3>
                <p className="text-gray-600">15-minute call where we show you exactly how AI can help your specific business. No obligation.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Set Everything Up</h3>
                <p className="text-gray-600">Our team configures your private AI server, connects your WhatsApp/email, and customizes it for your business. Takes 3-5 days.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Works For You 24/7</h3>
                <p className="text-gray-600">Your AI assistant handles customer inquiries, organizes emails, captures receipts, and generates reports — all automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Save 10+ Hours Per Week?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join Malaysian businesses already using AI to automate their daily tasks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/601133199692?text=Hi%2C%20I%27m%20interested%20in%20AI%20Automation%20Service"
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition"
            >
              WhatsApp Us Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition"
            >
              Book Free Demo
            </Link>
          </div>
          <p className="mt-6 text-purple-200 text-sm">
            📞 +60 11-3319 9692 • phytolinkventure@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
