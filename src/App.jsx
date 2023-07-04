import React from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import MenuJogosExclusivos from "./Components/JogosExclusivos/MenuJogosExclusivos";
import GamesList from "./Components/GamesList/GamesList";
import DownloadNow from "./Components/DownloadNow/DownloadNow";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MenuJogosExclusivos />
      <GamesList />
      <DownloadNow />
    </>
  );
}

export default App;
