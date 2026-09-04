import type { Partner } from "../types";

// TODO: Replace with actual partner/client logos. These are neutral wordmark placeholders.
const makePlaceholderLogo = (label: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="48"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="18" font-weight="600" fill="#5B6270">${label}</text></svg>`
  )}`;

export const partners: Partner[] = [
  { id: "p1", name: "Apex Holdings", logo: makePlaceholderLogo("APEX HOLDINGS") },
  { id: "p2", name: "Meridian Group", logo: makePlaceholderLogo("MERIDIAN GROUP") },
  { id: "p3", name: "Stratum Materials", logo: makePlaceholderLogo("STRATUM") },
  { id: "p4", name: "Lanka Steel Works", logo: makePlaceholderLogo("LANKA STEEL") },
  { id: "p5", name: "Coastal Cement Co.", logo: makePlaceholderLogo("COASTAL CEMENT") },
  { id: "p6", name: "Vantage Developers", logo: makePlaceholderLogo("VANTAGE") },
  { id: "p7", name: "Orbit Engineering", logo: makePlaceholderLogo("ORBIT ENGINEERING") },
  { id: "p8", name: "Northline Bank", logo: makePlaceholderLogo("NORTHLINE BANK") },
];
