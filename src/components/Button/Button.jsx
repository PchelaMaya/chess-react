import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button type="submit" className={styles.btn} onClick={onClick}>
      Зарегистрироваться
    </button>
  );
};
export { Button };