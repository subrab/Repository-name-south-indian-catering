import founderImage from "../../assets/images/founder-madaswamy.jpg";

export default function FounderStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Journey
          </p>

          <h2 className="text-5xl font-bold text-[#7A1F1F] mt-4">
            From Humble Beginnings to Global Celebrations
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Founder Image */}
          <div className="flex justify-center">

            <img
              src={founderImage}
              alt="Madaswamy, founder of Annam Global"
              className="w-80 h-96 rounded-3xl object-cover shadow-xl"
            />

          </div>

          {/* Story */}
          <div>

            <h3 className="text-3xl font-bold text-[#7A1F1F]">
              Madaswamy
            </h3>

            <p className="mt-6 text-gray-700 leading-8">
              Born in the southern region of Tamil Nadu, Madaswamy began
              his journey by delivering fresh milk to local households.
              His passion for serving people led him to start a small
              street food business, where his authentic recipes quickly
              earned the trust of the community.
            </p>

            <p className="mt-6 text-gray-700 leading-8">
              In 2015, he founded Annam Global with a simple vision:
              to bring authentic South Indian cuisine and heartfelt
              hospitality to every celebration. Today, the company has
              served hundreds of events and continues to delight clients
              across multiple countries with the same dedication to
              quality and tradition.
            </p>

            <button className="mt-8 bg-[#7A1F1F] text-white px-8 py-4 rounded-full hover:bg-[#5C1717] transition">
              Read Our Story
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}