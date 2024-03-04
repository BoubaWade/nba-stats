import { Team } from "../../../Players/playersTypes";
import NameAndLogo from "./NameAndLogo";

type TableTeamsRowProps = {
  team: Team;
};

export default function TableTeamsRow({ team }: TableTeamsRowProps) {
  const { id, conference, division, city, abbreviation } = team;
  const teamInfos = [conference, division, city, abbreviation];

  return (
    <tr key={id}>
      <NameAndLogo team={team} />
      {teamInfos.map((item) => (
        <td key={item}>{item}</td>
      ))}
    </tr>
  );
}
