import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is CryptoFlow?",
      answer: "CryptoFlow is a modern cryptocurrency trading platform that provides secure, fast, and user-friendly access to digital asset trading. We offer advanced trading tools, real-time market data, and institutional-grade security."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply create an account, verify your identity, deposit funds, and you can start trading immediately. We offer a variety of payment methods and support for multiple cryptocurrencies."
    },
    {
      question: "Is my money safe?",
      answer: "Yes, absolutely. We use bank-level security measures including cold storage for the majority of funds, two-factor authentication, and are fully insured. We're also regulated and comply with international financial standards."
    },
    {
      question: "What cryptocurrencies do you support?",
      answer: "We support all major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and many others. We're constantly adding new assets based on user demand and market conditions."
    },
    {
      question: "What are the trading fees?",
      answer: "Our fee structure is transparent and competitive. We charge a small percentage on trades, with fees decreasing for higher volume traders. There are no hidden fees or deposit charges."
    },
    {
      question: "How long do withdrawals take?",
      answer: "Withdrawal times vary by method and cryptocurrency. Most withdrawals are processed within 1-2 hours, though some may take up to 24 hours depending on network conditions and verification requirements."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via email, live chat, and phone. Our support team is knowledgeable and ready to help with any questions or issues you may have."
    },
    {
      question: "Can I trade on mobile?",
      answer: "Absolutely! CryptoFlow is fully responsive and works great on mobile devices. We also offer native iOS and Android apps for the best mobile trading experience."
    }
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-bg dark:to-dark-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle className="h-16 w-16 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about CryptoFlow and cryptocurrency trading.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={openIndex === index ? "open" : "closed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/help"
                className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                Browse Help Center
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
