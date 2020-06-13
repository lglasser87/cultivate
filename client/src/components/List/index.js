import React from "react";
import "./style.css";

export function List({ children }) {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <ul>{ children }</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li>{children}</li>;
}