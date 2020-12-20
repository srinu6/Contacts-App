import {combineReducers} from 'redux';
import {contactReducer} from './contactReducers';

export default combineReducers({
  contactStore: contactReducer,
});
