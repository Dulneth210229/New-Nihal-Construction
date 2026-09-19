import type { Partner } from "../types";

// f_auto: best format per browser · q_auto:best: highest auto-quality tier ·
// c_limit,w_400: caps width (two originals are 3200px/1.5MB) but never upscales ·
// e_trim (opt-in): strips the empty white padding baked into some logo canvases so
// the mark fills its tile instead of floating small in the middle.
const cloudinary = (path: string, trim = false) =>
  `https://res.cloudinary.com/carbll34/image/upload/${trim ? "e_trim/" : ""}f_auto,q_auto:best,c_limit,w_400/${path}`;

// Partner names are read from the logo artwork/filenames — confirm before launch.
export const partners: Partner[] = [
  { id: "p1", name: "Colombo Lotus Tower", logo: cloudinary("v1789815915/Untitled_design_1_-rlqbT8YD.png", true) },
  { id: "p2", name: "John Keells Holdings", logo: cloudinary("v1789815914/jkeells-Dip3ZNS1.png", true) },
  { id: "p3", name: "Avonsmart Engineering", logo: cloudinary("v1789815912/Avonsmart-BivwxTLx.jpg") },
  { id: "p4", name: "Roots", logo: cloudinary("v1789815912/Roots-CM28YxKj.jpg") },
  { id: "p5", name: "Keells", logo: cloudinary("v1789815912/Keells-CVygT-lt.png") },
  { id: "p6", name: "BYD", logo: cloudinary("v1789815912/images.png", true) },
  { id: "p7", name: "AB Mauri", logo: cloudinary("v1789815912/AB-mauri-sgVpUMGi.png", true) },
];
