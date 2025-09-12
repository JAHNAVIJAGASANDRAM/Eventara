import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic cityscape background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Neon cityscape effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div className="flex justify-between items-end h-full px-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gradient-to-t from-blue-500/30 to-purple-500/30 w-8 rounded-t-lg" 
                 style={{height: `${Math.random() * 100 + 50}px`}}></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          HOST THE <span className="gradient-text">FUTURE</span><br />
          OF EVENTS
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          <span className="text-blue-400 font-semibold">AI-Powered</span> | 
          <span className="text-pink-400 font-semibold"> Immersive</span>, 
          <span className="text-purple-400 font-semibold"> Seamless</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
            Start Building
          </button>
          <button className="glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 3}s`,
                 animationDuration: `${2 + Math.random() * 2}s`
               }}></div>
        ))}
      </div>
    </section>
  );
}
