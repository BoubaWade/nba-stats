import avatarPlayer from "/images/avatar-player.png";

export default function Avatar() {
  return (
    <div className="image-container">
      <img src={avatarPlayer} alt="image du profil" />
    </div>
  );
}
