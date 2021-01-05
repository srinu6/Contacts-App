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

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

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
    const {queryByText} = render(
      <ContactDetails route={route} navigation={navigation} store={store} />,
    );
    expect(queryByText('Super Man')).not.toBeNull();
  });
});

describe('This will check contacts details screen, Phone Number ', () => {
  it('Should check Phone number of the contact', () => {
    const {queryByText} = render(
      <ContactDetails route={route} navigation={navigation} store={store} />,
    );
    expect(queryByText('9876543234')).not.toBeNull();
  });
});

describe('This will check contacts details screen, EmailID', () => {
  it('Should check EmailID of the contact', () => {
    const {queryByText} = render(
      <ContactDetails route={route} navigation={navigation} store={store} />,
    );
    expect(queryByText('superman@hero.com')).not.toBeNull();
  });
});

describe('Checks different Icons, Touchable Opacities', () => {
  it('Icons checking and their operations', () => {
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
