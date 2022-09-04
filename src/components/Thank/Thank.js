import styles from "./Thank.module.scss";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
function Thank() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);


  return (
    <div className={styles.dark_layout}>
      <div className={styles.wrapper}>
        <div className={styles.img}></div>
        <label>ჩანაწერი დამატებულია</label>
        <div className={styles.list_wrapper}>
          <Link to='/laptop-list' >სიაში გადაყვანა</Link>
        </div>
        <div className={styles.welcome_wrapper}>
          <Link to='/'>მთავარი</Link>
        </div>
      </div>
    </div>
  );
}

export default Thank;
