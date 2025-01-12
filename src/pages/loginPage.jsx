import Logo from "../Components/Logo";
import Nav from "../Components/Nav";
import Styles from "../styles/loginPage.module.css";

function LoginPage() {
  return (
    <div className={Styles.loginPage}>
      <Nav />
      <main className={Styles.loginSection}>
        <div className={Styles.loginFormImageBox}>
          <div className={Styles.imgBox}>
            <img src="" alt="" />
          </div>

          <div className={Styles.formBox}>
            <div className="logoBox">
              <Logo /> <span></span>
            </div>
            <form>
              <div>
                <label htmlFor=""></label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor=""></label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor=""></label>
                <input type="text" />
              </div>
              <button></button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
