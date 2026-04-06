export default function Filter({ activeFilter, setFilter }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="tabs">
      {filters.map((f) => (
        <button
          key={f}
          className={`tab ${activeFilter === f ? "active" : ""}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}