import 'react-native';
import React from 'react';
import ContactDetails from '../components/contactDetails';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux'; 
import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux/src'
// const mockStore = configureMockStore()
// const store = mockStore({})
import store from '../store'
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
        <Provider store={store}>
          <ContactDetails
            route={route}
            navigation={navigation}
          />
          </Provider>
        )
        .toJSON();
        console.log(wrapper, 'components inners')
        console.log(wrapper.children[1].children[0].children[1].children[1], 'contact details')
      //expect(addEdit.onUpdateContact().validEmailCheck).toBeTruthy();
    });
    
  })