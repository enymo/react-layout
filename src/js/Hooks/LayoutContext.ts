import { createContext, useContext } from "react";

const Context = createContext<{
    row?: {
        gap?: string,
        align?: "left" | "right" | "center" | "space",
        vAlign?: "top" | "center" | "bottom" | "stretch"
    },
    column?: {
        gap?: string,
        align?: "top" | "center" | "bottom" | "space",
        hAlign?: "left" | "right" | "center" | "stretch"
    }
}>({row: {}, column: {}});
export const LayoutProvider = Context.Provider;
export const useLayout = () => useContext(Context);