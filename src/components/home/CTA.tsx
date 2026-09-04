import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-secondary py-28 sm:py-36">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/90 to-secondary/70" aria-hidden />

      <div className="container-px relative z-10 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold uppercase leading-[1.02] text-white">
            Ready to build
            <br />
            <span className="text-primary">what's next?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-white/70">
            Let's discuss your next construction project — from concept through to completion.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" variant="primary">
            Start a Project
          </Button>
          <Button to="/contact" variant="ghost" className="border-white/30 text-white hover:border-white">
            Contact Us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
