import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "train-driving-simulator-building",
    name: "Train Driving Simulator Building",
    category: "Industrial",
    location: "Rathmalana, Sri Lanka",
    status: "Completed",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "Avonsmart Engineering (Private) Limited",
    duration: "40 weeks",
    summary: "A purpose-built facility for advanced rail driver training, delivered for Avonsmart Engineering at CGR, Rathmalana.",
    description:
      "Completed the Train Driving Simulator Building at CGR, Rathmalana, delivering a purpose-built facility designed for advanced rail training. The project integrates modern simulator technology with a high-performance learning environment to support safe, realistic operations. Built to meet international simulator standards, ensuring reliability, accuracy, and long-term operational excellence.",
    scope: [
      "Purpose-built facility construction",
      "Simulator technology integration",
      "Training environment fit-out",
      "Compliance with international simulator standards",
    ],
    highlights: [
      "Built to meet international simulator standards",
      "High-performance, realistic training environment",
      "Purpose-built facility for advanced rail driver training",
    ],
    layout: "featured",
    // Real project photography. Source files are either 1448x1086 (AI-upscaled to 3200px wide —
    // too small for this page's crops otherwise, see the note on the Services data file) or
    // 5712x4284 (capped to 2400px, already more resolution than needed). No crop baked into any
    // of these, so this page's hero/gallery crops stay sharp at every breakpoint.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/c_limit,w_2400/f_auto,q_auto:best/v1789824940/2025_06_08_11_25_IMG_3336_1.png",
      alt: "The train driving simulator cab, a red and white rail-cab replica used for driver training",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1790004589/CGR_jgvjhvb.png", alt: "Completed exterior of the Train Driving Simulator Building at CGR, Rathmalana" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791278134/Tropical_Modern_Construction_Site.png", alt: "The building under construction, with a Nihal Construction site vehicle parked outside" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791278134/Modern_House_with_Lush_Landscaping.png", alt: "Another exterior view of the completed training facility and landscaped grounds" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1789825485/CGR.png", alt: "Open-plan training room with rows of desks inside the facility" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791278133/Modern_Computer_Lab_Workstations.png", alt: "Computer lab workstations used for classroom-based training" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791278133/Modern_IT_Training_Lab_with_Train_Simulator.png", alt: "IT training lab with the train simulator cab visible through the glass partition" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791278135/Lander_Simulator_Cab_Interior.png", alt: "Interior of the simulator cab, showing the driver's control console and displays" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/c_limit,w_2400/f_auto,q_auto:best/v1789824940/2025_06_08_11_25_IMG_3336_1.png", alt: "The train driving simulator cab, a red and white rail-cab replica used for driver training" },
    ],
  },
  {
    id: "2",
    slug: "lotus-tower-renovation",
    name: "Lotus Tower",
    category: "Renovation",
    location: "Colombo, Sri Lanka",
    status: "Completed",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "Colombo Lotus Tower",
    duration: "5 weeks",
    summary: "Renovation painting works at the Colombo Lotus Tower, delivering a refreshed, premium finish.",
    description:
      "Completed the renovation painting works at Lotus Tower, Colombo, delivering a refreshed finish across designated areas. All applications were carried out in line with international standards, ensuring consistent colour, durability, and surface performance. The project was executed with strict quality control and workmanship checks to achieve the required premium finish.",
    scope: [
      "Renovation painting works",
      "Surface preparation & finishing",
      "Colour consistency & durability testing",
      "Quality control & workmanship checks",
    ],
    highlights: [
      "Refreshed finish across designated areas",
      "Applied to international standards",
      "Premium, durable finish achieved",
    ],
    layout: "standard",
    // Real project photography, shot at night with rope-access crews working on the illuminated
    // tower. Sources are 1086-1448px on their longest side — AI-upscaled to 3200px wide (no crop
    // baked in) so this page's hero/gallery crops stay sharp at every breakpoint, same approach
    // used for the Train Driving Simulator Building project above.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791279827/Illuminated_Lotus_Tower_at_Night.png",
      alt: "The illuminated Colombo Lotus Tower at night, freshly repainted",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791279827/Illuminated_Lotus_Tower_at_Night.png", alt: "The illuminated Colombo Lotus Tower at night, freshly repainted" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791279827/Neon_Tower_Rope_Access_at_Night.png", alt: "Rope-access technicians working on the tower's illuminated dome at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791279827/Midnight_Tower_Workers_and_Blue_Lights.png", alt: "Technicians on ropes against the tower's blue-lit dome at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791279827/Neon_Night_Scaffold_Crew.png", alt: "Crew working from scaffolding on the tower at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791279830/Nighttime_Structural_Inspection.png", alt: "Structural inspection on the tower's scaffolding at night" },
    ],
  },
  {
    id: "3",
    slug: "mr-kiruba-residence",
    name: "Mr. Kiruba's Residence",
    category: "Residential",
    location: "Mt. Lavinia, Sri Lanka",
    status: "Completed",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "Mr. Kiruba",
    duration: "56 weeks",
    summary: "A modern three-storey residence in Mt. Lavinia, built for Mr. Kiruba with premium timber detailing throughout.",
    description:
      "Completed a modern three-storey residence in Mt. Lavinia for Mr. Kiruba, designed with a clean contemporary aesthetic and premium detailing. The home features standout timber craftsmanship across the second-floor finishes, staircase, and a custom-built bar area, adding warmth and character throughout. Constructed in line with international standards, delivering quality workmanship, durable finishes, and refined modern living.",
    scope: [
      "Three-storey residential construction",
      "Second-floor timber finishes",
      "Custom staircase & bar area joinery",
      "Quality workmanship to international standards",
    ],
    highlights: [
      "Standout timber craftsmanship throughout",
      "Custom-built bar area",
      "Durable, refined modern finishes",
    ],
    layout: "standard",
    // Real project photography, shot at night. Sources are 1448x1086 — AI-upscaled to 3200px wide
    // (no crop baked in), same approach used for the two projects above.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286016/Modern_Warmly_Lit_House_Facade_at_Night.png",
      alt: "Street-facing facade of Mr. Kiruba's residence, lit at night",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286016/Modern_Warmly_Lit_House_Facade_at_Night.png", alt: "Street-facing facade of Mr. Kiruba's residence, lit at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286020/Warm_Modern_Courtyard_House_at_Night.png", alt: "Courtyard view of the residence with timber balcony detailing, lit at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286026/Warm_Modern_House_at_Night.png", alt: "Another courtyard angle of the residence at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286018/Warm_Tropical_House_at_Night.png", alt: "The residence's courtyard and landscaped grounds at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286019/Warmly_Lit_Tropical_Courtyard_Path.png", alt: "Landscaped garden path beside the residence at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286017/Warmly_Lit_Modern_Garden_Path.png", alt: "Stepping-stone garden path along the boundary wall at night" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286019/Warm_Wood_Mezzanine_Atrium_at_Night.png", alt: "Interior mezzanine atrium showing the timber staircase and finishes" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791286016/Warm_Modern_Stairwell_Glow.png", alt: "Close-up of the custom timber staircase joinery" },
    ],
  },
  {
    id: "4",
    slug: "wattala-commercial-development",
    name: "Wattala Commercial Development",
    category: "Commercial Development",
    location: "Wattala, Sri Lanka",
    status: "Ongoing",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "Mr. Sajith",
    // Estimated.
    duration: "48 weeks",
    summary: "An ongoing four-storey commercial development in Wattala, built for Mr. Sajith.",
    description:
      "The Wattala Commercial Development is an ongoing four-storey construction project, purpose-built to support modern commercial use. Designed with a focus on structural integrity, functionality, and long-term performance, the build is progressing in line with approved engineering requirements. Nihal Construction continues to deliver steady, quality-driven execution to ensure a timely and professional completion of this landmark development.",
    scope: [
      "Four-storey commercial construction",
      "Structural engineering & integrity checks",
      "Ground-floor commercial fit-out",
      "Execution to approved engineering requirements",
    ],
    highlights: [
      "Ground-floor commercial unit already operating",
      "Built for structural integrity & long-term performance",
      "Steady, quality-driven execution toward completion",
    ],
    layout: "standard",
    // Real project photography of the building nearing completion (ground floor fitted out and
    // operating, upper floors still under safety netting). Sources are 1448x1086 or 1086x1448 —
    // AI-upscaled to 3200px wide (no crop baked in), same approach used for the projects above.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791358143/01.png",
      alt: "The four-storey Wattala Commercial Development nearing completion, ground floor already in commercial use",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791358143/01.png", alt: "The four-storey Wattala Commercial Development nearing completion, ground floor already in commercial use" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791358144/02.png", alt: "Front elevation of the building, upper floors under safety netting" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791358142/03.png", alt: "Wider street view of the development with the finished forecourt and landscaping" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791358143/04.png", alt: "Corner view of the development showing building signage" },
    ],
  },
  {
    id: "5",
    slug: "malkanthi-residence",
    name: "Malkanthi",
    category: "Residential",
    location: "Malwaththa Road, Dehiwala, Sri Lanka",
    status: "Completed",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "Ms. Malkanthi",
    duration: "60 weeks",
    summary: "A calm, well-finished residence on Malwaththa Road, Dehiwala, built for Ms. Malkanthi.",
    description:
      "Completed a residential housing project at Malwaththa Road, Dehiwala for Ms. Malkanthi, delivering a calm, well-finished home that complements its green surroundings. The design features a welcoming verandah, clean white exterior finishes, and classic timber doors/windows, creating a timeless look with modern comfort. Executed with careful attention to workmanship, neat detailing, and site finishing, resulting in a fresh, move-in-ready residence.",
    scope: [
      "Residential housing construction",
      "Verandah & exterior finishing",
      "Timber doors & windows",
      "Workmanship & site finishing detailing",
    ],
    highlights: [
      "Welcoming verandah with timeless detailing",
      "Clean white exterior finishes",
      "Fresh, move-in-ready residence",
    ],
    layout: "standard",
    // Real project photography. Sources are 1448x1086 or 1086x1448 — AI-upscaled to 3200px wide
    // (no crop baked in), same approach used for the projects above.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791360253/Warmly_Lit_Tropical_Veranda_at_Twilight.png",
      alt: "The residence's welcoming verandah at twilight",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791360253/Warmly_Lit_Tropical_Veranda_at_Twilight.png", alt: "The residence's welcoming verandah at twilight" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791360253/Warm_Tropical_Courtyard_at_Dusk.png", alt: "The residence's courtyard and timber doors and windows at dusk" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791360251/Warm_Evening_Modern_Courtyard_Home.png", alt: "Another view of the courtyard, showing the checkerboard-tiled flooring and timber finishes" },
      // Decorative pavilion setup at the property — not a construction shot, included at the client's request.
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791360253/Warmly_Lit_Ornate_White_Pavilion_Setup.png", alt: "An ornate decorative pavilion set up at the property" },
    ],
  },
  {
    id: "6",
    slug: "byd-showroom-altair",
    name: "BYD Showroom, Altair",
    category: "Renovation",
    location: "Altair, Colombo, Sri Lanka",
    status: "Completed",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "BYD",
    duration: "3.5 weeks",
    summary: "Renovation and remodeling of the BYD showroom at the Altair building, Colombo, completed in three and a half weeks.",
    description:
      "Completed renovation and remodeling works for the BYD showroom at the Altair building, Colombo, delivering a refreshed, brand-ready frontage for BYD's Colombo showroom. The scope covered exterior upgrades around the showroom entrance, including landscaped planter areas and sidewalk reinstatement, carried out on an accelerated three-and-a-half week schedule with minimal disruption to the surrounding commercial precinct. Nihal Construction managed the works with close attention to site safety, finish quality, and schedule discipline, delivering on time to support the showroom's readiness.",
    scope: [
      "Showroom renovation & remodeling",
      "Exterior frontage upgrades",
      "Landscaped planter & sidewalk finishing",
      "Accelerated 3.5-week turnaround",
    ],
    highlights: [
      "Completed in just 3.5 weeks",
      "Refreshed, brand-ready showroom frontage",
      "Minimal disruption to the surrounding precinct",
    ],
    layout: "standard",
    // Real project photography of the exterior frontage works. Sources are 1448x1086 or
    // 1086x1448 — AI-upscaled to 3200px wide (no crop baked in), same approach used above.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791363182/Modern_Tower_and_Branded_Construction_Truck.png",
      alt: "The Altair tower in Colombo with a Nihal Construction site vehicle parked outside",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791363182/Modern_Tower_and_Branded_Construction_Truck.png", alt: "The Altair tower in Colombo with a Nihal Construction site vehicle parked outside" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791363182/Urban_Construction_Crew_by_the_Planter.png", alt: "Site crew working on a planter area outside the showroom frontage" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791363182/Urban_Sidewalk_Landscaping_Work.png", alt: "Crew finishing landscaped planters along the sidewalk" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791363182/Daylight_Construction_Outside_NAWAKA.png", alt: "Exterior works in progress outside the showroom frontage" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791363186/Modern_City_Tower_and_Street_Construction.png", alt: "Street-level view of the Altair tower during the exterior works" },
    ],
  },
  {
    id: "7",
    slug: "keells-bellanwila",
    name: "Keells - Bellanwila",
    category: "Renovation",
    location: "Bellanwila, Sri Lanka",
    status: "Completed",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "John Keells Holdings",
    duration: "6 weeks",
    summary: "A large-scale retail transformation of the Keells store at Bellanwila, completed for John Keells Holdings.",
    description:
      "Completed the Keells – Bellanwila Iconic Project, a large-scale retail transformation focused on upgrading key customer and operational zones. The scope included structural reconfiguration and design enhancements to the hot kitchen, bakery, liquor, and dining areas, improving flow, functionality, and efficiency. Delivered to elevate the premium Keells store experience with refined finishes, smarter layouts, and a modernised environment.",
    scope: [
      "Structural reconfiguration",
      "Hot kitchen, bakery & liquor area upgrades",
      "Dining area design enhancements",
      "Store-wide finishes & layout improvements",
    ],
    highlights: [
      "Upgraded key customer & operational zones",
      "Refined finishes & smarter layouts",
      "Modernised, premium store experience",
    ],
    layout: "standard",
    // Real project photography. Sources are 1448x1086 or 1086x1448 — AI-upscaled to 3200px wide
    // (no crop baked in), same approach used for the projects above.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791449769/Vibrant_Keels_Storefront_on_a_Sunny_Day.png",
      alt: "The Keells Bellanwila storefront exterior",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791449769/Vibrant_Keels_Storefront_on_a_Sunny_Day.png", alt: "The Keells Bellanwila storefront exterior" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791449769/Sunny_Green_Facade_Scaffold_Maintenance.png", alt: "Crew working on scaffolding against the store's green facade" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791449770/Keells_Supermarket_Under_Maintenance.png", alt: "Store interior mid-renovation, shelving protected under tarps" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791449769/Industrial_Corridor_Ceiling_Renovation.png", alt: "Back-of-house ceiling and ductwork renovation in progress" },
    ],
  },
  {
    id: "8",
    slug: "keells-tile-renovation",
    name: "Keells - Tile Renovation",
    category: "Renovation",
    // TODO: Confirm store location.
    location: "TODO: Confirm store location",
    status: "Completed",
    // TODO: Confirm exact year for this project.
    year: "TODO: Confirm year",
    client: "John Keells Holdings",
    duration: "1.5 weeks",
    summary: "Tile renovation across roughly 8,000 sq ft of a Keells supermarket, completed in a week and a half.",
    description:
      "Completed the tile renovation for a Keells supermarket outlet, replacing the store's existing floor tiling with a new colour scheme across approximately 8,000 square feet of retail floor area. The work was carried out in sections to keep the store trading, with new tiles laid to a consistent level and finish throughout the sales floor. Delivered in just a week and a half, the renovation refreshed the store's interior look while maintaining Keells' operational standards throughout the changeover.",
    scope: [
      "Floor tile renovation",
      "New tile colour scheme",
      "~8,000 sq ft of retail floor area",
      "Phased works to keep the store trading",
    ],
    highlights: [
      "~8,000 sq ft of floor area renovated",
      "New tile colour scheme installed",
      "Completed in just 1.5 weeks",
    ],
    layout: "standard",
    // Real project photography. Sources are 1448x1086 — AI-upscaled to 3200px wide (no crop
    // baked in), same approach used for the projects above.
    coverImage: {
      src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451135/Supermarket_Tile_Renovation_in_Progress.png",
      alt: "New dark tile flooring laid alongside the store's original lighter tile, mid-renovation",
    },
    gallery: [
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451135/Supermarket_Tile_Renovation_in_Progress.png", alt: "New dark tile flooring laid alongside the store's original lighter tile, mid-renovation" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451145/Fresh_Produce_Aisle_Refresh.png", alt: "The produce aisle with the new tile flooring in place" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451137/Supermarket_Floor_Renovation_Crew.png", alt: "Crew laying new floor tiles in a store aisle" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451136/Supermarket_Floor_Renovation_Crew_1.png", alt: "Crew preparing and laying new tiles in another aisle" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451135/Supermarket_Renovation_in_Progress_1.png", alt: "Tile renovation in progress near the checkout area" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451134/Supermarket_Tiling_Renovation_in_Progress.png", alt: "New tiles being laid along a central aisle" },
      { src: "https://res.cloudinary.com/carbll34/image/upload/e_upscale/c_limit,w_3200/f_auto,q_auto:best/v1791451133/Supermarket_Renovation_in_Progress.png", alt: "Tile renovation work in progress near the health and beauty section" },
    ],
  },
];
