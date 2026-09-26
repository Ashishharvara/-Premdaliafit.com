export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'UserCheck' | 'ShieldCheck' | 'Flame' | 'Trophy';
  highlight: string;
}

export const whyChooseFeatures: FeatureItem[] = [
  {
    id: 'personalized',
    number: '01',
    title: 'PERSONALIZED',
    subtitle: 'Bespoke Blueprint',
    description: 'Every workout split, tempo, and caloric prescription is reverse-engineered around your anatomical structure, current schedule, and metabolic baseline.',
    iconName: 'UserCheck',
    highlight: 'Zero cookie-cutter templates'
  },
  {
    id: 'accountability',
    number: '02',
    title: 'ACCOUNTABILITY',
    subtitle: 'Relentless Support',
    description: 'Regular check-ins and live video form audits ensure you never fall off course. When motivation wavers, structured systems and direct mentorship maintain momentum.',
    iconName: 'ShieldCheck',
    highlight: 'Direct WhatsApp coach access'
  },
  {
    id: 'smart-training',
    number: '03',
    title: 'SMART TRAINING',
    subtitle: 'Science-Backed Periodization',
    description: 'Structured progressive overload instead of random exhaustion. We track mechanical tension, recovery, and neurological stress to maximize gains without chronic injury.',
    iconName: 'Flame',
    highlight: 'Biomechanical precision'
  },
  {
    id: 'long-term-results',
    number: '04',
    title: 'LONG-TERM RESULTS',
    subtitle: 'Habit Architecture',
    description: 'Build sustainable nutritional habits, mindset discipline, and intuitive autoregulation that continue to serve you for decades after your initial program ends.',
    iconName: 'Trophy',
    highlight: 'Sustainable lifestyle integration'
  }
];
