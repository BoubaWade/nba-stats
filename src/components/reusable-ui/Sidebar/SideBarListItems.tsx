import { sidebarItems } from "../../../config/config";
import SideBarItem from "./SideBarItem";

export default function SideBarListItems() {
  return (
    <ul className="sideBar-list">
      {sidebarItems.map((item, index) => (
        <SideBarItem key={index} item={item} />
      ))}
    </ul>
  );
}
