// TODO: Replace every image and detail below with real photography of the
// Nihal Construction office, team and leadership once it's available.

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const officeGallery: GalleryImage[] = [
  {
    // Real photo (1589x990 PNG, 2.4MB). Already large enough for the card at 2x, so no
    // upscaling: capped at 1600px and served as the best-fit format at top quality.
    src: "https://res.cloudinary.com/carbll34/image/upload/c_limit,w_1600/f_auto,q_auto:best/v1789823657/office_image01.png",
    alt: "Outside view of the Nihal Construction (Pvt) Ltd office building",
    caption: "Our office",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    alt: "Placeholder image of a modern open-plan office workspace",
    caption: "Inside the office",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    alt: "Placeholder image of staff collaborating around a table",
    caption: "Our team at work",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    alt: "Placeholder image of a staff member working at a desk",
    caption: "Day-to-day operations",
  },
];

export const director = {
  name: "TODO: Director Name",
  role: "TODO: Managing Director",
  quote:
    "TODO: Replace with a short quote from the Managing Director about the company's approach and values.",
  // f_auto: best format per browser (WebP/AVIF/JPEG) · q_auto:best: highest
  // quality tier, so Cloudinary doesn't pick an aggressive compression to
  // shrink the 3.3MB/5078x3899 original · c_fill,g_face: crops to the card's
  // portrait ratio while keeping the face centered · w_800,h_1000: enough
  // resolution for a sharp render at 2x on the card, without shipping the
  // full-size original.
  image:
    "https://res.cloudinary.com/carbll34/image/upload/f_auto,q_auto:best,c_fill,g_face,w_800,h_1000/v1789635947/2025_09_04_11_42_IMG_5001_1.png",
};
