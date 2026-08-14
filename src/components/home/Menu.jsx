import menu from "../../data/menu";
import MenuCard from "../menu/MenuCard";

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Signature Menu
          </p>

          <h2 className="text-5xl font-bold text-[#7A1F1F] mt-4">
            Crafted with Tradition, Served with Love
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated menus that celebrate authentic
            South Indian flavours while meeting international hospitality
            standards.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {menu.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              dishes={item.dishes}
              image={item.image}
              slug={item.slug}
            />
          ))}

        </div>

      </div>
    </section>
  );
}