import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Papa from "papaparse";
import React, { useEffect, useRef, useState } from "react";

const MAP_STYLE = {
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
      "source-layer": "cb_2023_us_tract_5m_simplified",
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
    if (item.census_tract_id && item[metric]) {
      censusTractMetrics[item.census_tract_id] = parseFloat(item[metric]);
    }
  });

  return censusTractMetrics;
};

interface MapAreaProps {
  selectedMetric: string;
  setSelectedMetricValue?: (value: number) => void;
}

const MapArea: React.FC<MapAreaProps> = ({
  selectedMetric,
  setSelectedMetricValue,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [censusTractMetrics, setCensusTractMetrics] = useState<
    Record<string, number>
  >({});
  const censusTractMetricsRef = useRef<Record<string, number>>({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);

  useEffect(() => {
    const initializeData = async () => {
      const metrics = await fetchData(selectedMetric);
      setCensusTractMetrics(metrics);
      censusTractMetricsRef.current = metrics; // Update ref
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
          const { CENSUSTRACTID } = feature.properties;
          const metric = censusTractMetricsRef.current[CENSUSTRACTID];
          if (typeof metric === "number" && setSelectedMetricValue) {
            setSelectedMetricValue(metric);
            console.log("Selected metric value:", metric);
          }
        }
      });

      map.on("mousemove", "tiles", (event) => {
        const features = event.features;
        if (features && features.length > 0) {
          const feature = features[0];
          const { CENSUSTRACTID } = feature.properties;
          const metric = censusTractMetricsRef.current[CENSUSTRACTID];

          if (!popupRef.current) {
            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
            });
          }

          popupRef.current
            .setLngLat(event.lngLat)
            .setHTML(
              `<div><strong>Census Tract:</strong> ${CENSUSTRACTID}<br /><strong>Metric:</strong> ${metric !== undefined ? metric : "N/A"}</div>`,
            )
            .addTo(map);
        }
      });

      map.on("mouseleave", "tiles", () => {
        if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
        }
      });
    }

    return () => {
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
      const censusTractId = feature.properties.CENSUSTRACTID;
      const metric = censusTractMetricsRef.current[censusTractId];

      if (metric !== undefined) {
        const color = getColor(metric);
        map.setFeatureState(
          {
            source: "tilesource",
            sourceLayer: "cb_2023_us_tract_5m_simplified",
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

  return (
    <div
      ref={mapContainerRef}
      className="absolute left-0 top-0 flex h-[100%] w-full"
    />
  );
};

export default MapArea;
