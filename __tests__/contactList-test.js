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
const wrapper = renderer
  .create(<ContactList navigation={navigation} store={store} />)
  .toJSON();

describe('<ContactList />', () => {
  it('should contain Add New Contact', () => {
    console.log(
      wrapper[2].children[0].children[0].children[0].children[0],
      'Butoon Text',
    );
    expect(wrapper[2].children[0].children[0].children[0].children[0]).toBe(
      'Add New Contact',
    );
  });
});

describe('<ContactList />', () => {
  it('Should check Search field', () => {
    const {getByTestId} = render(
      <ContactList navigation={navigation} store={store} />,
    );
    fireEvent.changeText(getByTestId('searchinput'), 'r');
    expect(getByTestId('searchinput').props.value).toEqual('r');

    expect(
      wrapper[0].children[0].children[0].children[1].children[0].children[0],
    ).toBe('Search');
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
