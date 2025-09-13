import { useEffect } from "react";
import "../App.css";
import styles from "./Main.module.scss";
import Section1 from "./Section1";

export default function Main() {
  useEffect(() => {
    document.title = "活动页";
  }, []);
  return (
    <div className={styles["app"]}>
      <Section1 />
    </div>
  );
}
