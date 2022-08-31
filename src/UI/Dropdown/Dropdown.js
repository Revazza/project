import styles from "./Dropdown.module.scss";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
function Dropdown(props) {
  const { data } = useFetch(props.url);
  const [showList, setShowList] = useState(false);
  const [animation, setAnimation] = useState("");
  const classes = `${styles.wrapper} ${props.className}`;

  useEffect(() => {
    if (data) {
      props.onFetchData(data);
    }
  }, [data]);

  const handleDropdownClick = () => {
    if (showList) {
      setAnimation(`${styles.hideList}`);
      setTimeout(() => {
        setShowList(false);
      }, 300);
    } else {
      setShowList(true);
      setAnimation(`${styles.showList}`);
    }
  };

  return (
    <div className={classes} onClick={handleDropdownClick}>
      <div className={styles.head}>
        <span>{props.title}</span>
        <div
          className={
            showList
              ? `${styles.initial} ${styles.rotate_arrow}`
              : styles.initial
          }
        ></div>
      </div>
      {showList && (
        <div className={styles.list} id={animation}>
          <ul>{props.children}</ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
