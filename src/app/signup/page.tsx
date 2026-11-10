"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    interest: "chatbranch",
    otp: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send OTP to email
    setStep(2);
  };

  const handleSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Verify OTP and create the account request
    setStep(3);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>✓</div>
          </div>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
            <p className="text-gray-600 mb-6">Tell us about your business and we&apos;ll set up your workspace</p>

            <form onSubmit={handleSubmitStep1} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="ABC Sdn Bhd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="012-345 6789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">I&apos;m interested in</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="chatbranch">ChatBranch (inbox &amp; AI)</option>
                  <option value="iot">IoT System</option>
                  <option value="other">Something else / custom solution</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Continue →
              </button>

              <p className="text-center text-gray-500 text-xs">
                By signing up you agree to our{" "}
                <Link href="/terms" className="text-green-600 hover:underline">Terms &amp; Conditions</Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>.
              </p>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Already have a ChatBranch account?{" "}
              <a href="https://chatbranch.phytolink-venture.com" className="text-green-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        )}

        {/* Step 2: Email Verification */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
            <p className="text-gray-600 mb-6">
              We&apos;ve sent a 6-digit code to <strong>{formData.email}</strong>
            </p>

            <form onSubmit={handleSubmitStep2} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Verification Code</label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center text-2xl tracking-widest"
                  placeholder="000000"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Verify →
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Didn&apos;t receive the code?{" "}
              <button className="text-green-600 hover:underline">
                Resend
              </button>
            </p>

            <button 
              onClick={() => setStep(1)}
              className="w-full text-gray-500 mt-4 hover:text-gray-700"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Aboard!</h2>
            <p className="text-gray-600 mb-6">
              Thanks, {formData.companyName || "there"}! Our team will get back to you within 24 hours
              to set up your workspace and walk you through it.
            </p>

            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                📧 We&apos;ll email your sign-in details once your workspace is ready.
              </p>

              <Link
                href="/chatbranch"
                className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Explore ChatBranch →
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Need help? <Link href="/contact" className="text-green-600 hover:underline">Contact us</Link>
            </p>
          </div>
        )}

        {/* Trust badges */}
        {step !== 3 && (
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Trusted by Malaysian businesses</p>
            <div className="flex justify-center gap-6 text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>🇲🇾 Malaysia</span>
              <span>💬 Local support</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
