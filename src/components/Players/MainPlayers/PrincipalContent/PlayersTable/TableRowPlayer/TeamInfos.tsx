import { Team } from "../../../../playersTypes";
type TeamInfosProps = {
  team: Team;
};

export default function TeamInfos({ team }: TeamInfosProps) {
  const { full_name, conference, division } = team;

  return (
    <>
      <td className="Équipe">{full_name}</td>
      <td className="Conférence">{conference}</td>
      <td className="Division">{division}</td>
    </>
  );
}
