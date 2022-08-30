import styles from "./Button.module.scss";

function Button(props) {
  const classes = `${styles.button} ${props.className}`;

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={classes}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
}

export default Button;
