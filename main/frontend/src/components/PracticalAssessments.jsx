import React, { useState } from "react";

export default function PracticalAssessments() {
  const [activeAssessment, setActiveAssessment] = useState('event-planning');
  const [assessmentResults, setAssessmentResults] = useState(null);
  
  const assessments = [
    {
      id: 'event-planning',
      title: 'Event Planning Challenge',
      icon: '📅',
      description: 'Plan and organize a mock hackathon event using our platform',
      duration: '45 minutes',
      difficulty: 'Intermediate',
      skills: ['Event Management', 'Team Coordination', 'Resource Planning', 'Timeline Management']
    },
    {
      id: 'analytics',
      title: 'Analytics Analysis',
      icon: '📊',
      description: 'Analyze sample event data and provide insights',
      duration: '30 minutes',
      difficulty: 'Beginner',
      skills: ['Data Analysis', 'Reporting', 'Insights Generation', 'Visualization']
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Evaluation',
      icon: '🎨',
      description: 'Evaluate platform usability and suggest improvements',
      duration: '25 minutes',
      difficulty: 'Beginner',
      skills: ['User Experience', 'Interface Design', 'Usability Testing', 'Feedback Analysis']
    },
    {
      id: 'integration',
      title: 'Integration Setup',
      icon: '🔗',
      description: 'Configure integrations with external tools',
      duration: '35 minutes',
      difficulty: 'Advanced',
      skills: ['API Integration', 'Configuration', 'Testing', 'Troubleshooting']
    }
  ];

  const mockEventData = {
    attendance: 1250,
    engagement: 87,
    satisfaction: 9.2,
    revenue: 45000,
    sessions: 24,
    speakers: 12
  };

  const handleStartAssessment = (assessmentId) => {
    setActiveAssessment(assessmentId);
    // Simulate assessment completion
    setTimeout(() => {
      setAssessmentResults({
        score: Math.floor(Math.random() * 20) + 80,
        feedback: generateAIFeedback(assessmentId),
        recommendations: generateRecommendations(assessmentId)
      });
    }, 2000);
  };

  const generateAIFeedback = (assessmentId) => {
    const feedbacks = {
      'event-planning': [
        "Excellent event structure and timeline planning. Your resource allocation shows strong organizational skills.",
        "Consider adding more networking opportunities between sessions to increase engagement.",
        "Great use of our platform features for participant management and communication."
      ],
      'analytics': [
        "Strong analytical thinking demonstrated in your data interpretation.",
        "Your insights on participant engagement patterns are valuable for future events.",
        "Consider diving deeper into demographic analysis for better targeting."
      ],
      'ui-ux': [
        "Good eye for user experience issues. Your suggestions for navigation improvements are spot-on.",
        "The accessibility recommendations show strong understanding of inclusive design.",
        "Consider mobile-first design principles for better cross-device experience."
      ],
      'integration': [
        "Solid technical implementation with proper error handling.",
        "Your API integration approach follows best practices for security.",
        "Consider adding more comprehensive testing scenarios for edge cases."
      ]
    };
    return feedbacks[assessmentId] || [];
  };

  const generateRecommendations = (assessmentId) => {
    const recommendations = {
      'event-planning': [
        "Explore our AI-powered participant matching feature",
        "Use our sustainability calculator for eco-friendly events",
        "Consider virtual event options to increase accessibility"
      ],
      'analytics': [
        "Set up automated reporting dashboards",
        "Implement predictive analytics for future events",
        "Create custom metrics for your specific event types"
      ],
      'ui-ux': [
        "Test with real users for validation",
        "Implement A/B testing for key features",
        "Consider accessibility guidelines (WCAG 2.1)"
      ],
      'integration': [
        "Explore our webhook system for real-time updates",
        "Consider implementing custom API endpoints",
        "Set up monitoring and alerting for integration health"
      ]
    };
    return recommendations[assessmentId] || [];
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Practical <span className="gradient-text">Assessments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your skills with hands-on challenges and receive AI-powered feedback to improve your event management capabilities
          </p>
        </div>

        {/* Assessment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{assessment.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{assessment.title}</h3>
                  <p className="text-gray-300 text-sm">{assessment.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">⏱️</span>
                  <span className="text-gray-300 text-sm">{assessment.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">📊</span>
                  <span className="text-gray-300 text-sm">{assessment.difficulty}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-400 mb-2">Skills Tested:</div>
                <div className="flex flex-wrap gap-2">
                  {assessment.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleStartAssessment(assessment.id)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue"
              >
                Start Assessment
              </button>
            </div>
          ))}
        </div>

        {/* Assessment Results */}
        {assessmentResults && (
          <div className="glass-dark rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Assessment Results</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400 mb-2">{assessmentResults.score}%</div>
                <div className="text-gray-300">Overall Score</div>
                <div className="text-sm text-gray-400 mt-2">Great job! You're ready for real events.</div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-lg font-semibold text-white mb-4">AI Feedback</h4>
                <div className="space-y-3">
                  {assessmentResults.feedback.map((feedback, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 glass rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">{feedback}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sample Data for Analytics Assessment */}
        {activeAssessment === 'analytics' && (
          <div className="glass-dark rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Sample Event Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{mockEventData.attendance.toLocaleString()}</div>
                <div className="text-gray-300">Total Attendance</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{mockEventData.engagement}%</div>
                <div className="text-gray-300">Engagement Rate</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{mockEventData.satisfaction}/10</div>
                <div className="text-gray-300">Satisfaction Score</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">${mockEventData.revenue.toLocaleString()}</div>
                <div className="text-gray-300">Revenue Generated</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{mockEventData.sessions}</div>
                <div className="text-gray-300">Sessions Conducted</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">{mockEventData.speakers}</div>
                <div className="text-gray-300">Speakers</div>
              </div>
            </div>
          </div>
        )}

        {/* AI Feedback System */}
        <div className="glass-dark rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">AI-Powered Feedback System</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">How It Works</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">1</div>
                  <div>
                    <div className="text-white font-medium">Complete Assessment</div>
                    <div className="text-gray-400 text-sm">Work through practical challenges</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">2</div>
                  <div>
                    <div className="text-white font-medium">AI Analysis</div>
                    <div className="text-gray-400 text-sm">Our AI analyzes your performance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">3</div>
                  <div>
                    <div className="text-white font-medium">Personalized Feedback</div>
                    <div className="text-gray-400 text-sm">Receive detailed insights and recommendations</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Feedback Features</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 glass rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Strengths identification</span>
                </div>
                <div className="flex items-center gap-3 p-3 glass rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Improvement suggestions</span>
                </div>
                <div className="flex items-center gap-3 p-3 glass rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Skill development paths</span>
                </div>
                <div className="flex items-center gap-3 p-3 glass rounded-lg">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Best practice recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="text-center">
          <div className="glass-dark rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Earn Your Certification</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Complete all assessments to earn your Eventara Professional Certification
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
                🏆 Start Certification
              </button>
              <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                📚 View Requirements
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
