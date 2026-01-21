import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3,
  Zap,
  Globe,
  Bitcoin,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Real-time Trading',
      description: 'Execute trades instantly with our high-performance trading engine.',
    },
    {
      icon: Shield,
      title: 'Bank-level Security',
      description: 'Your assets are protected with industry-leading security measures.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience sub-second execution times and instant settlements.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive charts and analysis tools for informed decisions.',
    },
  ]

  const stats = [
    { label: 'Active Users', value: '500K+', icon: Users },
    { label: 'Trading Volume', value: '$10B+', icon: BarChart3 },
    { label: 'Countries', value: '150+', icon: Globe },
    { label: 'Uptime', value: '99.9%', icon: Shield },
  ]

  const cryptocurrencies = [
    { name: 'Bitcoin', symbol: 'BTC', icon: Bitcoin, change: '+2.5%', price: '$45,234' },
    { name: 'Ethereum', symbol: 'ETH', icon: BarChart3, change: '+1.8%', price: '$2,845' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-bg dark:to-dark-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Trade Crypto with
                <span className="gradient-text"> Confidence</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of traders who trust CryptoFlow for secure, fast, and reliable cryptocurrency trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/dashboard"
                  className="btn-outline px-8 py-4 text-lg border-gray-300 dark:border-gray-600"
                >
                  View Dashboard
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Crypto Prices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {cryptocurrencies.map((crypto) => (
              <div key={crypto.symbol} className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg border border-gray-200 dark:border-dark-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <crypto.icon className="h-8 w-8 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{crypto.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{crypto.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{crypto.price}</p>
                    <p className="text-sm text-green-600">{crypto.change}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose CryptoFlow?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of cryptocurrency trading with our cutting-edge platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg border border-gray-200 dark:border-dark-border h-full">
                  <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of satisfied traders and start your cryptocurrency journey today.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
