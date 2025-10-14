"use client";

import { createContext, ReactNode, useState } from "react";

export type IdProps = "0000" | "0001" | "0002" | "0003" | "0004" | undefined;

type GameContextProps = {
  currentId: IdProps;
  setCurentId: (_: IdProps) => void;
  currentUserId: string;
  setCurentUserId: (_: string) => void;
  alreadyPlay: boolean;
  setAlreadyPlay: (selected: boolean) => void;
  alreadyWihdrow: boolean;
  setAlreadyWihdrow: (selected: boolean) => void;
  minigameId: string;
  setMinigameId: (selected: string) => void;
};

export const GameContext = createContext({} as GameContextProps);

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentId, setCurentId] = useState<IdProps>();
  const [currentUserId, setCurentUserId] = useState<string>("");
  const [alreadyPlay, setAlreadyPlay] = useState<boolean>(false);
  const [alreadyWihdrow, setAlreadyWihdrow] = useState<boolean>(false);
  const [minigameId, setMinigameId] = useState<string>("");

  return (
    <GameContext.Provider
      value={{
        currentId,
        setCurentId,
        currentUserId,
        setCurentUserId,
        alreadyPlay,
        setAlreadyPlay,
        alreadyWihdrow,
        setAlreadyWihdrow,
        minigameId,
        setMinigameId,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
