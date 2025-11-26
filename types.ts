import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PackageItem {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}