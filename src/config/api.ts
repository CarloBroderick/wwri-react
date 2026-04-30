/**
 * API Configuration
 * 
 * Controls service URLs for the WWRI Metrics API and tile server.
 * Local development defaults to the deployed preview services, while
 * production defaults to same-origin paths so the app follows its hosted domain.
 */

const DEPLOYED_SERVICE_ORIGIN = "https://preview.wildfireindex.org";

const DEFAULT_API_BASE_URL = import.meta.env.DEV
  ? `${DEPLOYED_SERVICE_ORIGIN}/api`
  : "/api";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL;

// Use window.location.origin in production so tile URLs are absolute.
// MapLibre fetches tiles in a Web Worker with a blob: origin, which cannot
// resolve relative paths like "/data/...". An absolute URL avoids this.
export const TILE_SERVER_URL =
  import.meta.env.VITE_TILE_SERVER_URL ??
  (import.meta.env.DEV ? DEPLOYED_SERVICE_ORIGIN : window.location.origin);

// Local tile server for development (run: node labels/serve-tiles.js in wwri-metrics-api)
// Set VITE_LOCAL_TILES=true to use it instead of the deployed tile server.
const LOCAL_TILE_SERVER_URL = "http://localhost:8082";

// Self-hosted label tiles URL
// Uses the deployed/same-origin tile server unless local tiles are explicitly enabled.
// Set VITE_FORCE_PRODUCTION_TILES=true to test production tiles on localhost
const FORCE_PRODUCTION_TILES = import.meta.env.VITE_FORCE_PRODUCTION_TILES === "true";
const USE_LOCAL_TILES = !FORCE_PRODUCTION_TILES && import.meta.env.VITE_LOCAL_TILES === "true";
export const LABEL_TILES_URL = USE_LOCAL_TILES
  ? `${LOCAL_TILE_SERVER_URL}/data/labels/{z}/{x}/{y}.pbf`
  : `${TILE_SERVER_URL}/data/labels/{z}/{x}/{y}.pbf`;

// OpenFreeMap vector tiles (kept as fallback, but no longer used for labels)
// Provides vector tiles with full styling control for labels
// Source: https://openfreemap.org/
export const OPENFREEMAP_TILES_URL = "https://tiles.openfreemap.org/planet/{z}/{x}/{y}.pbf";

// Current geographic context - can be made dynamic later
// For now, defaulting to US census tracts (original behavior)
const DEFAULT_COUNTRY = "us";
const DEFAULT_GEO_LEVEL = "tract";

/**
 * Configuration for each tile source (country + geography type).
 * - tileUrl: URL template for vector tiles
 * - sourceLayer: Layer name in the MBTiles
 * - idField: Attribute name in tiles for the geographic ID
 * - nameField: Attribute name in tiles for display name
 * - apiCountry: Country path segment for API calls
 * - apiGeoLevel: Geo level path segment for API calls
 * - displayName: Human-readable name for tooltips
 */
interface TileSourceConfig {
  tileUrl: string;
  sourceLayer: string;
  idField: string;
  nameField: string;
  apiCountry: string;
  apiGeoLevel: string;
  displayName: string;
}

/**
 * Unified geographic levels that combine US and Canada data.
 * Each level has configs for both countries to display simultaneously.
 */
export const UNIFIED_GEO_LEVELS = {
  tract: {
    label: "Census Tracts / Subdivisions",
    us: {
      tileUrl: `${TILE_SERVER_URL}/data/us_tracts/{z}/{x}/{y}.pbf`,
      sourceLayer: "us_tracts",
      idField: "geoid",
      nameField: "tract",
      apiCountry: "us",
      apiGeoLevel: "tract",
      displayName: "Census Tract",
    } as TileSourceConfig,
    canada: {
      tileUrl: `${TILE_SERVER_URL}/data/ca_subdivisions/{z}/{x}/{y}.pbf`,
      sourceLayer: "ca_subdivisions",
      idField: "csduid",
      nameField: "subdvsn",
      apiCountry: "canada",
      apiGeoLevel: "subdivision",
      displayName: "Census Subdivision",
    } as TileSourceConfig,
  },
  county: {
    label: "Counties / Divisions",
    us: {
      tileUrl: `${TILE_SERVER_URL}/data/us_counties/{z}/{x}/{y}.pbf`,
      sourceLayer: "us_counties",
      idField: "stco_fips",
      nameField: "county",
      apiCountry: "us",
      apiGeoLevel: "county",
      displayName: "County",
    } as TileSourceConfig,
    canada: {
      tileUrl: `${TILE_SERVER_URL}/data/ca_divisions/{z}/{x}/{y}.pbf`,
      sourceLayer: "ca_divisions",
      idField: "cduid",
      nameField: "division",
      apiCountry: "canada",
      apiGeoLevel: "division",
      displayName: "Census Division",
    } as TileSourceConfig,
  },
  district: {
    label: "Congressional Districts / Ridings",
    us: {
      tileUrl: `${TILE_SERVER_URL}/data/us_districts/{z}/{x}/{y}.pbf`,
      sourceLayer: "us_districts",
      // Shapefile attribute populated by tippecanoe; matches the geoid stored
      // in us_district_metrics (state_fips + cd_num zero-padded, e.g. "0612").
      idField: "geoid",
      // namelsad is the most user-friendly label on hover ("Congressional District 12").
      nameField: "namelsad",
      apiCountry: "us",
      apiGeoLevel: "district",
      displayName: "Congressional District",
    } as TileSourceConfig,
    canada: {
      tileUrl: `${TILE_SERVER_URL}/data/ca_ridings/{z}/{x}/{y}.pbf`,
      sourceLayer: "ca_ridings",
      // The tippecanoe build script adds a string `geoid` attribute (= csduid
      // = fed_num zero-padded) so the tile property matches the API geoid
      // exactly and no client-side casting is needed.
      idField: "geoid",
      nameField: "riding",
      apiCountry: "canada",
      apiGeoLevel: "riding",
      displayName: "Federal Riding",
    } as TileSourceConfig,
  },
  state: {
    label: "States / Provinces",
    us: {
      tileUrl: `${TILE_SERVER_URL}/data/us_states/{z}/{x}/{y}.pbf`,
      sourceLayer: "us_states",
      idField: "name",
      nameField: "name",
      apiCountry: "us",
      apiGeoLevel: "state",
      displayName: "State",
    } as TileSourceConfig,
    canada: {
      tileUrl: `${TILE_SERVER_URL}/data/ca_provinces/{z}/{x}/{y}.pbf`,
      sourceLayer: "ca_provinces",
      idField: "name",
      nameField: "name",
      apiCountry: "canada",
      apiGeoLevel: "province",
      displayName: "Province",
    } as TileSourceConfig,
  },
} as const;

export type UnifiedGeoLevel = keyof typeof UNIFIED_GEO_LEVELS;

// Keep old config for backward compatibility during transition
export const GEO_LEVEL_CONFIG = {
  us: {
    tract: UNIFIED_GEO_LEVELS.tract.us,
    county: UNIFIED_GEO_LEVELS.county.us,
    district: UNIFIED_GEO_LEVELS.district.us,
    state: UNIFIED_GEO_LEVELS.state.us,
  },
  canada: {
    subdivision: UNIFIED_GEO_LEVELS.tract.canada,
    division: UNIFIED_GEO_LEVELS.county.canada,
    riding: UNIFIED_GEO_LEVELS.district.canada,
    province: UNIFIED_GEO_LEVELS.state.canada,
  },
} as const;

export type Country = keyof typeof GEO_LEVEL_CONFIG;
export type USGeoLevel = keyof typeof GEO_LEVEL_CONFIG.us;
export type CanadaGeoLevel = keyof typeof GEO_LEVEL_CONFIG.canada;

/**
 * The API always uses 'geoid' as the ID column name, regardless of geography type.
 * This is different from tile attributes which vary (geoid, csduid, stco_fips, etc.)
 */
export const API_ID_FIELD = "geoid";

/**
 * Builds the URL for fetching metric data.
 * API: /:country/:geoLevel/:domain/:metric
 */
export function getMetricUrl(domain: string, metric: string, country = DEFAULT_COUNTRY, geoLevel = DEFAULT_GEO_LEVEL): string {
    const resolvedDomain = resolveApiDomain(domain, country, geoLevel);
    return `${API_BASE_URL}/${country}/${geoLevel}/${resolvedDomain}/${metric}`;
}

/**
 * Resolves the API domain name for a given country and geo level.
 * Carlo's zonal pipeline is inconsistent about where the overall resilience
 * metric (`wwri_final_score`) lives. Most levels store it under domain "wwri",
 * but a handful store it under "overall". The frontend uses "wwri" canonically
 * and this function rewrites the request for the outliers.
 *
 * Outliers (domain "overall" instead of "wwri"):
 *   - US: county, district
 *   - Canada: riding
 */
function resolveApiDomain(domain: string, apiCountry: string, apiGeoLevel: string): string {
    if (domain !== "wwri") return domain;
    const isOverallLevel =
        (apiCountry === "us" && (apiGeoLevel === "county" || apiGeoLevel === "district")) ||
        (apiCountry === "canada" && apiGeoLevel === "riding");
    return isOverallLevel ? "overall" : domain;
}

/**
 * Builds metric URLs for both US and Canada at a unified geo level.
 */
export function getUnifiedMetricUrls(domain: string, metric: string, unifiedLevel: UnifiedGeoLevel): { us: string; canada: string } {
    const levelConfig = UNIFIED_GEO_LEVELS[unifiedLevel];
    const usDomain = resolveApiDomain(domain, levelConfig.us.apiCountry, levelConfig.us.apiGeoLevel);
    const canadaDomain = resolveApiDomain(domain, levelConfig.canada.apiCountry, levelConfig.canada.apiGeoLevel);
    return {
        us: `${API_BASE_URL}/${levelConfig.us.apiCountry}/${levelConfig.us.apiGeoLevel}/${usDomain}/${metric}`,
        canada: `${API_BASE_URL}/${levelConfig.canada.apiCountry}/${levelConfig.canada.apiGeoLevel}/${canadaDomain}/${metric}`,
    };
}

/**
 * Builds the URL for fetching summary data (all domain scores).
 * API: /:country/:geoLevel/summary
 */
export function getSummaryUrl(country = DEFAULT_COUNTRY, geoLevel = DEFAULT_GEO_LEVEL): string {
    return `${API_BASE_URL}/${country}/${geoLevel}/summary`;
}

/**
 * Builds the URL for fetching location data.
 * API: /:country/:geoLevel/locations
 */
export function getLocationsUrl(country = DEFAULT_COUNTRY, geoLevel = DEFAULT_GEO_LEVEL): string {
    return `${API_BASE_URL}/${country}/${geoLevel}/locations`;
}

/**
 * Builds location URLs for both US and Canada at a unified geo level.
 */
export function getUnifiedLocationUrls(unifiedLevel: UnifiedGeoLevel): { us: string; canada: string } {
    const levelConfig = UNIFIED_GEO_LEVELS[unifiedLevel];
    return {
        us: `${API_BASE_URL}/${levelConfig.us.apiCountry}/${levelConfig.us.apiGeoLevel}/locations`,
        canada: `${API_BASE_URL}/${levelConfig.canada.apiCountry}/${levelConfig.canada.apiGeoLevel}/locations`,
    };
}

/**
 * Builds the URL for fetching available domains and metrics.
 * API: /:country/:geoLevel/domains
 */
export function getDomainsUrl(country = DEFAULT_COUNTRY, geoLevel = DEFAULT_GEO_LEVEL): string {
    return `${API_BASE_URL}/${country}/${geoLevel}/domains`;
}

/**
 * Builds the URL for fetching all metrics for a single region.
 * API: /:country/:geoLevel/region/:geoid
 * Returns JSON with all metric values for the specified region.
 */
export function getRegionMetricsUrl(geoid: string, country = DEFAULT_COUNTRY, geoLevel = DEFAULT_GEO_LEVEL): string {
    return `${API_BASE_URL}/${country}/${geoLevel}/region/${geoid}`;
}

export { API_BASE_URL, DEFAULT_COUNTRY, DEFAULT_GEO_LEVEL };

