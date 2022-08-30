import styles from "./Dropdown.module.scss";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
function Dropdown(props) {
  const { data, error, isLoading } = useFetch(props.url);
  const [showList, setShowList] = useState(true);
  const [animation, setAnimation] = useState("");
  const [itemName,setItemName] = useState(null);
  console.log(data);
  const classes = `${styles.wrapper} ${props.className}`;

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

  const handleItemChoose = (event) =>{
    setItemName(event.target.id);
  }

  return (
    <div className={classes} onClick={handleDropdownClick}>
      <div className={styles.head}>
        <span>{itemName ?? 'თიმი'}</span>
        <img
          src="./assets/arrow.png"
          alt="arrow"
          className={showList ? styles.rotate_arrow : ""}
        />
      </div>
      {showList && (
        <div className={styles.list} id={animation}>
          <ul>
            {data?.map((item) => {
              return <li onClick={handleItemChoose} id={item.name} key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
