import { useNavigate } from "react-router-dom";
import StatsCardsList from "./StatsCardsList";
import { useContext } from "react";
import { GlobalContext } from "../../../../contexts/globalContext";
import SecondaryButton from "../../../reusable-ui/SecondaryButton/SecondaryButton";
import { getStatIfTheyPlay } from "../../../../helpers/players";
import { getStatslabelsAndValues } from "../../../../config/config";
import TableHeader from "../../../reusable-ui/TableHeader";

export default function Stats() {
  const { gameStats, setShowSpecificTeam } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleReturnToTeamGames = () => {
    setShowSpecificTeam(true);
    navigate("/teams");
  };
  const handleReturnToAllGames = () => {
    // setShowSpecificTeam(true);
    // navigate("/teams");
  };
  const statsToDisplay = getStatIfTheyPlay(gameStats);
  const tableHeaderFields = [
    "Points",
    "Rebonds",
    "Passes",
    "Contre",
    "Interceptions",
    "Perte de balles",
  ];
  return (
    <>
      <SecondaryButton
        className="return-button"
        label="Retour"
        onClick={handleReturnToTeamGames}
      />
      <StatsCardsList />
      <div className="players-tables-stats">
        <SecondaryButton
          className="return-button"
          label="Retour"
          onClick={handleReturnToAllGames}
        />
        <div className="table-container">
          <table>
            <TableHeader datas={tableHeaderFields} />
            <tbody>
              {statsToDisplay.map((stats) => (
                <div>
                  <h3>
                    {stats.player.first_name} {stats.player.last_name}
                  </h3>
                  {getStatslabelsAndValues(stats).map(({ label, value }) => (
                    <div>
                      <p key={label}>
                        {label} : <span>{value}</span>
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
