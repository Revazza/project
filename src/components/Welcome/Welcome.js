import styles from "./Welcome.module.scss";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}></div>
      <div className={styles.welcome_img}></div>
      <div className={styles.nav_wrapper}>
        <div className={styles.nav}>
          <Link to="/emp-info">ჩანაწერის დამატება</Link>
        </div>
        <div className={styles.nav}>
          <Link to="/list">ჩანაწერის სია</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
