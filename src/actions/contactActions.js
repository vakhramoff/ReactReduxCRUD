import { GET_CONTACTS, GET_CONTACT } from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = (id) => async dispatch => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};