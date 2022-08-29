import Button from "../../UI/Button/Button";
import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}></div>
      <div className={styles.welcome_img}></div>
      <div className={styles.btn_wrapper}>
        <Button text="ჩანაწერის დამატება" />
        <Button text="ჩანაწერის სია" />
      </div>
    </div>
  );
}

export default Welcome;
