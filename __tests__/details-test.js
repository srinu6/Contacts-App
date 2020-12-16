import 'react-native';
import React from 'react';
import ContactDetails from '../components/contactDetails';
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
  
  describe('This will check contacts details screen',()=>{
    it('<ContactDetails />', () => {
      const wrapper = renderer.create(
          <ContactDetails
            route={route}
            navigation={navigation}
          />
        )
        .toJSON();
        console.log(wrapper, 'components inners')
        console.log(wrapper.children[1].children[0].children[1].children[1], 'contact details')
      //expect(addEdit.onUpdateContact().validEmailCheck).toBeTruthy();
    });
    
  })