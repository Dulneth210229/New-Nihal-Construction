import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/Button";
import { CornerMarks } from "../ui/CornerMarks";
import { Coordinates } from "../ui/Coordinates";

const SLIDE_DURATION = 6000;

// TODO: Replace with real Nihal Construction site photography.
const HERO_IMAGES = [
  {
    // Real photo, only 1668x943 — too small for a full-screen hero on retina, so Cloudinary AI
    // e_upscale rebuilds the detail before it's capped at 2400px (sharper than a plain resize).
    src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_2400/f_auto,q_auto:best/v1789823657/office_image_02.png",
    alt: "Front view of the Nihal Construction (Pvt) Ltd office building",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
    alt: "View looking up at modern glass commercial towers",
  },
  {
    src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=2400&auto=format&fit=crop",
    alt: "Aerial view of industrial infrastructure development",
  },
  {
    src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2400&auto=format&fit=crop",
    alt: "Construction crane at height against the sky",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const prefersReducedMotion = useReducedMotion();

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setSlide((i) => (i + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const imageTransform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;
  const layerTransform = useMotionTemplate`translate3d(${springX}px, 0, 0)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(relX * -24);
    my.set(relY * -16);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-secondary"
    >
      <motion.div
        aria-hidden
        style={{ transform: imageTransform }}
        className="absolute inset-0 will-change-transform"
      >
        <AnimatePresence>
          <motion.img
            key={slide}
            src={HERO_IMAGES[slide].src}
            alt={HERO_IMAGES[slide].alt}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority={slide === 0 ? "high" : "auto"}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1 }}
            animate={{ opacity: 1, scale: prefersReducedMotion ? 1 : 1.1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: SLIDE_DURATION / 1000 + 1.4, ease: "linear" },
            }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-transparent to-transparent" />

      <CornerMarks corners="top" className="z-10 hidden sm:block" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute left-6 top-24 z-10 hidden flex-col gap-1 sm:flex lg:left-8"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
          Site Reference
        </span>
        <Coordinates className="text-white/70" />
      </motion.div>

      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-3 sm:flex">
        {HERO_IMAGES.map((image, i) => (
          <button
            key={image.src}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === slide}
            onClick={() => setSlide(i)}
            className="group relative h-8 w-1.5 overflow-hidden rounded-full bg-white/25"
          >
            {i === slide && (
              <motion.span
                key={slide}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : SLIDE_DURATION / 1000,
                  ease: "linear",
                }}
                style={{ transformOrigin: "top" }}
                className="absolute inset-0 rounded-full bg-primary"
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        aria-hidden
        style={{ transform: layerTransform }}
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-40 rounded-full border border-primary/30 md:block"
      />
      <motion.div
        aria-hidden
        style={{ transform: layerTransform }}
        className="pointer-events-none absolute right-[16%] top-[40%] hidden h-2 w-2 rounded-full bg-primary md:block"
      />

      <div className="container-px relative z-10 w-full pb-16 pt-40 sm:pb-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Building Construction &amp; Civil Engineering — Sri Lanka
        </motion.span>

        <h1 className="font-display text-[clamp(3rem,10vw,8.5rem)] font-semibold uppercase leading-[0.92] text-white">
          {["Building", "What's", "Next."].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`block ${word === "Next." ? "text-primary" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Nihal Construction plans, engineers and builds commercial,
            residential and infrastructure projects across Sri Lanka — with
            accountability from groundbreaking to handover.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/projects" variant="primary">
              Explore Our Work
            </Button>
            <Button
              to="/contact"
              variant="ghost"
              className="text-white border-white/30 hover:border-white"
            >
              Start a Project
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
