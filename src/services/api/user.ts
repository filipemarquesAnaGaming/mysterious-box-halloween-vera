// Interfaces
import { IUser } from "@/interfaces/IUser";
import { ISmarticoPayload } from "@/interfaces/ISmartico";
import { IAddMinigameToUser } from "@/interfaces/api/IAddMinigameToUser";

export async function GetUserById(userId: string): Promise<IUser | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        next: {
          revalidate: 0,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const user: IUser = {
      user_ext_id: data.user_ext_id,
      campaigns: data.campaigns,
      minigames_played: data.minigames_played,
    };

    return user;
  } catch (error) {
    console.error({ error });
    return null;
  }
}

export async function AddMinigameToUser(
  payload: IAddMinigameToUser
): Promise<ISmarticoPayload | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/add-played-mini-game/${payload.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mini_game_id: payload.minigameId,
          bonus_earned: payload.bonusCode,
        }),
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const smarticoPayload: ISmarticoPayload = {
      bonus: data.bonus,
    };

    return smarticoPayload;
  } catch (error) {
    console.error({ error });
    return null;
  }
}
