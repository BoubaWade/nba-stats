import { Team } from "../Players/playersTypes";

export default function DivisionTeam({ division }: any) {
  return (
    <div className="">
      <h3>{division[1]}</h3>
      {division[0].map((item: Team, index: number) => (
        <div key={index}>
          <img
            src={`../../../public/images/${item.name}.svg`}
            alt={`logo-${item.name}`}
          />
          {item.full_name}
        </div>
      ))}
    </div>
  );
}
