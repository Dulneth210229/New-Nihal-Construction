import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<string | null>(services[0]?.id ?? null);

  return (
    <section className="bg-secondary py-24 sm:py-32" id="services">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          light
          title={
            <>
              Capability across the
              <br />
              full construction lifecycle.
            </>
          }
          description="From first earthworks to final handover, our teams cover every discipline a build requires."
        />

        {/* Desktop interactive list */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-[1fr_1fr]">
          <ul>
            {services.map((service, i) => (
              <li
                key={service.id}
                onMouseEnter={() => setActive(i)}
                className="group cursor-pointer border-b border-white/10 py-6 first:border-t"
              >
                <Link to="/services" className="flex items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`font-mono text-sm transition-colors ${
                        active === i ? "text-primary" : "text-white/30"
                      }`}
                    >
                      {service.index}
                    </span>
                    <span
                      className={`font-display text-2xl font-semibold transition-colors xl:text-3xl ${
                        active === i ? "text-white" : "text-white/40"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                  <ArrowRight
                    size={22}
                    className={`shrink-0 transition-all duration-300 ${
                      active === i ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 text-white opacity-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[active].id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5]"
              >
                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-white/80">{services[active].description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {services[active].points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-12 space-y-3 lg:hidden">
          {services.map((service) => {
            const isOpen = openMobile === service.id;
            return (
              <div key={service.id} className="overflow-hidden rounded-2xl border border-white/10">
                <button
                  onClick={() => setOpenMobile(isOpen ? null : service.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-primary">{service.index}</span>
                    <span className="font-display text-lg font-semibold text-white">{service.title}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-white/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <p className="p-5 text-sm leading-relaxed text-white/70">{service.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
