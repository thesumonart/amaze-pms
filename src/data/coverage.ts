import type { CoverageCity } from "@/types";

export const coverageCities: CoverageCity[] = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    kicker: "Headquarters · Cyberabad",
    description:
      "Home base since 2001 — IT campuses in Hitec City, Gachibowli and the Financial District, plus the city's largest gated communities.",
    mapPosition: { x: 42, y: 58 },
    isHeadquarters: true,
  },
  {
    id: "bangalore",
    name: "Bangalore",
    kicker: "Full-service operations",
    description:
      "Tech parks along ORR and Whitefield, corporate offices and premium residential — run by a dedicated regional operations team.",
    mapPosition: { x: 36, y: 74 },
    isHeadquarters: false,
  },
  {
    id: "chennai",
    name: "Chennai",
    kicker: "Full-service operations",
    description:
      "OMR IT corridor, industrial facilities and institutions — with coastal-climate maintenance expertise built in.",
    mapPosition: { x: 48, y: 78 },
    isHeadquarters: false,
  },
  {
    id: "pan-india",
    name: "Pan-India",
    kicker: "Multi-city rollouts",
    description:
      "Single-contract, multi-site programs for clients who need one accountable partner across cities — one SLA, one report.",
    mapPosition: { x: 40, y: 34 },
    isHeadquarters: false,
  },
];
