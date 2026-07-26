import { Activity, CircleCheck, Radio } from "lucide-react";

const WEEKLY_TICKETS = [62, 48, 74, 56, 88, 70, 94];

const SLA_ROWS = [
  { label: "Housekeeping rounds", value: "98.4%" },
  { label: "MEP preventive tasks", value: "97.1%" },
  { label: "Helpdesk closure < 24h", value: "95.8%" },
];

/** Decorative reporting-dashboard mockup — illustrative figures only. */
export function TechDashboard() {
  return (
    <div className="glass-dark w-full rounded-lg p-6 shadow-[0_40px_80px_-32px_rgba(6,11,22,0.8)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-neutral-400">
            Amaze Ops · Site 042
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            Meridian Tech Park — Monthly MIS
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-400">
          <Radio className="size-3" />
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-md bg-white/[0.04] p-4">
          <p className="text-[0.65rem] text-neutral-400">SLA compliance</p>
          <p className="mt-1 font-mono text-xl font-semibold text-white">
            98.2<span className="text-sm text-teal-400">%</span>
          </p>
        </div>
        <div className="rounded-md bg-white/[0.04] p-4">
          <p className="text-[0.65rem] text-neutral-400">Tickets closed</p>
          <p className="mt-1 font-mono text-xl font-semibold text-white">
            1,284
          </p>
        </div>
        <div className="rounded-md bg-white/[0.04] p-4">
          <p className="text-[0.65rem] text-neutral-400">Avg. response</p>
          <p className="mt-1 font-mono text-xl font-semibold text-white">
            22<span className="text-sm text-gold-300"> min</span>
          </p>
        </div>
      </div>

      <div className="mt-3 rounded-md bg-white/[0.04] p-4">
        <div className="flex items-center justify-between">
          <p className="text-[0.65rem] text-neutral-400">
            Helpdesk volume — last 7 days
          </p>
          <Activity className="size-3.5 text-brand-300" />
        </div>
        <div className="mt-3 flex h-20 items-end gap-2">
          {WEEKLY_TICKETS.map((value, index) => (
            <div
              key={`day-${index + 1}`}
              className="flex-1 rounded-t-sm bg-[linear-gradient(180deg,var(--color-brand-400),var(--color-brand-500))]"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </div>

      <ul className="mt-3 space-y-2">
        {SLA_ROWS.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between rounded-md bg-white/[0.04] px-4 py-2.5"
          >
            <span className="flex items-center gap-2 text-xs text-neutral-400">
              <CircleCheck className="size-3.5 text-teal-400" />
              {row.label}
            </span>
            <span className="font-mono text-xs font-semibold text-white">
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
