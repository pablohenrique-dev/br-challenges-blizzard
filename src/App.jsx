import React from "react";
import Banner from "./Components/Banner/Banner";

import imgBanner1 from "./assets/banner-1.jpg";
import imgBanner2 from "./assets/banner-2.jpg";
import imgBanner3 from "./assets/banner-3.jpg";
import Teste from "./Components/Teste";
import Header from "./Components/Header/Header";

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

function App() {
  return (
    <>
      <Header />
      {/* {banners.map((banner) => (
        <Banner
          key={banner.id}
          img={banner.img}
          title={banner.title}
          text={banner.text}
        />
      ))}
      <Teste /> */}
    </>
  );
}

export default App;
