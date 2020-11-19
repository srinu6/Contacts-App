import { combineReducers } from 'redux';
import { contactReducer } from './ContactReducers';

export default combineReducers({
  contact: contactReducer,
});