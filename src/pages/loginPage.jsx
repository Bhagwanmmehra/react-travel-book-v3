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
            <img src="./login.jpg" alt="loading" />
          </div>

          <div className={Styles.formBox}>
            <div className={Styles.logoBox}>
              <Logo /> <span>TravelBook</span>
            </div>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button>Login</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
