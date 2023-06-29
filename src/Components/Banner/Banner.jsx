import React from "react";
import styles from "./Banner.module.css";
import ComponentButton from "../Button/ComponentButton";
import Logar from "../Icons/Logar";

import imgBanner1 from "../../assets/banner-1.jpg";
import imgBanner2 from "../../assets/banner-2.jpg";
import imgBanner3 from "../../assets/banner-3.jpg";

import diabloBanner from "../../assets/diablo-banner.png";
import hearthstoneBanner from "../../assets/Hearthstone-banner.png";
import worldOfWarcraftBanner from "../../assets/world-of-warcraft-banner.png";

import iconBanner1 from "../../assets/iconsMenuBanner/diablo-iv.png";
import iconBanner2 from "../../assets/iconsMenuBanner/Hearthstone.png";
import iconBanner3 from "../../assets/iconsMenuBanner/world-of-warcraft.png";
import iconBanner4 from "../../assets/iconsMenuBanner/diablo.png";
import iconBanner5 from "../../assets/iconsMenuBanner/StarCraft.png";

import gif1 from "../../assets/gifs/giphy-1.gif";
import gif2 from "../../assets/gifs/giphy-2.gif";
import gif3 from "../../assets/gifs/giphy-3.gif";

import thumbGif1 from "../../assets/gifs/thumb-gif-1.jpg";
import thumbGif2 from "../../assets/gifs/thumb-gif-2.jpg";
import thumbGif3 from "../../assets/gifs/thumb-gif-3.jpg";

import buttonPlay from "../../assets/buttonPlay.png";

const banners = [
  {
    id: 1,
    name: "Diablo IV",
    img: imgBanner1,
    title: "Retorna à escuridão com o game Diablo IV",
    text: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    button: "Jogue agora",
    logoBanner: diabloBanner,
    trailer: {
      gif: gif1,
      thumb: thumbGif1,
    },
  },
  {
    id: 2,
    name: "Hearthstone",
    img: imgBanner2,
    title: "Novo pacote de expansão de Hearthstone",
    text: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    button: "Reserve agora na pré-venda",
    logoBanner: hearthstoneBanner,
    trailer: {
      gif: gif2,
      thumb: thumbGif2,
    },
  },
  {
    id: 3,
    name: "world Of Warcraft",
    img: imgBanner3,
    title: "Desbrave as Terras Sombrias em Shadowlands! ",
    text: "O que jaz além do mundo que você conhece?",
    button: "Reserve agora na pré-venda",
    logoBanner: worldOfWarcraftBanner,
    trailer: {
      gif: gif3,
      thumb: thumbGif3,
    },
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
  const [indexSlide, setIndexSlide] = React.useState(0);

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (indexSlide < banners.length - 1) {
        setIndexSlide(indexSlide + 1);
      } else {
        setIndexSlide(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [indexSlide]);

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
              <div className={styles.bannerInfos}>
                <h1 className={styles.title}>{banner.title}</h1>
                <p className={styles.text}>{banner.text}</p>
                <ComponentButton
                  text={banner.button}
                  hasFill={true}
                  icon={<Logar />}
                  banner={true}
                />
              </div>
              <div className={styles.bannerExtraInfos}>
                <img src={banner.logoBanner} alt={"Logo" + banner.name} />
                <h3>Assista o trailer</h3>
                <div className={styles.gifContainer}>
                  <img
                    className={styles.gif}
                    src={banner.trailer.gif}
                    alt="Gif"
                  />
                  <img
                    className={styles.thumb}
                    src={banner.trailer.thumb}
                    alt="Thumb gif"
                  />
                  <div className={styles.play}>
                    <img src={buttonPlay} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.timer}></div>
          </section>
        );
      })}
    </>
  );
};

export default Banner;
