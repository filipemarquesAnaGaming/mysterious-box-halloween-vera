import { ICampaign } from "./ICampaign";
import { IMinigamePlayed } from "./IMinigamePlayed";

export interface IUser {
  user_ext_id: string;
  campaigns: ICampaign[] | [];
  minigames_played: IMinigamePlayed[] | [];
}
