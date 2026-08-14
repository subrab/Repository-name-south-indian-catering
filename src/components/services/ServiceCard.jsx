import { Link } from "react-router-dom";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  slug,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">

      <div className="w-16 h-16 rounded-2xl bg-[#FFF3DC] flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#7A1F1F]" strokeWidth={1.75} />
      </div>

      <h3 className="text-2xl font-bold text-[#7A1F1F] mt-6">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

      {slug ? (
        <Link
          to={`/services/${slug}`}
          className="mt-8 inline-block bg-[#7A1F1F] text-white px-6 py-3 rounded-full hover:bg-[#5E1717] transition"
        >
          Learn More
        </Link>
      ) : (
        <button className="mt-8 bg-[#7A1F1F] text-white px-6 py-3 rounded-full hover:bg-[#5E1717] transition">
          Learn More
        </button>
      )}

    </div>
  );
}
