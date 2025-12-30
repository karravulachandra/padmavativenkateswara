/**
 * Application configuration based on environment variables
 */

import type { EnvironmentConfig } from "@/types";

/**
 * Get environment configuration
 */
export function getConfig(): EnvironmentConfig {
  return {
    apiUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
    apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT || "30000", 10),
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "info@srivenkateswara.org",
    contactPhone: import.meta.env.VITE_CONTACT_PHONE || "+1 (234) 567-890",
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    enableNewsletter: import.meta.env.VITE_ENABLE_NEWSLETTER === "true",
    environment: (import.meta.env.VITE_ENVIRONMENT || "development") as
      | "development"
      | "production"
      | "staging",
  };
}

/**
 * Check if running in development mode
 */
export function isDevelopment(): boolean {
  return import.meta.env.DEV;
}

/**
 * Check if running in production mode
 */
export function isProduction(): boolean {
  return import.meta.env.PROD;
}

/**
 * Get app version
 */
export function getAppVersion(): string {
  return import.meta.env.__APP_VERSION__ || "1.0.0";
}

// Export singleton configuration
export const config = getConfig();
