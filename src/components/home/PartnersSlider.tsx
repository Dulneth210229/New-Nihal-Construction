import { partners } from "../../data/partners";
import { SectionHeading } from "../ui/SectionHeading";

// The track is translated by -50% in the marquee keyframes, so it needs an even
// number of identical sets — and each set must be wide enough that no blank gap
// shows on large screens (7 logos ≈ 1400px per set).
const SETS = 4;

export function PartnersSlider() {
  return (
    <section className="bg-background py-24" id="partners">
      <div className="container-px">
        <SectionHeading eyebrow="Our Network" title="Building stronger together." align="center" />
      </div>

      <div className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee bg-background [animation-duration:60s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {Array.from({ length: SETS }).flatMap((_, set) =>
            partners.map((partner) => (
              // Spacing is margin, not flex gap, so -50% lands exactly on a set boundary (no loop jump).
              // mix-blend-multiply drops logos' white backgrounds onto the section colour. The animated
              // track has a transform (isolated stacking context), so it carries bg-background itself; the
              // filter/opacity live on the <img> (not this wrapper) so the blend isn't isolated.
              <div
                key={`${partner.id}-${set}`}
                aria-hidden={set > 0}
                className="mr-10 flex h-24 w-44 shrink-0 items-center justify-center sm:mr-14 sm:w-52"
              >
                <img
                  src={partner.logo}
                  alt={set === 0 ? partner.name : ""}
                  className="max-h-full max-w-full object-contain opacity-80 mix-blend-multiply grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
