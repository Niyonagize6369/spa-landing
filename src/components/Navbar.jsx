import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1rem", color: "#fff" }}>About</Link>
      <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
    </nav>
  );
}
