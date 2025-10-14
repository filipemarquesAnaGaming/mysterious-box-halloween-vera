"use client";

import { createContext, ReactNode, useState } from "react";

type ModalContextProps = {
    showUserPlayedModal: boolean;
    setShowUserPlayedModal: (value: boolean) => void;
    showModalShop: boolean;
    setShowModalShop: (value: boolean) => void;
};

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [showUserPlayedModal, setShowUserPlayedModal] = useState<boolean>(false);
    const [showModalShop, setShowModalShop] = useState<boolean>(false);

    return (
        <ModalContext.Provider
            value={{
                showUserPlayedModal,
                setShowUserPlayedModal,
                showModalShop,
                setShowModalShop,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
