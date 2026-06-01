export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialties: string[];
  bio: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  popular: boolean;
  colorClass: string;
}

export interface ClassSession {
  id: string;
  className: string;
  time: string;
  trainer: string;
  room: string;
  duration: string;
  intensity: "High" | "Medium" | "Low";
}

export interface ScheduleDay {
  day: string;
  classes: ClassSession[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  timeframe: string;
  achievement: string;
  beforeWeight: string;
  afterWeight: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Equipments" | "Recovery" | "Classes" | "Lounge";
  image: string;
}
