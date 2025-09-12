import React, { useState } from "react";

export default function EventForm({ onCreate }) {
  const [form, setForm] = useState({
    title: "",
    organizer: "",
    type: "",
    date: "",
    description: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ ...form, id: Date.now(), registered: 0, seats: 100 });
    setForm({ title: "", organizer: "", type: "", date: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-dark p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-6 gradient-text">Create Event</h2>
      <div className="grid gap-6">
        <input 
          name="title" 
          value={form.title} 
          onChange={handleChange} 
          placeholder="Event Title"
          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
          required 
        />
        <input 
          name="organizer" 
          value={form.organizer} 
          onChange={handleChange} 
          placeholder="Organizer"
          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
          required 
        />
        <input 
          name="type" 
          value={form.type} 
          onChange={handleChange} 
          placeholder="Type (Hackathon/Conference)"
          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={form.date} 
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
          required 
        />
        <textarea 
          name="description" 
          value={form.description} 
          onChange={handleChange}
          placeholder="Description" 
          rows={4}
          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
          required 
        />
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue"
        >
          Create Event
        </button>
      </div>
    </form>
  );
}
