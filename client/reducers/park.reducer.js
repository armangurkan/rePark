import uuid from "uuid/v4";
const mapReducer = (state, action) => {
    switch (action.type) {
        case "DROPPIN":
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "LOGOUT":
            return state.filter(todo => todo.id !== action.id);
        case "COMMIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "OFFER":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
            );
        default:
            return state;
    }
};
export default mapReducer;
