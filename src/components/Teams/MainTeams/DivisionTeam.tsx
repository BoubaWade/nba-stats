import TeamComponent from "./TeamComponent";

export default function DivisionTeam({ division }: any) {
  return (
    <div className="division">
      {/* <h3 className="face division-name">{division[1]}</h3> */}
      {division[0].map((team: any, index: number) => (
        <TeamComponent key={index} team={team} />
      ))}
    </div>
  );
}
