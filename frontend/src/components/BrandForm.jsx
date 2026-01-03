import { useState } from "react";
import { analyzeBrand } from "../api";

export default function BrandForm({ setData }) {
  const [brand, setBrand] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    try {
      const res = await analyzeBrand({ brand });
      setData({
        brand: res.data.brand,
        totalPrompts: res.data.total_prompts,
        citationShare: res.data.citation_share,
        results: res.data.results,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">Analyze Brand</h2>

      <div className="flex gap-4">
        <input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Enter brand name"
          className="flex-1 rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={analyze}
          disabled={!brand || loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium 
                     hover:bg-blue-700 transition disabled:opacity-50 flex items-center gap-2"
        >
          {loading && (
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
    </div>
  );
}
