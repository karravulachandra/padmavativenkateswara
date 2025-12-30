/**
 * Application-wide constants
 */

/**
 * Navigation configuration
 */
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
] as const;

/**
 * Temple timings configuration
 */
export const TEMPLE_TIMINGS = {
  weekday: {
    morning: { start: "06:30", end: "11:00" },
    evening: { start: "17:30", end: "20:00" },
  },
  saturday: {
    morning: { start: "06:30", end: "12:00" },
    evening: { start: "17:30", end: "21:00" },
  },
  sunday: {
    morning: { start: "06:30", end: "11:00" },
    evening: { start: "17:30", end: "20:00" },
  },
} as const;

/**
 * Contact information
 */
export const CONTACT_INFO = {
  phone: "+1 (234) 567-890",
  email: "info@srivenkateswara.org",
  address: {
    street: "C9R4+QCP, Gachibowli Road",
    city: "Hyderabad",
    state: "Telangana",
    zip: "500032",
    country: "India",
  },
} as const;

/**
 * Social media links
 */
export const SOCIAL_MEDIA = {
  facebook: "#",
  instagram: "#",
  youtube: "#",
  twitter: "#",
} as const;

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
} as const;

/**
 * API endpoints
 */
export const API_ENDPOINTS = {
  events: "/api/events",
  gallery: "/api/gallery",
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  timings: "/api/timings",
} as const;

/**
 * Validation patterns
 */
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s\-\+\(\)]+$/,
  url: /^https?:\/\/.+/,
  zipCode: /^\d{5}(-\d{4})?$/,
} as const;

/**
 * Responsive breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 640,
  desktop: 1024,
  wide: 1280,
  ultraWide: 1920,
} as const;

/**
 * Cache durations (in milliseconds)
 */
export const CACHE_DURATIONS = {
  short: 5 * 60 * 1000, // 5 minutes
  medium: 30 * 60 * 1000, // 30 minutes
  long: 60 * 60 * 1000, // 1 hour
  veryLong: 24 * 60 * 60 * 1000, // 24 hours
} as const;

/**
 * Daily quotes
 */
export const DAILY_QUOTES = [
  "Srinivasa Govinda, Sri Venkatesa Govinda",
  "He who surrenders to the Lord finds eternal peace",
  "The seven hills echo with the divine name of Venkateswara",
  "Sri Srinivasa Govinda, Sri Venkatesa Govinda, Govinda Hari Govinda, Gokulanandana Govinda",
] as const;

/**
 * Application metadata
 */
export const APP_METADATA = {
  title: "Sri Padmavati Venkateswara Swami Temple",
  description:
    "Official website of Sri Padmavati Venkateswara Swami Temple - A sacred abode of Lord Venkateswara",
  author: "Sri Venkateswara Temple Web Team",
  keywords: ["temple", "venkateswara", "spiritual", "worship", "darshan"],
  version: "1.0.0",
  lastUpdated: "December 2025",
} as const;
