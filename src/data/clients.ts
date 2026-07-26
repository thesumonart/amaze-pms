import {
  Building2,
  Factory,
  GraduationCap,
  Hospital,
  Hotel,
  Landmark,
  Network,
  Server,
  Store,
  Warehouse,
} from "lucide-react";
import type { ClientLogo } from "@/types";

// Placeholder wordmarks — replace with approved client logos before launch.
export const clientLogos: ClientLogo[] = [
  {
    id: "meridian",
    name: "Meridian Tech Park",
    sector: "IT Campus",
    icon: Server,
  },
  {
    id: "skygate",
    name: "Skygate Towers",
    sector: "Grade-A Offices",
    icon: Building2,
  },
  {
    id: "verdant",
    name: "Verdant Enclave",
    sector: "Gated Community",
    icon: Landmark,
  },
  { id: "orionsq", name: "Orion Square", sector: "Retail", icon: Store },
  {
    id: "novacampus",
    name: "Nova University",
    sector: "Education",
    icon: GraduationCap,
  },
  {
    id: "cascade",
    name: "Cascade Residences",
    sector: "Residential",
    icon: Hotel,
  },
  {
    id: "helix",
    name: "Helix Biotech",
    sector: "Life Sciences",
    icon: Hospital,
  },
  {
    id: "graphene",
    name: "Graphene Works",
    sector: "Manufacturing",
    icon: Factory,
  },
  {
    id: "lattice",
    name: "Lattice Logistics",
    sector: "Warehousing",
    icon: Warehouse,
  },
  {
    id: "quantum",
    name: "Quantum Grid",
    sector: "Data Centres",
    icon: Network,
  },
];
