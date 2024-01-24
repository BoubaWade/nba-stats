export type PlayerType = {
  first_name: string;
  height_feet?: number;
  height_inches?: number;
  id: number;
  last_name: string;
  position: string;
  team: TeamType;
  weight_pounds: number;
};
type TeamType = {
  id: number;
  full_name: string;
  name: string;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
};

export type NavBarProps = {
  userName?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};
