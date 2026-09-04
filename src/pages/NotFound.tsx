import { Button } from "../components/ui/Button";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../config/company";

export default function NotFound() {
  usePageMeta({ title: `Page Not Found | ${company.legalName}` });

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-6 text-center">
      <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary-dark">404</span>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Page not found.</h1>
      <p className="mt-4 max-w-sm text-ink-muted">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="mt-8">
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  );
}
