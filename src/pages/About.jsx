import { Link } from "react-router-dom";
import { Heart, Users, Globe2, Award } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import founderImage from "../assets/images/founder-madaswamy.jpg";

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "Every recipe stays true to traditional South Indian methods, passed down and perfected over years."
  },
  {
    icon: Users,
    title: "Hospitality",
    description:
      "We treat every guest the way we'd want our own family treated — with warmth and attention."
  },
  {
    icon: Globe2,
    title: "Consistency",
    description:
      "The same quality and care, whether we're serving 50 guests locally or 2,000 abroad."
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "From the first prep to final plating, every dish reflects genuine care and skill."
  }
];

const milestones = [
  {
    year: "Early Years",
    text: "Madaswamy began by delivering fresh milk to local households in Tamil Nadu, building relationships rooted in trust and quality."
  },
  {
    year: "Street Food Beginnings",
    text: "A small street food business grew out of that same passion for serving people, earning a loyal following for its authentic recipes."
  },
  {
    year: "2015 — Annam Global Founded",
    text: "Annam Global was founded with a simple vision: bring authentic South Indian cuisine and heartfelt hospitality to every celebration."
  },
  {
    year: "Today",
    text: "15+ years of experience, 100+ events completed, an 80+ member professional team, and clients served across 14 countries."
  }
];

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Page Hero */}
      <section className="bg-[#7A1F1F] py-24">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            From Humble Beginnings to Global Celebrations
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            The journey of Annam Global, and the people behind it.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
              <img
                src={founderImage}
                alt="Madaswamy, founder of Annam Global"
                className="w-80 h-96 rounded-3xl object-cover shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#7A1F1F]">
                Madaswamy
              </h2>

              <p className="mt-6 text-gray-700 leading-8">
                Born in the southern region of Tamil Nadu, Madaswamy began
                his journey by delivering fresh milk to local households.
                His passion for serving people led him to start a small
                street food business, where his authentic recipes quickly
                earned the trust of the community.
              </p>

              <p className="mt-6 text-gray-700 leading-8">
                What started as a modest effort to share good food grew
                into something much larger — a belief that hospitality and
                authenticity could turn any gathering into something
                memorable, no matter the size of the event or the distance
                from home.
              </p>

              <p className="mt-6 text-gray-700 leading-8">
                In 2015, he founded Annam Global with a simple vision: to
                bring authentic South Indian cuisine and heartfelt
                hospitality to every celebration. Today, the company has
                served hundreds of events and continues to delight clients
                across multiple countries with the same dedication to
                quality and tradition that started it all.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-8">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              The Journey
            </p>
            <h2 className="text-4xl font-bold text-[#7A1F1F] mt-4">
              Milestones Along the Way
            </h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-[#D4AF37]"
              >
                <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wide">
                  {milestone.year}
                </p>
                <p className="mt-3 text-gray-700 leading-7">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold text-[#7A1F1F] mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FFF8F0] rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF3DC] flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-[#7A1F1F]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-[#7A1F1F] mt-6">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-6">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Create Something Memorable Together
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Whatever the occasion, we'd love to bring the same care and
            tradition to your celebration.
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
