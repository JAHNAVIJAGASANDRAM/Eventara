import React, { useState } from "react";

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  
  const analyticsData = {
    overview: [
      { label: 'Total Events', value: '1,247', change: '+12%', color: 'text-blue-400' },
      { label: 'Active Participants', value: '15,832', change: '+8%', color: 'text-green-400' },
      { label: 'Revenue Generated', value: '$2.4M', change: '+23%', color: 'text-purple-400' },
      { label: 'Success Rate', value: '94%', change: '+5%', color: 'text-pink-400' }
    ],
    engagement: [
      { metric: 'Average Session Duration', value: '2h 34m', trend: '+15%' },
      { metric: 'Page Views', value: '45,678', trend: '+8%' },
      { metric: 'Bounce Rate', value: '12%', trend: '-3%' },
      { metric: 'Return Visitors', value: '68%', trend: '+12%' }
    ],
    predictions: [
      { title: 'Next Month Attendance', prediction: '18,500', confidence: '87%', trend: 'up' },
      { title: 'Revenue Forecast', prediction: '$2.8M', confidence: '92%', trend: 'up' },
      { title: 'Event Success Rate', prediction: '96%', confidence: '89%', trend: 'up' },
      { title: 'Participant Satisfaction', prediction: '9.2/10', confidence: '85%', trend: 'up' }
    ]
  };

  const eventTypes = [
    { name: 'Hackathons', count: 45, revenue: '$850K', growth: '+18%' },
    { name: 'Conferences', count: 32, revenue: '$1.2M', growth: '+12%' },
    { name: 'Workshops', count: 78, revenue: '$320K', growth: '+25%' },
    { name: 'Webinars', count: 156, revenue: '$180K', growth: '+8%' }
  ];

  const topPerformers = [
    { name: 'TechCrunch Disrupt 2024', participants: 2500, rating: 9.8, revenue: '$450K' },
    { name: 'AI Innovation Summit', participants: 1800, rating: 9.6, revenue: '$320K' },
    { name: 'Blockchain Hackathon', participants: 1200, rating: 9.4, revenue: '$280K' },
    { name: 'Startup Pitch Competition', participants: 950, rating: 9.2, revenue: '$180K' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="gradient-text">Analytics Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gain deep insights into your events with advanced analytics, predictive modeling, and real-time performance tracking
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex justify-center mb-12">
          <div className="glass-dark rounded-lg p-1">
            {['24h', '7d', '30d', '90d', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                  timeRange === range
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {analyticsData.overview.map((metric, index) => (
            <div key={index} className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-300">{metric.label}</h3>
                <div className="text-green-400 text-sm font-semibold">{metric.change}</div>
              </div>
              <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Engagement Metrics */}
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Engagement Metrics</h3>
            <div className="space-y-6">
              {analyticsData.engagement.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{metric.metric}</div>
                    <div className="text-gray-400 text-sm">{metric.trend}</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Types Performance */}
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Event Types Performance</h3>
            <div className="space-y-4">
              {eventTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass rounded-lg">
                  <div>
                    <div className="text-white font-medium">{type.name}</div>
                    <div className="text-gray-400 text-sm">{type.count} events</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{type.revenue}</div>
                    <div className="text-green-400 text-sm">{type.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Predictive Analytics */}
        <div className="glass-dark rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Predictive Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsData.predictions.map((prediction, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-white mb-2">{prediction.prediction}</div>
                <div className="text-sm text-gray-300 mb-2">{prediction.title}</div>
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    prediction.trend === 'up' ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                  <span className="text-xs text-gray-400">{prediction.confidence} confidence</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Events */}
        <div className="glass-dark rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Top Performing Events</h3>
          <div className="space-y-4">
            {topPerformers.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-6 glass rounded-xl hover:scale-102 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{event.name}</div>
                    <div className="text-gray-400 text-sm">{event.participants.toLocaleString()} participants</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-white font-semibold">{event.rating}/10</div>
                    <div className="text-gray-400 text-sm">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold">{event.revenue}</div>
                    <div className="text-gray-400 text-sm">Revenue</div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export and Share Options */}
        <div className="mt-16 text-center">
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Export & Share Analytics</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Generate comprehensive reports and share insights with stakeholders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
                📊 Generate Report
              </button>
              <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                📧 Email Dashboard
              </button>
              <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                🔗 Share Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
