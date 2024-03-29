export type Player = {
  first_name: string;
  height_feet?: number;
  height_inches?: number;
  id: number;
  last_name: string;
  position: string;
  team: Team;
  weight_pounds?: number;
  draft_year: number;
};
export type Team = {
  id: number;
  full_name: string;
  name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  arena?: string;
};

export type PlayerStats = {
  ast: number;
  blk: number;
  dreb?: number;
  fg3_pct?: number;
  fg3a?: number;
  fg3m?: number;
  fg_pct?: number;
  fga?: number;
  fgm?: number;
  ft_pct?: number;
  fta?: number;
  ftm?: number;
  game?: {
    id: number;
    date: string;
    home_team_id: number;
    home_team_score: number;
    period: number;
  };
  id: number;
  min?: string;
  oreb?: number;
  pf?: number;
  player: {
    id: number;
    first_name: string;
    height_feet?: number;
    height_inches?: number;
    last_name: string;
    position?: string;
    jersey_number?: number;
  };
  pts: number;
  reb: number;
  stl?: number;
  team: Team;
  turnover?: number;
};
