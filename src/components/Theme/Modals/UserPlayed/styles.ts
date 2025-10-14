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
  background-color: #0a192a;
  border: 2px solid #1b3655;
  border-radius: 8px;
  min-width: 90vw;
  overflow: hidden;

  @media (min-width: 768px) {
    min-width: 380px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 600px;
  gap: 24px;
  padding: 30px 15px;

  @media (min-width: 768px) {
    max-height: 80%;
  }
`;

export const HeadlineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/Theme/modals/orange-bg.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeadlineText = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: normal;
  background: linear-gradient(
    180deg,
    #ffcc3e 0%,
    #ffcc3e 49.5%,
    #fd9736 50.5%,
    #fd9736 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleStyled = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: #cdd1d4;

  span {
    color: #ffcc3e;
  }
`;

export const TextStyled = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #cdd1d4;
`;

export const Button = styled.button`
  width: 100%;
  height: 52px;
  background-color: #0075cd;
  color: #f5f6f6;
  font-size: 16px;
  font-weight: 800;
  border-radius: 8px;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    font-size: 10px;
    color: #aab6b5;
  }
`;
