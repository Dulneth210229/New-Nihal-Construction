import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../ui/SocialIcons";
import { company } from "../../config/company";
import { navLinks } from "../../data/nav";
import { services } from "../../data/services";
import { Coordinates } from "../ui/Coordinates";

const socialIcons = [
  { icon: FacebookIcon, href: company.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: company.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: company.social.linkedin, label: "LinkedIn" },
  { icon: YoutubeIcon, href: company.social.youtube, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white/70">
      <div className="container-px grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-secondary">
              N
            </span>
            {company.shortName} Construction
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{company.description}</p>
          <Coordinates label="HQ" className="mt-4 inline-block text-white/35" />
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks
              .filter((l) => !l.path.startsWith("/#"))
              .map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="transition-colors hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary" />
              <a href={`mailto:${company.email}`} className="min-w-0 break-words transition-colors hover:text-primary">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>
                {company.address.line1}, {company.address.line2}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs sm:flex-row">
        <p>&copy; {year} {company.legalName} All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="transition-colors hover:text-primary">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
