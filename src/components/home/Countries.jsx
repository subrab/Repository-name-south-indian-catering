import countries from "../../data/countries";

export default function Countries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Global Presence
          </p>

          <h2 className="text-5xl font-bold text-[#7A1F1F] mt-4">
            Serving Across the Globe
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600">
            Bringing authentic South Indian cuisine to weddings,
            corporate events and celebrations across the world.
          </p>

        </div>

        {/* Placeholder World Map */}
        <div className="mt-16 bg-[#F8F4EC] rounded-3xl h-96 flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="text-8xl">🌍</div>
            <p className="mt-6 text-xl font-semibold text-[#7A1F1F]">
              Interactive World Map
            </p>
            <p className="text-gray-500">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-[#FFF8F0] rounded-xl p-4 text-center shadow hover:shadow-lg transition"
            >
              {country}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}