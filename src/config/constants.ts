// export const imagesFieldsLeft = [
//   { src: "/public/NikolaJOKIC.avif" },
//   { src: "/public/KevinDURANT.avif" },
//   { src: "/public/LebronJAMES.avif" },
// ];
// export const imagesFieldsRight = [
//   { src: "/public/StephenCURRY.avif" },
//   { src: "/public/JoelEMBIID.avif" },
//   { src: "/public/ANTETOKOUNMPO.avif" },
// ];
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

export const statOptions = ["", "Points", "Passes", "Rebonds", "Contres"];

export const graphs = ["", "Barre", "Ligne"];

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
