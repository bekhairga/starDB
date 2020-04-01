import {
    ADD_ITEM,
    IMPORTANT_ITEM,
    DONE_ITEM,
    DELETE_ITEM
} from "../constants/todos-constants";

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case DELETE_ITEM:
            return [...state.filter(el => el.id !== action.payload)];
        case DONE_ITEM:
            return state.map(el =>
                el.id === action.payload ? { ...el, done: !el.done } : el
            );
        case IMPORTANT_ITEM:
            return state.map(el =>
                el.id === action.payload
                    ? { ...el, important: !el.important }
                    : el
            );
        default:
            return state;
    }
};
export default todoReducer;
