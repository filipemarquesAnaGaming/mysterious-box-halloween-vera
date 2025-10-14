export interface IMinigamePlayed {
  mini_game_id: IMinigameDetails;
  played_count: number;
  cactus_bonus_name_: string;
  last_played_date: string;
}

interface IMinigameDetails {
  _id: string;
  name: string;
  max_score: number;
}
