import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="nav_container">
        <Link to="/">
          <h1>My BooKList</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
