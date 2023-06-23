import React from "react";
import styles from "./menuModal.module.css";

const MenuModal = ({ contentModal, activeModal }) => {
  // React.useEffect(() => {
  //   // console.log(contentModal);
  // }, [contentModal]);

  // function handleMouseMove({ target }) {
  //   console.log(target);
  // }

  return (
    <section
      className={`${styles.menuModalContainer} ${
        activeModal ? styles.modalActive : ""
      }`}
    >
      <div className={`${styles.menuModal} container`}></div>
      <div className={styles.menuModalFooter}></div>
    </section>
  );
};

export default MenuModal;
