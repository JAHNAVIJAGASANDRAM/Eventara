import { Routes, Route } from 'react-router-dom';
import './App.css'
import "./index.css";
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import RoleSelectionPage from './pages/RoleSelectionPage';
import OrganizerDashboard from './pages/OrganizerDashboard';
import AttendeePortal from './pages/AttendeePortal';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/features" element={<HomePage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/virtual-events" element={<VirtualEventsPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/mobile-sustainability" element={<MobileSustainabilityPage />} />
        <Route path="/assessments" element={<AssessmentsPage />} />
        <Route path="/organizer" element={
          <ProtectedRoute>
            <OrganizerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/attendee" element={
          <ProtectedRoute>
            <AttendeePortal />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App