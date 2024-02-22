import { Team } from "../components/Players/playersTypes";
import { divisionsName } from "../config/constants";

export const getAllDivisionsWithTeams = (teams: Team[]) => {
  let arrayTeams = [];
  for (let i = 0; i < divisionsName.length; i++) {
    const divisionWithTeams = teams.filter(
      (team) => team.division === divisionsName[i]
    );

    const array = [divisionWithTeams, divisionsName[i]];
    arrayTeams.push(array);
  }
  return arrayTeams;
};
