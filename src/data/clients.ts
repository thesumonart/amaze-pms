import type { ClientLogo } from '@/types';

/**
 * Client logos, one file per client under `/public/images/clients`.
 *
 * Intrinsic dimensions are recorded so `next/image` can reserve space without a
 * layout shift; the marquee normalises them to a common optical height. Set
 * `logo` to `null` for a client whose artwork has not been cleared yet and the
 * marquee renders the name typographically at the same slot.
 */
export const clientLogos: ClientLogo[] = [
  {
    id: 'wipro',
    name: 'Wipro',
    logo: { src: '/images/clients/client1.webp', width: 1600, height: 900 },
  },
  {
    id: 'divyasree',
    name: 'DivyaSree',
    logo: { src: '/images/clients/client2.webp', width: 322, height: 156 },
  },
  {
    id: 'sri-sairam-towers',
    name: 'Sri Sairam Towers',
    logo: { src: '/images/clients/client3.webp', width: 254, height: 91 },
  },
  {
    id: 'lodha',
    name: 'Lodha',
    logo: { src: '/images/clients/client4.webp', width: 379, height: 133 },
  },
  {
    id: 'oliva',
    name: 'Oliva Skin & Hair Clinic',
    logo: { src: '/images/clients/client5.webp', width: 303, height: 167 },
  },
  {
    id: 'lt-technology-services',
    name: 'L&T Technology Services',
    logo: { src: '/images/clients/client6.webp', width: 368, height: 137 },
  },
  {
    id: 'jll',
    name: 'JLL',
    logo: { src: '/images/clients/client7.webp', width: 138, height: 66 },
  },
  {
    id: 'ashvita-mahindra-lifespaces',
    name: 'Ashvita by Mahindra Lifespaces',
    logo: { src: '/images/clients/client8.webp', width: 162, height: 56 },
  },
  {
    id: 'cbre',
    name: 'CBRE',
    logo: { src: '/images/clients/client9.webp', width: 143, height: 50 },
  },
  {
    id: 'golf-view',
    name: 'Golf View',
    logo: { src: '/images/clients/client10.webp', width: 167, height: 79 },
  },
  {
    id: 'kalpataru',
    name: 'Kalpataru',
    logo: { src: '/images/clients/client11.webp', width: 210, height: 60 },
  },
  {
    id: 'hill-county',
    name: 'Hill County',
    logo: { src: '/images/clients/client12.webp', width: 287, height: 119 },
  },
];
