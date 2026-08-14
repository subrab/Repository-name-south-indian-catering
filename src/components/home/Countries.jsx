import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import countries from "../../data/countries";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Names in the map data don't always match our list exactly —
// this maps our names to the map's naming where they differ.
const nameOverrides = {
  "United States": "United States of America",
};

const servedCountries = new Set(
  countries.map((c) => nameOverrides[c] || c)
);

export default function Countries() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="countries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Global Presence
          </p>

          <h2 className="text-5xl font-bold text-[#7A1F1F] mt-4">
            Serving Across the Globe
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600">
            Bringing authentic South Indian cuisine to weddings,
            corporate events and celebrations across the world.
          </p>

        </div>

        {/* Interactive World Map */}
        <div className="mt-16 bg-[#F8F4EC] rounded-3xl p-6 md:p-10 shadow-lg relative">

          <ComposableMap
            projectionConfig={{ scale: 148 }}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isServed = servedCountries.has(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        if (isServed) setHovered(geo.properties.name);
                      }}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        default: {
                          fill: isServed ? "#7A1F1F" : "#E4D9C4",
                          stroke: "#F8F4EC",
                          strokeWidth: 0.5,
                          outline: "none"
                        },
                        hover: {
                          fill: isServed ? "#D4AF37" : "#E4D9C4",
                          stroke: "#F8F4EC",
                          strokeWidth: 0.5,
                          outline: "none",
                          cursor: isServed ? "pointer" : "default"
                        },
                        pressed: {
                          fill: isServed ? "#D4AF37" : "#E4D9C4",
                          outline: "none"
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {/* Hover label */}
          <div className="mt-4 text-center h-8">
            {hovered && (
              <p className="text-lg font-semibold text-[#7A1F1F]">
                {hovered}
              </p>
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#7A1F1F]"></span>
              <span className="text-sm text-gray-600">Countries We Serve</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#E4D9C4]"></span>
              <span className="text-sm text-gray-600">Not Yet Served</span>
            </div>
          </div>

        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-[#FFF8F0] rounded-xl p-4 text-center shadow hover:shadow-lg transition"
            >
              {country}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}