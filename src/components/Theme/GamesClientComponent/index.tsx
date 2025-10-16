"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Games
import { Undefined } from "@/components/Games/Undefined";
import { Cases } from "@/components/Games/Cases";

// Hooks and Contexts
import { IdProps } from "@/contexts/GameContext";
import { useGame } from "@/hooks/useGame";
import { useModal } from "@/hooks/useModal";
import { userCanPlay } from "@/utils/userCanPlay";

export const GameListClientComponent = ({
  userId,
  id,
}: {
  userId: string | undefined;
  id: IdProps;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentId, setCurentId, setCurentUserId } = useGame();
  const { setShowUserPlayedModal } = useModal();

  const CurrentComponent = useMemo(() => {
    switch (currentId) {
      case "0001":
        return Cases;
      default:
        return Undefined;
    }
  }, [currentId, userId]);

  useEffect(() => {
    const fetchUserPlayed = async () => {
      if (!userId) {
        setShowUserPlayedModal(true);
        return;
      }

      const { isBlocked } = await userCanPlay(userId);

      if (isBlocked) {
        setShowUserPlayedModal(true);
      }
    };

    fetchUserPlayed();
  }, [userId]);

  useEffect(() => {
    // Sync userId and id with game context
    if (userId) {
      setCurentUserId(userId);
    }

    if (id) {
      setCurentId(id);
    }

    // Redirect if missing required parameters
    if (!userId) {
      router.replace("/?id=undefined&userId=undefined");
      return;
    }

    // Ensure URL reflects current state
    const currentIdInUrl = searchParams.get("id");
    const userIdInUrl = searchParams.get("userId");
    if (id !== currentIdInUrl || userId !== userIdInUrl) {
      const newUrl = `?id=${id}&userId=${userId}`;
      router.replace(newUrl);
    }
  }, [id, userId, searchParams, router, setCurentId, setCurentUserId]);

  useEffect(() => {
    // Keep URL in sync with currentId when it changes
    const currentIdInUrl = searchParams.get("id");
    if (currentId && currentId !== currentIdInUrl && userId) {
      const newUrl = `?id=${currentId}&userId=${userId}`;
      router.replace(newUrl);
    }
  }, [currentId, searchParams, router, userId]);

  return <CurrentComponent />;
};
