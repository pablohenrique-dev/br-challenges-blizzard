import React from "react";
import styles from "./GamesList.module.css";
import useFetch from "../../Hooks/useFetch";
import Logo from "../Icons/Logo";
import AllGames from "../Icons/AllGames";
import Loader from "../Loader/Loader";

const GamesList = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request("https://api.brchallenges.com/api/blizzard/games");
    console.log(data);
  }, [request]);
  if (error) return <p>{error}</p>;
  if (loading) return <Loader />;
  if (data)
    return (
      <ul className={`${styles.ListGamesContainer} container fadeRight`}>
        {data.map((game) => {
          return (
            <li key={game.name} className={styles.gameContainer}>
              <div className={styles.gameImgCoverContainer}>
                <img
                  className={styles.gameLogo}
                  src={game.logo}
                  alt={`Logo ${game.name}`}
                />
                <div className={styles.gameCoverGradient}></div>
                <img
                  className={styles.gameCover}
                  src={game.image}
                  alt={`Capa ${game.image}`}
                />
              </div>
              <h3 className={styles.nameGame}>{game.name}</h3>
              <p className={styles.nameCategory}>{game.category}</p>
            </li>
          );
        })}
        <li className={styles.liGameFixed}>
          <Logo />
          <h3>
            <AllGames color="#fff" />
            Ver todos jogos
          </h3>
        </li>
      </ul>
    );
};

export default GamesList;
