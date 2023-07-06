import React from "react";
import styles from "./LoginModal.module.css";
import battlenetLogo from "../../assets/battlenet-logo-login.png";
import ComponentButton from "../Button/ComponentButton";
import Apple from "../Icons/Apple";
import Facebook from "../Icons/Facebook";
import Google from "../Icons/Google";

const LoginModal = ({ openLoginModal, setOpenLoginModal }) => {
  return (
    <div
      className={
        openLoginModal
          ? styles.containerLoginModal
          : styles.containerLoginModalClosed
      }
    >
      <div className={styles.loginModal}>
        <div className={styles.containerCloseModal}>
          <button
            onClick={() => setOpenLoginModal(false)}
            className={styles.closeModal}
          >
            <div className={styles.closeModalFirstDiv}></div>
            <div className={styles.closeModalSecondDiv}></div>
          </button>
        </div>
        <div className={styles.loginModalContent}>
          <img
            className={styles.logo}
            src={battlenetLogo}
            alt="Logo battlenet"
          />
          <input type="text" placeholder="E-mail ou telefone" />
          <input type="text" placeholder="Senha" />
          <ComponentButton text={"Conectar-se"} hasFill={true} />
          <h3 className={styles.titleConnection}>ou conecte-se com </h3>
          <div className={styles.containerButtonPlatforms}>
            <button>
              <Google />
            </button>
            <button>
              <Facebook />
            </button>
            <button>
              <Apple />
            </button>
          </div>
          <p>
            <a href="#">Crie uma conta </a>
            Battle.net de graça
          </p>
          <a href="#">Não consegue logar? </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
