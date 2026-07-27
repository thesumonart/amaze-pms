import type { NavLink } from '@/types';

export const site = {
  name: 'Amaze PMS',
  legalName: 'Amaze Property Management Solutions Pvt Ltd',
  parent: 'A division of Action Group',
  foundedYear: 2001,
  tagline: 'Facility management, engineered.',
  description:
    'Integrated facility management for corporate campuses, gated communities and institutions — 15,000+ professionals keeping 20M+ sq. ft. running across India since 2001.',
  url: 'https://www.amazepms.com',
  // Placeholder contact details — confirm with the client before launch.
  phone: '+91 40 4012 3456',
  email: 'hello@amazepms.com',
  address: {
    street: 'Plot 12, Hitec City Main Road, Cyberabad',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500081',
    country: 'IN',
  },
  serviceAreas: ['Hyderabad', 'Bangalore', 'Chennai', 'Pan-India'],
} as const;

export const socialLinks: NavLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/amaze-pms' },
  { label: 'X', href: 'https://x.com/amazepms' },
  { label: 'YouTube', href: 'https://www.youtube.com/@amazepms' },
];
