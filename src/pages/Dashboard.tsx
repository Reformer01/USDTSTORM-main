import { useState } from 'react'
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const portfolioData = [
    { name: 'Jan', value: 4000, profit: 2400 },
    { name: 'Feb', value: 3000, profit: 1398 },
    { name: 'Mar', value: 2000, profit: 9800 },
    { name: 'Apr', value: 2780, profit: 3908 },
    { name: 'May', value: 1890, profit: 4800 },
    { name: 'Jun', value: 2390, profit: 3800 },
  ]

  const stats = [
    {
      label: 'Total Balance',
      value: '$45,234.56',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      label: '24h Change',
      value: '+$1,234.56',
      change: '+2.8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      label: 'Active Trades',
      value: '12',
      change: '+3',
      trend: 'up',
      icon: BarChart3,
      color: 'text-blue-600'
    },
    {
      label: 'Total Profit',
      value: '$8,456.78',
      change: '+18.2%',
      trend: 'up',
      icon: Activity,
      color: 'text-green-600'
    }
  ]

  const recentTransactions = [
    { id: 1, type: 'Buy', asset: 'BTC', amount: '0.0234', price: '$45,234', time: '2 hours ago', status: 'completed' },
    { id: 2, type: 'Sell', asset: 'ETH', amount: '1.5', price: '$2,845', time: '5 hours ago', status: 'completed' },
    { id: 3, type: 'Buy', asset: 'SOL', amount: '50', price: '$98', time: '1 day ago', status: 'pending' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white dark:bg-dark-card shadow-lg"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border transition-transform duration-300`}>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">CryptoFlow</h2>
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg">
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-border rounded-lg">
                <TrendingUp className="h-5 w-5" />
                <span>Trading</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-border rounded-lg">
                <DollarSign className="h-5 w-5" />
                <span>Portfolio</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-border rounded-lg">
                <Activity className="h-5 w-5" />
                <span>Transactions</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300">Welcome back! Here's your trading overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-gray-200 dark:border-dark-border">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <div className={`flex items-center text-sm ${stat.color}`}>
                      {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                      <span className="ml-1">{stat.change}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-gray-200 dark:border-dark-border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={portfolioData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                      labelStyle={{ color: '#f3f4f6' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-gray-200 dark:border-dark-border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profit Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={portfolioData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                      labelStyle={{ color: '#f3f4f6' }}
                    />
                    <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-sm border border-gray-200 dark:border-dark-border">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Transactions</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-dark-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Type</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Asset</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Price</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Time</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-gray-100 dark:border-dark-border">
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.type === 'Buy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{transaction.asset}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{transaction.amount}</td>
                        <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{transaction.price}</td>
                        <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">{transaction.time}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
