import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import Back1 from "./assets/imgs/header-background_1.png";
import Logo1 from "./assets/imgs/header__logo_1.png";
import Logo2 from "./assets/imgs/header__logo_2.png";

function App() {
  return (
    <>
      <div className={styles["app"]}>
        <section className={styles["header"]}>
          <img className={styles["bk-1"]} src={Back1} alt="" />
          <div className={styles["top-content"]}>
            <div className={styles["left"]}>
              <h1 className={styles["title"]}>
                购买富士胶片旗下的艾诗缇化妆品, 即可获赠精美礼品！
              </h1>
              <div className={styles["sub-title"]}>
                <h4>赠品活动</h4>
              </div>
            </div>
            <div className="right">
              <img src={Logo1} alt="" />
            </div>
          </div>
          <div className={styles["bottom-content"]}>
            <div className={styles["description"]}>
              LDK the Beauty杂志
              <br />
              殿堂BESTBUY亮白美容液
            </div>
            <div className={styles["logo"]}>
              <img src={Logo2} alt="" />
            </div>
          </div>
        </section>
        <section className="activity"></section>
        <section className="description-film"></section>
        <section className="description-human"></section>
        <section className="description-shrimp"></section>
        <section className="description-product">
          <div className="product-lotion"></div>
          <div className="product-tube"></div>
        </section>
        <section className="shop-list"></section>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
