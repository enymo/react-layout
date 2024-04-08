import classNames from "classnames";
import React, { forwardRef } from "react";
import { alignMap, selfAlignMap, useLayout, verticalAlignMap } from "../common";
export interface RowProps {
    className?: string,
    gap?: string,
    flex?: number | string,
    align?: keyof typeof alignMap,
    selfAlign?: keyof typeof selfAlignMap,
    vAlign?: keyof typeof verticalAlignMap,
    padding?: string,
    width?: string,
    height?: string,
    minWidth?: string,
    minHeight?: string,
    maxWidth?: string,
    maxHeight?: string,
    wrap?: "nowrap" | "wrap" | "wrap-reverse",
    reverse?: boolean,
    style?: React.CSSProperties,
    children: React.ReactNode
}

export const Row = forwardRef<HTMLDivElement, RowProps>(({
    className,
    align,
    selfAlign,
    vAlign,
    flex = "none",
    gap,
    wrap,
    reverse = false,
    style,
    children,
    ...props
}, ref) => {
    const {row: context} = useLayout();

    return (
        <div ref={ref} className={classNames("layout-row", className)} style={{
            display: "flex",
            flexDirection: reverse ? "row-reverse" : "row",
            gap: gap ?? context.gap,
            justifyContent: alignMap[align ?? context.align],
            alignItems: verticalAlignMap[vAlign ?? context.vAlign],
            alignSelf: selfAlign ? selfAlignMap[selfAlign] : undefined,
            flex,
            flexWrap: wrap,
            ...props,
            ...style
        }}>
            {children}
        </div>
    )
})