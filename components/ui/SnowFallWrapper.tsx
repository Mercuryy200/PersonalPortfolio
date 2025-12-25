"use client";

import Snowfall from "react-snowfall";

export default function SnowfallWrapper() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <Snowfall snowflakeCount={150} speed={[0.5, 1.5]} wind={[-0.5, 1.0]} />
    </div>
  );
}
