import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-secondary hover:bg-primary-dark focus-visible:outline-secondary",
  secondary:
    "bg-secondary text-white hover:bg-black",
  ghost:
    "bg-transparent text-current border border-current/30 hover:border-current",
};

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0";

export function Button({
  children,
  variant = "primary",
  className = "",
  icon = true,
  to,
  href,
  onClick,
  type = "button",
}: BaseProps & { to?: string; href?: string; onClick?: () => void; type?: "button" | "submit" }) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;
  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
