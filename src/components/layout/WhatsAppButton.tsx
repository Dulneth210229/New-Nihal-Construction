import { useState } from "react";
import { company, whatsappLink } from "../../config/company";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7">
      <span
        className={`hidden rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 sm:block ${
          hovered ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-2 opacity-0"
        }`}
      >
        Chat with us
      </span>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${company.name} on WhatsApp`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:animate-none" />
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.353.615 4.646 1.783 6.667L2.667 29.333l6.815-1.75a13.27 13.27 0 0 0 6.519 1.75h.006c7.362 0 13.333-5.97 13.333-13.334S23.363 2.667 16.001 2.667Zm0 24.4a11.03 11.03 0 0 1-5.625-1.542l-.403-.24-4.045 1.04 1.08-3.94-.263-.406a11.04 11.04 0 0 1-1.702-5.912c0-6.106 4.968-11.073 11.075-11.073 2.957 0 5.738 1.153 7.828 3.246a10.99 10.99 0 0 1 3.243 7.83c0 6.106-4.968 11.03-11.188 11.03Zm6.06-8.267c-.332-.166-1.965-.97-2.27-1.08-.305-.11-.527-.166-.748.166-.222.333-.858 1.08-1.052 1.303-.194.222-.388.25-.72.083-.332-.166-1.4-.516-2.667-1.646-.986-.88-1.652-1.966-1.846-2.298-.194-.333-.02-.513.146-.679.15-.15.333-.388.5-.583.166-.194.222-.333.333-.555.111-.222.055-.416-.028-.583-.083-.166-.748-1.803-1.025-2.47-.27-.649-.545-.561-.748-.572l-.638-.011c-.222 0-.583.083-.888.416s-1.166 1.14-1.166 2.78 1.194 3.226 1.36 3.448c.166.222 2.35 3.588 5.694 5.032.795.343 1.415.548 1.898.702.797.254 1.523.218 2.096.132.64-.095 1.966-.804 2.243-1.581.277-.777.277-1.443.194-1.582-.083-.138-.305-.222-.638-.388Z" />
        </svg>
      </a>
    </div>
  );
}
