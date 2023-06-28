import React from "react";
import styles from "./Banner.module.css";

import imgBanner1 from "../../assets/banner-1.jpg";
import imgBanner2 from "../../assets/banner-2.jpg";
import imgBanner3 from "../../assets/banner-3.jpg";

import iconBanner1 from "../../assets/iconsMenuBanner/diablo-iv.png";
import iconBanner2 from "../../assets/iconsMenuBanner/Hearthstone.png";
import iconBanner3 from "../../assets/iconsMenuBanner/world-of-warcraft.png";
import iconBanner4 from "../../assets/iconsMenuBanner/diablo.png";
import iconBanner5 from "../../assets/iconsMenuBanner/StarCraft.png";

const banners = [
  {
    id: 1,
    img: imgBanner1,
    title: "Retorna à escuridão com o game Diablo IV",
    text: "O retorno de Lilith traz uma era de escuridão e sofrimento",
  },
  {
    id: 2,
    img: imgBanner2,
    title: "Novo pacote de expansão de Hearthstone",
    text: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
  },
  {
    id: 3,
    img: imgBanner3,
    title: "Desbrave as Terras Sombrias em Shadowlands! ",
    text: "O que jaz além do mundo que você conhece?",
  },
];

const iconsMenuBanner = [
  iconBanner1,
  iconBanner2,
  iconBanner3,
  iconBanner4,
  iconBanner5,
];

const Banner = () => {
  const [indexSlide, setIndexSlide] = React.useState(2);

  const styleBanner = {
    background: `url('${banners[indexSlide].img}') no-repeat center center`,
    backgroundSize: "cover",
    width: "100%",
    height: "736px",
    overflow: "hidden",
  };

  function handleClickMenuBanner(index) {
    if (index < banners.length) {
      setIndexSlide(index);
    }
  }

  return (
    <>
      {banners.map((banner, index) => {
        if (index !== indexSlide) return null;
        return (
          <section
            key={banner.id}
            style={styleBanner}
            className={styles.bannerContainer}
          >
            <div className={`${styles.banner} container`}>
              <ul>
                {iconsMenuBanner.map((icon, indexMenuIcon) => {
                  return (
                    <li
                      className={`${styles.iconMenuBanner} ${
                        indexSlide === indexMenuIcon &&
                        styles.iconMenuBannerActive
                      }`}
                      key={indexMenuIcon}
                    >
                      <button
                        onClick={() => handleClickMenuBanner(indexMenuIcon)}
                        style={{
                          cursor: `${
                            index < banners.length ? "pointer" : "none"
                          }`,
                        }}
                      >
                        <img src={icon} alt="Ícone menu banner" />
                      </button>
                    </li>
                  );
                })}
              </ul>
              <h1 className={styles.title}>{banner.title}</h1>
              <p className={styles.text}>{banner.text}</p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Banner;
