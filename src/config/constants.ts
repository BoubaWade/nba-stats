export const imagesFieldsLeft = [
  { src: "/public/NikolaJOKIC.avif" },
  { src: "/public/KevinDURANT.avif" },
  { src: "/public/LebronJAMES.avif" },
];
export const imagesFieldsRight = [
  { src: "/public/StephenCURRY.avif" },
  { src: "/public/JoelEMBIID.avif" },
  { src: "/public/ANTETOKOUNMPO.avif" },
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
