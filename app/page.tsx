export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
          Payment Processing
          <br />
          Built for the Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Process payments instantly, protect against fraud, and scale globally with NovaPay's modern payment infrastructure.
        </p>
        <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-green-500/50 hover:shadow-green-500/70">
          Get Started Free
        </button>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Instant Transfers */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Instant Transfers</h3>
            <p className="text-gray-400 leading-relaxed">
              Lightning-fast payment processing with real-time settlement. Funds move in seconds, not days.
            </p>
          </div>

          {/* Feature 2: Fraud Protection */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Fraud Protection</h3>
            <p className="text-gray-400 leading-relaxed">
              Advanced AI-powered fraud detection keeps your transactions secure 24/7 with zero compromises.
            </p>
          </div>

          {/* Feature 3: Global Coverage */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-500/50 transition-all">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Global Coverage</h3>
            <p className="text-gray-400 leading-relaxed">
              Accept payments from 180+ countries with multi-currency support and local payment methods.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          Choose the plan that fits your business needs
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">Free</span>
              <span className="text-gray-400 ml-2">forever</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Up to 100 transactions/month</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Basic fraud protection</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Email support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Standard settlement (2-3 days)</span>
              </li>
            </ul>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-all">
              Start Free
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-gradient-to-br from-green-950/50 to-emerald-950/50 backdrop-blur-sm border-2 border-green-500 rounded-2xl p-8 relative hover:shadow-xl hover:shadow-green-500/20 transition-all">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Business</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold">$49</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Unlimited transactions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Advanced AI fraud protection</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Priority 24/7 support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Instant settlement (same day)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Custom integrations & API access</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-semibold transition-all shadow-lg shadow-green-500/50">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Payments?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Join thousands of businesses processing billions in payments with NovaPay
        </p>
        <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-5 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-green-500/50 hover:shadow-green-500/70">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 text-center text-gray-500">
        <p>&copy; 2026 NovaPay. All rights reserved.</p>
      </footer>
    </div>
  );
}
