import { Link } from "react-router-dom";
import { Globe2, Plane, Users2, BadgeCheck } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const highlights = [
  {
    icon: Globe2,
    title: "14+ Countries Served",
    description:
      "A track record of delivering authentic Indian cuisine across the globe."
  },
  {
    icon: Plane,
    title: "On-Site Deployment",
    description:
      "Our team travels to your destination to cook and serve fresh, on location."
  },
  {
    icon: Users2,
    title: "Local Coordination",
    description:
      "We work with local venues and vendors to handle logistics smoothly."
  },
  {
    icon: BadgeCheck,
    title: "Consistent Quality",
    description:
      "The same authentic recipes and standards wherever your event is held."
  }
];

export default function InternationalCatering() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#7A1F1F] py-24">
        <div className="max-w-5xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Signature Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            International Catering
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Authentic Indian cuisine delivered across multiple countries
            with consistent quality, wherever your celebration takes place.
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
            Bringing South India to the World
          </h2>
          <p className="mt-8 text-gray-700 leading-8 text-lg">
            From the Gulf to Southeast Asia, Europe and beyond, we've
            carried authentic South Indian flavours to celebrations far from
            home. Our team plans logistics, sourcing and staffing well
            ahead of your event date.
          </p>
          <p className="mt-6 text-gray-700 leading-8 text-lg">
            Whatever the destination, you get the same recipes, the same
            hospitality, and the same attention to detail our clients trust
            us for at home.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Planning an Event Abroad?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tell us your destination and guest count and we'll put together
            a plan.
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
