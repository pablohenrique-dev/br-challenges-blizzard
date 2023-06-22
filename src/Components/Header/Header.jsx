import React from "react";
import Logo from "../Icons/Logo";
import styles from "./Header.module.css";
import ComponentButton from "../Button/ComponentButton";
import Logar from "../Icons/Logar";
import Arrow from "../Icons/Arrow";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} container`}>
        <div className={styles.leftHeader}>
          <a href="#" className={styles.logo}>
            <Logo />
          </a>
          <nav>
            <ul className={styles.menu}>
              <li>
                Jogos
                <Arrow />
              </li>
              <li>
                Esportes
                <Arrow />
              </li>
              <li>Loja</li>
              <li>Notícias</li>
              <li>Suporte</li>
            </ul>
          </nav>
        </div>

        <div className={styles.rightHeader}>
          <div className={styles.btnContainer}>
            <ComponentButton text="Criar conta" />
            <ComponentButton text="Logar" icon={<Logar />} hasFill={true} />
          </div>

          <button className={styles.hamburguerBtn}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
