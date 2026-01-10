// ============================================
// Navigation Types
// ============================================

export interface NavItem {
    href: string;
    label: string;
    icon?: string;
    i18nKey?: string;
}

// ============================================
// Data Types (Simplified - text from i18n)
// ============================================

export interface Service {
    id: number;
    image: string;
    link?: string;
}

export interface Feature {
    id: number;
    icon: string;
}

export interface WorkStep {
    id: number;
    number: string;
    icon: string;
}

// ============================================
// Complex Types (with full data)
// ============================================

export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatar: string;
}

export interface PricingTier {
    id: number;
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted: boolean;
}

// ============================================
// Social & UI Types
// ============================================

export interface SocialLink {
    icon: string;
    href: string;
}
