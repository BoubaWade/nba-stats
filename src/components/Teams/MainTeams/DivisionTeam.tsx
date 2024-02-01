import React, { useContext } from "react";
import { Team } from "../../Players/playersTypes";
import { TeamsContext } from "../../../contexts/teamsContext";

export default function DivisionTeam({ division }: any) {
  const { setShowSpecificTeam, setSpecificTeamID } = useContext(TeamsContext);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setSpecificTeamID(parseInt(e.currentTarget.id));
    setShowSpecificTeam(true);
  };

  return (
    <div className="division">
      <h3 className="division-name">{division[1]}</h3>
      {division[0].map((item: Team) => (
        <div
          key={item.id}
          id={item.id.toString()}
          className="team"
          onClick={handleClick}
        >
          <img src={`../../../public/images/${item.name}.svg`} />
          <span className="text-name">{item.full_name}</span>
        </div>
      ))}
    </div>
  );
}
