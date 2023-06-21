import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, icon, hasFill }) => {
  return (
    <>
      <button
        className={hasFill ? styles.buttonWithFill : styles.buttonWithBorder}
      >
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
