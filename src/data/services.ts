import {
  Briefcase,
  Bug,
  Car,
  Droplets,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Trees,
  WavesLadder,
  Wrench,
} from "lucide-react";
import type { Service, ServiceCategory } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  { id: "cleaning", label: "Cleaning & Hygiene" },
  { id: "engineering", label: "Engineering & Utilities" },
  { id: "safety", label: "Safety & Support" },
  { id: "outdoors", label: "Outdoor & Environment" },
];

export const services: Service[] = [
  {
    slug: "housekeeping",
    name: "Housekeeping & Janitorial",
    category: "cleaning",
    tagline: "Spotless, every shift, every day.",
    description:
      "Trained housekeeping crews on structured beats, mechanized equipment and audited checklists — so lobbies, workspaces and common areas stay presentation-ready around the clock.",
    highlights: [
      "Mechanized cleaning with industrial-grade equipment",
      "Shift-wise digital checklists and supervisor audits",
      "Washroom, pantry and high-touch-point protocols",
      "Consumables management and restocking",
    ],
    icon: Sparkles,
  },
  {
    slug: "mep",
    name: "MEP Operations & Maintenance",
    category: "engineering",
    tagline: "Uptime for every asset that hums.",
    description:
      "Licensed technicians run your mechanical, electrical and plumbing assets on planned preventive maintenance — HVAC, DG sets, transformers, pumps and panels — with 24/7 breakdown response.",
    highlights: [
      "52-week planned preventive maintenance calendars",
      "HVAC, electrical panel and DG set operations",
      "Energy monitoring and consumption reporting",
      "24/7 breakdown response with defined SLAs",
    ],
    icon: Wrench,
  },
  {
    slug: "security",
    name: "Security Services",
    category: "safety",
    tagline: "Vigilance you can verify.",
    description:
      "Vetted, trained security officers with documented SOPs, access control management and incident reporting — integrated with your facility command centre.",
    highlights: [
      "Background-verified, PSARA-compliant guarding",
      "Access control, visitor and material management",
      "Patrol tracking and incident escalation SOPs",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    category: "cleaning",
    tagline: "Prevention first, chemicals last.",
    description:
      "Integrated pest management with scheduled treatments, monitoring stations and safe, compliant chemical usage across food courts, offices and residences.",
    highlights: [
      "Integrated pest management programs",
      "Rodent, termite and mosquito control",
      "Food-safety compliant treatment records",
    ],
    icon: Bug,
  },
  {
    slug: "horticulture",
    name: "Horticulture & Landscaping",
    category: "outdoors",
    tagline: "Green that grows on people.",
    description:
      "Landscape design, lawn and plant care, vertical gardens and seasonal flowering programs that keep campuses and communities alive and welcoming.",
    highlights: [
      "Landscape upkeep and seasonal planting",
      "Indoor plants and vertical gardens",
      "Irrigation scheduling and soil care",
    ],
    icon: Trees,
  },
  {
    slug: "water-treatment",
    name: "STP & WTP Management",
    category: "engineering",
    tagline: "Every drop accounted for.",
    description:
      "End-to-end operation of sewage and water treatment plants — process control, lab testing, compliance logs and recycled-water programs that cut fresh water demand.",
    highlights: [
      "STP/WTP operations with trained plant operators",
      "Daily lab testing and PCB compliance records",
      "Recycled water for flushing and landscaping",
    ],
    icon: Droplets,
  },
  {
    slug: "parking",
    name: "Parking Management",
    category: "safety",
    tagline: "Order out of rush hour.",
    description:
      "Marshalled traffic flow, slot allocation, valet coordination and enforcement that keep basements and campuses moving safely at peak load.",
    highlights: [
      "Traffic marshalling and slot management",
      "Valet and visitor parking coordination",
    ],
    icon: Car,
  },
  {
    slug: "swimming-pool",
    name: "Swimming Pool Maintenance",
    category: "outdoors",
    tagline: "Crystal clear, chemically balanced.",
    description:
      "Daily water balancing, filtration plant operation and deck upkeep to lifeguard-ready standards for clubhouses and residential communities.",
    highlights: [
      "Daily pH and chlorine balancing with logs",
      "Filtration plant operation and backwashing",
    ],
    icon: WavesLadder,
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    category: "cleaning",
    tagline: "Reset to day-one condition.",
    description:
      "Periodic intensive cleaning — facades, carpets, upholstery, kitchens and post-construction handovers — using specialist crews and machinery.",
    highlights: [
      "Facade, carpet and upholstery deep cleans",
      "Post-construction and handover cleaning",
    ],
    icon: SprayCan,
  },
  {
    slug: "workplace-support",
    name: "Corporate Workplace Support",
    category: "safety",
    tagline: "The office, quietly handled.",
    description:
      "Front-office, mailroom, pantry and helpdesk staffing that plugs into your workplace team — one partner, one roster, one report.",
    highlights: [
      "Front office, pantry and mailroom staffing",
      "Facility helpdesk and ticket management",
    ],
    icon: Briefcase,
  },
];
