import { Routes, Route } from 'react-router-dom';
import './App.css'
import "./index.css";
import Navbar from './components/Navbar';
import RoleSelectionPage from './pages/RoleSelectionPage';
import OrganizerDashboard from './pages/OrganizerDashboard';
import AttendeePortal from './pages/AttendeePortal';
import HomePage from './pages/HomePage';
import AIPage from './pages/AIPage';
import VirtualEventsPage from './pages/VirtualEventsPage';
import CollaborationPage from './pages/CollaborationPage';
import AnalyticsPage from './pages/AnalyticsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import SecurityPage from './pages/SecurityPage';
import MobileSustainabilityPage from './pages/MobileSustainabilityPage';
import AssessmentsPage from './pages/AssessmentsPage';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<RoleSelectionPage />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
        <Route path="/attendee" element={<AttendeePortal />} />
        <Route path="/features" element={<HomePage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/virtual-events" element={<VirtualEventsPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/mobile-sustainability" element={<MobileSustainabilityPage />} />
        <Route path="/assessments" element={<AssessmentsPage />} />
      </Routes>
    </div>
  );
}

export default App