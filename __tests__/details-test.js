/**
 * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import ContactDetails from '../components/contactDetails';
import renderer from 'react-test-renderer';
import { useSelector, useDispatch } from 'react-redux'; 
import configureStore from 'redux-mock-store'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux/src'
import { mount, shallow } from 'enzyme'
import {getContact} from '../actions/contactAction'
//import Adapter from 'enzyme-adapter-react-16';
// const mockStore = configureMockStore()
// const store = mockStore({})
//import storeReal from '../store'
//import {combineReducers} from '../reducers'
// import {
//   navigationProps,
//   fireEvent,
//   generateMockReduxStore,
//   renderWithContext,
// } from 'testing';
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
  

  

const middlewares = [thunk] 
const mockStore = configureMockStore(middlewares)

  describe('This will check contacts details screen',()=>{
    it('<ContactDetails />', () => {
      // const mockStore = configureStore();
      // let wrapper;
      // let store;
      const store = mockStore({
        contactStore: { contact: [
          {
            id: 1,
            firstName: 'Krish',
            lastName: 'Local',
            email: 'Krish@hero.com',
            phone: '9832022335',
            image: null,
          },
        ],
       }
      })
       const wrapper = mount(
       <Provider store={store}>
        <ContactDetails
          route={route}
          navigation={navigation}          
        /> 
       </Provider>
        )
      //  console.log(contactReducer(intialState, store.dispatch(getContact(1))), 'store')
       // console.log(storeReal, 'real store')
      console.log(wrapper, 'components inners')
     // console.log(wrapper.children[1].children[0].children[1].children[1], 'contact details')
        
     
       })
        
        
      //expect(addEdit.onUpdateContact().validEmailCheck).toBeTruthy();
    });
    
  