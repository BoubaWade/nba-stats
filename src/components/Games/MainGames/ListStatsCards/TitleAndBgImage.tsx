import { PlayerStats } from "../../../Players/playersTypes";
const getPATH = (name: string) => {
  return `../../../../../public/images/${name}.svg`;
};

type TitleImageProps = {
  stats: PlayerStats;
  onClick: () => void;
};

export default function TitleAndBgImage({ stats, onClick }: TitleImageProps) {
  const { first_name, last_name } = stats.player;

  return (
    <>
      <img src={getPATH(stats.team.name)} onClick={onClick} />
      <h3>
        {first_name} {last_name}
      </h3>
    </>
  );
}
