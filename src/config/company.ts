// Central company configuration.
// TODO: Replace every placeholder value below with confirmed Nihal Construction (Pvt) Ltd. information.

export const company = {
  name: "Nihal Construction",
  legalName: "Nihal Construction (Pvt) Ltd.",
  shortName: "Nihal",
  tagline: "Building What's Next.",
  description:
    "Nihal Construction (Pvt) Ltd. is a Sri Lankan building construction and civil engineering company delivering commercial, residential and infrastructure projects.",

  // TODO: Replace with actual company contact information
  phone: "+94 11 234 5678",
  phoneDisplay: "+94 11 234 5678",
  email: "info@nihalconstructiongroup.com",

  // TODO: Replace with confirmed WhatsApp business number (E.164 format, no leading +, no spaces)
  whatsappNumber: "94770000000",
  whatsappMessage: "Hello Nihal Construction, I'd like to enquire about a project.",

  // Sourced from the company's existing site listing.
  address: {
    line1: "20/3, 4th Lane, Perakum Mawatha",
    line2: "Ratmalana – Attidiya Rd, Dehiwala-Mount Lavinia 10390",
    city: "Dehiwala-Mount Lavinia",
    country: "Sri Lanka",
  },

  map: {
    // Approximate coordinates for the Ratmalana–Attidiya area; refine once a precise pin is confirmed.
    lat: 6.8228,
    lng: 79.8712,
    // No-API-key embed keyed on the address text.
    embedUrl:
      "https://www.google.com/maps?q=Nihal+Construction,+20/3+4th+Lane+Perakum+Mawatha,+Ratmalana-Attidiya+Rd,+Dehiwala-Mount+Lavinia,+Sri+Lanka&output=embed",
  },

  businessHours: [
    { days: "Monday – Friday", hours: "8:00 AM – 5:30 PM" },
    { days: "Saturday", hours: "8:00 AM – 1:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],

  // TODO: Replace with actual social profiles
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
} as const;

export const whatsappLink = (message: string = company.whatsappMessage) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
