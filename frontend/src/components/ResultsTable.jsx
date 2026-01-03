export default function ResultsTable({ results }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">Prompt-wise Analysis</h2>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th className="px-6 py-3 text-left">Prompt</th>
            <th className="px-6 py-3 text-left">Mentioned</th>
            <th className="px-6 py-3 text-left">Position</th>
          </tr>
        </thead>

        <tbody>
          {results.map((r, i) => (
            <tr key={i} className="border-t hover:bg-gray-50 transition">
              <td className="px-6 py-4">{r.prompt}</td>
              <td className="px-6 py-4">
                {r.brand_mentioned ? (
                  <span className="text-green-600 font-medium">Yes</span>
                ) : (
                  <span className="text-red-500 font-medium">No</span>
                )}
              </td>
              <td className="px-6 py-4">{r.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
