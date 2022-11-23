import classNames from "classnames";
import React from "react";
import "../../css/row.css";
import { useLayout } from "../Hooks/LayoutContext";

const alignMap = {
    left: "flex-start",
    right: "flex-end",
    center: "center",
    space: "space-between"
};

const verticalAlignMap = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
    stretch: "stretch"
}

export function Row({
    className,
    align = "left",
    verticalAlign = "stretch",
    vAlign,
    gap,
    children,
    ...props
}: {
    className?: string,
    gap?: string,
    flex?: number,
    align?: "left" | "right" | "center" | "space",
    /** @deprecated Use vAlign instead */
    verticalAlign?: "top" | "center" | "bottom" | "stretch",
    vAlign?: "top" | "center" | "bottom" | "stretch",
    padding?: string,
    width?: string,
    height?: string,
    minWidth?: string,
    minHeight?: string,
    maxWidth?: string,
    maxHeight?: string,
    children: React.ReactNode
}) {
    const {row: context} = useLayout();

    return (
        <div className={classNames("layout-row", className)} style={{
            gap: gap ?? context.gap,
            justifyContent: alignMap[align ?? context.align],
            alignItems: verticalAlignMap[vAlign ?? verticalAlign ?? context.vAlign],
            ...props
        }}>
            {children}
        </div>
    )
}