import { h } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import mapboxgl from "mapbox-gl";
// This is a public key
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFtaWFucml2YXMiLCJhIjoiY2t2dGVpbXQyN3Y2dTJ1cXBlZjBkMmR5eiJ9.vTcg1Pg5qcupvtViqewj2g";

import style from "./style.scss";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [lng, lat],
      zoom: zoom,
      cooperativeGestures: true,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} class={style["map-container"]} />
    </div>
  );
};

export default Map;
