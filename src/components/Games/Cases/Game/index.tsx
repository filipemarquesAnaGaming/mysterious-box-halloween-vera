"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import {
  BoxDiv,
  BoxesContainer,
  Button,
  RollerBoxWrapper,
  RollerContainer,
} from "./styles";

// Utils and Services
import { boxes, Box } from "./boxes";
import { userCanPlay } from "@/utils/userCanPlay";

// Hooks
import { useModal } from "@/hooks/useModal";
import { useGame } from "@/hooks/useGame";

import { CongratulationsModal } from "@/components/Theme/Modals/CongratulationsModal";

interface BoxRollerProps {
  isRolling: boolean;
  onComplete: (selectedBox: Box) => void;
}

const initialAnimation = -90;

const BoxRoller: React.FC<BoxRollerProps> = ({ isRolling, onComplete }) => {
  const { currentUserId } = useGame();
  const [animationX, setAnimationX] = useState<number>(initialAnimation);
  const [transitionDuration, setTransitionDuration] = useState<number>(2.5);
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);

  const [openModal, setOpenModal] = useState(false);

  // Box Sizes
  const boxWidth = 100;
  const boxMargin = 10;
  const boxTotalWidth = boxWidth + boxMargin;

  // Repeat Boxes
  const repeats = 12;
  const repeatedBoxes = useMemo(() => {
    return Array.from({ length: repeats }).flatMap(() => boxes);
  }, [repeats]);

  useEffect(() => {
    if (isRolling) {
      // Seleciona uma caixa com base nas probabilidades
      const totalProbability = boxes.reduce(
        (sum, box) => sum + box.probability,
        0
      );
      const random = Math.random() * totalProbability;
      let cumulativeProbability = 0;
      let chosenBox: Box | null = null;

      for (let i = 0; i < boxes.length; i++) {
        cumulativeProbability += boxes[i].probability;
        if (random <= cumulativeProbability) {
          chosenBox = boxes[i];
          break;
        }
      }

      if (chosenBox) {
        const totalDistance = -chosenBox.distance;
        const duration = 3;

        setTransitionDuration(duration);
        setAnimationX(totalDistance);
        setSelectedBox(chosenBox);
      }
    } else {
      setAnimationX(initialAnimation);
    }
  }, [isRolling, boxTotalWidth, repeatedBoxes]);

  const handleAnimationComplete = () => {
    if (isRolling && selectedBox) {
      setTimeout(() => {
        onComplete(selectedBox);
      }, 600);
      setOpenModal(true);
    }
  };

  return (
    <>
      <RollerBoxWrapper>
        <RollerContainer>
          <BoxesContainer
            initial={{ x: initialAnimation }}
            animate={{ x: animationX }}
            transition={{ duration: transitionDuration, ease: "easeOut" }}
            onAnimationComplete={handleAnimationComplete}
          >
            {repeatedBoxes.map((box, index) => (
              <BoxDiv key={index}>
                <Image
                  width={66}
                  height={65}
                  src={box.boxImage}
                  alt={`Caixa ${box.id}`}
                  priority
                />
              </BoxDiv>
            ))}
          </BoxesContainer>
        </RollerContainer>
        <Image
          src={"/Games/cases/pointer-top.png"}
          width={60}
          height={60}
          alt="Ponteiro"
          className="absolute z-[99] top-[-25px] left-[50%] transform -translate-x-1/2"
          priority
        />
        <Image
          src={"/Games/cases/pointer-bottom.png"}
          width={60}
          height={60}
          alt="Ponteiro"
          className="absolute z-[99] bottom-[-20px] left-[50%] transform -translate-x-1/2"
          priority
        />
      </RollerBoxWrapper>
      <CongratulationsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        userId={currentUserId}
        prize={selectedBox?.gameURL || ""}
        bonusCode={selectedBox?.cactus_bonus_name_ || ""}
        message={selectedBox?.prizeLabel}
      />
    </>
  );
};

export const Game = () => {
  // States
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);
  // Hooks
  const { currentUserId, setAlreadyPlay, setMinigameId } = useGame();
  const { setShowUserPlayedModal, setShowModalShop } = useModal();

  const handleOpenBox = async () => {
    setIsRolling(true);

    const audio = new Audio("/Games/cases/cases.mp3");
    audio.play();

    setAlreadyPlay(true);
  };

  const handleRollComplete = async (box: Box) => {
    // setIsRolling(false);
    setSelectedBox(box);
    const canPlay = await userCanPlay(currentUserId);

    if (canPlay.isBlocked) {
      setShowUserPlayedModal(true);
      return;
    } else {
      setShowModalShop(true);
      return;
    }
  };

  return (
    <>
      <BoxRoller isRolling={isRolling} onComplete={handleRollComplete} />

      <Button onClick={() => isRolling === false && handleOpenBox()}>
        {isRolling ? "Girando..." : "Abrir prêmio misterioso"}
      </Button>
    </>
  );
};
