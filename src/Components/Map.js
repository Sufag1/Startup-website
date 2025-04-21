import React from "react";
import "./Map.css";

function GoogleMap() {
  const lat = 11.990132;
  const lon = 8.566596;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lon}&hl=en&output=embed`;

  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          title="Google Map"
          src={mapSrc}
          className="map-iframe"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default GoogleMap;
