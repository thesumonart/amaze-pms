'use client';

import { CircleCheck, Radio, TrendingUp } from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const WEEKLY_TICKETS = [
  { day: 'Mon', tickets: 62 },
  { day: 'Tue', tickets: 48 },
  { day: 'Wed', tickets: 74 },
  { day: 'Thu', tickets: 56 },
  { day: 'Fri', tickets: 88 },
  { day: 'Sat', tickets: 70 },
  { day: 'Sun', tickets: 94 },
];

const SLA_ROWS = [
  { label: 'Housekeeping rounds', value: '98.4%' },
  { label: 'MEP preventive tasks', value: '97.1%' },
  { label: 'Helpdesk closure < 24h', value: '95.8%' },
];

const first = WEEKLY_TICKETS[0].tickets;
const last = WEEKLY_TICKETS[WEEKLY_TICKETS.length - 1].tickets;
const delta = (((last - first) / first) * 100).toFixed(1);

export const TechDashboard = () => {
  return (
    <div className="glass-dark w-full rounded-xl p-6 shadow-[0_40px_80px_-32px_rgba(6,11,22,0.8)]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-neutral-500 uppercase">
            Amaze Ops · Site 042
          </p>
          <p className="mt-1 text-sm font-semibold text-white">Meridian Tech Park — Monthly MIS</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-400">
          <Radio className="size-3 animate-pulse" />
          Live
        </span>
      </div>

      {/* KPI strip */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-white/4 p-3.5">
          <p className="text-[0.6rem] tracking-wider text-neutral-500 uppercase">SLA</p>
          <p className="mt-1 font-mono text-lg font-semibold text-white">
            98.2<span className="text-xs text-teal-400">%</span>
          </p>
        </div>
        <div className="rounded-lg bg-white/4 p-3.5">
          <p className="text-[0.6rem] tracking-wider text-neutral-500 uppercase">Closed</p>
          <p className="mt-1 font-mono text-lg font-semibold text-white">1,284</p>
        </div>
        <div className="rounded-lg bg-white/4 p-3.5">
          <p className="text-[0.6rem] tracking-wider text-neutral-500 uppercase">Avg resp.</p>
          <p className="mt-1 font-mono text-lg font-semibold text-white">
            22<span className="text-gold-300 text-xs">m</span>
          </p>
        </div>
      </div>

      {/* Chart block */}
      <div className="mt-4 rounded-lg border border-white/6 bg-white/3 p-4">
        {/* Chart header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.6rem] tracking-wider text-neutral-500 uppercase">
              Helpdesk volume
            </p>
            <p className="mt-0.5 font-mono text-2xl font-semibold text-white">
              {last}
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-teal-400/10 px-2 py-0.5 font-mono text-xs font-medium text-teal-400">
                <TrendingUp className="size-3" />+{delta}%
              </span>
            </p>
          </div>
          <p className="font-mono text-[0.6rem] text-neutral-500">Last 7 days</p>
        </div>

        {/* Recharts area */}
        <div className="mt-4 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={WEEKLY_TICKETS} margin={{ top: 8, right: 4, left: -28, bottom: 0 }}>
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5b8def" stopOpacity={0.3} />
                  <stop offset="60%" stopColor="#2f6fed" stopOpacity={0.08} />
                  <stop offset="100%" stopColor="#2f6fed" stopOpacity={0} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="3 4"
              />
              <XAxis
                dataKey="day"
                tick={{ fill: '#5f6979', fontSize: 10, fontFamily: 'var(--font-mono)' }}
                axisLine={false}
                tickLine={false}
                dy={6}
              />
              <YAxis
                tick={{ fill: '#5f6979', fontSize: 10, fontFamily: 'var(--font-mono)' }}
                axisLine={false}
                tickLine={false}
                tickCount={4}
              />
              <Tooltip
                cursor={{
                  stroke: 'rgba(255,255,255,0.08)',
                  strokeWidth: 1,
                  strokeDasharray: '3 3',
                }}
                contentStyle={{
                  background: '#0b1626',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8,
                  fontSize: 11,
                  color: '#fff',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
                formatter={(value) => [value ?? '', 'Tickets']}
                labelStyle={{ color: '#8a93a3', marginBottom: 2 }}
              />
              <Area
                type="monotoneX"
                dataKey="tickets"
                stroke="#5b8def"
                strokeWidth={2}
                fill="url(#areaFill)"
                filter="url(#glow)"
                dot={false}
                activeDot={{
                  r: 4,
                  fill: '#93b4f5',
                  stroke: 'rgba(93,141,239,0.3)',
                  strokeWidth: 6,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SLA rows */}
      <ul className="mt-3 space-y-2">
        {SLA_ROWS.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between rounded-lg bg-white/4 px-4 py-2.5"
          >
            <span className="flex items-center gap-2 text-xs text-neutral-400">
              <CircleCheck className="size-3.5 text-teal-400" />
              {row.label}
            </span>
            <span className="font-mono text-xs font-semibold text-white">{row.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
