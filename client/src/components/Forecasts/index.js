import React from "react";

export function WeekContainer({ children }) {
    return (
        <div className="list-overflow-container">
            {children}
        </div>
)
}

export function DayCard({ children }) {
    return (
        <div className="col-sm-2">
            {children}
        </div>
    );

}

export function DayCard2(props) {
    return (
        <div className="col-sm-1">
        <div className="card">
            <h3 className="card-title">Day</h3>
            <p className="text-muted">Time</p>
            <i></i>
            <h2>Temp</h2>
            <div className="card-body">
                <p className="card-text">Weather Description</p>
            </div>
        </div>
        </div>
    )
}

