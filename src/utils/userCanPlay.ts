import { GetUserById } from "@/services/api/user";

export async function userCanPlay(
  userId: string
): Promise<{ isBlocked: boolean }> {
  const user = await GetUserById(userId);

  if (!user) {
    return {
      isBlocked: true,
    };
  }

  const minigamesIds = new Set([
    "67ee88b25f31c01de3f33e32", // halloween
  ]);

  const minigamesPlayed = user?.minigames_played || [];

  if (minigamesPlayed.length === 0) {
    return { isBlocked: false };
  }

  const hasPlayedAnyMinigame = minigamesPlayed.some(
    (game) => game.mini_game_id && minigamesIds.has(game.mini_game_id._id)
  );

  return { isBlocked: hasPlayedAnyMinigame };
}
