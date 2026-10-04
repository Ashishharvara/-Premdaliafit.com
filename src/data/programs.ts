import type { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'beginner-gym-plan',
    number: '01',
    title: '2-Month Beginner Gym Workout Plan',
    subtitle: '2-Month Starter Protocol',
    tagline: 'अगर आप पहली बार Gym Join कर रहे हैं, तो First Day से लेकर पूरे 2 महीनों तक का Workout Routine.',
    description: 'अगर आप पहली बार Gym Join कर रहे हैं, तो यह Workout Plan आपके लिए बनाया गया है। इसमें शुरुआत के First Day से लेकर पूरे 2 महीनों तक का Workout Routine दिया गया है, ताकि आप सही तरीके से Exercise सीखकर अपनी Fitness Journey शुरू कर सकें।',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    duration: '2 Months (60 Days)',
    intensity: 'Beginner-Friendly to Progressive',
    targetAudience: 'जो लोग पहली बार Gym Join कर रहे हैं और बिना किसी Confusion के Day 1 से सही तकनीक और रूटीन के साथ शुरुआत करना चाहते हैं।',
    schedule: 'Day 1 to 60 Structured Daily Routine',
    features: [
      'Day 1 से लेकर पूरे 2 महीनों तक का Step-by-Step Routine',
      'Exercise Technique, Posture और सही Form Guidance',
      'Machine & Free-Weights का सुरक्षित इंट्रोडक्शन',
      'Gym Confusion और Overtraining से बचने के Safe Protocols',
      'Instant access via official Instamojo link'
    ],
    curriculum: [
      { phase: 'Month 1', weeks: 'Weeks 1-4', focus: 'First-Day Gym Orientation, Machine Setup & Movement Basics' },
      { phase: 'Month 2', weeks: 'Weeks 5-8', focus: 'Form Mastery, Progressive Resistance & Full Muscle Splits' },
      { phase: 'Daily Split', weeks: 'Day 1 to 60', focus: 'Step-by-Step Daily Workout & Rest Day Planning' },
      { phase: 'Discipline', weeks: 'Ongoing', focus: 'Habit Consistency & Complete Gym Confidence' }
    ],
    expectedMilestones: [
      'पहले ही हफ्ते में Gym का डर और Confusion पूरी तरह खत्म',
      'हर बेसिक Exercise का सही Form और Technique सीखना',
      'Strength, Stamina और Muscle Tone में साफ़ सुधार'
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
