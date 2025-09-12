import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        Eventara
      </Link>
      <div className="flex gap-6">
        <Link to="/events" className="hover:text-indigo-600">Events</Link>
        <Link to="/organizer" className="hover:text-indigo-600">Organizer</Link>
        <Link to="/login" className="hover:text-indigo-600">Login</Link>
      </div>
    </nav>
  );
}
