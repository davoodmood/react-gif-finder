import React from "react";
import GifProvider from "./GifContext";
import ModalProvider from "./ModalContext";
import SearchProvider from "./SearchContext";

export default function ContextProviders({children}: {children: React.ReactNode}) {
    return (
        <ModalProvider>
            <GifProvider>
                <SearchProvider>
                    {children}
                </SearchProvider>
            </GifProvider>
        </ModalProvider>
    );
}