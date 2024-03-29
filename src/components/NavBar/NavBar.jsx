import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="brand">
        <img src="/img/logomando.png" alt="Logo" />
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
          <Link to="/categoria/monitores">Monitores</Link>
        </li>
        <li>
          <Link to="/categoria/accesorios">Accesorios</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
