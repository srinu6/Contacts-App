import 'react-native';
import React from 'react';
import ContactList from '../components/contactsList';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {render, fireEvent} from 'react-native-testing-library';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-native-device-detection', () => ({
  isIphoneX: jest.fn().mockReturnValue(true),
}));
const Device = require('react-native-device-detection');
const navigation = {navigate: jest.fn()};
const store = mockStore({
  contactStore: {
    contacts: [
      {
        id: 0,
        firstName: 'Iron',
        lastName: 'Man',
        email: 'ironman@hero.com',
        phone: '9848022335',
        image: null,
      },
    ],
  },
});

describe('<ContactList />', () => {
  it('should contain Add New Contact', () => {
    const {queryByText} = render(
      <ContactList navigation={navigation} store={store} />,
    );
    expect(queryByText('Add New Contact')).not.toBeNull();
  });
});

describe('<ContactList />', () => {
  it('should check search field', () => {
    const {getByTestId} = render(
      <ContactList navigation={navigation} store={store} />,
    );
    fireEvent.changeText(getByTestId('searchinput'), 'r');
    expect(getByTestId('searchinput').props.value).toEqual('r');

    const {queryByText} = render(
      <ContactList navigation={navigation} store={store} />,
    );
    expect(queryByText('Search')).not.toBeNull();
  });
});

describe('Checks Add New Contact condition for different devices', () => {
  it('if condition for iPhoneX', () => {
    const {getByTestId} = render(
      <ContactList navigation={navigation} store={store} />,
    );
    const iPhoneSize = getByTestId('iphonex');
    fireEvent.press(iPhoneSize);
  });
});
