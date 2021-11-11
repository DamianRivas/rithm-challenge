import { h } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import mapboxgl from "mapbox-gl";
// This is a public key
mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

import style from "./style.scss";

const Map = ({ apiData }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [markers, setMarkers] = useState([]);

  const { fav_color, dist, origin, min_age, max_age } = {
    ...apiData?.metadata?.query,
  };

  // Load map
  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-122.2711, 37.8044],
      zoom: 8,
      cooperativeGestures: true,
    });
  });

  // Draw markers onto map
  useEffect(() => {
    if (!map.current) return; // Only run if map is loaded
    markers.forEach(marker => marker.remove());

    const newMarkers = [];
    apiData?.results?.forEach(res => {
      res?.locationHistory?.features.forEach(feature => {
        newMarkers.push(
          new mapboxgl.Marker({ color: "pink" })
            .setLngLat([-122.2711, 37.8044])
            .setLngLat(feature.geometry.coordinates)
            .addTo(map.current)
        );
      });
    });
    setMarkers(newMarkers);
  }, [fav_color, dist, origin, min_age, max_age]);

  return (
    <div class={style.container}>
      <div ref={mapContainer} class={style["map-container"]} />
    </div>
  );
};

export default Map;
