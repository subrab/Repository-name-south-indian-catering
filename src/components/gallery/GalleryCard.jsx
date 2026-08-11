export default function GalleryCard({ image, title }) {
  return (
    <div className="group overflow-hidden rounded-3xl shadow-lg cursor-pointer">

      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="bg-white p-5">

        <h3 className="text-xl font-bold text-[#7A1F1F]">
          {title}
        </h3>

      </div>

    </div>
  );
}