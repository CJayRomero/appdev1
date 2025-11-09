// src/components/Gallery.jsx
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>Amazing scientists</h1>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
