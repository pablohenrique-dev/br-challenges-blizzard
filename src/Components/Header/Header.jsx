import React from "react";
import Logo from "../Icons/Logo";
import styles from "./Header.module.css";
import ComponentButton from "../Button/ComponentButton";
import Logar from "../Icons/Logar";
import Arrow from "../Icons/Arrow";
import MenuModal from "../MenuModal/MenuModal";

const modal = {
  jogos: [
    {
      id: 1,
      name: "Diablo",
    },
    {
      id: 2,
      name: "CSGO",
    },
  ],
  esportes: [
    {
      id: 1,
      name: "Futebol",
    },
  ],
};

const Header = () => {
  const [active, setActive] = React.useState(false);
  const [contentModal, setContentModal] = React.useState([]);
  const [nameModal, setNameModal] = React.useState("");

  function handleClick({ target }) {
    const textEvent = target.innerText.toLowerCase();

    setNameModal(textEvent);
    setContentModal(modal[textEvent]);

    // console.log(contentModal);
    // if(nameModal === contentModal){
    //   setActive(true)
    // }

    // setContentModal(modal[target.innerText.toLowerCase()]);

    // if (target.innerText.toLowerCase() === "jogos") {
    //   setNameModal((arrowActive) => "jogos");
    //   setActive(!active);
    // } else if (target.innerText.toLowerCase() !== "jogos") {
    //   setActive(active);
    // }
    // if (target.innerText.toLowerCase() === "esportes") {
    //   setArrowActive((arrowActive) => "esportes");
    //   setActive(!active);
    // }
  }

  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} container`}>
        <div className={styles.leftHeader}>
          <a href="#" className={styles.logo}>
            <Logo />
          </a>
          <nav>
            <ul className={styles.menu}>
              <li
                onClick={handleClick}
                className={nameModal === "jogos" ? styles.arrowActive : ""}
              >
                Jogos
                <Arrow />
              </li>
              <li
                onClick={handleClick}
                className={nameModal === "esportes" ? styles.arrowActive : ""}
              >
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

          <button
            onClick={() => setActive(!active)}
            className={`${styles.hamburguerBtn} ${active ? styles.active : ""}`}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      <MenuModal contentModal={contentModal} active={active} />
    </header>
  );
};

export default Header;
