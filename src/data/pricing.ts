import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'fat-loss-plan',
    name: '3-Month Beginner Fat Loss',
    badge: '3-MONTH PROGRAM',
    isPopular: false,
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceDisplay: 'Instant Access',
    description: 'For beginners whose body fat percentage is above 20%. A structured 3-month workout plan engineered to shed fat and build strength.',
    features: [
      { text: 'Specifically designed for body fat > 20%', included: true },
      { text: 'Complete 3-month progressive workout split', included: true },
      { text: 'Fat loss conditioning with lean mass preservation', included: true },
      { text: 'Beginner-friendly exercise cues & form structure', included: true },
      { text: 'Immediate digital download via Instamojo', included: true }
    ],
    ctaText: 'GET FAT LOSS PLAN',
    link: 'https://premdaliafit.myinstamojo.com/product/3-month-beginner-fat-loss-workout-plan-prem-/'
  },
  {
    id: 'muscle-gain-plan',
    name: 'Muscle Gain Workout Plan',
    badge: 'MOST POPULAR',
    isPopular: true,
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceDisplay: 'Instant Access',
    description: 'Structured workout plan designed around muscle gain goals, progressive overload, and mechanical tension.',
    features: [
      { text: 'Targeted muscle group hypertrophy splits', included: true },
      { text: 'Precise sets, rep ranges, and rest intervals', included: true },
      { text: 'Progressive overload system for strength gains', included: true },
      { text: 'Biomechanical exercise execution guidance', included: true },
      { text: 'Immediate digital download via Instamojo', included: true }
    ],
    ctaText: 'GET MUSCLE GAIN PLAN',
    link: 'https://imojo.in/11uuLkm'
  },
  {
    id: 'personalized-coaching',
    name: '1-on-1 Fitness Guidance',
    badge: 'CUSTOM COACHING',
    isPopular: false,
    monthlyPrice: 0,
    yearlyPrice: 0,
    priceDisplay: 'Consultation',
    description: 'Direct mentorship with Prem Dalia tailored to your specific schedule, physical baseline, and personal fitness goals.',
    features: [
      { text: '100% bespoke workout plan tailored to your goals', included: true },
      { text: 'Guidance backed by 10+ years fitness experience', included: true },
      { text: 'Direct communication & inquiry support', included: true },
      { text: 'Technique tips & form standardization', included: true },
      { text: 'Customized progression roadmaps', included: true }
    ],
    ctaText: 'CONTACT PREM',
    link: undefined
  }
];
