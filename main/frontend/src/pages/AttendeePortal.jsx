import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AttendeePortal() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('discover');
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    priceMin: '',
    priceMax: '',
    location: ''
  });
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    teamName: '',
    skills: ''
  });

  // Load events and registrations from localStorage
  useEffect(() => {
    const savedEvents = localStorage.getItem('organizerEvents');
    const savedRegistrations = localStorage.getItem('attendeeRegistrations');
    const savedFavorites = localStorage.getItem('attendeeFavorites');
    
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
    if (savedRegistrations) {
      setRegisteredEvents(JSON.parse(savedRegistrations));
    }
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save registrations to localStorage
  useEffect(() => {
    localStorage.setItem('attendeeRegistrations', JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  useEffect(() => {
    localStorage.setItem('attendeeFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    const registration = {
      id: Date.now(),
      eventId: selectedEvent.id,
      eventTitle: selectedEvent.title,
      ...registrationForm,
      registeredAt: new Date().toISOString(),
      status: 'confirmed'
    };
    
    setRegisteredEvents([...registeredEvents, registration]);
    
    // Update event registration count
    setEvents(events.map(event => 
      event.id === selectedEvent.id 
        ? { ...event, registrations: event.registrations + 1 }
        : event
    ));
    
    // Save updated events to localStorage
    localStorage.setItem('organizerEvents', JSON.stringify(events.map(event => 
      event.id === selectedEvent.id 
        ? { ...event, registrations: event.registrations + 1 }
        : event
    )));
    
    setShowRegistrationModal(false);
    setRegistrationForm({
      name: '',
      email: '',
      phone: '',
      teamName: '',
      skills: ''
    });
    setSelectedEvent(null);
  };

  const toggleFavorite = (eventId) => {
    setFavorites(prev => prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]);
  };

  const handleCancelRegistration = (registrationId) => {
    if (window.confirm('Are you sure you want to cancel this registration?')) {
      const registration = registeredEvents.find(r => r.id === registrationId);
      const updatedRegistrations = registeredEvents.filter(r => r.id !== registrationId);
      setRegisteredEvents(updatedRegistrations);
      
      // Update event registration count
      const updatedEvents = events.map(event => 
        event.id === registration.eventId 
          ? { ...event, registrations: Math.max(0, event.registrations - 1) }
          : event
      );
      setEvents(updatedEvents);

      // Persist changes to localStorage
      localStorage.setItem('attendeeRegistrations', JSON.stringify(updatedRegistrations));
      localStorage.setItem('organizerEvents', JSON.stringify(updatedEvents));
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const inDateFrom = !filters.dateFrom || (event.date && event.date >= filters.dateFrom);
    const inDateTo = !filters.dateTo || (event.date && event.date <= filters.dateTo);
    const price = parseFloat(event.price || 0);
    const inPriceMin = filters.priceMin === '' || price >= parseFloat(filters.priceMin);
    const inPriceMax = filters.priceMax === '' || price <= parseFloat(filters.priceMax);
    const inLocation = !filters.location || (event.location || '').toLowerCase().includes(filters.location.toLowerCase());
    return matchesSearch && matchesCategory && inDateFrom && inDateTo && inPriceMin && inPriceMax && inLocation && event.status === 'active';
  });

  const categories = ['all', 'hackathon', 'conference', 'workshop', 'webinar', 'meetup'];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Attendee Portal</h1>
            <p className="text-gray-300">Discover and register for amazing events</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 glass text-white rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            ← Back to Home
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-dark p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{filteredEvents.length}</div>
            <div className="text-gray-300">Available Events</div>
          </div>
          <div className="glass-dark p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{registeredEvents.length}</div>
            <div className="text-gray-300">My Registrations</div>
          </div>
          <div className="glass-dark p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              ${registeredEvents.reduce((sum, r) => {
                const event = events.find(e => e.id === r.eventId);
                return sum + (event ? parseFloat(event.price || 0) : 0);
              }, 0).toFixed(0)}
            </div>
            <div className="text-gray-300">Total Spent</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {['discover', 'my-events', 'favorites', 'teams'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white neon-green'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab === 'my-events' ? 'My Events' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Discover Tab */}
        {activeTab === 'discover' && (
          <div className="glass-dark rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                />
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 flex-1">
                <input type="date" value={filters.dateFrom} onChange={(e)=>setFilters({...filters, dateFrom: e.target.value})} className="px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20" />
                <input type="date" value={filters.dateTo} onChange={(e)=>setFilters({...filters, dateTo: e.target.value})} className="px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20" />
                <input type="number" placeholder="Min $" value={filters.priceMin} onChange={(e)=>setFilters({...filters, priceMin: e.target.value})} className="px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20" />
                <input type="number" placeholder="Max $" value={filters.priceMax} onChange={(e)=>setFilters({...filters, priceMax: e.target.value})} className="px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20" />
                <input type="text" placeholder="Location" value={filters.location} onChange={(e)=>setFilters({...filters, location: e.target.value})} className="px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <div className="flex items-center gap-2">
                      <button onClick={() => toggleFavorite(event.id)} className={`px-2 py-1 rounded-full text-xs ${favorites.includes(event.id) ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-500/20 text-gray-400'}`}>{favorites.includes(event.id) ? '★' : '☆'}</button>
                      <div className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                        {event.category}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div>📅 {event.date} at {event.time}</div>
                    <div>📍 {event.location}</div>
                    <div>👥 {event.registrations}/{event.capacity} registered</div>
                    <div>💰 ${event.price || 'Free'}</div>
                  </div>
                  <button
                    onClick={() => handleRegister(event)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-sm font-semibold"
                  >
                    Register Now
                  </button>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
                <p className="text-gray-300">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        )}

        {/* My Events Tab */}
        {activeTab === 'my-events' && (
          <div className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">My Registered Events</h2>
            {registeredEvents.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-white mb-2">No registrations yet</h3>
                <p className="text-gray-300 mb-6">Discover and register for events to see them here</p>
                <button
                  onClick={() => setActiveTab('discover')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Discover Events
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {registeredEvents.map((registration) => {
                  const event = events.find(e => e.id === registration.eventId);
                  return (
                    <div key={registration.id} className="glass p-6 rounded-xl">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{registration.eventTitle}</h3>
                          <div className="space-y-1 text-sm text-gray-400">
                            <div>👤 {registration.name}</div>
                            <div>📧 {registration.email}</div>
                            {registration.teamName && <div>👥 Team: {registration.teamName}</div>}
                            <div>📅 Registered: {new Date(registration.registeredAt).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            registration.status === 'confirmed' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {registration.status}
                          </div>
                          <button
                            onClick={() => handleCancelRegistration(registration.id)}
                            className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300 text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Saved Events</h2>
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-white mb-2">No favorites yet</h3>
                <p className="text-gray-300 mb-6">Tap the star on events to save them here</p>
                <button
                  onClick={() => setActiveTab('discover')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Discover Events
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.filter(e => favorites.includes(e.id) && e.status === 'active').map(event => (
                  <div key={event.id} className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      <button onClick={() => toggleFavorite(event.id)} className="px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400">Remove ★</button>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{event.description}</p>
                    <div className="space-y-2 mb-4 text-sm text-gray-400">
                      <div>📅 {event.date} at {event.time}</div>
                      <div>📍 {event.location}</div>
                      <div>👥 {event.registrations}/{event.capacity} registered</div>
                      <div>💰 ${event.price || 'Free'}</div>
                    </div>
                    <button
                      onClick={() => handleRegister(event)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-sm font-semibold"
                    >
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Teams Tab */}
        {activeTab === 'teams' && (
          <div className="glass-dark rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Team Formation</h2>
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Formation</h3>
              <p className="text-gray-300">Find teammates and collaborate on hackathon projects</p>
            </div>
          </div>
        )}

        {/* Registration Modal */}
        {showRegistrationModal && selectedEvent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Register for {selectedEvent.title}</h2>
                <button 
                  onClick={() => setShowRegistrationModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmitRegistration} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={registrationForm.name}
                      onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={registrationForm.phone}
                    onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Team Name (Optional)</label>
                  <input
                    type="text"
                    value={registrationForm.teamName}
                    onChange={(e) => setRegistrationForm({...registrationForm, teamName: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    placeholder="Enter team name if applicable"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Skills (Optional)</label>
                  <input
                    type="text"
                    value={registrationForm.skills}
                    onChange={(e) => setRegistrationForm({...registrationForm, skills: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    placeholder="e.g., React, Python, Design"
                  />
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Event Details</h3>
                  <div className="text-sm text-gray-300 space-y-1">
                    <div>📅 {selectedEvent.date} at {selectedEvent.time}</div>
                    <div>📍 {selectedEvent.location}</div>
                    <div>💰 ${selectedEvent.price || 'Free'}</div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 neon-green"
                  >
                    Complete Registration
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRegistrationModal(false)}
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
