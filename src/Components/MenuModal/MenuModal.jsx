import React from "react";
import styles from "./menuModal.module.css";

const MenuModal = ({ contentModal, active }) => {
  React.useEffect(() => {
    console.log(contentModal);
  }, [contentModal]);

  return (
    <section
      className={`${styles.menuModalContainer} ${
        active ? styles.modalActive : ""
      }`}
    >
      <div className={`${styles.menuModal} container`}></div>
      <div className={styles.menuModalFooter}></div>
    </section>
  );
};

export default MenuModal;
