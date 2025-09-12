import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelectionPage() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    // Store role in localStorage for persistence
    localStorage.setItem('userRole', role);
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="gradient-text">Eventara</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose your experience to get started with the future of event management
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Organizer Card */}
          <div 
            onClick={() => handleRoleSelection('organizer')}
            className="glass-dark rounded-3xl p-12 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-8xl mb-8 group-hover:scale-110 transition-all duration-300">🎯</div>
            <h2 className="text-3xl font-bold text-white mb-6 gradient-text">I'm an Organizer</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Create, manage, and analyze events with powerful tools designed for event professionals
            </p>
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Create and manage events</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Track registrations and analytics</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Communicate with attendees</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Generate reports and insights</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
              Start Organizing →
            </button>
          </div>

          {/* Attendee Card */}
          <div 
            onClick={() => handleRoleSelection('attendee')}
            className="glass-dark rounded-3xl p-12 hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-8xl mb-8 group-hover:scale-110 transition-all duration-300">🎪</div>
            <h2 className="text-3xl font-bold text-white mb-6 gradient-text">I'm an Attendee</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Discover, register, and participate in amazing events with seamless experience
            </p>
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Discover and browse events</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Register and make payments</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Form teams and collaborate</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Track your event history</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 neon-green">
              Start Attending →
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            You can switch between roles anytime • No account required to get started
          </p>
        </div>
      </div>
    </div>
  );
}
