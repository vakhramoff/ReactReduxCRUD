import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import todoReducer from "./todoReducer";

export default combineReducers({
  contact: contactReducer,
  todo: todoReducer
});