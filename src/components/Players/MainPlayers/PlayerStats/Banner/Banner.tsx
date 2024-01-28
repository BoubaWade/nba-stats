import avatarPlayer from "../../../../../images/avatar-player.png";
import PlayerInfos from "./PlayerInfos";

export default function Banner() {
  return (
    <div className="banner">
      <div className="image-container">
        <img src={avatarPlayer} alt="image du profil" />
      </div>
      <PlayerInfos />
    </div>
  );
}
