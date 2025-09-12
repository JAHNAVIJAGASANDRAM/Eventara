import React from "react";

export default function AnalyticsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
    </div>
  );
}
