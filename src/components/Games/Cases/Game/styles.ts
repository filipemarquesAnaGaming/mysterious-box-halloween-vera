"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const RollerContainerWidth = 350;

export const RollerBoxWrapper = styled.div`
  position: relative;
  z-index: 10;

  width: 350px;
  height: 150px;

  background: none;

  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background-image: url("/Games/cases/border.png");
  //   background-size: cover;
  //   background-position: center;
  //   z-index: 1;
  // }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RollerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  position: absolute;
  top: 10px;
  z-index: 0;
  overflow: hidden;

  border-radius: 12px;
  border: 1px solid #009334;
  background-image: url("/Games/cases/border.png");
  box-shadow: 0px 4px 0px 0px #009334;
`;

export const BoxesContainer = styled(motion.div)`
  display: flex;
  gap: 7px;
`;

export const BoxDiv = styled.div`
  width: 96px;
  aspect-ratio: 1 / 1;

  display: flex;
  justify-content: center;
  align-items: center;

  flex: 0 0 auto;

  border-radius: 12px;
  border-radius: 12px;
  background: radial-gradient(
      88.28% 88.28% at 50% 50%,
      #77448b 31.25%,
      #29053f 100%
    ),
    radial-gradient(88.28% 88.28% at 50% 50%, #fbc5ff 0%, #7961e9 100%);
  box-shadow: 0 4px 0 0 #281331;
  img {
    width: 80%;
    height: auto;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 14px 20px;

  background: radial-gradient(
      46.97% 51.15% at 50% 100%,
      rgba(255, 221, 115, 0.6) 0%,
      rgba(255, 218, 104, 0) 100%
    ),
    #ee8929;
  border-bottom: 5px solid #b65d0a;
  border-radius: 8px;

  cursor: pointer;

  color: #f5f6f6;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);

  margin-top: 35px;
`;
