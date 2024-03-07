import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";
import { useNavigate } from "react-router-dom";
import { handleActiveButtonClicked } from "../../../helpers/games";

type NavigationItemProps = {
  item: { id: string; label: string; link: string; active: string };
};

export default function NavigationItem({ item }: NavigationItemProps) {
  const { id, link, label, active } = item;
  const {
    setIsActiveNavButton,
    setShowAllGames,
    setShowSpecificPlayer,
    setShowSpecificTeam,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClickButton = (link: string) => {
    setShowSpecificPlayer(false);
    setShowSpecificTeam(false);
    setShowAllGames(true);
    navigate(link);
  };

  const handleActiveButton = (e: React.MouseEvent<HTMLLIElement>) => {
    handleActiveButtonClicked(setIsActiveNavButton, e.currentTarget.id);
  };

  return (
    <li
      key={id}
      id={id}
      className={active}
      onClick={(e) => {
        handleClickButton(link);
        handleActiveButton(e);
      }}
    >
      {label}
    </li>
  );
}
