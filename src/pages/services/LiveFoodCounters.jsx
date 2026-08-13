import { Link } from "react-router-dom";
import { ChefHat, Flame, Sparkles, Clock } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const highlights = [
  {
    icon: ChefHat,
    title: "Live Dosa & Chaat",
    description:
      "Chefs cooking fresh in front of your guests, right at the event."
  },
  {
    icon: Flame,
    title: "BBQ Counters",
    description:
      "Grilled specialities prepared live for a fun, interactive experience."
  },
  {
    icon: Sparkles,
    title: "Dessert Stations",
    description:
      "Live dessert counters that add a festive, interactive touch to any event."
  },
  {
    icon: Clock,
    title: "Freshly Made",
    description:
      "Every dish is cooked to order, served hot and fresh throughout the event."
  }
];

export default function LiveFoodCounters() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#7A1F1F] py-24">
        <div className="max-w-5xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Signature Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Live Food Counters
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Interactive live dosa, chaat, BBQ and dessert counters for
            every celebration.
          </p>
        </div>
      </section>

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

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold text-center">
            What to Expect
          </p>
          <h2 className="text-4xl font-bold text-[#7A1F1F] mt-4 text-center">
            Food as Entertainment
          </h2>
          <p className="mt-8 text-gray-700 leading-8 text-lg">
            There's nothing like watching a fresh dosa sizzle on the tawa or
            a chaat come together right in front of you. Our live counters
            turn dining into an experience, giving guests something to
            watch, smell, and enjoy fresh off the pan.
          </p>
          <p className="mt-6 text-gray-700 leading-8 text-lg">
            Perfect as an add-on to any event — weddings, corporate
            parties, or private celebrations — live counters keep the
            energy up and the food always fresh.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Add a Live Counter to Your Event
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tell us which counters interest you and we'll build them into
            your menu.
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
