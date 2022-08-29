import styles from './Button.module.scss';

function Button(props) {

  const classes = `${styles.button} ${props.className}`;

  return (
    <button 
    type={props.type}
    onClick={props.onClick}
    className={classes}
    >
      {props.text}
    </button>
  )
}

export default Button;
