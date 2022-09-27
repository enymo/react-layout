import classNames from "classnames";
import React from "react";
import "../../css/column.css";

export function Column({className, gap, flex, children}: {
    className?: string,
    gap: string,
    flex?: number,
    children: React.ReactNode
}) {
    return (
        <div className={classNames("layout-column", className)} style={{gap, flex}}>
            {children}
        </div>
    )
}