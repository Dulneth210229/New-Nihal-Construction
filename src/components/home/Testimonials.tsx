import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading eyebrow="Client Voices" title="What partners say about working with us." align="center" light />

        <div className="relative mx-auto mt-16 max-w-3xl text-center">
          <Quote className="mx-auto mb-6 text-primary" size={36} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-balance font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-white">{current.name}</p>
              <p className="text-sm text-white/50">
                {current.role}, {current.company}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
