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
    "68f2944d1cfd484dcb2dee1a", // halloween Verabet 2025
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
