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
  prize: string;
}

export const CongratulationsModal: React.FC<CongratulationsModalProps> = ({
  open,
  message,
  userId,
  prize,
}) => {
  const { setShowUserPlayedModal } = useModal();
  const [show, setShow] = useState(false);

  // const prizeImages: Record<string, string> = {
  //   "2 giros no AVIATOR!": "/Games/prizes/aviator.png",
  //   "10 giros no GATES OF OLYMPUS!": "/Games/prizes/gates.png",
  //   "5 giros no MASTER JOKERS!": "/Games/prizes/joker.png",
  //   "Não foi dessa vez!": "/Games/prizes/lose.png",
  //   "10 giros no FORTUNE RABBIT!": "/Games/prizes/rabbit.png",
  //   "2 giros no Super 7S!": "/Games/prizes/super7s.png",
  //   "3 giros no TIGRE SORTUDO!": "/Games/prizes/tigresortudo.png",
  //   "10 giros no TOURO SORTUDO!": "/Games/prizes/tourosortudo.png",
  //   "1000 reais em SALDO REAL!": "/Games/prizes/money.png",
  //   "10 reais em SALDO REAL!": "/Games/prizes/tourosortudo.png",
  // };
  // const imageUrl = prizeImages[message || ""] || "/Games/prizes/lose.png";

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
        className={`bg-[#37194E] rounded-[16px] border border-[#1A3A2B] px-6 pt-36 flex flex-col items-center w-full max-w-[370px] relative overflow-auto gap-2 transform transition-all duration-200 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          background: `
  url('pop-up-bg.svg') -277.894px -81.568px / 250.213% 100% no-repeat,
  #37194E
  `,
          boxShadow: "0 2.283px 0 0 #1A3A2B",
        }}
      >
        <Image
          src="/close.png"
          alt="Fechar"
          width={28}
          height={28}
          quality={100}
          className=" w-8 items-center absolute top-8 right-8 cursor-pointer"
        />

        <Image
          src={prize}
          alt="Parabéns"
          width={450}
          height={450}
          className=" items-center justify-center"
        />

        <h2 className="text-2xl text-center font-bold text-[#E8EDF6] mb-4 mt-2">
          {message === "Não foi dessa vez!" ? (
            <span className="text-[#8FC6A5]">{message || ""}</span>
          ) : (
            <>
              Parabéns! Você ganhou <br />
              <span className="text-[#8FC6A5]">{message || ""}.</span>
            </>
          )}
        </h2>
        <div
          className="w-full mt-2 items-center justify-center flex gap-3 cursor-pointer hover:opacity-90 rounded-[8px] px-4 py-2 text-black font-bold bg-[#00E054] transition"
          style={{ boxShadow: "0 2px 0 0 #4BFB8D inset, 0 2px 0 0 #258248" }}
        >
          <button onClick={handleRedirect}>Continuar</button>

          <Image
            src="/arrow-right.svg"
            alt="Cassino"
            className="w-4"
            width={370}
            height={100}
          />
        </div>

        <Image
          src="/Theme/modals/vera.png"
          alt="Cassino"
          className="w-full w-100 mt-4 mb-6"
          width={370}
          height={100}
        />
      </div>
    </div>
  );
};
