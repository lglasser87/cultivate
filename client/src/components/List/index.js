import React from "react";

export function List({ children }) {
    return (
        <div>
            <ul>{ children }</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li>{children}</li>;
}