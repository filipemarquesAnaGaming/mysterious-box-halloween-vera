export interface Box {
  id: number;
  boxImage: string;
  probability: number;
  distance: number;
  gameURL: string;
  prizeLabel: string;
  cactus_bonus_name_: string;
}

export const boxes: Box[] = [
  {
    id: 1,
    boxImage: "/Games/cases/box1.png",
    probability: 0,
    distance: 1430,
    gameURL: "/games/pragmaticplay/ratinho-sortudo",
    prizeLabel: "05x Ratinho Sortudo",
    cactus_bonus_name_: "0000",
  },
  {
    id: 2,
    boxImage: "/Games/cases/box2.png",
    probability: 0,
    distance: 1535,
    gameURL: "/games/pgsoft/cash-mania",
    prizeLabel: "03x Cash Mania",
    cactus_bonus_name_: "0000",
  },
  {
    id: 3,
    boxImage: "/Games/cases/box3.png",
    probability: 0,
    distance: 1635,
    gameURL: "/games/pragmaticplay/fire-portals",
    prizeLabel: "05x Fire Portals",
    cactus_bonus_name_: "0000",
  },
  {
    id: 4,
    boxImage: "/Games/cases/box4.png",
    probability: 0,
    distance: 1738,
    gameURL: "/games/pragmaticplay/tigre-sortudo",
    prizeLabel: "05x Tigre Sortudo",
    cactus_bonus_name_: "0000",
  },
  {
    id: 5,
    boxImage: "/Games/cases/box5.png",
    probability: 100,
    distance: 1840,
    gameURL: "/games/pragmaticplay/tigre-sortudo",
    prizeLabel: "Loja Grátis",
    cactus_bonus_name_: "0000",
  },
];
