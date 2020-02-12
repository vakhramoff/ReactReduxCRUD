import { GET_CONTACTS, GET_CONTACT } from '../actions/types';

const initialState = {
  contacts: [],
  contact: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CONTACTS: 
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    default: 
      return state;
  }
}