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
  const [activeModal, setActiveModal] = React.useState(false);
  const [nameModal, setNameModal] = React.useState("");
  // const [textClassName, setTextClassName] = React.useState("");
  const [aux, setAux] = React.useState({
    jogos: 0,
    esportes: 0,
  });

  const handleClick = (e) => {
    // console.log(e.target);
    let liClassName = e.currentTarget.className.trim();
    let arrayClassName = liClassName.split(" ");
    let onlyFirstLiClassName = arrayClassName[0];

    if (activeModal) {
      // console.log(onlyFirstLiClassName, activeModal);
      // console.log(aux);
      switch (onlyFirstLiClassName) {
        case "jogos":
          aux.jogos++;
          if (aux.esportes > 0) {
            aux.esportes--;
          }
          setNameModal(liClassName);
          if (aux.jogos > 1) {
            setActiveModal(!activeModal);
            aux.jogos = 0;
            // console.log(aux);
          }
          break;

        case "esportes":
          aux.esportes++;
          if (aux.jogos > 0) {
            aux.jogos--;
          }
          setNameModal(liClassName);
          if (aux.esportes > 1) {
            setActiveModal(!activeModal);
            aux.esportes = 0;
            // console.log(aux);
          }
          break;

        default:
          break;
      }
    } else {
      switch (onlyFirstLiClassName) {
        case "jogos":
          aux.jogos++;
          setActiveModal(!activeModal);
          setNameModal(liClassName);
          break;

        case "esportes":
          aux.esportes++;
          setActiveModal(!activeModal);
          setNameModal(liClassName);
          break;

        default:
          break;
      }
    }
  };

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
                className={`jogos ${
                  nameModal === "jogos" ? styles.arrowActive : ""
                }`}
              >
                <a href="#">
                  Jogos
                  <Arrow />
                </a>
              </li>
              <li
                onClick={handleClick}
                className={`esportes ${
                  nameModal === "esportes" ? styles.arrowActive : ""
                }`}
              >
                <a href="#">
                  Esportes
                  <Arrow />
                </a>
              </li>
              <li>
                <a href="#">Loja</a>
              </li>
              <li>
                <a href="#">Notícias</a>
              </li>
              <li>
                <a href="#">Suporte</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.rightHeader}>
          <div className={styles.btnContainer}>
            <ComponentButton text="Criar conta" />
            <ComponentButton text="Logar" icon={<Logar />} hasFill={true} />
          </div>

          <button className={`${styles.hamburguerBtn}`}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>

      <MenuModal activeModal={activeModal} />
      {/* <MenuModal contentModal={contentModal} active={activeModal} /> */}
    </header>
  );
};

export default Header;
