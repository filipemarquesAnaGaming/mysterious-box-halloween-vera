import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addMinigameToUserAndSendBonus } from "@/utils/addMinigameToUserAndSendBonus";
import { IAddMinigameToUserAndSendBonus } from "@/interfaces/api/IAddMinigameToUserAndSendBonus";
import { useModal } from "@/hooks/useModal";

interface CongratulationsModalProps {
  open: boolean;
  onClose: () => void;
  message?: string;
  userId: string;
}

export const CongratulationsModal: React.FC<CongratulationsModalProps> = ({
  open,
  message,
  userId,
}) => {
  const { setShowUserPlayedModal } = useModal();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!open && !show) return null;

  async function handleRedirect() {
    const payload: IAddMinigameToUserAndSendBonus = {
      userId: userId,
      minigameId: "68a87de73e8c5c3f1432f4b7",
      bonusCode: "100974",
    };

    try {
      const response = await addMinigameToUserAndSendBonus(payload);

      if (!response) {
        setShowUserPlayedModal(true);
        return;
      } else {
        return window.parent.postMessage(
          {
            event: "redirect-to-deposit",
          },
          "*"
        );
      }
    } catch (error) {
      setShowUserPlayedModal(true);
      console.log(error);
      return;
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center px-4 sm:px-8 transition-opacity duration-200 ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#0A192A] rounded-[16px] border border-[#1B3655] shadow-[0px_2.283px_0px_0px_#1B3655] px-6 py-4 flex flex-col items-center w-full max-w-[370px] relative overflow-auto gap-2 transform transition-all duration-200 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          background: `linear-gradient(rgba(10,25,42,0.7), rgba(10,25,42,0.7)), url('pop-up-bg.svg') center/cover no-repeat, #0A192A`,
        }}
      >
        <Image
          src="/Games/cases/box5.png"
          alt="Parabéns"
          width={200}
          height={200}
          className=" items-center justify-center"
        />

        <h2 className="text-2xl text-center font-bold text-[#E8EDF6] mb-4 mt-2">
          Parabéns! Você ganhou <br />
          <span className="text-[#85C2F4]">{message || ""}.</span>
        </h2>
        <div className="bg-[#1B3655] rounded-md px-3 py-2 mb-2 w-full">
          <p className="text-[#F4F7FB] text-sm font-thin text-center m-0">
            Faça um{" "}
            <span className="font-semibold">depósito mínimo de R$30</span>{" "}
            <br /> e abra o jogo para começar
          </p>
        </div>
        <button
          onClick={handleRedirect}
          className="w-full mt-2 rounded-[8px] px-4 py-3 text-[#E8EDF6] font-bold shadow-[0_3px_0_0_#003681] bg-gradient-to-b from-[#01B3F9] to-[#0481DB] hover:from-[#0481DB] hover:to-[#01B3F9] transition"
        >
          Resgatar prêmio!
        </button>

        <Image
          src="/frameFooter.svg"
          alt="Cassino"
          className="w-full w-100 mt-2"
          width={370}
          height={100}
        />
      </div>
    </div>
  );
};
