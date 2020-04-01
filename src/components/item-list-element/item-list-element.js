import React, { useContext } from "react";
import "./item-list-element.css";
import {
    deleteItem,
    doneItem,
    importantItem
} from "../../actions/todos-actions";
import { TodoContext } from "../app/app";

const ItemListElement = ({ item: { label, important, done, id } }) => {
    const context = useContext(TodoContext);
    const { todoDispatch } = context;
    let classList = "list-element";
    if (important) {
        classList += " important";
    }
    if (done) {
        classList += " done";
    }
    return (
        <span className="todo-label">
            <span
                className={classList}
                onClick={() => todoDispatch(doneItem(id))}
            >
                {label}
            </span>

            <button
                className="btn btn-outline-danger btn-sm float-right btn-todo"
                onClick={() => todoDispatch(deleteItem(id))}
            >
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button
                className="btn btn-outline-success btn-sm float-right btn-todo"
                onClick={() => todoDispatch(importantItem(id))}
            >
                <i className="fa fa-lock" aria-hidden="true"></i>
            </button>
        </span>
    );
};

export default ItemListElement;
