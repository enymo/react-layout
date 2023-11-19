import classNames from "classnames";
import React, { forwardRef } from "react";
import { alignMap, useLayout, verticalAlignMap } from "../../common";
export interface RowProps {
    className?: string,
    gap?: string,
    flex?: number,
    align?: keyof typeof alignMap,
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
    vAlign,
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
            flexWrap: wrap,
            ...props,
            ...style
        }}>
            {children}
        </div>
    )
})