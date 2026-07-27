import { ClipboardCheck, Droplets, type LucideIcon, ShieldCheck, Wrench } from 'lucide-react';
import { stats } from '@/data/stats';

export interface HeroStat {
  id: string;
  value: number;
  /** Rendered immediately after the counted number, e.g. "+" or "M+". */
  unit: string;
  /** Short enough to survive a three-across grid at 375px. */
  label: string;
  /** One extra line, revealed on hover — always present for screen readers. */
  context: string;
}

/**
 * Compact labels for the hero's three proof chips. Values and context copy are
 * pulled from `stats` so the hero can never drift from the full stats strip —
 * only the shortened label and unit are hero-specific.
 */
const HERO_STAT_LABELS = [
  { id: 'professionals', unit: '+', label: 'Professionals' },
  { id: 'area', unit: 'M+', label: 'Sq. ft. managed' },
  { id: 'years', unit: ' yrs', label: 'In operation' },
] as const;

export const heroStats: HeroStat[] = HERO_STAT_LABELS.flatMap(({ id, unit, label }) => {
  const source = stats.find((stat) => stat.id === id);
  return source ? [{ id, value: source.value, unit, label, context: source.description }] : [];
});

export interface HeroSignal {
  id: string;
  event: string;
  detail: string;
  icon: LucideIcon;
}

/**
 * Illustrative operations feed for the hero's live panel — representative of
 * what the Amaze Ops helpdesk emits during a shift, not a real-time
 * connection. Wire to the actual feed (or swap for client-approved samples)
 * before launch.
 */
export const heroSignals: HeroSignal[] = [
  {
    id: 'inspection',
    event: 'Inspection completed',
    detail: 'Tower B · Level 04 · 12 checkpoints',
    icon: ClipboardCheck,
  },
  {
    id: 'ticket',
    event: 'Helpdesk ticket resolved',
    detail: 'Chiller trip · closed in 4 min',
    icon: Wrench,
  },
  {
    id: 'ppm',
    event: 'Preventive service logged',
    detail: 'AHU-02 · filter change · signed off',
    icon: ShieldCheck,
  },
  {
    id: 'water',
    event: 'Water quality test passed',
    detail: 'STP-01 · pH 7.2 · TDS 380 ppm',
    icon: Droplets,
  },
];

/** Starting value for the panel's live checkpoint counter (see note above). */
export const CHECKPOINTS_BASELINE = 1240;
