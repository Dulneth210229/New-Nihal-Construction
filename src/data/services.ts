import type { Service } from "../types";

// TODO: Replace with actual company service offerings and descriptions.
export const services: Service[] = [
  {
    id: "building-construction",
    index: "01",
    title: "Building Construction",
    summary: "End-to-end construction of residential and commercial buildings.",
    description:
      "From foundation to finishing, we deliver structurally sound, beautifully finished buildings on schedule — managing every trade under one accountable team.",
    // Real photo, 1280x960 — the desktop panel crops this to a tall 4:5 box and the mobile
    // accordion to a wide 16:10 box; on larger screens that needs more pixels than 1280x960
    // gives, so the browser was upscaling it (visible softness). e_upscale rebuilds detail at
    // a larger size *without* baking in either crop, so both layouts still get to choose their
    // own crop via object-cover.
    image:
      "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1790002355/6-icprLi-q.jpg",
    points: ["Residential builds", "Commercial fit-outs", "Structural works", "Finishing & handover"],
  },
  {
    id: "civil-engineering",
    index: "02",
    title: "Civil Engineering",
    summary: "Engineering-led execution for structurally demanding projects.",
    description:
      "Our civil engineering team plans and executes earthworks, foundations and structural systems with precision, backed by rigorous quality control at every stage.",
    // Real photo, 1448x1086 — too small for the desktop panel's tall 4:5 crop at typical
    // screen sizes (would be upscaled by the browser), so e_upscale rebuilds detail first.
    // No crop baked in here, same reasoning as Building Construction's image above.
    image:
      "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1790004589/CGR_jgvjhvb.png",
    points: ["Site engineering", "Foundation systems", "Structural design support", "Quality assurance"],
  },
  {
    id: "commercial-development",
    index: "03",
    title: "Commercial Development",
    summary: "Purpose-built spaces for retail, hospitality and business.",
    description:
      "We partner with developers and businesses to deliver commercial spaces that perform — balancing design ambition with construction practicality.",
    // Real photo, 1448x1086 (same source used for the hero's office-interior slide and Civil
    // Engineering above) — too small for the desktop panel's crop at typical screen sizes, so
    // e_upscale rebuilds detail first. No crop baked in — see the note on Building Construction.
    image:
      "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1789825485/CGR.png",
    points: ["Retail spaces", "Office developments", "Hospitality projects", "Mixed-use buildings"],
  },
  {
    id: "renovation-remodeling",
    index: "04",
    title: "Renovation & Remodeling",
    summary: "Upgrades, remodels and refurbishments for existing buildings.",
    description:
      "We breathe new life into existing homes and commercial spaces — from full refurbishments to targeted upgrades — planned to minimise disruption and finished to a like-new standard.",
    // Real photo, 3024x4032 (12MP portrait) — already more resolution than either the desktop
    // panel or mobile accordion crop needs, so just capped and delivered at top quality (no
    // upscaling, no baked-in crop — see the note on Building Construction's image above).
    image:
      "https://res.cloudinary.com/carbll34/image/upload/c_limit,w_2400/f_auto,q_auto:best/v1790003386/2023_08_30_01_09_IMG_5090-B4EEH2Kl.jpg",
    points: ["Home remodeling", "Commercial refurbishment", "Structural repairs", "Interior & exterior finishing"],
  },
  {
    id: "residential-construction",
    index: "05",
    title: "Residential Construction",
    summary: "Custom homes and residential developments built to last.",
    description:
      "From single family homes to multi-unit residential developments, we build safe, comfortable and durable living spaces — managing the whole build from foundation to handover.",
    // Source is only 1024x768 and heavily compressed. Cloudinary AI: e_gen_restore removes
    // JPEG artefacts, e_upscale rebuilds detail at 4x, then it is capped to 1600px wide.
    // Best fix is still uploading a larger original — swap the URL and drop these effects.
    image:
      "https://res.cloudinary.com/carbll34/image/upload/e_gen_restore/e_upscale/c_limit,w_1600/f_auto,q_auto:best/v1789817517/06-D2l7Zq9z.jpg",
    points: ["Custom homes", "Housing developments", "Apartments & townhouses", "Turnkey delivery"],
  },
  {
    id: "structural-engineering",
    index: "06",
    title: "Structural Engineering",
    summary: "Safe, efficient structural design and assessment.",
    description:
      "Our engineers design and verify the structural systems behind every build — optimising strength, safety and cost, and assessing existing structures for repair or change of use.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
    points: ["Structural design", "Load & safety assessment", "Reinforced concrete & steel", "Structural inspections"],
  },
  {
    id: "interior-design",
    index: "07",
    title: "Interior Design",
    summary: "Thoughtful interiors, designed and built in-house.",
    description:
      "We shape interiors that look right and work well — space planning, finishes, fittings and joinery, coordinated with construction so the design is delivered exactly as drawn.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    points: ["Space planning", "Finishes & fittings", "Custom joinery", "Furniture & styling"],
  },
];
