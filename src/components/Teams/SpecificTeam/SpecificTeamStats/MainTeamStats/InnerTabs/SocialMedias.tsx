import facebook from "/images/facebook.svg";
import instagram from "/images/instagram.svg";
import X from "/images/x-twitter.svg";

export default function SocialMedias() {
  const socialMediasList = [facebook, instagram, X];

  return (
    <div className="social-medias">
      {socialMediasList.map((media, index) => (
        <img key={index} src={media} alt={media} tabIndex={0} />
      ))}
    </div>
  );
}
