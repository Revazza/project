import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import styles from "./Input.module.scss";

function Input(props) {
  const {
    value,
    isTouched,
    hasErrors,
    isMount,
    valueChangeHandler,
    valueLoseFocusHandler,
  } = useInput(props.validateFunc);
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState(false);

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
      if(isMount)
      {
        setError(data.hasErrors);
        setInputVal(data.value);
      }
      else if(!isMount && value !== '')
      {
        setError(hasErrors);
        setInputVal(value);
        localStorage.setItem(label,JSON.stringify(obj));
      }
      else if(!isMount && value === '')
      {
        if(data.isTouched)
        {
          setError(true);
        }
        else{
          setError(hasErrors);
        }
        setInputVal('');
        localStorage.setItem(label,JSON.stringify(obj));
      }
      
    }
  }, [hasErrors, value, isTouched]);

  const classes = `${styles.wrapper} ${props.className}`;

  return (
    <div className={classes} id={error ? styles.error : ""} >
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
