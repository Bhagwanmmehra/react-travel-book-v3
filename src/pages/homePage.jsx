import { Link } from "react-router";
import Logo from "../Components/Logo";
import Nav from "../Components/Nav";
import { GoArrowRight } from "react-icons/go";
import Styles from "../styles/homePage.module.css";

function HomePage() {
  return (
    <div className={Styles.homePage}>
      <Nav />
      <section className={Styles.hero}>
        <Logo />
        <h1>
          Keep Travelling <br /> We are here to Track you
        </h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Link to="/login" className={Styles.cta}>
          <span>Start Tracking Now</span>
          <GoArrowRight />
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
