// Core
import { GameListClientComponent } from "@/components/Theme/GamesClientComponent";
import { IdProps } from "@/contexts/GameContext";

export default function Home({
  searchParams,
}: {
  searchParams: { id?: IdProps; userId?: string };
}) {
  const params = {
    id: searchParams?.id || undefined,
    userId: searchParams?.userId || undefined,
  };

  return <GameListClientComponent {...params} />;
}
