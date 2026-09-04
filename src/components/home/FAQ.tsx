import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/faq";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="bg-surface py-24 sm:py-32" id="faq">
      <div className="container-px grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions worth
                <br />
                answering upfront.
              </>
            }
            description="The things clients ask us most, before a single tool touches the ground."
          />
          <Reveal delay={0.15} className="mt-8 hidden lg:block">
            <p className="text-sm text-ink-muted">Can't find what you're looking for?</p>
            <Button to="/contact" variant="secondary" className="mt-4">
              Ask Us Directly
            </Button>
          </Reveal>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === faq.id;
            return (
              <Reveal key={faq.id} delay={i * 0.05} className="border-b border-border first:border-t">
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-xs text-primary-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={`mt-1 shrink-0 text-ink-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary-dark" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pl-[2.05rem] text-sm leading-relaxed text-ink-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}

          <Reveal delay={0.1} className="mt-8 lg:hidden">
            <p className="text-sm text-ink-muted">Can't find what you're looking for?</p>
            <Button to="/contact" variant="secondary" className="mt-4">
              Ask Us Directly
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
