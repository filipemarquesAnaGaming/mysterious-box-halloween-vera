"use client";

import styled from "styled-components";

// Modal
export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;
  z-index: 9999;

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: absolute;
  z-index: 20;
  max-width: 90vw;
  overflow: visible;

  border-radius: 20px;
  box-shadow: 0px 4px 0px 0px #457cb2;

  @media (min-width: 768px) {
    max-width: 380px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 90vh;
  gap: 12px;
  border-radius: 20px;
  padding: 70px 15px 10px 15px;
  overflow: visible;

  background-image: url("/Theme/modals/bg-shop.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    max-height: 80%;
  }
`;

export const GameButtonsGrid = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    font-size: 10px;
    color: #c1e0ff;
  }
`;

export const GameButtonStyled = styled.button`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;

  background: radial-gradient(
      75.19% 75.19% at 50% 50%,
      #8ebff3 0%,
      #123d68 100%
    ),
    radial-gradient(88.28% 88.28% at 50% 50%, #8ebff3 0%, #123d68 100%),
    radial-gradient(88.28% 88.28% at 50% 50%, #fbc5ff 0%, #7961e9 100%);
  box-shadow: 0px 4px 0px 0px #083460;
  border: 1px solid #beddf9;
  border-radius: 12px;
  transition: all 0.3s ease;

  h2 {
    color: #f5f6f6;
    text-align: center;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
    font-size: 8px;
    font-weight: 700;
  }

  p {
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(
        46.97% 51.15% at 50% 100%,
        rgba(255, 221, 115, 0.6) 0%,
        rgba(255, 218, 104, 0) 100%
      ),
      #ee8929;
    box-shadow: 0px 4px 0px 0px #b65d0a;
    border-radius: 8px;

    color: #f5f6f6;
    text-align: center;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
    font-size: 10px;
    font-weight: 700;
  }

  &.selected {
    p {
      background: radial-gradient(
          46.97% 51.15% at 50% 100%,
          rgb(135 255 115 / 60%) 0%,
          rgba(255, 218, 104, 0) 100%
        ),
        #14aa24;
      box-shadow: 0px 4px 0px 0px #07610e;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;

    p {
      background: #999;
      color: #eee;
    }
  }
`;
