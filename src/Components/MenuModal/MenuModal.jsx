import React from "react";
import styles from "./menuModal.module.css";

import DiabloIILogo from "../../assets/logosModalMenu/DiabloII-logo.png";
import OverwatchLogo from "../../assets/logosModalMenu/Overwatch®-2.png";
import WorldOfWarcraftLogo from "../../assets/logosModalMenu/World-of-Warcraft.png";
import HearthstoneLogo from "../../assets/logosModalMenu/Hearthstone.png";
import HeroesOfTheStormLogo from "../../assets/logosModalMenu/Heroes-of-the-storm.png";
import WarcraftIIIReforgedLogo from "../../assets/logosModalMenu/Warcraft-III-Reforged.png";
import DiabloIVLogo from "../../assets/logosModalMenu/Diablo-IV.png";
import DiabloImmortalLogo from "../../assets/logosModalMenu/Diablo-Immortal.png";
import DiabloIIILogo from "../../assets/logosModalMenu/Diablo-III.png";
import StarCraftIILogo from "../../assets/logosModalMenu/StarCraft-II.png";
import StarCraftRemasteredLogo from "../../assets/logosModalMenu/StarCraftRemastered.png";
import ArcadedaBlizzardLogo from "../../assets/logosModalMenu/Arcade-da-Blizzard.png";

import HearthstoneMastersLogo from "../../assets/logosModalMenu/Hearthstone-masters.png";
import CampeonatoMundialdeArenaWoWLogo from "../../assets/logosModalMenu/Campeonato-Mundial-de-Arena-WoW.png";
import StarCraftIIWCSLogo from "../../assets/logosModalMenu/StarCraft-II-WCS.png";
import CopaMundialdeOverwatchLogo from "../../assets/logosModalMenu/Copa-Mundial-de-Overwatch.png";
import LigaDeOverwatchLogo from "../../assets/logosModalMenu/Liga-de-Overwatch.png";

const MenuModal = ({ nameContentModal, activeModal }) => {
  const modal = {
    jogos: [
      {
        id: 1,
        name: "Diablo® II ressurected",
        img: DiabloIILogo,
      },
      {
        id: 2,
        name: "Overwatch® 2",
        img: OverwatchLogo,
      },
      {
        id: 3,
        name: "World of Warcraft®",
        img: WorldOfWarcraftLogo,
      },
      {
        id: 4,
        name: "Hearthstone®",
        img: HearthstoneLogo,
      },
      {
        id: 5,
        name: "Heroes of the storm®",
        img: HeroesOfTheStormLogo,
      },
      {
        id: 6,
        name: "Warcraft® III Reforged",
        img: WarcraftIIIReforgedLogo,
      },
      {
        id: 7,
        name: "Diablo® IV",
        img: DiabloIVLogo,
      },
      {
        id: 8,
        name: "Diablo® Immortal",
        img: DiabloImmortalLogo,
      },
      {
        id: 9,
        name: "Diablo® III",
        img: DiabloIIILogo,
      },
      {
        id: 10,
        name: "StarCraft® II",
        img: StarCraftIILogo,
      },
      {
        id: 11,
        name: "StarCraft® Remastered",
        img: StarCraftRemasteredLogo,
      },
      {
        id: 12,
        name: "Arcade da Blizzard®",
        img: ArcadedaBlizzardLogo,
      },
    ],
    esportes: [
      {
        id: 1,
        name: "Hearthstone® masters",
        img: HearthstoneMastersLogo,
      },
      {
        id: 2,
        name: "Campeonato Mundial de Arena WoW®",
        img: CampeonatoMundialdeArenaWoWLogo,
      },
      {
        id: 3,
        name: "StarCraft® II WCS",
        img: StarCraftIIWCSLogo,
      },
      {
        id: 4,
        name: "Copa Mundial de Overwatch®",
        img: CopaMundialdeOverwatchLogo,
      },
      {
        id: 5,
        name: "Liga de Overwatch®",
        img: LigaDeOverwatchLogo,
      },
    ],
  };

  React.useEffect(() => {
    console.log(nameContentModal);
  }, [nameContentModal]);

  return (
    <section
      className={`${styles.menuModalContainer} ${
        activeModal ? styles.modalActive : ""
      }`}
    >
      <div className={`${styles.menuModal} container`}>
        {nameContentModal && activeModal ? (
          <ul>
            {modal[nameContentModal].map((contentModal) => {
              return (
                <li key={contentModal.id}>
                  <img
                    src={contentModal.img}
                    alt={`Logo ${contentModal.name}`}
                  />
                  <p>{contentModal.name}</p>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      <div className={styles.menuModalFooter}></div>
    </section>
  );
};

export default MenuModal;
