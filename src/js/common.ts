import { createContext } from "@enymo/react-better-context";

export const alignMap = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    space: "space-between"
};

export const horizontalAlignMap = {
    left: "flex-start",
    right: "flex-end",
    center: "center",
    stretch: "stretch"
};

export const verticalAlignMap = {
    top: "flex-start",
    bottom: "flex-end",
    center: "center",
    stretch: "stretch"
};

export const [LayoutProvider, useLayout] = createContext<{
    row: {
        gap?: string,
        align?: keyof typeof alignMap,
        vAlign?: keyof typeof verticalAlignMap
    },
    column: {
        gap?: string,
        align?: keyof typeof alignMap,
        hAlign?: keyof typeof horizontalAlignMap
    }
}>({
    row: {},
    column: {}
});