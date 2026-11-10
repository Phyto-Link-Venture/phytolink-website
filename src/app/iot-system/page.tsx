import Link from "next/link";

export default function IoTSystemPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 Coming Soon
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IoT System
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Enterprise-grade IoT platform powered by <strong>ThingsBoard</strong>. 
              Monitor, manage, and visualize your connected devices in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition"
              >
                Contact Us
              </Link>
              <Link 
                href="/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ThingsBoard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is ThingsBoard?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ThingsBoard is an open-source IoT platform that enables rapid development, 
                management, and scaling of IoT projects. It provides a complete infrastructure 
                for data collection, processing, visualization, and device management.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our managed ThingsBoard service takes care of all the technical complexity, 
                so you can focus on building your IoT solutions.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-blue-900">
                  <strong>💡 Perfect for:</strong> Manufacturing, Agriculture, Smart Buildings, 
                  Energy Management, Environmental Monitoring, and more.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">📊</span>
                  <div>
                    <strong className="text-gray-900">Rich Data Visualization</strong>
                    <p className="text-gray-600 text-sm">Create custom dashboards with 30+ widget types</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">🔌</span>
                  <div>
                    <strong className="text-gray-900">Multiple Protocols</strong>
                    <p className="text-gray-600 text-sm">MQTT, CoAP, HTTP, LwM2M, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">🔔</span>
                  <div>
                    <strong className="text-gray-900">Smart Alerts</strong>
                    <p className="text-gray-600 text-sm">Rule engine with customizable notifications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">🔐</span>
                  <div>
                    <strong className="text-gray-900">Enterprise Security</strong>
                    <p className="text-gray-600 text-sm">End-to-end encryption and role-based access</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful IoT Platform Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build and scale your IoT solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Device Management</h3>
              <p className="text-gray-600">
                Manage thousands of devices with ease. Organize by groups, 
                provision automatically, and monitor device health.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Dashboards</h3>
              <p className="text-gray-600">
                Build beautiful, interactive dashboards with drag-and-drop widgets. 
                Visualize data in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rule Engine</h3>
              <p className="text-gray-600">
                Create complex rules and workflows without coding. 
                Trigger actions based on device data and events.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics</h3>
              <p className="text-gray-600">
                Store and analyze historical data. Generate reports and 
                gain insights from your IoT data.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alerts & Notifications</h3>
              <p className="text-gray-600">
                Set up email, SMS, and webhook notifications. 
                Get alerted when something needs attention.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">REST API</h3>
              <p className="text-gray-600">
                Full REST API access for integration with your existing systems 
                and custom applications.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Tenancy</h3>
              <p className="text-gray-600">
                Manage multiple customers or departments with isolated data 
                and role-based access control.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Ready</h3>
              <p className="text-gray-600">
                Responsive dashboards work perfectly on mobile devices. 
                Monitor your devices on the go.
              </p>
            </div>

            {/* Feature 9 */}
            <div className="bg-white p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                TLS encryption, token-based authentication, and 
                comprehensive audit logs for compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses use our IoT platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Monitor production lines, track equipment performance, 
                predict maintenance needs, and optimize operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time production monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Predictive maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Quality control automation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Agriculture</h3>
              <p className="text-gray-600 mb-4">
                Smart farming with soil monitoring, climate control, 
                irrigation automation, and crop health tracking.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Soil moisture & temperature
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Automated irrigation systems
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Weather station integration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Buildings</h3>
              <p className="text-gray-600 mb-4">
                Monitor and control building systems like HVAC, lighting, 
                security, and energy consumption.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Energy management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Occupancy monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Climate control automation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Energy Management</h3>
              <p className="text-gray-600 mb-4">
                Track energy consumption, identify waste, optimize usage, 
                and reduce costs across facilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time power monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Consumption analytics
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Cost optimization alerts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our IoT Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Managed IoT Platform?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🇲🇾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Hosting</h3>
              <p className="text-gray-600">
                Your data stays in Malaysia. Low latency, better performance, 
                and compliance with local data regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Managed</h3>
              <p className="text-gray-600">
                We handle updates, backups, scaling, and maintenance. 
                You focus on your IoT solutions, not infrastructure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Get help from IoT experts who understand your needs. 
                WhatsApp support in your timezone and language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Launching Soon
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Our IoT System is currently in development. 
            Interested in being an early adopter or have specific requirements?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition"
            >
              Contact Us
            </Link>
            <Link 
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition"
            >
              Explore Other Services
            </Link>
          </div>
          <p className="mt-6 text-purple-200">
            We&apos;ll reach out to discuss your IoT needs and how we can help
          </p>
        </div>
      </section>
    </div>
  );
}
