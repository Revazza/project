import React, { useEffect, useState } from "react";
import styles from "./RadioButtons.module.scss";

function RadioButtons(props) {
  const [currentValue, setCurrentValue] = useState("");

  const handleValueChange = (event) => {
    const id = event.target.id;
    setCurrentValue(id);
    localStorage.setItem(props.storageTitle,id);
  };

  useEffect(() => {
    const data = localStorage.getItem(props.storageTitle)
    if(!data)
    {
      const obj = {
        isTouched:false,
        hasError:false,
        value:''
      }
      localStorage.setItem(props.storageTitle,JSON.stringify(obj));
    }
    else{
      setCurrentValue(data.value);
    }
  }, []);

  return (
    <React.Fragment>
      <label className={styles.ram_label}>{props.title}</label>
      <div className={styles.type_wrapper}>
        <input
          type="radio"
          name={props.name}
          value={props.value1}
          id={props.value1}
          onChange={handleValueChange}
          checked={currentValue===props.value1}
        />
        <label>{props.value1}</label>
      </div>
      <div className={styles.type_wrapper}>
        <input
          type="radio"
          name={props.name}
          value={props.value2}
          id={props.value2}
          onChange={handleValueChange}
          checked={currentValue===props.value2}
        />
        <label>{props.value2}</label>
      </div>
    </React.Fragment>
  );
}

export default RadioButtons;
