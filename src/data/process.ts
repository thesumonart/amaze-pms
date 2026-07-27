import { ClipboardCheck, FileText, LineChart, Settings2, Users } from 'lucide-react';
import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    id: 'inspect',
    index: '01',
    title: 'Inspect',
    description:
      'A senior operations team walks your site, audits current service levels and maps every asset, shift and pain point.',
    icon: ClipboardCheck,
  },
  {
    id: 'propose',
    index: '02',
    title: 'Propose',
    description:
      'You get a costed, SLA-backed proposal — staffing matrix, equipment plan, transition timeline — not a generic rate card.',
    icon: FileText,
  },
  {
    id: 'deploy',
    index: '03',
    title: 'Deploy',
    description:
      'Vetted, trained teams mobilize with uniforms, machinery and supervisors in place. Most sites transition inside two weeks.',
    icon: Users,
  },
  {
    id: 'maintain',
    index: '04',
    title: 'Maintain',
    description:
      'Daily checklists, preventive maintenance calendars and surprise audits keep quality measurable — not anecdotal.',
    icon: Settings2,
  },
  {
    id: 'report',
    index: '05',
    title: 'Report',
    description:
      'Monthly MIS reports cover SLAs, incidents, consumption and costs — reviewed with you, with actions tracked to closure.',
    icon: LineChart,
  },
];
