import useAllGames from "../../../../../hooks/useAllGames";
import { Game } from "../../../../Teams/teamsTypes";
import Loader from "../../../../reusable-ui/Loader/Loader";
import GamesList from "./GamesList/GamesList";

type GamesContentProps = {
  gamesToDisplay: Game[];
  buttonLabel: string;
};
export default function GamesContent({
  gamesToDisplay,
  buttonLabel,
}: GamesContentProps) {
  const { isLoading } = useAllGames();

  return (
    <>
      {isLoading ? (
        <Loader className="loader-games-cards" />
      ) : (
        <GamesList gamesToDisplay={gamesToDisplay} buttonLabel={buttonLabel} />
      )}
    </>
  );
}
