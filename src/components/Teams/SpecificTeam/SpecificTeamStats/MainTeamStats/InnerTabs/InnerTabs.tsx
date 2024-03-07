import "./innerTabs.css";
import InnerTabsButtons from "./InnerTabsButtons";
import SocialMedias from "./SocialMedias";

export default function InnerTabs() {
  return (
    <div className="inner-tabs-container">
      <InnerTabsButtons />
      <SocialMedias />
    </div>
  );
}
