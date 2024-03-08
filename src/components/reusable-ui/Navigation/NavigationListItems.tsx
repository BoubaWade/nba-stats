import { useContext } from "react";
import { getNavigationItems } from "../../../config/config";
import NavigationItem from "./NavigationItem";
import { GlobalContext } from "../../../contexts/globalContext";

type NavigationListItemsProps = {
  toggleNav?: boolean;
};

export default function NavigationListItems({
  toggleNav,
}: NavigationListItemsProps) {
  const { isActiveNavButton } = useContext(GlobalContext);

  const buttonsNavConfig = getNavigationItems(isActiveNavButton);

  return (
    <ul className={`navigation-list ${toggleNav ? "actived" : ""}`}>
      {buttonsNavConfig.map((item, index) => (
        <NavigationItem key={index} item={item} />
      ))}
    </ul>
  );
}
