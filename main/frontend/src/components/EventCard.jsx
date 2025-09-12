import React from "react";

export default function EventCard({ event, onView }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-500">{event.organizer} • {event.type}</p>
      <p className="mt-2 text-sm text-gray-700">{event.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {event.registered}/{event.seats} registered
        </span>
        <button
          onClick={() => onView(event)}
          className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          View
        </button>
      </div>
    </div>
  );
}
