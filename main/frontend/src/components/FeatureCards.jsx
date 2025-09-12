import React from "react";
import { Link } from "react-router-dom";

export default function FeatureCards() {
  const features = [
    {
      icon: "🤖",
      title: "AI-POWERED MATCHING",
      description: "Intelligent algorithms connect attendees with relevant events and networking opportunities.",
      link: "/ai"
    },
    {
      icon: "🥽",
      title: "IMMERSIVE VIRTUAL EXPERIENCES",
      description: "Create engaging virtual events with AR/VR integration and interactive features.",
      link: "/virtual-events"
    },
    {
      icon: "💬",
      title: "ADVANCED COLLABORATION",
      description: "Real-time chat, whiteboards, and code editors for seamless teamwork.",
      link: "/collaboration"
    },
    {
      icon: "📊",
      title: "COMPREHENSIVE ANALYTICS",
      description: "Real-time insights and detailed reports to optimize your event performance.",
      link: "/analytics"
    },
    {
      icon: "🔗",
      title: "SEAMLESS INTEGRATIONS",
      description: "Connect with calendars, payments, social media, and development tools.",
      link: "/integrations"
    },
    {
      icon: "🛡️",
      title: "ENTERPRISE SECURITY",
      description: "End-to-end encryption, GDPR compliance, and role-based access control.",
      link: "/security"
    },
    {
      icon: "📱",
      title: "MOBILE & SUSTAINABILITY",
      description: "PWA technology with offline capabilities and carbon footprint tracking.",
      link: "/mobile-sustainability"
    },
    {
      icon: "🎯",
      title: "PRACTICAL ASSESSMENTS",
      description: "Hands-on challenges with AI-powered feedback and certification.",
      link: "/assessments"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our <span className="gradient-text">Revolutionary Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Click on any feature to dive deeper into our advanced capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="block">
              <div className="glass-dark p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 gradient-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <div className="mt-4 text-blue-400 text-sm font-semibold group-hover:text-white transition-colors">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
