import Styles from "../styles/Logo.module.css";

function Logo() {
  return (
    <div className={Styles.logo}>
      <img src="logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
