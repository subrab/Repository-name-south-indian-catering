import { Link } from "react-router-dom";
import { Utensils, Users, Sparkles, Clock } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const highlights = [
  {
    icon: Utensils,
    title: "40+ Traditional Dishes",
    description:
      "A full South Indian wedding spread, from tiffin items to a grand banana-leaf feast."
  },
  {
    icon: Users,
    title: "Any Guest Count",
    description:
      "From intimate 50-guest ceremonies to grand celebrations of 2,000 and beyond."
  },
  {
    icon: Sparkles,
    title: "Elegant Presentation",
    description:
      "Traditional serveware, live counters and premium hospitality styled for your event."
  },
  {
    icon: Clock,
    title: "End-to-End Planning",
    description:
      "From menu tasting to on-site service, our team handles every detail of the day."
  }
];

export default function WeddingCatering() {
  return (
    <div>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-[#7A1F1F] py-24">
        <div className="max-w-5xl mx-auto px-8 text-center text-white">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Signature Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Wedding Catering
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Traditional South Indian wedding feasts crafted with authentic
            recipes and premium hospitality, designed to make every course
            of your celebration unforgettable.
          </p>

        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF3DC] flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-[#7A1F1F]" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-xl font-bold text-[#7A1F1F] mt-6">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Story / Description */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold text-center">
            What to Expect
          </p>

          <h2 className="text-4xl font-bold text-[#7A1F1F] mt-4 text-center">
            A Wedding Feast Rooted in Tradition
          </h2>

          <p className="mt-8 text-gray-700 leading-8 text-lg">
            Your wedding deserves a feast that honours tradition while
            delighting every guest, regardless of where in the world you're
            celebrating. Our wedding catering brings together generations-old
            South Indian recipes, live cooking counters, and a banana-leaf
            dining experience that turns your reception into a memory guests
            carry with them for years.
          </p>

          <p className="mt-6 text-gray-700 leading-8 text-lg">
            From the first tasting session to the final course served, our
            team manages every detail — menu planning, staffing, live
            counters, and traditional presentation — so you can be fully
            present for your celebration.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Plan Your Wedding Feast
          </h2>

          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tell us about your celebration and we'll put together a menu
            tailored to your guests, your traditions and your budget.
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