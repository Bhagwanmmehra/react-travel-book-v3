import LogoBox from "../Components/LogoBox";
import Nav from "../Components/Nav";
import styles from "../styles/productPage.module.css";

function ProductPage() {
  return (
    <div>
      <Nav />
      <main className={styles.product}>
        <div className={styles.imageBox}>
          <img src="./product1.jpg" alt="loading.." />
          <img src="./product2.jpg" alt="loading.." />
          <img src="./product3.jpg" alt="loading.." />
          <img src="./product4.jpg" alt="loading.." />
        </div>
        <div className={styles.description}>
          <LogoBox />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            molestiae asperiores dolores eum quidem nobis deserunt cupiditate
            voluptatum a id maxime architecto veritatis veniam consequuntur
            earum, consequatur quis corporis. Laudantium. Lorem sit amet
            consectetur adipisicing elit. Minus molestiae asperiores corporis.
            Laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus molestiae asperiores corporis. Laudantium. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Minus molestiae asperiores
            dolores eum quidem nobis deserunt cupiditate voluptatum a id maxime
            architecto veritatis veniam consequuntur earum, consequatur quis
            corporis. Minus molestiae asperiores dolores eum quidem nobis
            deserunt cupiditate voluptatum a id maxime architecto veritatis
            veniam consequuntur earum, consequatur quis corporis.
          </p>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
