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

const fetchData = async (): Promise<Record<string, number>> => {
  const response = await fetch(
    "https://major-sculpin.nceas.ucsb.edu/api/air_quality_metrics/status_metric_1",
  );
  const csvText = await response.text();
  const results = Papa.parse(csvText, { header: true });

  const censusTractMetrics: Record<string, number> = {};
  results.data.forEach((item: any) => {
    if (item.census_tract_id && item.status_metric_1) {
      censusTractMetrics[item.census_tract_id] = parseFloat(
        item.status_metric_1,
      );
    }
  });

  return censusTractMetrics;
};

const MapArea: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [censusTractMetrics, setCensusTractMetrics] = useState<
    Record<string, number>
  >({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);

  useEffect(() => {
    const initializeData = async () => {
      const metrics = await fetchData();
      setCensusTractMetrics(metrics);
      setDataLoaded(true); // Set data as loaded
    };
    initializeData();

    if (mapContainerRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: MAP_STYLE,
        center: [-105.9375, 38.7888894],
        zoom: 3.3,
      });
      mapRef.current = map;

      map.on("load", () => {
        if (dataLoaded) {
          loadColors(map); // Only load colors if data is loaded
        }
      });

      map.on("mousemove", "tiles", (event) => {
        const features = event.features;
        if (features && features.length > 0) {
          const feature = features[0];
          const { CENSUSTRACTID } = feature.properties;
          const metric = censusTractMetrics[CENSUSTRACTID];

          if (!popupRef.current) {
            popupRef.current = new maplibregl.Popup({
              closeButton: false,
              closeOnClick: false,
            });
          }

          popupRef.current
            .setLngLat(event.lngLat)
            .setHTML(
              `<div><strong>Census Tract:</strong> ${CENSUSTRACTID}<br /><strong>Metric:</strong> ${metric}</div>`,
            )
            .addTo(map);
        } else if (popupRef.current) {
          popupRef.current.remove();
          popupRef.current = null;
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
  }, [dataLoaded]);

  const loadColors = (map: maplibregl.Map) => {
    const features = map.queryRenderedFeatures({ layers: ["tiles"] });
    features.forEach((feature) => {
      const censusTractId = feature.properties.CENSUSTRACTID;
      const metric = censusTractMetrics[censusTractId];

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
