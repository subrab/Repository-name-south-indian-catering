export default function MenuCard({ title, dishes, image }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#7A1F1F]">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {dishes}
        </p>

        <button className="mt-6 bg-[#7A1F1F] text-white px-6 py-3 rounded-full hover:bg-[#5B1717] transition">
          Explore Menu
        </button>

      </div>

    </div>
  );
}