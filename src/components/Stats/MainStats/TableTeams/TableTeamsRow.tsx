import { Team } from "../../../Players/playersTypes";
import NameAndLogo from "./NameAndLogo";

type TableTeamsRowProps = {
  team: Team;
};

export default function TableTeamsRow({ team }: TableTeamsRowProps) {
  const { id, arena, conference, division, city, abbreviation } = team;
  const teamInfos = [arena, conference, division, city, abbreviation];

  return (
    <tr key={id}>
      <NameAndLogo team={team} />
      {teamInfos.map((item) => (
        <td key={item}>{item}</td>
      ))}
    </tr>
  );
}
