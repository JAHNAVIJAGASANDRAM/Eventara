import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="glass-dark px-8 py-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">E</span>
        </div>
        <Link to="/" className="text-2xl font-bold gradient-text">
          Eventara
        </Link>
        <p className="text-sm text-gray-300 ml-2">Innovate. Connect. Experience.</p>
      </div>
      <div className="flex gap-8 items-center">
        <Link to="/ai" className="text-gray-300 hover:text-white transition-colors">AI</Link>
        <Link to="/virtual-events" className="text-gray-300 hover:text-white transition-colors">Virtual Events</Link>
        <Link to="/analytics" className="text-gray-300 hover:text-white transition-colors">Analytics</Link>
        <Link to="/integrations" className="text-gray-300 hover:text-white transition-colors">Integrations</Link>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue">
          Get Started
        </button>
      </div>
    </nav>
  );
}
