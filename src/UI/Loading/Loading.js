import styles from "./Loading.module.scss";

function Loading(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lds_ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
