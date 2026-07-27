import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategoryId;
  tagline: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  /** Grid placement hint for the bento layout. */
  span: "large" | "wide" | "tall" | "standard";
}

export type ServiceCategoryId =
  | "cleaning"
  | "engineering"
  | "safety"
  | "outdoors";

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  propertyType: string;
  city: string;
}

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CoverageCity {
  id: string;
  name: string;
  kicker: string;
  description: string;
  /** Percent-based position on the stylized map, from the left/top edge. */
  mapPosition: { x: number; y: number };
  isHeadquarters: boolean;
}

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
}

export interface ClientLogo {
  id: string;
  name: string;
  /** Null renders the typographic fallback instead of an image. */
  logo: ImageAsset | null;
}

export interface NavLink {
  label: string;
  href: string;
}
