const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing and using CryptoFlow, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CryptoFlow provides a cryptocurrency trading platform that allows users to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Buy and sell cryptocurrencies</li>
                <li>Store digital assets securely</li>
                <li>Access real-time market data</li>
                <li>Use trading tools and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a user of CryptoFlow, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws</li>
                <li>Not engage in fraudulent activities</li>
                <li>Use the platform responsibly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Trading Risks
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cryptocurrency trading involves significant risks:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Market volatility and price fluctuations</li>
                <li>Potential loss of entire investment</li>
                <li>Regulatory uncertainties</li>
                <li>Technical and security risks</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                You should only trade what you can afford to lose and consider seeking professional advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Fees and Charges
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                CryptoFlow charges transparent fees for trading services. All fees are clearly 
                displayed before you confirm any transaction. We reserve the right to modify 
                our fee structure with reasonable notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                CryptoFlow is not liable for any losses arising from your use of our services, 
                including but not limited to trading losses, technical issues, or unauthorized 
                access to your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to suspend or terminate your account if you violate these terms 
                or engage in prohibited activities. You may also close your account at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update these terms periodically. Changes will be effective immediately upon 
                posting. Your continued use of the service constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
