import { Team } from "../Players/playersTypes";

export type Game = {
  date: Date;
  home_team: Team;
  home_team_score: number;
  id: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: Team;
  visitor_team_score: number;
};
