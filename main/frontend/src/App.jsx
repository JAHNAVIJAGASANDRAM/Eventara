import { useState } from 'react'
import './App.css'
import "./index.css";
import EventCard from './components/EventCard';
import AnalyticsCard from './components/AnalyticsCard';
import EventForm from './components/EventForm';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/*Analytics Cards */}
      <AnalyticsCard/>
      {/*Event Cards */}
      <EventCard/>
      {/*Event Form */}
      <EventForm/>
      </div>
        
    </>
  )
}

export default App
