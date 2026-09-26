export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'BOOK A CALL',
    subtitle: 'Free 15-Min Strategy Session',
    description: 'We evaluate where you are today, identify past roadblocks, and determine if my coaching system matches your physical aspirations.',
    details: ['15-minute 1-on-1 discovery call', 'Zero high-pressure sales pitch', 'Clear roadmap evaluation']
  },
  {
    number: '02',
    title: 'SET YOUR GOALS',
    subtitle: 'Biometric & Lifestyle Audit',
    description: 'I construct your comprehensive athlete profile: joint mobility, weekly schedule, equipment availability, nutrition preferences, and exact timeline.',
    details: ['Movement screen & posture review', 'Caloric & macronutrient profiling', 'Equipment & schedule mapping']
  },
  {
    number: '03',
    title: 'FOLLOW YOUR PLAN',
    subtitle: 'Execute Daily Precision',
    description: 'Access your program in our mobile portal. Each session features HD demonstration videos, tempo guidance, and logging tools so there is zero guesswork.',
    details: ['Custom app dashboard access', 'HD video coaching cues', 'Daily habit & recovery checklist']
  },
  {
    number: '04',
    title: 'TRACK YOUR TRANSFORMATION',
    subtitle: 'Adapt, Overcome & Elevate',
    description: 'Every week we analyze weight, measurements, progress photos, and training logs to adapt calories and volume for unbroken progression.',
    details: ['Weekly video check-in breakdown', 'Continuous program adjustments', 'Visible physique milestone wins']
  }
];
