import React, { useContext } from "react";
import Buttons from "../item-filter-buttons";
import { search } from "../../actions/search-actions";
import { TodoContext } from "../app/app";
import "./search-panel.css";
const SearchPanel = () => {
    const context = useContext(TodoContext);
    const { searchDispatch } = context;
    return (
        <div className="d-flex search">
            <input
                type="text"
                className="form-control search-form"
                onChange={e => searchDispatch(search(e.target.value))}
            />
            <Buttons />
        </div>
    );
};

export default SearchPanel;
