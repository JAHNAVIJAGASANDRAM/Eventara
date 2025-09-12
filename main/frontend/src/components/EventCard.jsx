import React from "react";

export default function EventCard({ event, onView }) {
  return (
    <div className="glass-dark rounded-xl p-6 hover:scale-105 transition-all duration-300 group">
      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
      <p className="text-sm text-gray-300 mb-3">{event.organizer} • {event.type}</p>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{event.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">
          {event.registered}/{event.seats} registered
        </span>
        <button
          onClick={() => onView(event)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold group-hover:neon-blue"
        >
          View
        </button>
      </div>
    </div>
  );
}
