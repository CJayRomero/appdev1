// src/components/Profile.jsx
import React from "react";

export default function Profile({ name, src, alt }) {
  return (
    <div style={{ display: "inline-block", marginRight: 8, textAlign: "center" }}>
      <img src={src} alt={alt} width={64} height={64} style={{ display: "block" }} />
      <div style={{ fontSize: 12 }}>{name}</div>
    </div>
  );
}
//