import type { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'beginner-gym-plan',
    number: '01',
    title: '2-Month Beginner Gym Workout Plan',
    subtitle: '2-Month Starter Protocol',
    tagline: 'If you are joining the gym for the first time, a complete step-by-step workout routine from Day 1 through 2 full months.',
    description: 'Designed specifically for beginners stepping into the gym for the first time. This workout plan takes you from Day 1 through the first 2 months with step-by-step exercise routines, helping you master proper form, build consistency, and start your fitness journey with complete confidence.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    duration: '2 Months (60 Days)',
    intensity: 'Beginner-Friendly to Progressive',
    targetAudience: 'First-time gym goers looking for structured guidance on exercises, correct form, and daily routines without confusion.',
    schedule: 'Day 1 to 60 Structured Daily Routine',
    features: [
      'Step-by-step routine from Day 1 through 2 full months',
      'Exercise technique, posture & proper form guidance',
      'Safe introduction to machines & free-weights',
      'Safe protocols to prevent gym confusion & overtraining',
      'Instant access via official Instamojo link'
    ],
    curriculum: [
      { phase: 'Month 1', weeks: 'Weeks 1-4', focus: 'First-Day Gym Orientation, Machine Setup & Movement Basics' },
      { phase: 'Month 2', weeks: 'Weeks 5-8', focus: 'Form Mastery, Progressive Resistance & Full Muscle Splits' },
      { phase: 'Daily Split', weeks: 'Day 1 to 60', focus: 'Step-by-Step Daily Workout & Rest Day Planning' },
      { phase: 'Discipline', weeks: 'Ongoing', focus: 'Habit Consistency & Complete Gym Confidence' }
    ],
    expectedMilestones: [
      'Eliminate gym anxiety and workout confusion right from week one',
      'Master the correct form and execution of fundamental exercises',
      'Noticeable improvements in strength, stamina, and posture'
    ],
    link: 'https://imojo.in/H9ggUs'
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
  },
  {
    id: 'muscle-gain',
    number: '03',
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
  }
];
