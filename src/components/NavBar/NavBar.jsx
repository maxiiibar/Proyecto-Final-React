import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="brand">
        <img src="/img/Logitech-Symbol.png" alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/categoria/auriculares">Auriculares</Link>
        </li>
        <li>
          <Link to="/categoria/teclados">Teclados</Link>
        </li>
        <li>
          <Link to="/categoria/mouses">Mouse</Link>
        </li>
        <li>
          <Link to="/categoria/mousepads">Mousepads</Link>
        </li>
        <li>
          <Link to="/categoria/microfonos">Microfonos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
