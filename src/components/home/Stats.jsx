export default function Stats() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Events Completed" },
    { number: "80+", label: "Professional Team" },
    { number: "14", label: "Countries Served" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl shadow-lg p-6 text-center"
          >
            <h2 className="text-4xl font-bold text-[#7A1F1F]">
              {item.number}
            </h2>
            <p className="mt-2 text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}