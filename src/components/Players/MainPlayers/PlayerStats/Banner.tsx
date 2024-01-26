import { useContext } from "react";
import avatarPlayer from "../../../../images/avatar-player.png";
import { PlayersContext } from "../../../../contexts/playersContext";
// import Loader from "../../../reusable-ui/Loader/Loader";

export default function Banner() {
  const { playerStats } = useContext(PlayersContext);
  //   const { first_name, last_name } = playerStats[0].player;
  //   console.log(playerStats[0].team.full_name);
  //   if (!playerStats) return <p>Il n'est plus joueur NBA</p>;

  return (
    <div className="banner">
      <div className="image-container">
        <img src={avatarPlayer} alt="image du profil" />
      </div>
      {playerStats.length === 0 ? (
        <p>Il est un ancien joueur NBA, </p>
      ) : (
        <div className="infos">
          <p>
            {playerStats[0]?.team.full_name}| #Numéro |
            {playerStats[0]?.player.position}
          </p>
          <h1>
            {playerStats[0]?.player.first_name}{" "}
            {playerStats[0]?.player.last_name}
          </h1>
        </div>
      )}
    </div>
  );
}
