import { Link } from "react-router-dom";
import { Briefcase, Clock3, Utensils, ShieldCheck } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const highlights = [
  {
    icon: Briefcase,
    title: "Boardroom to Conference",
    description:
      "Menus scaled for small executive meetings up to large multi-day conferences."
  },
  {
    icon: Clock3,
    title: "Punctual Service",
    description:
      "On-time setup and service that respects tight corporate schedules."
  },
  {
    icon: Utensils,
    title: "Diverse Menu Options",
    description:
      "Vegetarian, vegan and dietary-specific menus alongside our signature dishes."
  },
  {
    icon: ShieldCheck,
    title: "Professional Standards",
    description:
      "Trained staff, hygienic handling and consistent quality every time."
  }
];

export default function CorporateCatering() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#7A1F1F] py-24">
        <div className="max-w-5xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Signature Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Corporate Catering
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional catering solutions for meetings, conferences and
            corporate celebrations, delivered with consistency and
            precision.
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
            Catering That Keeps Business Moving
          </h2>
          <p className="mt-8 text-gray-700 leading-8 text-lg">
            Whether it's a working lunch, an all-day conference, or a
            milestone celebration for your team, our corporate catering
            adapts to your schedule and your headcount without compromising
            on flavour or presentation.
          </p>
          <p className="mt-6 text-gray-700 leading-8 text-lg">
            We coordinate directly with your office or event manager to
            handle setup, service, and cleanup, so your team can stay
            focused on the work at hand.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Plan Your Corporate Event
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tell us about your event size and schedule and we'll put
            together a menu that fits.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
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
