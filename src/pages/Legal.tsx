import type { ReactNode } from "react";
import { PageHeader } from "../components/ui/PageHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../config/company";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

function LegalPage({ title, updated, children }: LegalPageProps) {
  usePageMeta({ title: `${title} | ${company.legalName}` });

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        description={`Last updated: ${updated}`}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="container-px prose prose-neutral max-w-3xl text-sm leading-relaxed text-ink-muted">
          {children}
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="TODO: Add publish date">
      <p>
        TODO: Replace this placeholder with {company.legalName}'s actual privacy policy, covering what
        information is collected through this website (such as contact form submissions), how it is
        used, how long it is retained, and how visitors can request access to or deletion of their data.
      </p>
    </LegalPage>
  );
}

export function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="TODO: Add publish date">
      <p>
        TODO: Replace this placeholder with {company.legalName}'s actual terms and conditions governing
        the use of this website and any services described on it.
      </p>
    </LegalPage>
  );
}
