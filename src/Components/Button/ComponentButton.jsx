import React from "react";
import styles from "./Button.module.css";

const ComponentButton = ({ text, icon, hasFill }) => {
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

export default ComponentButton;
