import { useState } from "react";
import BrandForm from "./components/BrandForm";
import ResultsTable from "./components/ResultsTable";
import Charts from "./components/Charts";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            AI Visibility Tracker
          </h1>
          <p className="text-gray-600 mt-2">
            Track how often AI models recommend your brand
          </p>
        </header>

        {/* Brand Input */}
        <BrandForm setData={setData} setLoading={setLoading} />

        {/* Loading Skeleton */}
        {loading && (
          <div className="space-y-6 animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-24 bg-gray-200 rounded-2xl"></div>
              <div className="h-24 bg-gray-200 rounded-2xl"></div>
              <div className="h-24 bg-gray-200 rounded-2xl"></div>
            </div>
            <div className="h-64 bg-gray-200 rounded-2xl"></div>
          </div>
        )}

        {/* Results */}
        {data && !loading && (
          <>
            <Charts data={data} />
            <ResultsTable results={data.results} />
          </>
        )}

      </div>
    </div>
  );
}
