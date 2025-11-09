// src/App.jsx
import React from "react";
import React from "react";
import Gallery from "./components/Gallery";
// src/App.jsx
import React from "react";
import Gallery from "./components/MixedComponents";        // default import
import { ProfileSmall } from "./components/MixedComponents"; // named import

export default function App() {
  return (
    <div>
      <Gallery />
      <hr />
      <div style={{ padding: 16 }}>
        <h2>Using a named import (ProfileSmall)</h2>
        <ProfileSmall name="Test Name" src="https://i.imgur.com/MK3eW3As.jpg" alt="Test" />
      </div>
    </div>
  );
}


export default function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

function Profile({ name, src, alt }) {
  return (
    <div style={{ display: "inline-block", marginRight: 8, textAlign: "center" }}>
      <img src={src} alt={alt} width={64} height={64} style={{ display: "block" }} />
      <div style={{ fontSize: 12 }}>{name}</div>
    </div>
  );
}

function Gallery() {
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

export default function App() {
  return (
    <div>
      <Gallery />
    </div>
  );
}
