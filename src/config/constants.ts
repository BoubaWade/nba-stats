export const BANNERS = [
  { name: "Atlanta Hawks" },
  { name: "Boston Celtics" },
  { name: "Brooklyn Nets" },
  { name: "Charlotte Hornets" },
  { name: "Cleveland Cavaliers" },
  { name: "Dallas Mavericks" },
  { name: "Denver Nuggets" },
  { name: "Detroit Pistons" },
  { name: "Golden State Warriors" },
  { name: "Houston Rockets" },
  { name: "Indiana Pacers" },
  { name: "LA Clippers" },
  { name: "Los Angeles Lakers" },
  { name: "Memphis Grizzlies" },
  { name: "Miami Heat" },
  { name: "Milwaukee Bucks" },
  { name: "Minnesota Timberwolves" },
  { name: "New Orleans Pelicans" },
  { name: "New York Knicks" },
  { name: "Oklahoma City Thunder" },
  { name: "Orlando Magic" },
  { name: "Philadelphia 76ers" },
  { name: "Portland Trail Blazers" },
  { name: "Sacramento Kings" },
  { name: "San Antonio Spurs" },
  { name: "Toronto Raptors" },
  { name: "Utah Jazz" },
  { name: "Washington Wizards" },
  { name: "Atlanta Hawks" },
  { name: "Atlanta Hawks" },
];
export const headerPlayerTableItems = [
  "Nom",
  "Prénom",
  "Position",
  "Équipe",
  "Conférence",
  "Division",
];
export const headerTeamsTableItems = [
  "Equipe",
  "Stade",
  "Conférence",
  "Divison",
  "Ville",
  "Abréviation",
];

export const statOptions = ["Points", "Passes", "Rebonds", "Contres"];

export const graphs = ["Barre", "Ligne"];

export const divisionsName = [
  "Atlantic",
  "Southeast",
  "Central",
  "Southwest",
  "Northwest",
  "Pacific",
];

export const today = new Date();
export const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

export const oneWeekBefore = new Date(
  today.getTime() - 24 * 60 * 60 * 1000 * 7 * 2
);

export const oneWeekAfter = new Date(
  today.getTime() + 24 * 60 * 60 * 1000 * 7 * 2
);

export const STATUS_AFTER_GAME = "Final";
export const PERIOD_CURRENT_GAME = [1, 2, 3, 4];
export const PERIOD_BEFORE_GAME = 0;
export const startSeasonDate = "2023-10-24";
export const endSeasonDate = "2024-04-14";
export const numberOfRegularSeasonGames = 82;
export const idLimitOfListTeamsNBA = 30;

export const nbaArenas = [
  { arena: "American Airlines Center", teamName: "Mavericks" },
  { arena: "Amway Center", teamName: "Magic" },
  { arena: "AT&T Center", teamName: "Spurs" },
  { arena: "Ball Arena", teamName: "Nuggets" },
  { arena: "Barclays Center", teamName: "Nets" },
  { arena: "Capital One Arena", teamName: "Wizards" },
  { arena: "Chase Center", teamName: "Warriors" },
  { arena: "Crypto.com Arena", teamName: "Lakers" },
  { arena: "Crypto.com Arena", teamName: "Clippers" },
  { arena: "FedExForum", teamName: "Grizzlies" },
  { arena: "Fiserv Forum", teamName: "Bucks" },
  { arena: "Footprint Center", teamName: "Suns" },
  { arena: "Gainbridge Fieldhouse", teamName: "Pacers" },
  { arena: "Golden 1 Center", teamName: "Kings" },
  { arena: "Kaseya Center", teamName: "Heat" },
  { arena: "Little Caesars Arena", teamName: "Pistons" },
  { arena: "Madison Square Garden", teamName: "Knicks" },
  { arena: "Moda Center", teamName: "Trail Blazers" },
  { arena: "Paycom Center", teamName: "Thunder" },
  { arena: "Rocket Mortgage FieldHouse", teamName: "Cavaliers" },
  { arena: "Scotiabank Arena", teamName: "Raptors" },
  { arena: "Smoothie King Center", teamName: "Pelicans" },
  { arena: "Spectrum Center", teamName: "Hornets" },
  { arena: "Target Center", teamName: "Timberwolves" },
  { arena: "TD Garden", teamName: "Celtics" },
  { arena: "Toyota Center", teamName: "Rockets" },
  { arena: "Vivint Arena", teamName: "Jazz" },
  { arena: "Wells Fargo Center", teamName: "76ers" },
  { arena: "State Farm Arena", teamName: "Hawks" },
  { arena: "United Center", teamName: "Bulls" },
];
