import { NavLink } from "react-router";
import Styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={Styles.loginBtn}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
