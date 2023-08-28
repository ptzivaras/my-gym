import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const MapComponent = () => {
    useEffect(() => {
      // Create a map centered on a specific location
      const map = L.map("map").setView([51.505, -0.09], 13);
  
      // Add the OpenStreetMap tile layer to the map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);
    }, []);
  
    return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
  };

export default MapComponent;
