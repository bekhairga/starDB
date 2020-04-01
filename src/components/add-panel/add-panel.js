import React, { useState, useContext } from "react";
import "./add-panel.css";
import { addItem } from "../../actions/todos-actions";
import uuid from "react-uuid";
import { TodoContext } from "../app";

const createItem = value => {
    return {
        label: value,
        important: false,
        done: false,
        id: uuid()
    };
};

const AddPanel = () => {
    const context = useContext(TodoContext);
    const [text, setText] = useState("");
    const makeDefault = () => {
        setText(prevText => (prevText = ""));
    };
    const onChange = data => {
        setText(prevText => (prevText = data));
    };

    return (
        <form className="form-group d-flex add-panel">
            <input
                type="text"
                className="form-control input-control"
                onChange={e => {
                    onChange(e.target.value);
                }}
                value={text}
            />
            <button
                className="btn btn-primary btn-add"
                onClick={e => {
                    e.preventDefault();
                    if (text !== "") {
                        context.todoDispatch(addItem(createItem(text)));
                        makeDefault();
                    }
                }}
            >
                Add
            </button>
        </form>
    );
};
export default AddPanel;
