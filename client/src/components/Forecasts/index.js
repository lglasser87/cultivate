import React from "react";

export function WeekContainer({ children }) {
    return (
        <div className="list-overflow-container">
            {children}
        </div>
)
}

export function DayCard({ children }) {
return <div>{children}</div>
}

