"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to backend
    setSubmitted(true);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-100">
            We&apos;re here to help. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">phytolinkventure@gmail.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+60 11-3319 9692</p>
                    <p className="text-sm text-gray-500">Quick support for existing customers</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-gray-500">Malaysia Time (GMT+8)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Malaysia</p>
                    <p className="text-sm text-gray-500">Remote-first company</p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Answers</h3>
                <div className="space-y-2">
                  <Link href="/chatbranch" className="block text-green-600 hover:underline">
                    → ChatBranch Features
                  </Link>
                  <Link href="/chatbranch/updates" className="block text-green-600 hover:underline">
                    → What&apos;s New in ChatBranch
                  </Link>
                  <Link href="/privacy#data-deletion" className="block text-green-600 hover:underline">
                    → Delete My Data
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {!submitted ? (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="012-345 6789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="demo">Request a Demo</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="text-green-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Curious about ChatBranch?
          </h2>
          <p className="text-gray-600 mb-6">
            See how one inbox and one AI can answer your customers on every channel.
          </p>
          <Link
            href="/chatbranch"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Explore ChatBranch
          </Link>
        </div>
      </section>
    </div>
  );
}
