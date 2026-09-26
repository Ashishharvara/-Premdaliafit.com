import type { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'muscle-gain',
    number: '01',
    title: 'Muscle Gain Workout Plan',
    subtitle: 'Hypertrophy & Strength',
    tagline: 'Structured workout plan designed to build muscle mass, strength, and physical performance.',
    description: 'A structured workout plan designed around muscle gain goals, incorporating progressive overload, volume periodization, and exercise mechanics to stimulate muscle growth and strength development.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    duration: 'Structured Progression',
    intensity: 'Progressive Overload',
    targetAudience: 'Individuals aiming to build lean muscle mass, increase strength, and follow a structured training system.',
    schedule: 'Targeted Muscle Group Splits',
    features: [
      'Comprehensive exercise selection and split design',
      'Targeted sets, rep ranges, and rest periods',
      'Progressive overload framework for continuous gains',
      'Exercise technique and execution guidance',
      'Instant access via official Instamojo link'
    ],
    curriculum: [
      { phase: 'Phase 1', weeks: 'Foundation', focus: 'Form Standardization & Movement Baselines' },
      { phase: 'Phase 2', weeks: 'Progression', focus: 'Mechanical Tension & Progressive Loading' },
      { phase: 'Phase 3', weeks: 'Volume', focus: 'Hypertrophic Stimulus & Target Volume' },
      { phase: 'Phase 4', weeks: 'Peak', focus: 'Strength Realization & Deload Cycles' }
    ],
    expectedMilestones: [
      'Measurable gains in strength across core exercises',
      'Noticeable improvement in muscle fullness and definition',
      'Clear routine without confusion or guesswork'
    ],
    link: 'https://imojo.in/11uuLkm'
  },
  {
    id: 'beginner-fat-loss',
    number: '02',
    title: '3-Month Beginner Fat Loss Workout Plan',
    subtitle: '3-Month Protocol',
    tagline: 'For beginners whose body fat percentage is above 20%.',
    description: 'For beginners whose body fat percentage is above 20%. A structured 3-month workout plan engineered to kickstart fat loss, build foundational strength, and establish sustainable fitness habits.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    duration: '3 Months (12 Weeks)',
    intensity: 'Beginner-Friendly to Progressive',
    targetAudience: 'For beginners whose body fat percentage is above 20% looking for a clear, step-by-step workout plan to reduce body fat.',
    schedule: 'Structured Weekly Exercise Split',
    features: [
      'Specifically tailored for body fat > 20%',
      'Step-by-step 3-month workout structure',
      'Focus on fat loss while preserving lean tone',
      'Clear, beginner-friendly exercise instruction',
      'Instant access via official Instamojo link'
    ],
    curriculum: [
      { phase: 'Month 1', weeks: 'Weeks 1-4', focus: 'Conditioning, Habit Building & Form Fundamentals' },
      { phase: 'Month 2', weeks: 'Weeks 5-8', focus: 'Metabolic Resistance & Caloric Expenditure' },
      { phase: 'Month 3', weeks: 'Weeks 9-12', focus: 'Accelerated Fat Loss & Consistency Mastery' },
      { phase: 'Ongoing', weeks: 'Post-Plan', focus: 'Sustainable Maintenance & Long-Term Fitness' }
    ],
    expectedMilestones: [
      'Significant reduction in body fat percentage',
      'Improved cardiovascular stamina and energy levels',
      'Consistent training discipline and confidence in the gym'
    ],
    link: 'https://premdaliafit.myinstamojo.com/product/3-month-beginner-fat-loss-workout-plan-prem-/'
  }
];
