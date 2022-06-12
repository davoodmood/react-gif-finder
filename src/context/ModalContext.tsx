import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext<any>({});

function useProvideModal() {
    const [modal, setModal] = useState<boolean>(false);
    const toggleModal = () => setModal((prevModalState) => prevModalState = !prevModalState);
    return {
        modal,
        toggleModal
    }
}

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({children}: {children: React.ReactNode}) {
    const modal = useProvideModal();
    return (
        <ModalContext.Provider value={modal}>
            {children}
        </ModalContext.Provider>
    )
}