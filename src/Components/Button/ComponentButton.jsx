import React from "react";
import styles from "./Button.module.css";

const ComponentButton = ({ text, icon, hasFill, banner }) => {
  return (
    <>
      <button
        className={`${
          hasFill ? styles.buttonWithFill : styles.buttonWithBorder
        } ${banner && styles.buttonBanner}`}
      >
        {icon}
        {text}
      </button>
    </>
  );
};

export default ComponentButton;
