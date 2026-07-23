import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        GlowSense AI ✨
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/scanner">AI Scanner</Link>
        <Link to="/quiz">Skin Quiz</Link>
        <Link to="/dashboard">Dashboard</Link>

        {/* NEW */}
        <Link to="/wishlist">❤️ Wishlist</Link>

        <Link to="/login">Login</Link>
      </div>

    </nav>
  );
}