import React from "react";

export default function AnalyticsCard({ title, value }) {
  return (
    <div className="glass-dark p-6 rounded-xl text-center hover:scale-105 transition-all duration-300">
      <h4 className="text-sm text-gray-300 mb-2">{title}</h4>
      <p className="text-3xl font-bold gradient-text">{value}</p>
    </div>
  );
}
