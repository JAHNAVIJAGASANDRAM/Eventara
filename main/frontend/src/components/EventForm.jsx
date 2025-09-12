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
    <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create Event</h2>
      <div className="grid gap-4">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Event Title"
          className="border rounded p-2" required />
        <input name="organizer" value={form.organizer} onChange={handleChange} placeholder="Organizer"
          className="border rounded p-2" required />
        <input name="type" value={form.type} onChange={handleChange} placeholder="Type (Hackathon/Conf)"
          className="border rounded p-2" required />
        <input type="date" name="date" value={form.date} onChange={handleChange}
          className="border rounded p-2" required />
        <textarea name="description" value={form.description} onChange={handleChange}
          placeholder="Description" className="border rounded p-2" required />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Create
        </button>
      </div>
    </form>
  );
}
