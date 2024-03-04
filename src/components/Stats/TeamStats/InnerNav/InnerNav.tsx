import "./innerNav.css";
import InnerNavButtons from "./InnerNavButtons";
import SocialMedias from "./SocialMedias";

export default function InnerNav() {
  return (
    <div className="inner-nav-container">
      <InnerNavButtons />
      <SocialMedias />
    </div>
  );
}
