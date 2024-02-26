import { navigationItems } from "../../../config/config";
import NavigationItem from "./NavigationItem";

type NavigationListItemsProps = {
  toggleNav?: boolean;
};

export default function NavigationListItems({
  toggleNav,
}: NavigationListItemsProps) {
  return (
    <ul className={`navigation-list ${toggleNav ? "actived" : ""}`}>
      {navigationItems.map((item, index) => (
        <NavigationItem key={index} item={item} />
      ))}
    </ul>
  );
}
