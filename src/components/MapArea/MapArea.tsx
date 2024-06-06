import MapOfFullStatenameToAbbreviation, {
  StateNames,
} from "data/StateNameToAbbrevsMap";
import maplibregl, { StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Papa from "papaparse";
import React, { useEffect, useRef, useState } from "react";
import CloseIcon from "../../assets/CloseIcon.svg";
import ResetIcon from "../../assets/ResetIcon.svg"; // Add your reset view icon SVG
import SearchIcon from "../../assets/SearchIcon.svg";
import ZoomInIcon from "../../assets/ZoomInIcon.svg";
import ZoomOutIcon from "../../assets/ZoomOutIcon.svg";

const MAP_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "Map data © OpenStreetMap contributors",
    },
    tilesource: {
      type: "vector",
      tiles: [
        "https://major-sculpin.nceas.ucsb.edu/censustracts/data/tiles/{z}/{x}/{y}.pbf",
      ],
      minzoom: 0,
      maxzoom: 14,
    },
  },
  layers: [
    {
      id: "simple-tiles",
      type: "raster",
      source: "osm",
    },
    {
      id: "tiles",
      type: "fill",
      source: "tilesource",
      "source-layer": "cb_2023_us_tract_5m_with_geoid",
      paint: {
        "fill-color": ["coalesce", ["feature-state", "color"], "#D3D3D3"],
      },
    },
  ],
};

const fetchData = async (metric: string): Promise<Record<string, number>> => {
  const response = await fetch(
    `https://major-sculpin.nceas.ucsb.edu/api/air_quality_metrics/${metric}`,
  );
  const csvText = await response.text();
  const results = Papa.parse(csvText, { header: true });

  const censusTractMetrics: Record<string, number> = {};
  results.data.forEach((item: any) => {
    if (item.geoid && item[metric]) {
      censusTractMetrics[item.geoid] = parseFloat(item[metric]);
    }
  });

  return censusTractMetrics;
};

const fetchLocationData = async (): Promise<
  Record<string, { county_name: string; state_name: StateNames }>
> => {
  const response = await fetch(
    `https://major-sculpin.nceas.ucsb.edu/api/locations`,
  );
  const csvText = await response.text();
  const results = Papa.parse(csvText, { header: true });

  const locationData: Record<
    string,
    { county_name: string; state_name: StateNames }
  > = {};
  results.data.forEach((item: any) => {
    if (item.geoid) {
      locationData[item.geoid] = {
        county_name: item.county_name,
        state_name: item.state_name,
      };
    }
  });

  return locationData;
};

interface MapAreaProps {
  selectedCensusTract: string;
  selectedMetric: string;
  setSelectedMetricValue?: (value: number) => void;
  setSelectedCountyName: (countyName: string) => void;
  setSelectedStateName: (stateName: StateNames) => void;
  setSelectedCensusTract: (censusTract: string) => void;
}

const MapArea: React.FC<MapAreaProps> = ({
  selectedCensusTract,
  selectedMetric,
  setSelectedCountyName,
  setSelectedStateName,
  setSelectedMetricValue,
  setSelectedCensusTract,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [censusTractMetrics, setCensusTractMetrics] = useState<
    Record<string, number>
  >({});
  const [locationData, setLocationData] = useState<
    Record<string, { county_name: string; state_name: StateNames }>
  >({});
  const censusTractMetricsRef = useRef<Record<string, number>>({});
  const locationDataRef = useRef<
    Record<string, { county_name: string; state_name: StateNames }>
  >({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchExpanded, setSearchExpanded] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      const fetchDataPromise = fetchData(selectedMetric);
      const fetchLocationDataPromise = fetchLocationData();
      const metrics = await fetchDataPromise;
      const locations = await fetchLocationDataPromise;
      setCensusTractMetrics(metrics);
      setLocationData(locations);
      censusTractMetricsRef.current = metrics; // Update ref
      locationDataRef.current = locations; // Update ref
      setDataLoaded(true);
    };
    initializeData();
  }, [selectedMetric]);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: MAP_STYLE,
        center: [-103.9375, 38.7888894],
        zoom: 3.3,
      });
      mapRef.current = map;

      map.on("load", () => {
        setMapLoaded(true);
      });

      map.on("click", "tiles", (event) => {
        const features = event.features;
        if (features && features.length > 0) {
          const feature = features[0];
          const { GEOID } = feature.properties;
          const metric = censusTractMetricsRef.current[GEOID];
          if (typeof metric === "number" && setSelectedMetricValue) {
            setSelectedCountyName(locationDataRef.current[GEOID].county_name);
            setSelectedStateName(locationDataRef.current[GEOID].state_name);
            setSelectedCensusTract(GEOID);
            setSelectedMetricValue(metric);
            console.log("Selected metric value:", metric);
          }
        }
      });

      map.on("mousemove", "tiles", (event) => {
        const features = event.features;
        if (features && features.length > 0) {
          const feature = features[0];
          const { GEOID } = feature.properties;
          const metric = censusTractMetricsRef.current[GEOID];
          const location = locationDataRef.current[GEOID];

          if (!popupRef.current) {
            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
            });
          }

          const stateAbbrev: string =
            MapOfFullStatenameToAbbreviation[location?.state_name];

          const tooltipHTML = `
            <div id="map-tooltip" class="rounded">
              <h1 class="font-bold text-[0.8rem] text-selectedIndicatorTextColor">
                ${location?.county_name?.toUpperCase() || "N/A"}, ${stateAbbrev}
              </h1>
              <h2 class="text-xs tracking-widest">TRACT ${GEOID}</h2>
              <div class="mt-1 flex items-center">
                <div class="blackc mr-1 inline-block min-h-4 min-w-4 rounded-sm border-[1px] border-solid border-black bg-gray-500"></div>
                <span class="font-bold text-black">
                  ${metric !== undefined ? `${(metric * 100).toFixed(1)}%` : "N/A"}
                </span>
                <span class="ml-1 text-xs"> Water pollutants resistance</span>
              </div>
            </div>
          `;

          popupRef.current
            .setLngLat(event.lngLat)
            .setHTML(tooltipHTML)
            .addTo(map);
        }
      });

      map.on("mouseleave", "tiles", () => {
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });

      map.on("moveend", () => {
        console.log("movend event");
        loadColors(map);
      });
    }

    return () => {
      if (popupRef.current) {
        popupRef.current.remove();
        popupRef.current = null;
      }
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (dataLoaded && mapLoaded && mapRef.current) {
      loadColors(mapRef.current);
    }
  }, [censusTractMetrics, dataLoaded, mapLoaded]);

  const loadColors = (map: maplibregl.Map) => {
    const features = map.queryRenderedFeatures({ layers: ["tiles"] });
    features.forEach((feature) => {
      const censusTractId = feature.properties.GEOID;
      const metric = censusTractMetricsRef.current[censusTractId];

      if (metric !== undefined) {
        const color = getColor(metric);
        map.setFeatureState(
          {
            source: "tilesource",
            sourceLayer: "cb_2023_us_tract_5m_with_geoid",
            id: feature.id,
          },
          { color },
        );
      }
    });
  };

  const getColor = (value: number): string => {
    const startColor = { r: 211, g: 211, b: 211 }; // Light gray
    const endColor = { r: 27, g: 41, b: 61 }; // Dark blueish gray

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * value);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * value);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * value);

    return `rgb(${r},${g},${b})`;
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      getSuggestions(query);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (
    lat: number,
    lng: number,
    formatted: string,
  ) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 8.5,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
    setSearchQuery(formatted);
    setSuggestions([]);
  };

  const getSuggestions = async (query: string) => {
    const apiKey = "7daab0c61bc84b5d80eb72315d130135"; // Replace with your OpenCage API key
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}&countrycode=us,ca&limit=5`,
    );
    const data = await response.json();
    setSuggestions(data.results);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
    setSearchExpanded(false);
  };

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  const handleResetView = () => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [-103.9375, 38.7888894],
        zoom: 3.3,
        essential: true,
      });
    }
  };

  return (
    <div className="relative h-full w-full">
      <div
        className={`transition-width absolute right-1 top-1 z-10 rounded-md bg-white shadow-sm duration-200 ${
          searchExpanded ? "w-80" : "w-10"
        }`}
      >
        {!searchExpanded && (
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-400"
            onClick={() => setSearchExpanded(true)}
          >
            <img
              src={SearchIcon}
              alt="search icon"
              className="h-6 w-6"
              style={{ filter: "grayscale(100%) invert(70%)" }}
            />
          </button>
        )}
        {searchExpanded && (
          <>
            <div className="relative w-full">
              <input
                type="text"
                className="search-input h-10 w-full rounded border border-gray-400 py-1 pl-1 pr-8 focus:border-gray-400 focus:outline-none"
                placeholder="Search for a location"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onBlur={() => {
                  setTimeout(() => {
                    setSuggestions([]);
                  }, 100);
                }}
              />
              <button
                className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-gray-400"
                onClick={handleClearSearch}
              >
                <img
                  src={CloseIcon}
                  alt="close search"
                  className="h-4 w-4"
                  style={{ filter: "grayscale(80%) invert(70%)" }}
                />
              </button>
            </div>
            {suggestions.length > 0 && (
              <div className="autocomplete-suggestions absolute z-30 w-[calc(100%-2.8rem)] rounded bg-white shadow-md">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="autocomplete-suggestion cursor-pointer p-2 hover:bg-gray-200"
                    onClick={() =>
                      handleSuggestionClick(
                        suggestion.geometry.lat,
                        suggestion.geometry.lng,
                        suggestion.formatted,
                      )
                    }
                  >
                    <strong>{suggestion.formatted.split(",")[0]}</strong>
                    <span className="text-gray-500">{`,${suggestion.formatted
                      .split(",")
                      .slice(1)
                      .join(",")}`}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div className="absolute right-1 top-12 z-10 flex flex-col space-y-1">
        <button
          className="text-mapIconColor flex h-10 w-10 items-center justify-center rounded-md border border-gray-400 bg-white align-middle text-4xl"
          onClick={handleZoomIn}
        >
          <img
            src={ZoomInIcon}
            alt="zoom in"
            className="h-6 w-6"
            style={{ filter: "grayscale(50%) invert(50%)" }}
          />
        </button>
        <button
          className="text-mapIconColor flex h-10 w-10 items-center justify-center rounded-md border border-gray-400 bg-white align-middle text-4xl"
          onClick={handleZoomOut}
        >
          <img
            src={ZoomOutIcon}
            alt="zoom out"
            className="stroke-mapIconColor fill-mapIconColor h-6 w-6"
            style={{ filter: "grayscale(50%) invert(50%)" }}
          />
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-400 bg-white"
          onClick={handleResetView}
        >
          <img
            src={ResetIcon}
            alt="reset view"
            className="stroke-mapIconColor h-6 w-6 fill-current"
            style={{ filter: "grayscale(50%) invert(50%)" }}
          />
        </button>
      </div>

      <div
        ref={mapContainerRef}
        className="absolute left-0 top-0 flex h-full w-full"
      />
    </div>
  );
};

export default MapArea;
