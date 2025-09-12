import React, { useState } from "react";

export default function VirtualEvents() {
  const [activeEvent, setActiveEvent] = useState(null);
  
  const virtualEvents = [
    {
      id: 1,
      title: "Metaverse Hackathon 2024",
      type: "VR Hackathon",
      participants: 250,
      duration: "48 hours",
      features: ["VR Development", "AR Integration", "Live Streaming", "3D Collaboration"],
      status: "live",
      thumbnail: "🎮"
    },
    {
      id: 2,
      title: "AI Conference in Virtual Space",
      type: "VR Conference",
      participants: 500,
      duration: "3 days",
      features: ["Keynote Speeches", "Panel Discussions", "Networking Lounges", "Exhibition Halls"],
      status: "upcoming",
      thumbnail: "🤖"
    },
    {
      id: 3,
      title: "Blockchain Workshop",
      type: "AR Workshop",
      participants: 100,
      duration: "4 hours",
      features: ["Interactive Demos", "Hands-on Coding", "Real-time Q&A", "3D Visualizations"],
      status: "upcoming",
      thumbnail: "⛓️"
    }
  ];

  const immersiveFeatures = [
    {
      icon: "🥽",
      title: "VR Integration",
      description: "Full virtual reality support with Oculus, HTC Vive, and WebXR compatibility"
    },
    {
      icon: "📱",
      title: "AR Experiences",
      description: "Augmented reality features for mobile devices and AR glasses"
    },
    {
      icon: "🎯",
      title: "Gamification",
      description: "Leaderboards, badges, achievements, and interactive challenges"
    },
    {
      icon: "💬",
      title: "Real-time Chat",
      description: "Spatial audio, voice chat, and text messaging in virtual environments"
    },
    {
      icon: "📊",
      title: "Live Analytics",
      description: "Real-time engagement tracking and participant behavior analysis"
    },
    {
      icon: "🌐",
      title: "Cross-platform",
      description: "Seamless experience across desktop, mobile, and VR devices"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Immersive <span className="gradient-text">Virtual Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step into the future of events with our cutting-edge VR/AR technology, creating unforgettable experiences that transcend physical boundaries
          </p>
        </div>

        {/* Virtual Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {virtualEvents.map((event) => (
            <div key={event.id} className="glass-dark rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{event.thumbnail}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === 'live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {event.status === 'live' ? '🔴 LIVE' : '⏰ UPCOMING'}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{event.type}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>👥</span>
                    <span>{event.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>⏱️</span>
                    <span>{event.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {event.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                  {event.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                      +{event.features.length - 2} more
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => setActiveEvent(event)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group-hover:neon-blue"
                >
                  {event.status === 'live' ? 'Join Now' : 'Register'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Immersive Features */}
        <div className="glass-dark rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Immersive Technology Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {immersiveFeatures.map((feature, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VR/AR Demo Section */}
        <div className="mt-16 text-center">
          <div className="glass-dark rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Experience the Future</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Try our VR/AR demo and see how immersive events can transform your experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
                🥽 Try VR Demo
              </button>
              <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                📱 Try AR Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
