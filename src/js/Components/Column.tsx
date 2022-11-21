import classNames from "classnames";
import React from "react";
import "../../css/column.css";

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

export function Column({className, align = "top", hAlign = "stretch", children, ...props}: {
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
    align?: keyof typeof verticalAlignMap,
    hAlign?: keyof typeof horizontalAlignMap
    children: React.ReactNode
}) {
    return (
        <div className={classNames("layout-column", className)} style={{
            ...props,
            justifyContent: verticalAlignMap[align],
            alignItems: horizontalAlignMap[hAlign]
        }}>
            {children}
        </div>
    )
}