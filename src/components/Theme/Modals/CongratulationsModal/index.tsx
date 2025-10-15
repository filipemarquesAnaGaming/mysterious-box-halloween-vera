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
  onClose,
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
        window.parent.postMessage({ event: "redirect-to-deposit" }, "*");
      }
    } catch (error) {
      setShowUserPlayedModal(true);
      console.log(error);
    }
  }

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center px-4 sm:px-8 transition-opacity duration-200 ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#37194E] rounded-[16px] border border-[#1A3A2B] px-6 py-8 flex flex-col items-center justify-between w-full max-w-[370px] h-full max-h-[600px] relative overflow-hidden transform transition-all duration-200 ${
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
          onClick={onClose}
          className="w-8 absolute top-6 right-6 cursor-pointer hover:opacity-80 transition"
        />

        <div className="flex flex-col items-center justify-center flex-1 w-full">
          <div className="relative w-full max-w-[450px] sm:max-w-[260px] aspect-square">
            <Image
              src={prize}
              alt="Prêmio"
              fill
              className="object-contain"
              quality={100}
              sizes="(max-width: 768px) 60vw, 450px"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-6">
          <h2 className="text-2xl text-center font-bold text-[#E8EDF6] mb-4">
            {message === "Não foi dessa vez!" ? (
              <span className="text-[#8FC6A5]">{message || ""}</span>
            ) : (
              <>
                Parabéns! Você ganhou <br />
                <span className="text-[#8FC6A5]">{message || ""}.</span>
              </>
            )}
          </h2>

          <button
            onClick={handleRedirect}
            className="w-full flex items-center justify-center gap-2 rounded-[8px] px-4 py-3 text-black font-bold bg-[#00E054] hover:opacity-90 transition"
            style={{ boxShadow: "0 2px 0 0 #4BFB8D inset, 0 2px 0 0 #258248" }}
          >
            Continuar
            <Image
              src="/arrow-right.svg"
              alt="Continuar"
              width={16}
              height={16}
              className="ml-1"
            />
          </button>

          <Image
            src="/Theme/modals/vera.png"
            alt="Cassino"
            width={370}
            height={100}
            className="w-[85%] mt-6"
          />
        </div>
      </div>
    </div>
  );
};
