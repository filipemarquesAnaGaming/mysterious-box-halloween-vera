import { GameContainer } from "@/components/Theme/GameContainer";
import { Game } from "./Game";
import Image from "next/image";

export const Cases = () => {
  return (
    <GameContainer>
      <Image
        src="/Games/cases/headline.png"
        alt="Abriu Ganhou"
        width={200}
        height={200}
        quality={100}
        className="mt-36 w-[300px] h-auto"
      />
      <div className="flex-col w-full h-full flex items-center -mt-10">
        <Game />
      </div>
    </GameContainer>
  );
};
