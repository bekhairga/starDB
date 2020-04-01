import React, { useContext } from "react";
import "./app-header.css";
import { TodoContext } from "../app";

const AppHeader = () => {
    const todoList = useContext(TodoContext);
    const done = todoList.todoList.filter(el => el.done).length;
    const left = todoList.todoList.filter(el => !el.done).length;
    return (
        <div className="d-flex todo-header justify-content-between align-items-end">
            <h1 className="todo-title"> Todo List </h1>
            <h2 className="todo-stats">
                Done {done}, left {left}
            </h2>
        </div>
    );
};

export default AppHeader;
