import { Link } from "react-router-dom";
import { Landmark, Flame, Users, Leaf } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const highlights = [
  {
    icon: Landmark,
    title: "Temple Experience",
    description:
      "Years of experience catering religious functions and temple festivals."
  },
  {
    icon: Flame,
    title: "Traditional Prasadam",
    description:
      "Prepared following traditional methods and purity standards."
  },
  {
    icon: Users,
    title: "Large Congregations",
    description:
      "Capable of serving hundreds to thousands of devotees efficiently."
  },
  {
    icon: Leaf,
    title: "Pure Vegetarian",
    description:
      "100% vegetarian kitchens and ingredients for all religious functions."
  }
];

export default function TempleFunctions() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#7A1F1F] py-24">
        <div className="max-w-5xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Signature Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Temple Functions
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Traditional prasadam, festivals and religious functions
            prepared with devotion and care.
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
            Serving Sacred Occasions with Devotion
          </h2>
          <p className="mt-8 text-gray-700 leading-8 text-lg">
            Religious functions call for a different kind of care —
            adherence to tradition, purity in preparation, and respect for
            ritual timing. Our team understands these requirements and
            prepares prasadam and festival meals accordingly.
          </p>
          <p className="mt-6 text-gray-700 leading-8 text-lg">
            From daily temple functions to large annual festivals, we scale
            our kitchens to serve devotees without compromising on
            tradition or hygiene.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#7A1F1F]">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Planning a Temple Function?
          </h2>
          <p className="mt-4 text-white/90 max-w-xl mx-auto">
            Tell us about the function and expected devotee count and we'll
            help you plan.
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
