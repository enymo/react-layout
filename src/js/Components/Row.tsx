import classNames from "classnames";
import React from "react";
import "../../css/row.css";

const alignMap = {
    left: "flex-start",
    right: "flex-end",
    center: "center",
    space: "space-between"
};

export function Row({
    className,
    gap = "12px",
    flex,
    align = "left",
    children
}: {
    className?: string,
    gap?: string,
    flex?: number,
    align?: "left" | "right" | "center" | "space"
    children: React.ReactNode
}) {
    return (
        <div className={classNames("layout-row", className)} style={{
            justifyContent: alignMap[align],
            gap,
            flex
        }}>
            {children}
        </div>
    )
}