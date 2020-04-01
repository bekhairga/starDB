import React, { useReducer } from "react";
import AddPanel from "../add-panel";
import AppHeader from "../app-header";
import ItemList from "../item-list";
import "./app.css";
import SearchPanel from "../search-panel";
import {
    filterReducer,
    todoReducer,
    searchReducer
} from "../../reducers/tasks";
import { todos, filteredElements } from "../../reducers/store";
const TodoContext = React.createContext();

const App = () => {
    const [todoList, todoDispatch] = useReducer(todoReducer, todos);
    const [filter, filterDispatch] = useReducer(
        filterReducer,
        filteredElements
    );
    const [search, searchDispatch] = useReducer(searchReducer, "");

    return (
        <div className="app">
            <TodoContext.Provider
                value={{
                    todoList,
                    todoDispatch,
                    filter,
                    filterDispatch,
                    search,
                    searchDispatch
                }}
            >
                <AppHeader />
                <SearchPanel />
                <ItemList />
                <AddPanel />
            </TodoContext.Provider>
        </div>
    );
};

export { TodoContext, App };
