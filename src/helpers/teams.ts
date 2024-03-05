import { Team } from "../components/Players/playersTypes";
import { divisionsName } from "../config/constants";

export const getAllDivisionsWithTeams = (teams: Team[]) => {
  let arrayTeams = [];
  for (let i = 0; i < divisionsName.length; i++) {
    const divisionWithTeams = teams.filter(
      (team) => team.division === divisionsName[i]
    );

    // const array = [divisionWithTeams, divisionsName[i]];
    arrayTeams.push(divisionWithTeams);
  }
  return arrayTeams;
};

export const setTeamsWithArenas = (teams: Team[], arenas: any[]) => {
  const teamsWithArena = teams.map((team) => {
    const matchingArena = arenas.find((arena) => arena.teamName === team.name);

    if (matchingArena) {
      return { ...team, arena: matchingArena.arena };
    } else {
      return team;
    }
  });
  return teamsWithArena;
};

export const getSpecificTeamArena = (
  teams: Team[],
  specificTeamName: string
) => {
  const team = teams.find((team) => team.name === specificTeamName);
  return team;
};
