import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signUp } = useAuth();
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const urlParams = new URLSearchParams(location.search);
  const roleFromQuery = urlParams.get('role');
  const role = roleFromQuery || localStorage.getItem('userRole') || 'organizer';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    const { data, error } = await signUp(email, password, {
      full_name: fullName,
      role: role
    });
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.user) {
      setMessage('Check your email for the confirmation link!');
      setLoading(false);
      // Store role for when they confirm and log in
      localStorage.setItem('userRole', role);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-dark rounded-3xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
        <p className="text-gray-400 mb-8">{role === 'organizer' ? 'Organizer account' : 'Attendee account'}</p>

        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded-xl text-red-200 text-sm">
            {error}
          </div>
        )}
        
        {message && (
          <div className="mb-4 p-3 bg-green-900/50 border border-green-500 rounded-xl text-green-200 text-sm">
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Full name</label>
            <input 
              type="text" 
              required 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400">
          <span>Already have an account? </span>
          <Link to={`/login?role=${role}`} className="text-blue-400 hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
}


