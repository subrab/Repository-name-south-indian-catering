import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-main.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[78vh] overflow-hidden">

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Annam Global authentic Indian catering"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Subtle Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[78vh] flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >

            {/* Small Heading */}
            <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold text-sm md:text-base">
              Authentic Indian Cuisine
            </p>

            {/* Main Heading */}
            <h1 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
              Crafted for
              <span className="block text-[#D4AF37]">
                the World.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              From the traditions of South India to celebrations across the
              globe, Annam Global brings authentic flavours, elegant
              presentation and exceptional hospitality to every occasion.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link
                to="/request-quote"
                className="bg-[#7A1F1F] hover:bg-[#5B1717] text-white
                px-8 py-4 rounded-full font-semibold
                shadow-lg hover:shadow-xl
                transition-all duration-300 text-center"
              >
                Request a Quote
              </Link>

              <button
                className="border-2 border-white/80
                hover:bg-white hover:text-[#7A1F1F]
                text-white px-8 py-4 rounded-full
                font-semibold transition-all duration-300"
              >
                Explore Our Menu
              </button>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 text-xs tracking-[3px] uppercase">
        Discover Annam
      </div>

    </section>
  );
}