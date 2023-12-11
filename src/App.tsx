import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./App.module.scss";
import Back1 from "./assets/imgs/header-background_1.png";
import Logo1 from "./assets/imgs/header__logo_1.png";
import Logo2 from "./assets/imgs/header__logo_2.png";
import ActivityBack from "./assets/imgs/activity_header.png";
import Activity1 from "./assets/imgs/activity_1.png";
import Activity2 from "./assets/imgs/activity_2.png";
import cls from "classnames";

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
        <section className={styles["activity"]}>
          <div className={styles["head"]}>
            <img src={ActivityBack} alt="" />
            <div className={styles["description"]}>
              凡在12月15日至28日期间 <br /> 凭此活动页面购买指定产品的顾客
              <br />
              即可
              <span className={styles["red-text"]}>获赠“指定版活动产品"</span>。
            </div>
          </div>
          <div className={styles["body"]}>
            <div className={styles["product-card"]}>
              <div className={styles["title"]}>活动1</div>
              <div className={styles["pic"]}>
                <img src={Activity1} alt="" />
              </div>
              <div className={styles["content"]}>
                <ol>
                  <li>
                    购买：焕白亮肤肌底精华 (啫喱) 60g+替换套装，价格25,400日元
                    (含税27,940日元) 的顾客
                  </li>
                  <li>赠送：焕白亮肤肌底精华 (啫喱) 7g (迷你) x 2 瓶</li>
                </ol>
              </div>
            </div>
            <div className={styles["product-card"]}>
              <div className={styles["title"]}>活动2</div>
              <div className={styles["pic"]}>
                <img src={Activity2} alt="" />
              </div>
              <div className={styles["content"]}>
                <ol>
                  <li>
                    购买：焕白亮肤肌底精华 (啫喱) 60g+替换套装，价格25,400日元
                    (含税27,940日元) 的顾客
                  </li>
                  <li>赠送：焕白亮肤肌底精华 (啫喱) 7g (迷你) x 2 瓶</li>
                </ol>
              </div>
            </div>
          </div>
          <div className={styles["foot"]}>
            <h2 className={styles["activity-shop-name"]}>活动店铺</h2>
            <ol>
              <li>ASTALIFT直营店：银座店、六本木店</li>
              <li>杉木药店：浅草店、心斋桥店、新宿三丁目店</li>
            </ol>
          </div>
        </section>
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
