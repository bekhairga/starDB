import React, { useContext } from "react";
import ItemListElement from "../item-list-element";
import { TodoContext } from "../app/app";
import { changeFilter, searchEngine } from "../../actions/action-creator";
const ItemList = () => {
    const context = useContext(TodoContext);
    const { todoList, filter, search } = context;
    const filteredElements = changeFilter(todoList, filter);
    const searchingElements = searchEngine(search, filteredElements);
    const list = searchingElements.map(el => {
        return (
            <li className="list-group-item d-flex" key={el.id}>
                <ItemListElement item={el} />
            </li>
        );
    });
    return <ul className="list-group">{list}</ul>;
};
export default ItemList;
