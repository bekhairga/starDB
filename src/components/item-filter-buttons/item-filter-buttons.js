/** @format */

import React, { useContext } from "react";
import { TodoContext } from "../app/app";
import "./item-filter-buttons.css";
const Buttons = () => {
    let classNames;
    const context = useContext(TodoContext);
    const { filter, filterDispatch } = context;
    const buttons = filter.map(el => {
        if (el.active) {
            classNames = "btn btn-primary";
        } else {
            classNames = "btn btn-outline-secondary";
        }
        return (
            <button
                className={classNames}
                onClick={() => filterDispatch(el.func())}
                key={el.desc}
            >
                {el.label}
            </button>
        );
    });

    return <div className="d-flex">{buttons}</div>;
};

export default Buttons;
