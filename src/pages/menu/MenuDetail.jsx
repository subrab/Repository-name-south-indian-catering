import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import menuDetails from "../../data/menuDetails";

export default function MenuDetail() {
  const { slug } = useParams();
  const item = menuDetails[slug];

  if (!item) {
    return (
      <div>
        <Navbar />
        <section className="py-32 text-center">
          <h1 className="text-3xl font-bold text-[#7A1F1F]">
            Menu Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The menu you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-[#7A1F1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5B1717] transition"
          >
            Back to Home
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Signature Menu
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            {item.title}
          </h1>
          <p className="mt-4 text-lg text-white/90">
            {item.tagline}
          </p>
          <p className="mt-6 text-white/85 max-w-2xl mx-auto leading-relaxed">
            {item.description}
          </p>
        </div>
      </section>

      {/* Dish Sections */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto px-8">

          <div className="grid md:grid-cols-2 gap-8">

            {item.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-[#7A1F1F] border-b border-[#F0E4D0] pb-4">
                  {section.heading}
                </h3>

                <ul className="mt-6 space-y-3">
                  {section.items.map((dish, dishIndex) => (
                    <li
                      key={dishIndex}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      {dish}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Interested in This Menu?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tell us about your event and we'll tailor this menu to your
            guests and preferences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#D4AF37] text-[#7A1F1F] px-8 py-4 rounded-full font-semibold hover:bg-[#c19d2e] transition"
            >
              Request a Quote
            </Link>
            <Link
              to="/"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7A1F1F] transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}