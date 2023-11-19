import classNames from "classnames";
import React, { forwardRef } from "react";
import { alignMap, horizontalAlignMap, useLayout } from "../common";

export interface ColumnProps {
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
    align?: keyof typeof alignMap,
    hAlign?: keyof typeof horizontalAlignMap,
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
    reverse?: boolean,
    children: React.ReactNode
}

export const Column = forwardRef<HTMLDivElement, ColumnProps>(({
    className,
    align,
    hAlign,
    gap,
    style,
    wrap,
    reverse = false,
    children, 
    ...props
}, ref) => {
    const {column: context} = useLayout();

    return (
        <div ref={ref} className={classNames("layout-column", className)} style={{
            display: "flex",
            flexDirection: reverse ? "column-reverse" : "column",
            gap: gap ?? context.gap,
            justifyContent: alignMap[align ?? context.align],
            alignItems: horizontalAlignMap[hAlign ?? context.hAlign],
            flexWrap: wrap,
            ...props,
            ...style
        }}>
            {children}
        </div>
    )
})