import { GET_TODOS, DELETE_TODO, ADD_TODO, GET_TODO, UPDATE_TODO } from './types';
import axios from 'axios';

export const getTodos = (userId) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    dispatch({
        type: GET_TODOS,
        payload: res.data
    });
};

export const getTodo = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
        type: GET_TODO,
        payload: res.data
    });
};

export const deleteTodo = (id) => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
    } catch(e) {
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
    }
};

export const addTodo = (todo) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
    dispatch({
        type: ADD_TODO,
        payload: res.data
    });
};

export const updateTodo = (todo) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
    dispatch({
        type: UPDATE_TODO,
        payload: res.data
    });
};