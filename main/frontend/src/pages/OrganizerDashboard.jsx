import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrganizerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('events');
  const [events, setEvents] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [attendeeRegistrations, setAttendeeRegistrations] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    price: '',
    category: 'hackathon'
  });

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('organizerEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
    const savedRegs = localStorage.getItem('attendeeRegistrations');
    if (savedRegs) {
      setAttendeeRegistrations(JSON.parse(savedRegs));
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('organizerEvents', JSON.stringify(events));
  }, [events]);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (editingEventId) {
      // Update existing event
      setEvents(events.map(event =>
        event.id === editingEventId
          ? { ...event, ...newEvent }
          : event
      ));
    } else {
      // Create new event
      const event = {
        id: Date.now(),
        ...newEvent,
        registrations: 0,
        status: 'active',
        createdAt: new Date().toISOString()
      };
      setEvents([...events, event]);
    }
    setNewEvent({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      capacity: '',
      price: '',
      category: 'hackathon'
    });
    setEditingEventId(null);
    setShowCreateForm(false);
  };

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(event => event.id !== eventId));
    }
  };

  const handleToggleEventStatus = (eventId) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, status: event.status === 'active' ? 'inactive' : 'active' }
        : event
    ));
  };

  const handleOpenEditEvent = (event) => {
    setNewEvent({
      title: event.title || '',
      description: event.description || '',
      date: event.date || '',
      time: event.time || '',
      location: event.location || '',
      capacity: event.capacity || '',
      price: event.price || '',
      category: event.category || 'hackathon'
    });
    setEditingEventId(event.id);
    setShowCreateForm(true);
  };

  const handleDuplicateEvent = (event) => {
    const clone = {
      ...event,
      id: Date.now(),
      title: `${event.title} (Copy)`,
      createdAt: new Date().toISOString(),
      registrations: 0,
      status: 'inactive'
    };
    setEvents([clone, ...events]);
  };

  const exportArrayToCsv = (rows, filename) => {
    if (!rows || rows.length === 0) return;
    const headers = Object.keys(rows[0]);
    const csv = [headers.join(','), ...rows.map(r => headers.map(h => {
      const v = r[h] ?? '';
      const s = String(v).replace(/"/g, '""');
      return /[",\n]/.test(s) ? `"${s}` + '"' : s;
    }).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExportEvents = () => {
    exportArrayToCsv(events, 'events.csv');
  };

  const handleExportAttendees = () => {
    exportArrayToCsv(attendeeRegistrations, 'attendees.csv');
  };

  const totalEvents = events.length;
  const activeEvents = events.filter(e => e.status === 'active').length;
  const totalRegistrations = events.reduce((sum, e) => sum + e.registrations, 0);
  const totalRevenue = events.reduce((sum, e) => sum + (e.registrations * parseFloat(e.price || 0)), 0);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Organizer Dashboard</h1>
            <p className="text-gray-300">Manage your events and track performance</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue"
            >
              + Create Event
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass-dark p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{totalEvents}</div>
            <div className="text-gray-300">Total Events</div>
          </div>
          <div className="glass-dark p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{activeEvents}</div>
            <div className="text-gray-300">Active Events</div>
          </div>
          <div className="glass-dark p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{totalRegistrations}</div>
            <div className="text-gray-300">Total Registrations</div>
          </div>
          <div className="glass-dark p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">${totalRevenue.toFixed(0)}</div>
            <div className="text-gray-300">Total Revenue</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {['events', 'analytics', 'attendees'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-blue'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <div className="ml-auto flex gap-3">
            <button onClick={handleExportEvents} className="px-4 py-3 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">Export Events CSV</button>
            <button onClick={handleExportAttendees} className="px-4 py-3 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300">Export Attendees CSV</button>
          </div>
        </div>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Events</h2>
            {events.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-white mb-2">No events yet</h3>
                <p className="text-gray-300 mb-6">Create your first event to get started</p>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Create Event
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        event.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {event.status}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div>📅 {event.date} at {event.time}</div>
                      <div>📍 {event.location}</div>
                      <div>👥 {event.registrations}/{event.capacity} registered</div>
                      <div>💰 ${event.price}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggleEventStatus(event.id)}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          event.status === 'active'
                            ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                            : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        }`}
                      >
                        {event.status === 'active' ? 'Deactivate' : 'Activate'}
                      </button>
                      <button
                        onClick={() => handleOpenEditEvent(event)}
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDuplicateEvent(event)}
                        className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-300"
                      >
                        Duplicate
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Analytics Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Event Performance</h3>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="glass p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{event.title}</span>
                        <span className="text-blue-400 font-semibold">{event.registrations} registrations</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                          style={{width: `${(event.registrations / parseInt(event.capacity)) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">{totalEvents}</div>
                    <div className="text-gray-300">Total Events Created</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{totalRegistrations}</div>
                    <div className="text-gray-300">Total Registrations</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">${totalRevenue.toFixed(0)}</div>
                    <div className="text-gray-300">Total Revenue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attendees Tab */}
        {activeTab === 'attendees' && (
          <div className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Attendee Management</h2>
            {events.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-white mb-2">No events to show</h3>
                <p className="text-gray-300">Create an event to manage attendees</p>
              </div>
            ) : (
              <div className="space-y-6">
                {events.map((event) => {
                  const regs = attendeeRegistrations.filter(r => r.eventId === event.id);
                  return (
                    <div key={event.id} className="glass p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">{event.title}</h3>
                          <p className="text-sm text-gray-400">{regs.length} attendee{regs.length !== 1 ? 's' : ''}</p>
                        </div>
                        <div className="text-sm text-gray-400">{event.date} • {event.time}</div>
                      </div>
                      {regs.length === 0 ? (
                        <div className="text-gray-400 text-sm">No attendees registered yet.</div>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-left text-sm">
                            <thead className="text-gray-400">
                              <tr>
                                <th className="py-2 pr-4">Name</th>
                                <th className="py-2 pr-4">Email</th>
                                <th className="py-2 pr-4">Team</th>
                                <th className="py-2 pr-4">Registered</th>
                                <th className="py-2 pr-4">Status</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-200">
                              {regs.map(r => (
                                <tr key={r.id} className="border-t border-white/10">
                                  <td className="py-2 pr-4">{r.name}</td>
                                  <td className="py-2 pr-4">{r.email}</td>
                                  <td className="py-2 pr-4">{r.teamName || '-'}</td>
                                  <td className="py-2 pr-4">{new Date(r.registeredAt).toLocaleDateString()}</td>
                                  <td className="py-2 pr-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${r.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                      {r.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Create Event Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{editingEventId ? 'Edit Event' : 'Create New Event'}</h2>
                <button 
                  onClick={() => setShowCreateForm(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleCreateEvent} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Event Title</label>
                    <input
                      type="text"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Enter event title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={newEvent.category}
                      onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="hackathon">Hackathon</option>
                      <option value="conference">Conference</option>
                      <option value="workshop">Workshop</option>
                      <option value="webinar">Webinar</option>
                      <option value="meetup">Meetup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Describe your event"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                    <input
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                    <input
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                    <input
                      type="text"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Event location"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Capacity</label>
                    <input
                      type="number"
                      value={newEvent.capacity}
                      onChange={(e) => setNewEvent({...newEvent, capacity: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Max attendees"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price ($)</label>
                  <input
                    type="number"
                    value={newEvent.price}
                    onChange={(e) => setNewEvent({...newEvent, price: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="0 for free events"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 neon-blue"
                  >
                    {editingEventId ? 'Save Changes' : 'Create Event'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowCreateForm(false); setEditingEventId(null); }}
                    className="flex-1 glass text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
