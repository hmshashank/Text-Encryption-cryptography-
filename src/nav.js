import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/shop">
          <li>shop</li>
        </Link>

        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
}

export default nav;
