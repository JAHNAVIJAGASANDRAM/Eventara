import React, { useState } from "react";

export default function AIDashboard() {
  const [activeTab, setActiveTab] = useState('recommendations');
  
  const recommendations = [
    {
      type: 'event',
      title: 'AI/ML Hackathon 2024',
      match: 95,
      reason: 'Matches your Python and TensorFlow skills',
      date: '2024-02-15',
      participants: 150
    },
    {
      type: 'team',
      title: 'Team Formation Suggestion',
      match: 88,
      reason: '3 developers with complementary skills available',
      skills: ['React', 'Node.js', 'UI/UX']
    },
    {
      type: 'sponsor',
      title: 'TechCorp Partnership',
      match: 92,
      reason: 'Looking for blockchain expertise',
      budget: '$50,000'
    }
  ];

  const aiInsights = [
    { metric: 'Engagement Score', value: '94%', trend: '+12%', color: 'text-green-400' },
    { metric: 'Skill Match Rate', value: '87%', trend: '+8%', color: 'text-blue-400' },
    { metric: 'Network Growth', value: '156', trend: '+23', color: 'text-purple-400' },
    { metric: 'Event Success Rate', value: '91%', trend: '+5%', color: 'text-pink-400' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of event management with our revolutionary AI that learns, adapts, and optimizes your journey
          </p>
        </div>

        {/* AI Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiInsights.map((insight, index) => (
            <div key={index} className="glass-dark p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
              <div className={`text-3xl font-bold ${insight.color} mb-2`}>
                {insight.value}
              </div>
              <div className="text-sm text-gray-300 mb-1">{insight.metric}</div>
              <div className="text-xs text-green-400">{insight.trend} this month</div>
            </div>
          ))}
        </div>

        {/* AI Recommendations Tabs */}
        <div className="glass-dark rounded-2xl p-8">
          <div className="flex flex-wrap gap-4 mb-8">
            {['recommendations', 'matching', 'insights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-blue'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'recommendations' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Personalized Recommendations</h3>
              {recommendations.map((rec, index) => (
                <div key={index} className="glass p-6 rounded-xl hover:scale-102 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {rec.type.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{rec.title}</h4>
                        <p className="text-gray-300 text-sm">{rec.reason}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{rec.match}%</div>
                      <div className="text-xs text-gray-400">Match Score</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-gray-400">
                      {rec.date && <span>📅 {rec.date}</span>}
                      {rec.participants && <span>👥 {rec.participants} participants</span>}
                      {rec.budget && <span>💰 {rec.budget}</span>}
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'matching' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">AI-Powered Team Matching</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">Skill-Based Matching</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Frontend Development</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Backend Development</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">UI/UX Design</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">Suggested Teams</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                      <div>
                        <div className="text-white text-sm font-medium">Team Alpha</div>
                        <div className="text-gray-400 text-xs">React, Node.js, MongoDB</div>
                      </div>
                      <div className="ml-auto text-green-400 text-sm font-semibold">94%</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                      <div>
                        <div className="text-white text-sm font-medium">Team Beta</div>
                        <div className="text-gray-400 text-xs">Vue.js, Python, PostgreSQL</div>
                      </div>
                      <div className="ml-auto text-green-400 text-sm font-semibold">87%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Predictive Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">Event Success Prediction</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Attendance Rate</span>
                      <span className="text-green-400 font-semibold">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Engagement Score</span>
                      <span className="text-blue-400 font-semibold">8.7/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Success Probability</span>
                      <span className="text-purple-400 font-semibold">91%</span>
                    </div>
                  </div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">Optimization Suggestions</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <div>
                        <div className="text-white text-sm">Schedule sessions in morning slots</div>
                        <div className="text-gray-400 text-xs">+15% engagement expected</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <div className="text-white text-sm">Add networking breaks</div>
                        <div className="text-gray-400 text-xs">+23% satisfaction expected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
