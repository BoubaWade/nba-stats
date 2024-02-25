import TeamComponent from "./TeamComponent";

export default function DivisionTeam({ division }: any) {
  return (
    <div className="division">
      {division.map((team: any, index: number) => (
        <TeamComponent key={index} team={team} />
      ))}
    </div>
  );
}
