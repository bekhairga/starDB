import { showAll, showDone, showLeft } from "../actions/filter-actions";
import uuid from "react-uuid";
const todos = [
    { label: "Learn React", important: false, done: true, id: uuid() },
    { label: "Learn Redux", important: false, done: false, id: uuid() },
    { label: "Improve knowledge", important: true, done: false, id: uuid() }
];
const filteredElements = [
    { label: "All", desc: "all", active: true, func: () => showAll() },
    { label: "Done", desc: "done", active: false, func: () => showDone() },
    { label: "Left", desc: "left", active: false, func: () => showLeft() }
];
export { todos, filteredElements };
