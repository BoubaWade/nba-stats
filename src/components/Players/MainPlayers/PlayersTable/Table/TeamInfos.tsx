import { Team } from "../../../playersTypes";
type TeamInfosProps = {
  team: Team;
};

export default function TeamInfos({ team }: TeamInfosProps) {
  const { full_name, conference, division } = team;

  return (
    <>
      <td>{full_name}</td>
      <td>{conference}</td>
      <td>{division}</td>
    </>
  );
}
