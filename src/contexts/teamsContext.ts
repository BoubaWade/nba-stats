import { createContext } from "react";
import { Team } from "../components/Players/playersTypes";

type TeamsContextType = {
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
  showSpecificTeam: boolean;
  setShowSpecificTeam: React.Dispatch<React.SetStateAction<boolean>>;
  specificTeamID: number;
  setSpecificTeamID: React.Dispatch<React.SetStateAction<number>>;
  teamFullName: string;
  setTeamFullName: React.Dispatch<React.SetStateAction<string | null>>;
};
export const TeamsContext = createContext<TeamsContextType>({
  teams: [],
  setTeams: () => {},
  showSpecificTeam: false,
  setShowSpecificTeam: () => {},
  specificTeamID: 0,
  setSpecificTeamID: () => {},
  teamFullName: "",
  setTeamFullName: () => {},
});
