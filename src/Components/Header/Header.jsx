import React from "react";
import Logo from "../Icons/Logo";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Logar from "../Icons/Logar";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} container`}>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <nav>
          <ul className={styles.menu}>
            <li>Jogos</li>
            <li>Esportes</li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte</li>
          </ul>
        </nav>

        <div className={styles.btnContainer}>
          <Button text="Criar conta" />
          <Button text="Logar" icon={<Logar />} hasFill={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
