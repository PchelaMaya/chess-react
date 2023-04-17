import styles from "./Registration.module.css";
import React from "react";
import { Button } from "../Button/Button";

const Registration = ({ setActive }) => {
  return (
    <div
      className={styles.formRegistration}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.formRegistrationContent}
        onClick={(e) => e.stopPropagation()}
      >
        <img className={styles.registrationLogo} src="../src/images/logo.svg"></img>
        <h3 className={styles.registrationTitle}>Регистрация</h3>
        <form>
          <div className={styles.registrationInput}>
            <input
              className={styles.registrationInputName}
              type="text"
              placeholder="Имя"
            ></input>
            <input
              className={styles.registrationInputEmail}
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <Button />
        </form>
      </div>
    </div>
  );
};

export { Registration };