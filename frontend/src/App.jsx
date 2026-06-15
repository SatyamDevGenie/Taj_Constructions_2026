// App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Test Card */}
      <div className="p-6 rounded-xl shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Tailwind is Working!
        </h1>
        <p className="text-gray-700">
          If you see blue text, rounded corners, and shadow — Tailwind is properly configured.
        </p>
      </div>
    </div>
  );
}

export default App;
