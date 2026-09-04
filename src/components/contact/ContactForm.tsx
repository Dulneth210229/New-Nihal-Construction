import { useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const projectTypes = [
  "Building Construction",
  "Civil Engineering",
  "Infrastructure",
  "Commercial Development",
  "Other",
];

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.message.trim()) errors.message = "Please tell us a little about your project.";
  return errors;
}

const inputClasses =
  "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (field: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      // TODO: Wire this up to the company's actual form submission endpoint.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-12 text-center"
      >
        <CheckCircle2 className="text-primary" size={48} />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary-dark underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${inputClasses} ${errors.name ? "border-red-400" : "border-border"}`}
            placeholder="Your full name"
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputClasses} ${errors.email ? "border-red-400" : "border-border"}`}
            placeholder="you@company.com"
          />
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${inputClasses} ${errors.phone ? "border-red-400" : "border-border"}`}
            placeholder="+94 7X XXX XXXX"
          />
          {errors.phone && <p id="phone-error" className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
            Company <span className="text-ink-muted">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={`${inputClasses} border-border`}
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-ink">
          Project Type
        </label>
        <select
          id="projectType"
          value={values.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          aria-invalid={!!errors.projectType}
          className={`${inputClasses} border-border ${errors.projectType ? "border-red-400" : ""}`}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && <p className="mt-1.5 text-xs text-red-500">{errors.projectType}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClasses} resize-none ${errors.message ? "border-red-400" : "border-border"}`}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-500"
          >
            Something went wrong. Please try again or contact us directly.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-secondary transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
