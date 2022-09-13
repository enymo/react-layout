import classNames from "classnames";
import React from "react";
import "../../css/components/layout/column.css";

export function Column({className, gap = "20px", flex, children}: {
    className?: string,
    gap?: string,
    flex?: number,
    children: React.ReactNode
}) {
    return (
        <div className={classNames("layout-column", className)} style={{gap, flex}}>
            {children}
        </div>
    )
}