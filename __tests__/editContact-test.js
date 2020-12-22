import 'react-native';
import React from 'react';
import AddEditContact from '../components/addEditContacts';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
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
const routeForEditContact = {
  params: {
    contactId: 1,
    addorEdit: false,
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
  <AddEditContact
    route={routeForEditContact}
    navigation={navigation}
    store={store}
  />,
);

const wrap = renderer
  .create(
    <AddEditContact route={routeForEditContact} navigation={navigation} />,
  )
  .toJSON();

describe('Should call Edit Contact', () => {
  it('Adding a Contact, this will check Create Contact', () => {
    expect(
      wrap.children[0].children[0].children[0].children[2].children[3]
        .children[0].children[0],
    ).toBe('Update Contact');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check name field in Edit Contact', () => {
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .debug(),
      'component',
    );
    console.log(
      renderer
        .create(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(2)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0),
        )
        .toJSON().props.value,
    );
    const firstName = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0),
      )
      .toJSON().props.value;
    const lastName = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0),
      )
      .toJSON().props.value;
    const name = firstName.concat(' ').concat(lastName);
    expect(name).toBe('Super Man');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check phone numeber field in Edit Contact', () => {
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .debug(),
      'component',
    );
    const phoneNumber = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(1)
          .childAt(0),
      )
      .toJSON().props.value;
    expect(phoneNumber).toBe('9876543234');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check Email ID field in Edit Contact', () => {
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .debug(),
      'component',
    );
    const emailID = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(2)
          .childAt(0),
      )
      .toJSON().props.value;
    expect(emailID).toBe('superman@hero.com');
  });
});
