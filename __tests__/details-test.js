import 'react-native';
import React from 'react';
import Details from '../components/contactDetails';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux'; 
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));
jest.mock('reanimated-bottom-sheet');
jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;
  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    multiply: jest.fn(),
    View: View,
    Extrapolate: {CLAMP: jest.fn()},
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
  };
});


const navigation = {navigate: jest.fn()};
const route = {
    params:{
      contactId: 1,
    }
  }
  
  describe('should call Add Contact or edit contact',()=>{
    it('should call Add Contact', () => {
      let addEdit = renderer.create(
          <Details
            route={route}
            navigation={navigation}
          />,
        )
        .getInstance();
        console.log(addEdit, 'components inners')
      //expect(addEdit.onUpdateContact().validEmailCheck).toBeTruthy();
    });
    
  })