import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { company, whatsappLink } from "../../config/company";
import { Reveal } from "../ui/Reveal";
import { Coordinates } from "../ui/Coordinates";
import { CornerMarks } from "../ui/CornerMarks";
import { SectionHeading } from "../ui/SectionHeading";
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "../ui/SocialIcons";

const followLinks = [
  { icon: WhatsappIcon, href: whatsappLink(), label: "WhatsApp" },
  { icon: FacebookIcon, href: company.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: company.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: company.social.linkedin, label: "LinkedIn" },
];

function ContactCard({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl p-8 shadow-2xl ${className}`}>
      <CornerMarks corners="top" topOffset={16} edgeOffset={16} />
      <ul className="space-y-5 text-sm text-white/70">
        <li className="flex items-start gap-3">
          <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
          <span>
            {company.address.line1}
            <br />
            {company.address.line2}, {company.address.country}
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-primary">
            {company.phoneDisplay}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
          <a href={`mailto:${company.email}`} className="hover:text-primary">
            {company.email}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Clock size={18} className="mt-0.5 shrink-0 text-primary" />
          <div>
            {company.businessHours.map((h) => (
              <p key={h.days}>
                <span className="text-white">{h.days}:</span> {h.hours}
              </p>
            ))}
          </div>
        </li>
      </ul>

      <div className="mt-6 flex gap-3 border-t border-white/10 pt-6">
        {followLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-secondary transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}

export function MapSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Find Us" title="Come build with us." />
          <Reveal delay={0.15}>
            <Coordinates label="Site" className="text-ink-muted" />
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="container-px mt-14">
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl sm:h-[480px] lg:h-[600px]">
          <iframe
            title={`${company.name} location map`}
            src={company.map.embedUrl}
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Desktop: card floats on top of the map */}
          <ContactCard className="pointer-events-auto absolute bottom-8 left-8 hidden w-full max-w-sm bg-secondary/95 backdrop-blur lg:block" />
        </div>
      </Reveal>

      {/* Mobile & tablet: card stacked below the map */}
      <div className="container-px mt-6 lg:hidden">
        <ContactCard className="relative bg-secondary" />
      </div>
    </section>
  );
}
