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
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    points: ["Residential builds", "Commercial fit-outs", "Structural works", "Finishing & handover"],
  },
  {
    id: "civil-engineering",
    index: "02",
    title: "Civil Engineering",
    summary: "Engineering-led execution for structurally demanding projects.",
    description:
      "Our civil engineering team plans and executes earthworks, foundations and structural systems with precision, backed by rigorous quality control at every stage.",
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1600&auto=format&fit=crop",
    points: ["Site engineering", "Foundation systems", "Structural design support", "Quality assurance"],
  },
  {
    id: "infrastructure",
    index: "03",
    title: "Infrastructure Development",
    summary: "Roads, drainage and utility works built for the long term.",
    description:
      "We build the infrastructure that supports growing communities — roadworks, drainage networks and utility corridors engineered for durability.",
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1600&auto=format&fit=crop",
    points: ["Roads & pavements", "Stormwater drainage", "Utility corridors", "Site development"],
  },
  {
    id: "commercial-development",
    index: "04",
    title: "Commercial Development",
    summary: "Purpose-built spaces for retail, hospitality and business.",
    description:
      "We partner with developers and businesses to deliver commercial spaces that perform — balancing design ambition with construction practicality.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    points: ["Retail spaces", "Office developments", "Hospitality projects", "Mixed-use buildings"],
  },
  {
    id: "project-management",
    index: "05",
    title: "Project Management",
    summary: "Single point of accountability from planning to delivery.",
    description:
      "Our project management approach keeps budgets, timelines and quality aligned — giving clients full visibility from groundbreaking to final handover.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    points: ["Planning & scheduling", "Cost control", "Site supervision", "Handover management"],
  },
  {
    id: "renovation-remodeling",
    index: "06",
    title: "Renovation & Remodeling",
    summary: "Upgrades, remodels and refurbishments for existing buildings.",
    description:
      "We breathe new life into existing homes and commercial spaces — from full refurbishments to targeted upgrades — planned to minimise disruption and finished to a like-new standard.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1600&auto=format&fit=crop",
    points: ["Home remodeling", "Commercial refurbishment", "Structural repairs", "Interior & exterior finishing"],
  },
  {
    id: "residential-construction",
    index: "07",
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
    index: "08",
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
    index: "09",
    title: "Interior Design",
    summary: "Thoughtful interiors, designed and built in-house.",
    description:
      "We shape interiors that look right and work well — space planning, finishes, fittings and joinery, coordinated with construction so the design is delivered exactly as drawn.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    points: ["Space planning", "Finishes & fittings", "Custom joinery", "Furniture & styling"],
  },
];
