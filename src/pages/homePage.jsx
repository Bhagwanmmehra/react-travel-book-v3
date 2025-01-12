import { NavLink } from "react-router";
import Logo from "../Components/Logo";
import Nav from "../Components/Nav";

function HomePage() {
  return (
    <div>
      <Nav />
      <section>
        <Logo />
        <h1></h1>
        <p></p>
        <NavLink>
          <span></span>
        </NavLink>
      </section>
    </div>
  );
}

export default HomePage;
