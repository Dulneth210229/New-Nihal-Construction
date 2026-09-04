export interface NavLink {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  points: string[];
}

export type ProjectStatus = "Completed" | "Ongoing" | "Upcoming";
export type ProjectLayout = "featured" | "standard" | "wide";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  location: string;
  status: ProjectStatus;
  year: string;
  client: string;
  duration: string;
  summary: string;
  description: string;
  scope: string[];
  highlights: string[];
  layout: ProjectLayout;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
