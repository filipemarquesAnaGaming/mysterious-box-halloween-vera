"use client";

import {
  BackgroundOverlay,
  Button,
  ContentWrapper,
  HeadlineText,
  ModalContent,
  ModalOverlay,
  TextStyled,
  TitleStyled,
} from "./styles";

import { useModal } from "@/hooks/useModal";

export const UserPlayed = () => {
  const { showUserPlayedModal } = useModal();

  if (!showUserPlayedModal) return null;

  // Prize Game
  function handleRedirect() {
    window.parent.postMessage(
      {
        event: "close",
      },
      "*"
    );
  }

  return (
    <ModalOverlay>
      <BackgroundOverlay />
      <ModalContent>
        <ContentWrapper>
          <HeadlineText>OPSS!</HeadlineText>
          <TitleStyled>
            Algo inesperado aconteceu!
          </TitleStyled>
          <TextStyled>
            Atualize a página por favor.
          </TextStyled>
          <Button onClick={handleRedirect}>Voltar</Button>
        </ContentWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};
