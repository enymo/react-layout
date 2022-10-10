import classNames from "classnames";
import React from "react";
import "../../css/row.css";

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
    gap,
    flex,
    align = "left",
    verticalAlign = "stretch",
    vAlign,
    children
}: {
    className?: string,
    gap?: string,
    flex?: number,
    align?: "left" | "right" | "center" | "space",
    /** @deprecated Use vAlign instead */
    verticalAlign?: "top" | "center" | "bottom" | "stretch",
    vAlign?: "top" | "center" | "bottom" | "stretch"
    children: React.ReactNode
}) {
    return (
        <div className={classNames("layout-row", className)} style={{
            justifyContent: alignMap[align],
            alignItems: verticalAlignMap[vAlign ?? verticalAlign],
            gap,
            flex
        }}>
            {children}
        </div>
    )
}