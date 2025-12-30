/**
 * Common type definitions for the application
 */

/**
 * Navigation link interface
 */
export interface NavigationLink {
  name: string;
  path: string;
  label?: string;
  icon?: string;
}

/**
 * Temple event interface
 */
export interface TempleEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location?: string;
  image?: string;
  duration?: string;
  featured?: boolean;
}

/**
 * Darshan timing interface
 */
export interface DarshanTiming {
  day: string;
  morningStart: string;
  morningEnd: string;
  eveningStart: string;
  eveningEnd: string;
  notes?: string;
}

/**
 * Temple service interface
 */
export interface TempleService {
  id: string;
  name: string;
  description: string;
  price?: number;
  duration?: string;
  icon?: string;
  available: boolean;
}

/**
 * Contact form submission interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Newsletter subscription interface
 */
export interface NewsletterSubscription {
  email: string;
  subscribedAt?: string;
  verified?: boolean;
}

/**
 * Response wrapper interface
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination interface
 */
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}

/**
 * Gallery image interface
 */
export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description?: string;
  category?: string;
  uploadedAt?: string;
}

/**
 * User/Devotee interface
 */
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
  lastVisit?: string;
}

/**
 * Environment configuration interface
 */
export interface EnvironmentConfig {
  apiUrl: string;
  apiTimeout: number;
  contactEmail: string;
  contactPhone: string;
  enableAnalytics: boolean;
  enableNewsletter: boolean;
  environment: "development" | "production" | "staging";
}
