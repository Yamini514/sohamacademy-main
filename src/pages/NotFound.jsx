import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-2">404 — Page not found</h1>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <Link to="/" className="inline-block px-4 py-2 bg-sky-600 text-white rounded">
          Go back home
        </Link>
      </div>
    </div>
  );
}
