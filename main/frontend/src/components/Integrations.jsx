import React, { useState } from "react";

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const integrations = [
    {
      category: 'calendar',
      name: 'Google Calendar',
      description: 'Sync events and manage schedules seamlessly',
      icon: '📅',
      status: 'connected',
      features: ['Event Sync', 'Reminder Notifications', 'Schedule Management']
    },
    {
      category: 'calendar',
      name: 'Microsoft Outlook',
      description: 'Integrate with Outlook for enterprise scheduling',
      icon: '📧',
      status: 'available',
      features: ['Calendar Sync', 'Meeting Invites', 'Team Scheduling']
    },
    {
      category: 'payment',
      name: 'Stripe',
      description: 'Secure payment processing for events and tickets',
      icon: '💳',
      status: 'connected',
      features: ['Payment Processing', 'Refund Management', 'Invoice Generation']
    },
    {
      category: 'payment',
      name: 'PayPal',
      description: 'Alternative payment gateway with global reach',
      icon: '💰',
      status: 'available',
      features: ['Global Payments', 'Buyer Protection', 'Mobile Payments']
    },
    {
      category: 'social',
      name: 'LinkedIn',
      description: 'Professional networking and event promotion',
      icon: '💼',
      status: 'connected',
      features: ['Event Promotion', 'Professional Networking', 'Content Sharing']
    },
    {
      category: 'social',
      name: 'Twitter',
      description: 'Real-time updates and social engagement',
      icon: '🐦',
      status: 'available',
      features: ['Live Updates', 'Hashtag Tracking', 'Social Engagement']
    },
    {
      category: 'development',
      name: 'GitHub',
      description: 'Code repository integration for hackathons',
      icon: '🐙',
      status: 'connected',
      features: ['Repository Management', 'Code Collaboration', 'Project Tracking']
    },
    {
      category: 'development',
      name: 'GitLab',
      description: 'Alternative Git platform with CI/CD integration',
      icon: '🦊',
      status: 'available',
      features: ['Git Management', 'CI/CD Pipeline', 'Issue Tracking']
    },
    {
      category: 'communication',
      name: 'Slack',
      description: 'Team communication and notifications',
      icon: '💬',
      status: 'connected',
      features: ['Team Chat', 'Bot Notifications', 'File Sharing']
    },
    {
      category: 'communication',
      name: 'Discord',
      description: 'Community building and voice chat',
      icon: '🎮',
      status: 'available',
      features: ['Voice Channels', 'Community Management', 'Bot Integration']
    },
    {
      category: 'analytics',
      name: 'Google Analytics',
      description: 'Website and event performance tracking',
      icon: '📊',
      status: 'connected',
      features: ['Traffic Analysis', 'User Behavior', 'Conversion Tracking']
    },
    {
      category: 'analytics',
      name: 'Mixpanel',
      description: 'Advanced event tracking and user analytics',
      icon: '📈',
      status: 'available',
      features: ['Event Tracking', 'User Segmentation', 'Funnel Analysis']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Integrations', count: integrations.length },
    { id: 'calendar', name: 'Calendar', count: integrations.filter(i => i.category === 'calendar').length },
    { id: 'payment', name: 'Payment', count: integrations.filter(i => i.category === 'payment').length },
    { id: 'social', name: 'Social Media', count: integrations.filter(i => i.category === 'social').length },
    { id: 'development', name: 'Development', count: integrations.filter(i => i.category === 'development').length },
    { id: 'communication', name: 'Communication', count: integrations.filter(i => i.category === 'communication').length },
    { id: 'analytics', name: 'Analytics', count: integrations.filter(i => i.category === 'analytics').length }
  ];

  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeCategory);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with your favorite tools and services to create a unified event management ecosystem
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-blue'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredIntegrations.map((integration, index) => (
            <div key={index} className="glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{integration.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  integration.status === 'connected' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {integration.status === 'connected' ? '✅ Connected' : '🔗 Available'}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{integration.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{integration.description}</p>
              
              <div className="space-y-2 mb-6">
                {integration.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                integration.status === 'connected'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 group-hover:neon-blue'
              }`}>
                {integration.status === 'connected' ? 'Manage' : 'Connect'}
              </button>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="glass-dark rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Integration Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Automated Workflows</h4>
              <p className="text-gray-300 text-sm">Streamline processes with automated notifications and data sync</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-lg font-semibold text-white mb-2">Secure Data</h4>
              <p className="text-gray-300 text-sm">Enterprise-grade security with encrypted data transmission</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-semibold text-white mb-2">Unified Analytics</h4>
              <p className="text-gray-300 text-sm">Consolidate data from all platforms for comprehensive insights</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold text-white mb-2">Easy Setup</h4>
              <p className="text-gray-300 text-sm">One-click integration with guided setup and configuration</p>
            </div>
          </div>
        </div>

        {/* Custom Integration */}
        <div className="text-center">
          <div className="glass-dark rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Need a Custom Integration?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We can build custom integrations for your specific tools and workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
                🔧 Request Integration
              </button>
              <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                📚 API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
