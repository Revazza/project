import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import styles from "./Input.module.scss";

function Input(props) {
  const {
    value,
    isTouched,
    hasErrors,
    valueChangeHandler,
    valueLoseFocusHandler,
  } = useInput(props.validateFunc);
  const [inputVal, setInputVal] = useState("");
  const [error,setError] = useState(false);

  

  useEffect(() => {
    const label = props.storageTitle;
    const obj = {
      hasErrors,
      value,
      isTouched,
    };
    const storageData = localStorage.getItem(label);
    if (!storageData) {
      localStorage.setItem(label, JSON.stringify(obj));
    } else {
      const data = JSON.parse(localStorage.getItem(label));
      if (value !== "") {
        localStorage.setItem(label, JSON.stringify(obj));
        setInputVal(value);
        setError(hasErrors);
      }
      else if(value === '' && data.value.length === 1)
      {
        setInputVal('');
        localStorage.setItem(label, JSON.stringify(obj));
        setError(true);
      }
      else{
        setInputVal(data.value);
        setError(data.hasErrors)
      }

      
      
    }
  }, [hasErrors, value, isTouched]);

  const classes = `${styles.wrapper} ${props.className}`;

  console.log(error)

  return (
    <div className={classes} id={error ? styles.error : ""}>
      <label>{props.label}</label>
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        onChange={valueChangeHandler}
        onBlur={valueLoseFocusHandler}
        required={props.required}
        value={inputVal}
      />
      <span>{error ? props.errorMsg : props.instruction}</span>
    </div>
  );
}

export default Input;
