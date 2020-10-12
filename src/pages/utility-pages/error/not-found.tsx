import React from "react";

const NotFound = () => {
  return (
    <div className="container--constrained">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: `32px`,
        }}
      >
        <h1>
          <span role="img">⚠️⚠️⚠️</span>
        </h1>
        <h2>This page doesnt exist!</h2>
      </div>
    </div>
  );
};

export default NotFound;
