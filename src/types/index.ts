export interface Program {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  duration: string;
  intensity: string;
  targetAudience: string;
  schedule: string;
  features: string[];
  curriculum: {
    phase: string;
    weeks: string;
    focus: string;
  }[];
  expectedMilestones: string[];
  link?: string;
}

export interface Transformation {
  id: string;
  clientName: string;
  age: number;
  goal: string;
  duration: string;
  statChange: string;
  secondaryStat: string;
  story: string;
  beforeImage: string;
  afterImage: string;
  fullImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  goal: string;
  result: string;
  quote: string;
  rating: number;
  avatar: string;
  timeAgo: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  ctaText: string;
  link?: string;
  priceDisplay?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Coaching' | 'Nutrition' | 'Billing';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Training' | 'Gym' | 'Nutrition' | 'Lifestyle' | 'Conditioning';
  image: string;
  span?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}
