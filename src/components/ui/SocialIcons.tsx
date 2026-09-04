import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

function withSize({ size, width, height, ...rest }: IconProps) {
  return { width: width ?? size ?? 24, height: height ?? size ?? 24, ...rest };
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...withSize(props)}>
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8v2.96h2.46V21h3.04Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...withSize(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...withSize(props)}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.93c0-1.41-.03-3.23-1.97-3.23-1.98 0-2.28 1.54-2.28 3.13V20H9.45V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.5 2.26 4.5 5.2V20Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...withSize(props)}>
      <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18.1 5.2 12 5.2 12 5.2s-6.1 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.9c1.6.5 7.7.5 7.7.5s6.1 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...withSize(props)}>
      <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.353.615 4.646 1.783 6.667L2.667 29.333l6.815-1.75a13.27 13.27 0 0 0 6.519 1.75h.006c7.362 0 13.333-5.97 13.333-13.334S23.363 2.667 16.001 2.667Zm0 24.4a11.03 11.03 0 0 1-5.625-1.542l-.403-.24-4.045 1.04 1.08-3.94-.263-.406a11.04 11.04 0 0 1-1.702-5.912c0-6.106 4.968-11.073 11.075-11.073 2.957 0 5.738 1.153 7.828 3.246a10.99 10.99 0 0 1 3.243 7.83c0 6.106-4.968 11.03-11.188 11.03Zm6.06-8.267c-.332-.166-1.965-.97-2.27-1.08-.305-.11-.527-.166-.748.166-.222.333-.858 1.08-1.052 1.303-.194.222-.388.25-.72.083-.332-.166-1.4-.516-2.667-1.646-.986-.88-1.652-1.966-1.846-2.298-.194-.333-.02-.513.146-.679.15-.15.333-.388.5-.583.166-.194.222-.333.333-.555.111-.222.055-.416-.028-.583-.083-.166-.748-1.803-1.025-2.47-.27-.649-.545-.561-.748-.572l-.638-.011c-.222 0-.583.083-.888.416s-1.166 1.14-1.166 2.78 1.194 3.226 1.36 3.448c.166.222 2.35 3.588 5.694 5.032.795.343 1.415.548 1.898.702.797.254 1.523.218 2.096.132.64-.095 1.966-.804 2.243-1.581.277-.777.277-1.443.194-1.582-.083-.138-.305-.222-.638-.388Z" />
    </svg>
  );
}
