import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CornerMarks } from "./CornerMarks";
import { Coordinates } from "./Coordinates";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
}

export function PageHeader({ eyebrow, title, description, image }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-secondary pt-32">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />

      <CornerMarks corners="top" topOffset={96} className="hidden sm:block" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute right-6 top-24 z-10 hidden sm:block lg:right-8"
      >
        <Coordinates className="text-white/45" />
      </motion.div>

      <div className="container-px relative z-10 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-white/70"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
