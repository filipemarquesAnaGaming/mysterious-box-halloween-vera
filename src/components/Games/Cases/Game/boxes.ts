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
    gameURL: "/Games/prizes/aviator.png",
    prizeLabel: "2 giros no AVIATOR!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 2,
    boxImage: "/Games/cases/box2.png",
    probability: 0,
    distance: 1535,
    gameURL: "/Games/prizes/gates.png",
    prizeLabel: "10 giros no GATES OF OLYMPUS!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 3,
    boxImage: "/Games/cases/box3.png",
    probability: 0,
    distance: 1635,
    gameURL: "/Games/prizes/joker.png",
    prizeLabel: "5 giros no MASTER JOKERS!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 4,
    boxImage: "/Games/cases/box4.png",
    probability: 0,
    distance: 1738,
    gameURL: "/Games/prizes/lose.png",
    prizeLabel: "Não foi dessa vez!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 5,
    boxImage: "/Games/cases/box5.png",
    probability: 0,
    distance: 1840,
    gameURL: "/Games/prizes/rabbit.png",
    prizeLabel: "10 giros no FORTUNE RABBIT!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 6,
    boxImage: "/Games/cases/box1.png",
    probability: 0,
    distance: 1840,
    gameURL: "/Games/prizes/tourosortudo.png",
    prizeLabel: "10 giros no TOURO SORTUDO!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 7,
    boxImage: "/Games/cases/box2.png",
    probability: 0,
    distance: 1840,
    gameURL: "/Games/prizes/super7s.png",
    prizeLabel: "2 giros no Super 7S!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 8,
    boxImage: "/Games/cases/box3.png",
    probability: 0,
    distance: 1840,
    gameURL: "/Games/prizes/tigresortudo.png",
    prizeLabel: "3 giros no TIGRE SORTUDO!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 9,
    boxImage: "/Games/cases/box4.png",
    probability: 0,
    distance: 1840,
    gameURL: "/Games/prizes/money.png",
    prizeLabel: "1000 reais em SALDO REAL!",
    cactus_bonus_name_: "0000",
  },
  {
    id: 10,
    boxImage: "/Games/cases/box5.png",
    probability: 0,
    distance: 1840,
    gameURL: "/Games/prizes/money.png",
    prizeLabel: "10 reais em SALDO REAL!",
    cactus_bonus_name_: "0000",
  },
];
