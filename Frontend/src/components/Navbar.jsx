import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Menu</h2>
      <Link to="/">🏠 Home</Link>
      <Link to="/match">📊 Match</Link>
      <Link to="/teams">👥 Teams</Link>
      <Link to="/players">⚽ Players</Link>
      <Link to="/about">ℹ️ About</Link>
    </nav>
  );
};

export default Navbar;
