import { partners } from "../../data/partners";
import { SectionHeading } from "../ui/SectionHeading";

export function PartnersSlider() {
  const track = [...partners, ...partners];

  return (
    <section className="bg-background py-24" id="partners">
      <div className="container-px">
        <SectionHeading eyebrow="Our Network" title="Building stronger together." align="center" />
      </div>

      <div className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className="flex h-16 w-40 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <img src={partner.logo} alt={partner.name} className="max-h-10 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
