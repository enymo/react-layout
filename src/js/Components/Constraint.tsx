import React from "react";

export function Constraint({
    className,
    width,
    height,
    mode = "fixed",
    children
}: {
    className?: string,
    width?: string,
    height?: string,
    mode?: "fixed" | "min" | "max",
    children: React.ReactNode
}) {
    return (
        <div className={className} style={{
            ...(width ? {[mode === "fixed" ? "width" : `${mode}Width`]: width} : {}),
            ...(height ? {[mode === "fixed" ? "height" : `${mode}Height`]: height} : {})
        }}>
            {children}
        </div>
    )
}