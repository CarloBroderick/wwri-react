import type {
  Domain,
  Metric,
  Resilience,
  ResilienceSubdomain,
  Status,
  Subdomain,
} from "../types/domainTypes";

type DescriptionEntry = {
  id: string;
  label: string;
  revisedDescription: string;
};

const REVISED_DESCRIPTIONS: DescriptionEntry[] = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    revisedDescription:
      "Infrastructure provides the foundation for communities to live, work, and access essential resources in wildfire-prone places.",
  },
  {
    id: "infrastructure_status",
    label: "Status",
    revisedDescription:
      "(since it is grayed out, a box could appear when it gets hovered over). Not assessed. Instead, it is evaluated based on where structures are.",
  },
  {
    id: "infrastructure_resilience",
    label: "Resilience",
    revisedDescription:
      "Capacity of buildings to resist burning, and for the community to rebuild",
  },
  {
    id: "infrastructure_resistance",
    label: "Resistance",
    revisedDescription: "Structural resistance to wildfire damage.",
  },
  {
    id: "infrastructure_resistance_building_codes",
    label: "Building Codes",
    revisedDescription:
      "Alignment of state-level building codes with IWUIC code standards",
  },
  {
    id: "infrastructure_resistance_wildland_urban_interface",
    label: "Wildland Urban Interface",
    revisedDescription: "Proportion of structures in the wildland urban interface",
  },
  {
    id: "infrastructure_resistance_egress",
    label: "Road Access",
    revisedDescription: "Community meets minimum six-road access threshold",
  },
  {
    id: "infrastructure_resistance_fire_resource_density",
    label: "Fire Fighting Access",
    revisedDescription: "Density of fire stations",
  },
  {
    id: "infrastructure_resistance_d_space",
    label: "Defensible Space",
    revisedDescription: "Defensible space around structures.",
  },
  {
    id: "infrastructure_recovery",
    label: "Recovery",
    revisedDescription:
      "Capacity of a community to rebuild infrastructure after wildfire",
  },
  {
    id: "infrastructure_recovery_income",
    label: "Income",
    revisedDescription: "Median household income",
  },
  {
    id: "infrastructure_recovery_incorporation",
    label: "Incorporation",
    revisedDescription: "Incorporation status",
  },
  {
    id: "infrastructure_recovery_owners",
    label: "Home Ownership",
    revisedDescription: "Home ownership rates",
  },
  {
    id: "communities",
    label: "Communities",
    revisedDescription:
      "Communities captures the social and civic capacity to prepare for and recover from wildfire.",
  },
  {
    id: "communities_resilience",
    label: "Resilience",
    revisedDescription: "Community capacity to resist and recover from wildfire.",
  },
  {
    id: "communities_resistance",
    label: "Resistance",
    revisedDescription: "Community resistance to wildfire impacts.",
  },
  {
    id: "communities_resistance_cwpps",
    label: "Community Wildfire Protection Plans",
    revisedDescription: "Presence of Community Wildfire Protection Plans.",
  },
  {
    id: "communities_resistance_firewise_communities",
    label: "Firewise Communities",
    revisedDescription: "Firewise USA community recognition.",
  },
  {
    id: "communities_resistance_volunteer_fire_stations",
    label: "Volunteer Firefighters",
    revisedDescription: "Number of volunteer firefighters",
  },
  {
    id: "communities_resistance_age_65_plus",
    label: "Age (65+)",
    revisedDescription: "Population age 65 and older.",
  },
  {
    id: "communities_resistance_disability",
    label: "Disability",
    revisedDescription: "Population with disabilities.",
  },
  {
    id: "communities_resistance_no_vehicle",
    label: "Car Access",
    revisedDescription: "Households without vehicle access.",
  },
  {
    id: "communities_resistance_egress",
    label: "Evacuation Routes",
    revisedDescription: "Community meets minimum six-road access threshold",
  },
  {
    id: "communities_recovery",
    label: "Recovery",
    revisedDescription: "Community capacity to recover after wildfire.",
  },
  {
    id: "communities_recovery_income",
    label: "Income",
    revisedDescription:
      "Composite indicator of ommunity income, including both houseoholds >200k and below the poverty level",
  },
  {
    id: "communities_recovery_incorporation",
    label: "Incorporation",
    revisedDescription: "Incorporation status",
  },
  {
    id: "communities_recovery_owners",
    label: "Home Ownership",
    revisedDescription: "Home ownership rates.",
  },
  {
    id: "livelihoods",
    label: "Livelihoods",
    revisedDescription:
      "Livelihoods reflects how wildfire affects jobs, income stability, and local economic recovery.",
  },
  {
    id: "livelihoods_status",
    label: "Status",
    revisedDescription: "Current economic status indicators.",
  },
  {
    id: "livelihoods_status_unemployment",
    label: "Unemployment",
    revisedDescription: "Unemployment rate.",
  },
  {
    id: "livelihoods_status_median_income",
    label: "Median Income",
    revisedDescription: "Median household income.",
  },
  {
    id: "livelihoods_status_housing_burden",
    label: "Housing Burden",
    revisedDescription:
      "Fraction of population that is house burdened (>30% income)",
  },
  {
    id: "livelihoods_resilience",
    label: "Resilience",
    revisedDescription: "Economic capacity to resist and recover from wildfire.",
  },
  {
    id: "livelihoods_resistance",
    label: "Resistance",
    revisedDescription: "Economic resistance to wildfire impacts.",
  },
  {
    id: "livelihoods_resistance_job_vulnerability",
    label: "Vulnerable Jobs",
    revisedDescription: "Jobs vulnerable to wildfire disruption.",
  },
  {
    id: "livelihoods_recovery",
    label: "Recovery",
    revisedDescription: "Economic recovery capacity.",
  },
  {
    id: "livelihoods_recovery_diversity_of_jobs",
    label: "Job Diversity",
    revisedDescription: "Economic diversity of employment.",
  },
  {
    id: "sense_of_place",
    label: "Sense of Place",
    revisedDescription:
      "Sense of Place captures culturally and ecologically meaningful places and species that shape identity.",
  },
  {
    id: "iconic_places",
    label: "Iconic Places",
    revisedDescription: "Nationally recognized iconic places ",
  },
  {
    id: "sense_of_place_iconic_places_status_presence",
    label: "Status",
    revisedDescription: "NA?",
  },
  {
    id: "sense_of_place_iconic_places_status_presence",
    label: "Places Presence",
    revisedDescription: "NA?",
  },
  {
    id: "sense_of_place_iconic_places_resilience",
    label: "Resilience",
    revisedDescription:
      "Iconic places capacity to resist damage/loss and recover from wildfire.",
  },
  {
    id: "sense_of_place_iconic_places_resistance",
    label: "Resistance",
    revisedDescription:
      "Resistance of iconic places, both natural and built, to wildfire",
  },
  {
    id: "sense_of_place_iconic_places_resistance_wui",
    label: "WUI Exposure",
    revisedDescription: "Proportion of iconic places in the WUI",
  },
  {
    id: "sense_of_place_iconic_places_resistance_egress",
    label: "Road Access",
    revisedDescription: "Place meets minimum six-road access threshold",
  },
  {
    id: "sense_of_place_iconic_places_resistance_fire_resource_density",
    label: "Fire Access",
    revisedDescription: "Density of fire stations",
  },
  {
    id: "sense_of_place_iconic_places_resistance_structures",
    label: "Structures",
    revisedDescription: "Resistance of built iconic places to wildfire",
  },
  {
    id: "sense_of_place_iconic_places_resistance_national_parks",
    label: "Nat'l Parks",
    revisedDescription: "Resistance of natural iconic places to wildfire",
  },
  {
    id: "sense_of_place_iconic_places_recovery",
    label: "Recovery",
    revisedDescription: "Recovery potential for iconic places.",
  },
  {
    id: "sense_of_place_iconic_places_recovery_degree_of_protection",
    label: "Protection",
    revisedDescription: "Level of protection for iconic places.",
  },
  {
    id: "sense_of_place_iconic_places_recovery_national_parks",
    label: "Nat'l Parks",
    revisedDescription: "Recovery potential for natural iconic places.",
  },
  {
    id: "iconic_species",
    label: "Iconic Species",
    revisedDescription: "Reslience of iconic species to wildfire",
  },
  {
    id: "sense_of_place_iconic_species_status",
    label: "Status",
    revisedDescription: "Conservation status of iconic species.",
  },
  {
    id: "sense_of_place_iconic_species_status",
    label: "Species Status",
    revisedDescription: "Conservation status of iconic species.",
  },
  {
    id: "sense_of_place_iconic_species_status_75_extinction_rescaled",
    label: "Extinction Risk",
    revisedDescription: "Iconic species extinction risk assessment.",
  },
  {
    id: "sense_of_place_iconic_species_resilience",
    label: "Resilience",
    revisedDescription:
      "Iconic species capacity to resist harm and potential recovery capacity from wildfire.",
  },
  {
    id: "sense_of_place_iconic_species_resistance",
    label: "Resistance",
    revisedDescription: "Iconic species resistance to fire.",
  },
  {
    id: "sense_of_place_iconic_species_resistance",
    label: "Species",
    revisedDescription: "Iconic species resistance to fire.",
  },
  {
    id: "sense_of_place_iconic_species_traits_resistance",
    label: "Species Traits",
    revisedDescription: "Traits associated with wildfire resistance",
  },
  {
    id: "sense_of_place_iconic_species_recovery",
    label: "Recovery",
    revisedDescription: "Iconic species recovery potential.",
  },
  {
    id: "sense_of_place_iconic_species_recovery",
    label: "Species",
    revisedDescription: "Iconic species recovery capacity.",
  },
  {
    id: "sense_of_place_iconic_species_traits_recovery",
    label: "Species Traits",
    revisedDescription: "Traits associated with wildfire recovery",
  },
  {
    id: "sense_of_place_iconic_species_area_recovery",
    label: "Range Size",
    revisedDescription: "Range size",
  },
  {
    id: "biodiversity",
    label: "Species",
    revisedDescription:
      "Species measures conservation status and fire-related traits that influence how species resist and recover after wildfire.",
  },
  {
    id: "biodiversity_status",
    label: "Status",
    revisedDescription: "Species conservation status",
  },
  {
    id: "biodiversity_status",
    label: "Conservation Threat",
    revisedDescription: "Species conservation threat level.",
  },
  {
    id: "biodiversity_resilience",
    label: "Resilience",
    revisedDescription: "Species capacity to resist and recover from wildfire.",
  },
  {
    id: "biodiversity_resistance",
    label: "Resistance",
    revisedDescription: "Species resistance to wildfire impacts.",
  },
  {
    id: "biodiversity_resistance_traits",
    label: "Resistance Traits",
    revisedDescription: "Traits associated with wildfire resistance",
  },
  {
    id: "biodiversity_recovery",
    label: "Recovery",
    revisedDescription: "Species recovery capacity after wildfire.",
  },
  {
    id: "biodiversity_recovery_traits",
    label: "Recovery Traits",
    revisedDescription: "Traits associated with wildfire resistance",
  },
  {
    id: "biodiversity_recovery_range_area",
    label: "Range Size",
    revisedDescription: "Range size",
  },
  {
    id: "natural_habitats",
    label: "Habitats",
    revisedDescription:
      "Habitats evaluates vegetation extent and capacity to resist wildfire as well as recovery potential ",
  },
  {
    id: "natural_habitats_status",
    label: "Status",
    revisedDescription:
      "Status reflects the current extent of the habitat compared to its historic extent",
  },
  {
    id: "natural_habitats_status_percent_protected",
    label: "Protection Status",
    revisedDescription: "Percentage of habitat under protection.",
  },
  {
    id: "natural_habitats_status_extent_change_2005",
    label: "Development",
    revisedDescription: "Habitat extent change since 2005.",
  },
  {
    id: "natural_habitats_resilience",
    label: "Resilience",
    revisedDescription: "Habitat capacity to resist and recover from wildfire.",
  },
  {
    id: "natural_habitats_resistance",
    label: "Resistance",
    revisedDescription: "Habitat resistance to wildfire impacts.",
  },
  {
    id: "natural_habitats_resistance_tree_traits",
    label: "Tree Traits",
    revisedDescription: "Species traits conferring fire resistance.",
  },
  {
    id: "natural_habitats_resistance_density",
    label: "Stand Density",
    revisedDescription: "Forest stand density.",
  },
  {
    id: "natural_habitats_resistance_NDVI",
    label: "NDVI Heterogeneity",
    revisedDescription: "Normalized Difference Vegetation Index heterogeneity.",
  },
  {
    id: "natural_habitats_resistance_npp",
    label: "Net Primary Production",
    revisedDescription: "Net primary productivity.",
  },
  {
    id: "natural_habitats_resistance_vpd",
    label: "Vapor Pressure Deficit",
    revisedDescription: "Vapor pressure deficit associated with increased fire",
  },
  {
    id: "natural_habitats_recovery",
    label: "Recovery",
    revisedDescription: "Habitat recovery capacity after wildfire.",
  },
  {
    id: "natural_habitats_recovery_tree_traits",
    label: "Tree Traits",
    revisedDescription: "Tree species traits supporting recovery.",
  },
  {
    id: "natural_habitats_recovery_diversity",
    label: "Stand Diversity",
    revisedDescription: "Forest stand diversity.",
  },
  {
    id: "natural_habitats_recovery_ppt",
    label: "Precipitation",
    revisedDescription: "Rainfall supporting post-fire recovery.",
  },
  {
    id: "water",
    label: "Water",
    revisedDescription:
      "Water tracks quantity and timing in freshwater systems as well as the ability to supply freshwater for human needs",
  },
  {
    id: "water_status",
    label: "Status",
    revisedDescription: "Quantiy and timing of water on the landscape",
  },
  {
    id: "water_status_surface_water_quantity",
    label: "Water Quantity",
    revisedDescription: "Surface water quantity availability.",
  },
  {
    id: "water_status_surface_water_timing",
    label: "Water Timing",
    revisedDescription: "Timing of surface water availability.",
  },
  {
    id: "water_resilience",
    label: "Resilience",
    revisedDescription:
      "Capacity to maintain safe water supplies during and after wildfires.",
  },
  {
    id: "water_resistance",
    label: "Resistance",
    revisedDescription: "Ability to resist distrupted freshwater supply.",
  },
  {
    id: "water_resistance_water_treatment",
    label: "Water Treatment Compliance",
    revisedDescription: "Water treatment plant compliance rates.",
  },
  {
    id: "water_resistance_drought_plans",
    label: "Drought Plans",
    revisedDescription: "Comprehensivness of state water management plans.",
  },
  {
    id: "air_quality",
    label: "Air Quality",
    revisedDescription:
      "Air Quality measures exposure to poor air quality as well as capacity to withstand negative health impacts.",
  },
  {
    id: "air_quality_status",
    label: "Status",
    revisedDescription: "Current air quality status indicators.",
  },
  {
    id: "air_quality_status_aqi_100",
    label: "Days AQI > 100",
    revisedDescription:
      "Number of days with Air Quality Index exceeding 100 (unhealthy for sensitive groups).",
  },
  {
    id: "air_quality_status_aqi_300",
    label: "Days AQI > 300",
    revisedDescription:
      "Number of days with Air Quality Index exceeding 300 (hazardous for all groups).",
  },
  {
    id: "air_quality_resilience",
    label: "Resilience",
    revisedDescription:
      "Capacity to resist negative health impacts of poor air quality.",
  },
  {
    id: "air_quality_resistance",
    label: "Resistance",
    revisedDescription:
      "Capacity to resist negative health impacts of poor air quality.",
  },
  {
    id: "air_quality_resistance_copd",
    label: "COPD Prevalence",
    revisedDescription:
      "Chronic Obstructive Pulmonary Disease (COPD) prevalence in the population.",
  },
  {
    id: "air_quality_resistance_asthma",
    label: "Asthma Prevalence",
    revisedDescription: "Asthma prevalence in the population.",
  },
  {
    id: "air_quality_resistance_vulnerable_populations",
    label: "Vulnerable Populations",
    revisedDescription:
      "Demographics of populations vulnerable to air quality impacts.",
  },
  {
    id: "air_quality_resistance_vulnerable_workers",
    label: "Vulnerable Workers",
    revisedDescription: "Employment in forestry, construction, or farmwork.",
  },
  {
    id: "air_quality_resistance_hospital_density",
    label: "Medical Infrastructure",
    revisedDescription: "Access to medical infrastructure and hospitals.",
  },
];

const descriptionByIdAndLabel = new Map(
  REVISED_DESCRIPTIONS.map((entry) => [
    getDescriptionKey(entry.id, entry.label),
    entry.revisedDescription,
  ]),
);

const uniqueDescriptionById = REVISED_DESCRIPTIONS.reduce(
  (acc, entry) => {
    const previous = acc[entry.id];

    if (!previous) {
      acc[entry.id] = entry.revisedDescription;
      return acc;
    }

    if (previous !== entry.revisedDescription) {
      delete acc[entry.id];
    }

    return acc;
  },
  {} as Record<string, string>,
);

function getDescriptionKey(id: string, label: string) {
  return `${id}::${label}`;
}

function getRevisedDescription(id: string, label: string) {
  return (
    descriptionByIdAndLabel.get(getDescriptionKey(id, label)) ??
    uniqueDescriptionById[id]
  );
}

function withRevisedDescription<T extends { id: string; label: string; description: string }>(
  item: T,
): T {
  return {
    ...item,
    description: getRevisedDescription(item.id, item.label) ?? item.description,
  };
}

function applyMetricDescriptions(metrics: Metric[]): Metric[] {
  return metrics.map((metric) => withRevisedDescription(metric));
}

function applyStatusDescriptions(status?: Status): Status | undefined {
  if (!status) return undefined;

  return {
    ...withRevisedDescription(status),
    metrics: applyMetricDescriptions(status.metrics),
  };
}

function applyResilienceSubdomainDescriptions(
  subdomain?: ResilienceSubdomain,
): ResilienceSubdomain | undefined {
  if (!subdomain) return undefined;

  return {
    ...withRevisedDescription(subdomain),
    metrics: applyMetricDescriptions(subdomain.metrics),
  };
}

function applyResilienceDescriptions(resilience?: Resilience): Resilience | undefined {
  if (!resilience) return undefined;

  return {
    ...withRevisedDescription(resilience),
    resistance: applyResilienceSubdomainDescriptions(resilience.resistance),
    recovery: applyResilienceSubdomainDescriptions(resilience.recovery),
  };
}

function applySubdomainDescriptions(subdomain: Subdomain): Subdomain {
  return {
    ...withRevisedDescription(subdomain),
    status: applyStatusDescriptions(subdomain.status),
    resilience: applyResilienceDescriptions(subdomain.resilience),
  };
}

export function applyRevisedIndicatorDescriptions(domains: Domain[]): Domain[] {
  return domains.map((domain) => ({
    ...withRevisedDescription(domain),
    status: applyStatusDescriptions(domain.status),
    resilience: applyResilienceDescriptions(domain.resilience),
    subdomains: domain.subdomains?.map(applySubdomainDescriptions),
  }));
}
