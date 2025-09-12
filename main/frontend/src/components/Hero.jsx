import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-indigo-50 text-center py-20 px-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Next-Generation Event Management Platform
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Organize, participate, and experience events like never before with AI-driven
        personalization, immersive tools, and seamless collaboration.
      </p>
      <div className="mt-6">
        <Link
          to="/events"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Explore Events
        </Link>
      </div>
    </section>
  );
}
