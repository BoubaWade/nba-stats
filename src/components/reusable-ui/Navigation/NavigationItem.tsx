import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";
import { useNavigate } from "react-router-dom";

type NavigationItemProps = {
  item: { text: string; link: string };
};

export default function NavigationItem({ item }: NavigationItemProps) {
  const { link, text } = item;
  const { setShowAllGames, setShowSpecificPlayer, setShowSpecificTeam } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClickButton = (link: string) => {
    setShowSpecificPlayer(false);
    setShowSpecificTeam(false);
    navigate(link);
    setShowAllGames(true);
  };

  return <li onClick={() => handleClickButton(link)}>{text}</li>;
}
