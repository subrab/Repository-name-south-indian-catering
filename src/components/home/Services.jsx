import services from "../../data/services";
import ServiceCard from "../services/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Signature Services
          </p>

          <h2 className="text-5xl font-bold text-[#7A1F1F] mt-4">
            Catering Every Celebration with Excellence
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Whether it's an intimate family gathering or a grand international
            celebration, Annam Global delivers authentic Indian cuisine with
            exceptional hospitality.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          ))}

        </div>

      </div>
    </section>
  );
}