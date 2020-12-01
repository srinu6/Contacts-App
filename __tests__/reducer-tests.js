import {contactReducer, intialState} from '../reducers/contactReducers';
import * as Types from '../constant/type';

describe('contacts reducer', () => {
  it('should return initial state', () => {
    expect(contactReducer(undefined, {})).toEqual(intialState);
  });
});
