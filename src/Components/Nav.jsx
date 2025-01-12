import { NavLink } from "react-router";
import Styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink className={Styles.logoBtn}>Login</NavLink>
        </li>
        <li>
          <NavLink>Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
