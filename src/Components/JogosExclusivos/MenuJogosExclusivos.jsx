import React from "react";
import styles from "./MenuJogosExclusivos.module.css";
import Nintendo from "../Icons/Nintendo";
import Playstation from "../Icons/Playstation";
import Blizzard from "../Icons/Blizzard";
import Xbox from "../Icons/Xbox";
import Allgames from "../Icons/AllGames";

const MenuJogosExclusivos = () => {
  return (
    <div className={`${styles.MenuJogosExclusivos} container`}>
      <div className={styles.MenuJogosExclusivosLeft}>
        <span>GAMES</span>
        <h2 className={styles.subtitle}>
          Jogos <br /> exclusivos
        </h2>
      </div>
      <div className={styles.MenuJogosExclusivosRight}>
        <nav>
          <ul>
            <li>
              <button>
                <Blizzard color="#fff" />
              </button>
            </li>
            <li>
              <button>
                <Nintendo />
              </button>
            </li>
            <li>
              <button>
                <Xbox />
              </button>
            </li>
            <li>
              <button>
                <Playstation />
              </button>
            </li>
          </ul>
        </nav>
        <h2 className={styles.Allgames}>
          {" "}
          <Allgames /> Ver todos jogos
        </h2>
      </div>
    </div>
  );
};

export default MenuJogosExclusivos;
