import React, { useEffect } from "react";
import useInput from "../../hooks/useInput";
import styles from "./Input.module.scss";

function Input(props) {
  const { value, hasErrors, valueChangeHandler, valueLoseFocusHandler } =
    useInput(props.validateFunc);

  useEffect(() =>{

  },[hasErrors]);

  const classes = `${styles.wrapper} ${props.className}`;

  return (
    <div className={classes} id={hasErrors ? styles.error : ""}>
      <label>{props.label}</label>
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        onChange={valueChangeHandler}
        onBlur={valueLoseFocusHandler}
        required={props.required}
      />
      <span>{hasErrors ? props.errorMsg : props.instruction}</span>
    </div>
  );
}

export default Input;
