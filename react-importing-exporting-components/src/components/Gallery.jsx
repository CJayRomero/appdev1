// src/components/Gallery.jsx
import React from "react";
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section style={{ padding: 16 }}>
      <h1>Amazing scientists</h1>
      <div>
        <Profile
          name="Katherine Johnson"
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
        <Profile
          name="Alan L. Hart"
          src="https://i.imgur.com/QIrZWGIs.jpg"
          alt="Alan L. Hart"
        />
        <Profile
          name="Ada Lovelace"
          src="https://i.imgur.com/9i6M5p1s.jpg"
          alt="Ada Lovelace"
        />
      </div>
    </section>
  );
}
//