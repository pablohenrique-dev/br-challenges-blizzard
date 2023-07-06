import React from "react";
import styles from "./DownloadNow.module.css";
import ConnectWithYourFriends from "../Icons/ConnectWithYourFriends";
import YourGamesInOnePlace from "../Icons/YourGamesInOnePlace";
import BuyYourGames from "../Icons/BuyYourGames";

import ComponentButton from "./../Button/ComponentButton";
import Phone from "./../Icons/Phone";

import Windows from "../Icons/Windows";
import MacOs from "../Icons/Mac";
import Linux from "../Icons/Linux";

import battlenet from "../../assets/battlenet-logo.png";
import dashboardImg from "../../assets/dashboard.png";
import popupDashboardImg from "../../assets/popupDashboard.png";

const DownloadNow = () => {
  const [operationalSystem, setOperationalSystem] = React.useState("");
  const [iconOs, setIconOs] = React.useState(null);

  React.useEffect(() => {
    const system = window.navigator.userAgent;
    if (system.includes("Windows")) {
      setOperationalSystem("Windows");
      setIconOs(Windows);
    }
    if (system.includes("Mac")) {
      setOperationalSystem("MacOs");
      setIconOs(MacOs);
    }
    if (system.includes("Linux")) {
      setOperationalSystem("Linux");
      setIconOs(Linux);
    }
  }, []);

  return (
    <section className={styles.sectionDownloadNow}>
      <div className={`${styles.downloadNowContainer} container`}>
        <div className={styles.downloadNowLeft}>
          <img className={styles.hat} src={battlenet} alt="logo battlenet" />
          <h2 className={styles.title}>Baixe agora o battle.net</h2>
          <ul className={styles.characteristics}>
            <li>
              <YourGamesInOnePlace />
              Seus jogos em um só lugar
            </li>
            <li>
              <ConnectWithYourFriends />
              Conecte-se aos seus amigos
            </li>
            <li>
              <BuyYourGames />
              Compre jogos e itens digitais
            </li>
          </ul>

          <ComponentButton
            text={
              operationalSystem
                ? "Baixar para " + operationalSystem
                : "Baixar agora"
            }
            icon={iconOs}
            banner={true}
            hasFill={true}
          />

          <div className={styles.availableInMobile}>
            <Phone />
            <p>
              Também disponível como <br />
              <span>aplicativo móvel</span>
            </p>
          </div>
        </div>
        <div className={styles.downloadNowRight}>
          <img
            className={styles.dashboardImg}
            src={dashboardImg}
            alt="imagem dashboard"
          />
          <img
            className={styles.popupDashboardImg}
            src={popupDashboardImg}
            alt="imagem popup dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadNow;
