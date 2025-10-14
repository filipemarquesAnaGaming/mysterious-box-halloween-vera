// API
import { AddMinigameToUser } from "@/services/api/user";

// Interfaces
import { IAddMinigameToUserAndSendBonus } from "@/interfaces/api/IAddMinigameToUserAndSendBonus";
import { userCanPlay } from "./userCanPlay";

export async function addMinigameToUserAndSendBonus(
  payload: IAddMinigameToUserAndSendBonus
): Promise<void | boolean> {
  // Verify if user can play
  const { isBlocked } = await userCanPlay(payload.userId);

  if (isBlocked) {
    console.error("User is blocked.");
    return false;
  }

  // Add minigame to user
  const addMinigameToUser = await AddMinigameToUser(payload);

  if (!addMinigameToUser) {
    console.error("Error adding minigame to user.");
    return false;
  }

  console.log("AddMinigameToUser succesfuly");

  return true;
}
