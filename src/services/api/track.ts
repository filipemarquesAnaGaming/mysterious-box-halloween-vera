type TrackPayload = {
  user_ext_id: string;
  campaign_id: string;
  event_type: string;
  target: string;
  prize?: string;
};

export async function handleTrackEvent(payload: TrackPayload) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TRACKING_API_URL}/tracking/create-event`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    console.log("persisting track events:  ", data);

    return data;
  } catch (error: any) {
    console.log("error persisting track events: ", error.message);
    return null;
  }
}
