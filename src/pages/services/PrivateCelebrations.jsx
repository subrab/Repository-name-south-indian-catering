import { Link } from "react-router-dom";
import { PartyPopper, Home, Gift, Heart } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const highlights = [
  {
    icon: PartyPopper,
    title: "Any Occasion",
    description:
      "Birthdays, anniversaries, baby showers and family milestones of every size."
  },
  {
    icon: Home,
    title: "Home or Venue",
    description:
      "We cater at your home, a rented hall, or any venue you choose."
  },
  {
    icon: Gift,
    title: "Personalised Menus",
    description:
      "Menus tailored to the guest of honour and the mood of the occasion."
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    description:
      "Attentive, friendly service that makes guests feel genuinely cared for."
  }
];

export default function PrivateCelebrations() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#7A1F1F] py-24">
        <div className="max-w-5xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Signature Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Private Celebrations
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Birthdays, anniversaries, baby showers and family gatherings
            made memorable with food that feels personal.
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
            Celebrations That Feel Like Home
          </h2>
          <p className="mt-8 text-gray-700 leading-8 text-lg">
            Not every celebration needs a grand production. Our private
            catering is built for the moments that matter most to your
            family — a milestone birthday, a quiet anniversary dinner, or a
            joyful baby shower with close friends.
          </p>
          <p className="mt-6 text-gray-700 leading-8 text-lg">
            We work with you on portion sizes, favourite dishes, and
            presentation, so the meal reflects the occasion and the people
            you're celebrating with.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Plan Your Celebration
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tell us about the occasion and guest count and we'll suggest a
            menu.
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
