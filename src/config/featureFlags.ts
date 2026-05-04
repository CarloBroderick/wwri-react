/**
 * Feature flags for the WWRI application.
 * 
 * Set APP_MODE to control which features are available:
 * - "PRODUCTION": All dev tools hidden, clean UI for end users
 * - "DEBUG": Dev tools available via header dropdown
 * 
 * Dev tools are hidden unless intentionally enabled with:
 * - npm run dev -- --mode devtools
 * - VITE_ENABLE_DEVTOOLS=true npm run dev
 * - VITE_ENABLE_DEVTOOLS=true npm run build
 */

export type AppMode = "PRODUCTION" | "DEBUG";

export const DEVTOOLS_ENABLED =
  import.meta.env.MODE === "devtools" ||
  import.meta.env.VITE_ENABLE_DEVTOOLS === "true";

export const APP_MODE: AppMode = DEVTOOLS_ENABLED ? "DEBUG" : "PRODUCTION";

// Feature flag checks
export const isDebugMode = (): boolean => APP_MODE === "DEBUG";
export const isProductionMode = (): boolean => APP_MODE === "PRODUCTION";
