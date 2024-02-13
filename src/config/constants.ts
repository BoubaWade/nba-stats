export const seasons = [
  "",
  2023 + "-" + 2024,
  2022 + "-" + 2023,
  2021 + "-" + 2022,
  2020 + "-" + 2021,
  2019 + "-" + 2020,
  2018 + "-" + 2019,
  2017 + "-" + 2018,
  2016 + "-" + 2017,
  2015 + "-" + 2016,
  2014 + "-" + 2015,
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
