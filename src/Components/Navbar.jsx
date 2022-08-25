import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="nav_container">
        <Link to="/">
          <h1 className="text-center text-xl font-bold font-mono md:text-4xl">My BooKList</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
