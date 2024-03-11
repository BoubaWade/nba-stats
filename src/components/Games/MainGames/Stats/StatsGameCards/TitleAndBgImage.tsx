import { PlayerStats } from "../../../../Players/playersTypes";
// const getPATH = (name: string) => {
//   return `/public/images/teamsLogos/${name}.svg`;
// };

type TitleImageProps = {
  stats: PlayerStats;
  onClick: () => void;
};

export default function TitleAndBgImage({ stats, onClick }: TitleImageProps) {
  const { first_name, last_name } = stats.player;
  const { name } = stats.team;

  return (
    <>
      <img src={`/images/teamsLogos/${name}.svg`} onClick={onClick} />
      <h3>
        {first_name} {last_name}
      </h3>
    </>
  );
}
