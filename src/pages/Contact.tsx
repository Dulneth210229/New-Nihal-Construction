import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { ContactForm } from "../components/contact/ContactForm";
import { MapSection } from "../components/contact/MapSection";
import { Reveal } from "../components/ui/Reveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { company, whatsappLink } from "../config/company";

const contactPoints = [
  { icon: Phone, label: "Phone", value: company.phoneDisplay, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappLink() },
  { icon: Clock, label: "Business Hours", value: company.businessHours[0].hours, href: undefined },
];

export default function Contact() {
  usePageMeta({
    title: `Contact Us | ${company.legalName}`,
    description: "Get in touch with Nihal Construction to discuss your next building construction, civil engineering or infrastructure project.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's build what's next, together."
        description="Tell us about your project and our team will get back to you within one business day."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="container-px grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink">Get in touch</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                Prefer to talk directly? Reach our team through any of the channels below.
              </p>
            </Reveal>
            <div className="mt-8 space-y-6">
              {contactPoints.map((point, i) => (
                <Reveal key={point.label} delay={i * 0.06}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                      <point.icon size={18} />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-muted">{point.label}</p>
                      {point.href ? (
                        <a href={point.href} target={point.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="font-medium text-ink transition-colors hover:text-primary-dark">
                          {point.value}
                        </a>
                      ) : (
                        <p className="font-medium text-ink">{point.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <MapSection />
    </>
  );
}
