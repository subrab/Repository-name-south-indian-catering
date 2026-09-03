import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "100+",
    label: "Events Completed",
  },
  {
    number: "80+",
    label: "Professional Team",
  },
  {
    number: "14",
    label: "Countries Served",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#7A1F1F] py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <div className="absolute -left-32 -top-40 h-80 w-80 rounded-full border border-[#D4AF37]" />
        <div className="absolute -bottom-48 -right-24 h-[28rem] w-[28rem] rounded-full border border-[#D4AF37]" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`px-3 py-5 text-center md:px-5 md:py-6 ${
                index === 0
                  ? ""
                  : "border-l border-white/10"
              }`}
            >
              <h2 className="text-5xl font-semibold tracking-tight text-[#D4AF37] md:text-6xl">
                {item.number}
              </h2>

              <p className="mx-auto mt-3 max-w-[9rem] text-xs uppercase leading-6 tracking-[2px] text-white/75 md:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}