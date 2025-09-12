import React, { useState } from "react";

export default function MobileSustainability() {
  const [activeTab, setActiveTab] = useState('mobile');
  
  const pwaFeatures = [
    {
      icon: '📱',
      title: 'Progressive Web App',
      description: 'Native app-like experience in your browser',
      features: ['Offline Support', 'Push Notifications', 'App-like UI', 'Fast Loading']
    },
    {
      icon: '🔔',
      title: 'Smart Notifications',
      description: 'Personalized notifications based on your preferences',
      features: ['Event Reminders', 'Team Updates', 'Deadline Alerts', 'Custom Schedules']
    },
    {
      icon: '⚡',
      title: 'Offline Capabilities',
      description: 'Access key features even without internet connection',
      features: ['Event Details', 'Team Chat', 'Schedules', 'Documents']
    },
    {
      icon: '🎯',
      title: 'Mobile-First Design',
      description: 'Optimized for mobile devices with touch-friendly interface',
      features: ['Touch Gestures', 'Responsive Layout', 'Fast Performance', 'Battery Efficient']
    }
  ];

  const sustainabilityMetrics = [
    { metric: 'Carbon Footprint Saved', value: '2.4 tons', description: 'CO2 emissions reduced' },
    { metric: 'Paper Saved', value: '15,000 sheets', description: 'Digital-first approach' },
    { metric: 'Travel Reduced', value: '85%', description: 'Virtual event participation' },
    { metric: 'Energy Efficiency', value: '40%', description: 'Optimized cloud infrastructure' }
  ];

  const ecoFeatures = [
    {
      icon: '🌱',
      title: 'Carbon Footprint Calculator',
      description: 'Track and reduce your event\'s environmental impact',
      benefits: ['Real-time tracking', 'Reduction suggestions', 'Sustainability reports', 'Green certifications']
    },
    {
      icon: '♻️',
      title: 'Digital-First Approach',
      description: 'Minimize paper usage with digital solutions',
      benefits: ['Digital tickets', 'Online documentation', 'Virtual handouts', 'Paperless registration']
    },
    {
      icon: '🌍',
      title: 'Virtual Event Options',
      description: 'Reduce travel emissions with immersive virtual experiences',
      benefits: ['VR/AR events', 'Live streaming', 'Remote participation', 'Global accessibility']
    },
    {
      icon: '💚',
      title: 'Green Event Guidelines',
      description: 'AI-powered suggestions for sustainable event planning',
      benefits: ['Eco-friendly venues', 'Sustainable catering', 'Waste reduction', 'Energy efficiency']
    }
  ];

  const mobileStats = [
    { label: 'Mobile Users', value: '78%', color: 'text-blue-400' },
    { label: 'PWA Adoption', value: '92%', color: 'text-green-400' },
    { label: 'Offline Usage', value: '45%', color: 'text-purple-400' },
    { label: 'Push Engagement', value: '67%', color: 'text-pink-400' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mobile-First & <span className="gradient-text">Sustainability</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience seamless mobile performance with our PWA technology while contributing to a sustainable future through eco-friendly event management
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-dark rounded-lg p-1">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              📱 Mobile Experience
            </button>
            <button
              onClick={() => setActiveTab('sustainability')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'sustainability'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              🌱 Sustainability
            </button>
          </div>
        </div>

        {activeTab === 'mobile' && (
          <>
            {/* Mobile Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {mobileStats.map((stat, index) => (
                <div key={index} className="glass-dark p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* PWA Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {pwaFeatures.map((feature, index) => (
                <div key={index} className="glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {feature.features.map((feat, featIndex) => (
                      <div key={featIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Demo */}
            <div className="glass-dark rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Mobile Experience Demo</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">📅</div>
                      <span className="text-white font-medium">Event Reminder</span>
                    </div>
                    <p className="text-gray-300 text-sm">AI Hackathon starts in 2 hours</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm">💬</div>
                      <span className="text-white font-medium">Team Message</span>
                    </div>
                    <p className="text-gray-300 text-sm">New team member joined your project</p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm">🏆</div>
                      <span className="text-white font-medium">Achievement</span>
                    </div>
                    <p className="text-gray-300 text-sm">You earned the "Early Bird" badge!</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 relative">
                    <div className="w-full h-full bg-gradient-to-b from-blue-900 to-purple-900 rounded-2xl flex flex-col items-center justify-center text-white">
                      <div className="text-6xl mb-4">📱</div>
                      <div className="text-center">
                        <div className="text-lg font-bold">Eventara PWA</div>
                        <div className="text-sm text-gray-300">Install for better experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'sustainability' && (
          <>
            {/* Sustainability Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {sustainabilityMetrics.map((metric, index) => (
                <div key={index} className="glass-dark p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-300 mb-1">{metric.metric}</div>
                  <div className="text-xs text-gray-400">{metric.description}</div>
                </div>
              ))}
            </div>

            {/* Eco Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {ecoFeatures.map((feature, index) => (
                <div key={index} className="glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carbon Calculator Demo */}
            <div className="glass-dark rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Carbon Footprint Calculator</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="glass p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Event Type</span>
                        <span className="text-gray-400 text-sm">Hackathon</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Participants</span>
                        <span className="text-gray-400 text-sm">250 people</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div className="glass p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Travel Distance</span>
                        <span className="text-gray-400 text-sm">Virtual (0 km)</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <div className="text-3xl font-bold text-green-400 mb-2">2.4 tons</div>
                    <div className="text-gray-300">CO2 emissions saved</div>
                    <div className="text-sm text-gray-400 mt-2">Equivalent to planting 55 trees</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-dark rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              {activeTab === 'mobile' ? 'Install Our PWA' : 'Join the Green Revolution'}
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {activeTab === 'mobile' 
                ? 'Get the full mobile experience with our Progressive Web App'
                : 'Make your events sustainable and environmentally friendly'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
                {activeTab === 'mobile' ? '📱 Install PWA' : '🌱 Start Green Event'}
              </button>
              <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                {activeTab === 'mobile' ? '📚 Learn More' : '📊 View Impact'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
