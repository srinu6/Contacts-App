/**
 * @jest-environment jsdom
 */
import 'react-native';
import React from 'react';
import ContactDetails from '../components/contactDetails';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
import {render, fireEvent} from 'react-native-testing-library';
// import {Provider} from 'react-redux/src'
// import {getContact} from '../actions/contactAction'
// import renderer from 'react-test-renderer';
// import { useSelector, useDispatch } from 'react-redux';
// import configureStore from 'redux-mock-store'
//import Adapter from 'enzyme-adapter-react-16';
// const mockStore = configureMockStore()
// const mockStore = configureStore();
// const store = mockStore({})
//import storeReal from '../store'
//import {combineReducers} from '../reducers'
// import {
//   navigationProps,
//   fireEvent,
//   generateMockReduxStore,
//   renderWithContext,
// } from 'testing';
//   console.log(wrapper.children[1].children[0].children[1].children[1], 'contact details')
// console.log(wrapper.children[1].children[0].children[1].props)
//console.log(wrapper.find('View').debug(), 'components inners check')

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
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
  params: {
    contactId: 1,
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  contactStore: {
    contact: [
      {
        id: 0,
        firstName: 'Iron',
        lastName: 'Man',
        email: 'ironman@hero.com',
        phone: '9848022335',
        image: null,
      },
      {
        id: 1,
        firstName: 'Super',
        lastName: 'Man',
        email: 'superman@hero.com',
        phone: '9876543234',
        image: null,
      },
      {
        id: 2,
        firstName: 'Thor',
        lastName: 'God',
        email: 'Thor@hero.com',
        phone: '1234567898',
        image: null,
      },
      {
        id: 3,
        firstName: 'Thanos',
        lastName: 'Conqurer',
        email: 'Thanos@powerfull.com',
        phone: '5432145678',
        image: null,
      },
    ],
  },
});

const wrapper = mount(
  <ContactDetails route={route} navigation={navigation} store={store} />,
);

describe('This will check contacts details screen, Name', () => {
  it('Should check Name of the contact', () => {
    console.log(
      wrapper
        .find('ShowContact')
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .text(),
      'Full Name',
    );
    expect(
      wrapper
        .find('ShowContact')
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .text(),
    ).toBe('Super Man');
  });
});

describe('This will check contacts details screen, Phone Number ', () => {
  it('Should check Phone number of the contact', () => {
    console.log(
      wrapper
        .find('ShowContact')
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .text(),
      'Phone Number',
    );
    expect(
      wrapper
        .find('ShowContact')
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .text(),
    ).toBe('9876543234');
  });
});

describe('This will check contacts details screen, EmailID', () => {
  it('Should check EmailID of the contact', () => {
    console.log(
      wrapper
        .find('ShowContact')
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .text(),
      'Email ID',
    );
    expect(
      wrapper
        .find('ShowContact')
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .text(),
    ).toBe('superman@hero.com');
  });
});

describe('Checks different Icons, Touchable Opacities', () => {
  it('checking and their operations', () => {
    const {getByTestId} = render(
      <ContactDetails route={route} navigation={navigation} store={null} />,
    );
    const phoneCall = getByTestId('phonecall');
    fireEvent.press(phoneCall);

    const textMessage = getByTestId('textmessage');
    fireEvent.press(textMessage);

    const emailId = getByTestId('emailid');
    fireEvent.press(emailId);

    const editContactNavigation = getByTestId('editcontact');
    fireEvent.press(editContactNavigation);
  });
});
