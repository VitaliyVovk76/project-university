import styles from "./Button.module.css";

function Button({ type, onClick, buttonName, disabled }) {
  return (
    <button
      type={type}
      //в зависимости от disabled выбираем стиль кнопки
      className={disabled ? styles.disabledButton : styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}

export { Button };
