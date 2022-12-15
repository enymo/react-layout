import classNames from "classnames";
import React from "react";
import "../../css/column.css";
import { useLayout } from "../Hooks/LayoutContext";

const horizontalAlignMap = {
    left: "flex-start",
    right: "flex-end",
    center: "center",
    stretch: "stretch"
};

const verticalAlignMap = {
    top: "flex-start",
    center: "center",
    bottom: "flex-end",
    space: "space-between"
}

export function Column({className, align = "top", hAlign = "stretch", gap, style, children, ...props}: {
    className?: string,
    gap?: string,
    flex?: number,
    padding?: string,
    width?: string,
    height?: string,
    minWidth?: string,
    minHeight?: string,
    maxWidth?: string,
    maxHeight?: string,
    style?: React.CSSProperties,
    align?: keyof typeof verticalAlignMap,
    hAlign?: keyof typeof horizontalAlignMap
    children: React.ReactNode
}) {
    const {column: context} = useLayout();

    return (
        <div className={classNames("layout-column", className)} style={{
            ...props,
            gap: gap ?? context.gap,
            justifyContent: verticalAlignMap[align ?? context.align],
            alignItems: horizontalAlignMap[hAlign ?? context.hAlign],
            ...style
        }}>
            {children}
        </div>
    )
}