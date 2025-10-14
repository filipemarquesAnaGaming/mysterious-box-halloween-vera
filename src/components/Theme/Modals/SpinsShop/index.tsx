"use client";

import Image from "next/image";
import {
  BackgroundOverlay,
  ContentWrapper,
  Footer,
  GameButtonsGrid,
  GameButtonStyled,
  ModalContent,
  ModalOverlay,
} from "./styles";

// Hooks
import { useModal } from "@/hooks/useModal";
import { useGame } from "@/hooks/useGame";

// Interfaces and Utils
import { IAddMinigameToUser } from "@/interfaces/api/IAddMinigameToUser";
import { addMinigameToUserAndSendBonus } from "@/utils/addMinigameToUserAndSendBonus";
import { useState } from "react";

interface GameButtonProps {
  game: string;
  image: string;
  prizeLabel: string;
  bonusCode: string;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: () => void;
}

const GameButton = ({ game, image, prizeLabel, bonusCode, isSelected, isDisabled, onSelect }: GameButtonProps) => {

  const { currentUserId, minigameId } = useGame();
  const { setShowUserPlayedModal } = useModal();

  const sendBonus = async () => {
    if (isDisabled || isSelected) return;

    onSelect();

    const payload: IAddMinigameToUser = {
      userId: currentUserId,
      minigameId: minigameId,
      bonusCode: bonusCode,
    };

    console.log("Payload sended to api: ", payload);

    const response = await addMinigameToUserAndSendBonus(payload);

    setTimeout(() => {
      if (response) {
        window.parent.postMessage(
          {
            event: "redirect-to-deposit",
          },
          "*"
        );
        return;
      } else {
        setShowUserPlayedModal(true);
        return;
      }
    }, 4000);
  }

  return (
    <GameButtonStyled
      onClick={sendBonus}
      disabled={isDisabled}
      className={isSelected ? "selected" : ""}
    >
      <h2>{game}</h2>
      <Image
        src={image}
        alt={prizeLabel}
        width={100}
        height={100}
        className="w-full h-auto"
      />
      <p>{isSelected ? "Enviando..." : prizeLabel}</p>
    </GameButtonStyled>
  )
}

export const SpinsShop = () => {
  const { showModalShop } = useModal();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!showModalShop) return null;

  const itemsMock = [
    {
      game: "Tigre Sortudo",
      image: "/Theme/modals/items/tigre-sortudo.png",
      prizeLabel: "30 Giros",
      bonusCode: "66502004030"
    },
    {
      game: "Fortune Snake",
      image: "/Theme/modals/items/fortune-snake.png",
      prizeLabel: "05 Giros",
      bonusCode: "66501005005"
    },
    {
      game: "Ratinho Sortudo",
      image: "/Theme/modals/items/ratinho-sortudo.png",
      prizeLabel: "20 Giros",
      bonusCode: "66502001020"
    },
    {
      game: "Fortune Dragon",
      image: "/Theme/modals/items/fortune-dragon.png",
      prizeLabel: "05 Giros",
      bonusCode: "66501002005"
    },
    {
      game: "Fire Portals",
      image: "/Theme/modals/items/fire-portals.png",
      prizeLabel: "10 Giros",
      bonusCode: "66502002010"
    },
    {
      game: "Fortune Rabbit",
      image: "/Theme/modals/items/fortune-rabbit.png",
      prizeLabel: "05 Giros",
      bonusCode: "66501004005"
    },
    {
      game: "Gates Of Olympus",
      image: "/Theme/modals/items/gates-of-olympus.png",
      prizeLabel: "07 Giros",
      bonusCode: "66502003007"
    },
    {
      game: "Cash Mania",
      image: "/Theme/modals/items/cash-mania.png",
      prizeLabel: "05 Giros",
      bonusCode: "66501003005"
    },
    {
      game: "Fortune Tiger",
      image: "/Theme/modals/items/fortune-tiger.png",
      prizeLabel: "05 Giros",
      bonusCode: "66501001005"
    },
  ]

  return (
    <ModalOverlay>
      <BackgroundOverlay />
      <ModalContent>
        <ContentWrapper>
          <Image
            src="/Theme/modals/headline.png"
            alt="Parabéns"
            width={300}
            height={100}
            className="w-[90%] h-auto absolute -top-5 z-[9]"
          />

          <Image
            src="/Theme/modals/top-shop.png"
            alt="Loja"
            width={300}
            height={100}
            className="w-full h-auto absolute top-0 rounded-t-[20px]"
          />

          <Image
            src="/Theme/modals/sub-headline.png"
            alt="Escolha seu prêmio"
            width={150}
            height={50}
            className="w-[90%] h-auto"
          />

          <GameButtonsGrid>
            {itemsMock.map((item, index) => (
              <GameButton
                key={index}
                game={item.game}
                image={item.image}
                prizeLabel={item.prizeLabel}
                bonusCode={item.bonusCode}
                isSelected={selectedIndex === index}
                isDisabled={selectedIndex !== null && selectedIndex !== index}
                onSelect={() => setSelectedIndex(index)}
              />
            ))}
          </GameButtonsGrid>

          <Footer>
            <Image
              src={"/Theme/modals/info.svg"}
              width={20}
              height={20}
              alt="Informação"
            />
            <p>O bônus pode levar até 2 horas para ser creditado</p>
          </Footer>
        </ContentWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};
