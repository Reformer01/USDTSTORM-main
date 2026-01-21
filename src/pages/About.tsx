import { TrendingUp, Shield, Users, Globe, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Bank-level Security',
      description: 'Your funds are protected with industry-leading security measures and insurance.',
    },
    {
      icon: TrendingUp,
      title: 'Advanced Trading',
      description: 'Professional trading tools and real-time market data for informed decisions.',
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Join over 500,000 traders worldwide in our growing ecosystem.',
    },
    {
      icon: Globe,
      title: 'Worldwide Access',
      description: 'Available in 150+ countries with 24/7 customer support.',
    },
    {
      icon: Award,
      title: 'Regulated Platform',
      description: 'Fully compliant with international financial regulations.',
    },
    {
      icon: Clock,
      title: '24/7 Trading',
      description: 'Trade cryptocurrencies anytime, anywhere without interruptions.',
    },
  ]

  const stats = [
    { value: '500K+', label: 'Active Users' },
    { value: '$10B+', label: 'Trading Volume' },
    { value: '150+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-bg dark:to-dark-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">CryptoFlow</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're building the future of cryptocurrency trading with cutting-edge technology, 
              unmatched security, and a user-centric approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
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
              We combine innovative technology with exceptional service to deliver the best trading experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-lg p-8 shadow-lg border border-gray-200 dark:border-dark-border"
              >
                <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-dark-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                At CryptoFlow, we believe that cryptocurrency trading should be accessible, secure, 
                and profitable for everyone. Our mission is to democratize access to digital assets 
                by providing a platform that combines institutional-grade security with user-friendly design.
              </p>
              <p>
                We're committed to innovation, transparency, and customer success. Every feature we build 
                and every decision we make is guided by our core values: security first, user empowerment, 
                and continuous improvement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
