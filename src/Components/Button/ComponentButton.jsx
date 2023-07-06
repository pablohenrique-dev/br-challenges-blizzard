import React from "react";
import styles from "./Button.module.css";

const ComponentButton = ({
  text,
  icon,
  hasFill,
  banner,
  setOpenLoginModal,
}) => {
  function isButtonClicked() {
    if (setOpenLoginModal) {
      setOpenLoginModal(true);
    }
  }

  return (
    <>
      <button
        onClick={isButtonClicked}
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
