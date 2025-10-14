// Interfaces
import { ISmarticoBonus, ISmarticoPayload } from "@/interfaces/ISmartico";

export async function SendSmarticoBonus(
  payload: ISmarticoPayload
): Promise<ISmarticoBonus | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SMARTICO_API_URL}/api/external/events/v2`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_SMARTICO_API_KEY!,
        },
        body: JSON.stringify(payload.bonus.userBonus),
      }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const smarticoBonus: ISmarticoBonus = {
      err_code: data.err_code,
      pd: data.pd,
      req_id: data.req_id,
    };

    return smarticoBonus;
  } catch (error) {
    console.error({ error });
    return null;
  }
}
