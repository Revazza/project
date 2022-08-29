import React from "react";
import useInput from "../../hooks/useInput";
import styles from "./Input.module.scss";

function Input(props) {
  const { value, hasErrors, valueChangeHandler, valueLoseFocusHandler } =
    useInput(props.validateFunc);

  console.log("Has Errors: ", hasErrors);
  console.log("value: ", value);
  const classes = `${styles.wrapper} ${props.className}`;

  return (
    <div className={classes} id={hasErrors ? styles.error : ""}>
      <label>{props.label}</label>
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        onChange={valueChangeHandler}
        onBlur={valueLoseFocusHandler}
      />
      <span>{hasErrors ? props.errorMsg : props.instruction}</span>
    </div>
  );
}

export default Input;
