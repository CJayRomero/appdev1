// src/components/MixedComponents.jsx
import React from "react";

/* Named export */
export function ProfileSmall({ name, src, alt }) {
  return (
    <div style={{ display: "inline-block", marginRight: 8, textAlign: "center" }}>
      <img src={src} alt={alt} width={48} height={48} style={{ display: "block" }} />
      <div style={{ fontSize: 11 }}>{name}</div>
    </div>
  );
}

/* Named export */
export function Avatar({ src, alt }) {
  return (
    <div style={{ width: 48, height: 48, borderRadius: 24, overflow: "hidden", display: "inline-block", marginRight: 8 }}>
      <img src={src} alt={alt} width={48} height={48} style={{ display: "block" }} />
    </div>
  );
}

/* Default export */
export default function Gallery() {
  return (
    <section style={{ padding: 16 }}>
      <h1>Amazing scientists (mixed exports)</h1>
      <div>
        <ProfileSmall name="Katherine Johnson" src="https://i.imgur.com/MK3eW3As.jpg" alt="KJ" />
        <ProfileSmall name="Alan L. Hart" src="https://i.imgur.com/QIrZWGIs.jpg" alt="AH" />
        <Avatar src="https://i.imgur.com/9i6M5p1s.jpg" alt="Ada" />
      </div>
    </section>
  );
}
//