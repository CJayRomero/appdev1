// src/components/Profile.jsx
export default function Profile() {
  // return all JSX on one line OR wrap in parentheses if multiline
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      style={{
        width: 120,
        height: 120,
        objectFit: "cover",
        borderRadius: 6,
        marginRight: 8
      }}
    />
  );
}
