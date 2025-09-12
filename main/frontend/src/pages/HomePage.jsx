import React from 'react';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import AnalyticsCard from '../components/AnalyticsCard';
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';
import EventBuilder from '../components/EventBuilder';
import { useState } from 'react';

export default function HomePage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'React Summit',
      organizer: 'Open Community',
      type: 'Conference',
      date: '2025-10-20',
      description: 'A conference about everything React.',
      registered: 25,
      seats: 100,
    },
  ]);
  const [isEventBuilderOpen, setIsEventBuilderOpen] = useState(false);

  const handleCreate = (newEvent) => {
    setEvents((prev) => [newEvent, ...prev]);
  };

  const handleView = (event) => {
    alert(`Viewing: ${event.title}`);
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Feature Cards */}
      <FeatureCards />

      {/* Analytics Cards */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-12">
        <AnalyticsCard title="Total Events" value={events.length} />
        <AnalyticsCard title="Total Registrations" value={events.reduce((sum, e) => sum + e.registered, 0)} />
        <AnalyticsCard title="Avg. Capacity Used" value={`${Math.round(
          events.length
            ? (events.reduce((sum, e) => sum + e.registered, 0) /
                events.reduce((sum, e) => sum + e.seats, 0)) * 100
            : 0
        )}%`} />
      </div>

      {/* Event Cards */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onView={handleView} />
        ))}
      </div>

      {/* Event Form */}
      <div className="max-w-2xl w-full mx-auto px-6 pb-12">
        <EventForm onCreate={handleCreate} />
      </div>

      {/* Event Builder Modal */}
      <EventBuilder 
        isOpen={isEventBuilderOpen} 
        onClose={() => setIsEventBuilderOpen(false)} 
      />
    </>
  );
}
