import 'react-native';
import React from 'react';
import AddEditContact from '../components/addEditContacts';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
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
const routeForAddContact = {
  params: {
    contactId: 1,
    addorEdit: true,
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
    route={routeForAddContact}
    navigation={navigation}
    store={store}
  />,
);

const wrapShallow = shallow(
  <AddEditContact
    route={routeForAddContact}
    navigation={navigation}
    store={store}
  />,
);

const wrapRenderer = renderer
  .create(<AddEditContact route={routeForAddContact} navigation={navigation} />)
  .toJSON();

describe('Search component', () => {
  it('renders', () => {
    expect(wrapShallow.exists()).toBe(true);
  });
});

describe('Should call Add Contact for checking Create Contact', () => {
  it('Adding a Contact, this will check Create Contact', () => {
    expect(
      wrapRenderer.children[0].children[0].children[0].children[2].children[3]
        .children[0].children[0],
    ).toBe('Create Contact');
  });
});

describe('Should call Add Contact, checks First Name', () => {
  it('Adding a Contact, this will check empty First Name field', () => {
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
    expect(firstName).toBe('');
  });
});

describe('Should call Add Contact, checks Last Name', () => {
  it('Adding a Contact, this will check empty Last Name field', () => {
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
    expect(lastName).toBe('');
  });
});

describe('Should call Add Contact, checks Phone Number', () => {
  it('Adding a Contact, this will check empty phone number field', () => {
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
    expect(phoneNumber).toBe('');
  });
});

describe('Should call Add Contact, checks EmailID', () => {
  it('Adding a Contact, this will check empty Email ID field', () => {
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
    expect(emailID).toBe('');
  });
});
