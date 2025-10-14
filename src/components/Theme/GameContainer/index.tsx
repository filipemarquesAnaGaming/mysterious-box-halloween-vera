"use client";

import React from "react";

// Hooks
import { useGame } from "@/hooks/useGame";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface GameContainerProps {
  children: React.ReactNode;
}

export const GameContainer: React.FC<GameContainerProps> = ({ children }) => {
  // Hooks
  const { is768 } = useMediaQuery();
  const { alreadyPlay, alreadyWihdrow } = useGame();

  async function handleCloseGame() {
    window.parent.postMessage(
      {
        event: "cancel",
      },
      "*"
    );
  }

  return (
    <div className="flex justify-center items-center absolute left-0 top-0 min-h-[600px] w-screen h-screen overflow-hidden z-[99]">
      {/* Background Overflow */}
      <div
        className="flex absolute left-0 top-0 w-screen h-screen bg-black/60 z-[99]"
        onClick={!alreadyPlay || !alreadyWihdrow ? handleCloseGame : () => {}}
      />

      <div
        className={`flex flex-col rounded-md z-[100] ${
          is768 && "w-full h-full "
        }`}
      >
        <div
          className={`flex relative flex-col items-center z-[100] ${
            is768 ? "w-full h-full" : "w-[400px] h-[700px] rounded-[1rem]"
          }`}
        >
          <div
            className={`flex relative flex-col justify-center items-center text-center rounded-[20px] game-background ${
              is768 ? "w-[95%] h-full" : "w-[380px] h-full"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
