export default function Charts({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Stat title="Prompts Analyzed" value={data.totalPrompts} />
      <Stat title="Brand Mentions" value={data.results.filter(r => r.brand_mentioned).length} />
      <Stat
        title="Citation Share"
        value={`${data.citationShare.toFixed(1)}%`}
        highlight
      />
    </div>
  );
}

function Stat({ title, value, highlight }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`mt-2 text-3xl font-bold ${highlight ? "text-blue-600" : "text-gray-900"}`}>
        {value}
      </p>
    </div>
  );
}
