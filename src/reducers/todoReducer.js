import { GET_TODOS, DELETE_TODO, ADD_TODO, GET_TODO, UPDATE_TODO } from '../actions/types';

const initialState = {
    todos: [],
    todo: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? (todo = action.payload) : todo)
            };
        default:
            return state;
    }
}