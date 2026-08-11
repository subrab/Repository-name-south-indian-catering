export default function ServiceCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

      <div className="text-6xl">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-[#7A1F1F] mt-6">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

      <button className="mt-8 bg-[#7A1F1F] text-white px-6 py-3 rounded-full hover:bg-[#5E1717] transition">
        Learn More
      </button>

    </div>
  );
}