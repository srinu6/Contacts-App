import 'react-native';
import React from 'react';
import Contact from '../components/contacts';
import renderer from 'react-test-renderer';
import {render, fireEvent} from 'react-native-testing-library';
import {defined} from 'react-native-reanimated';
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const contact = {
  id: 0,
  firstName: 'Iron',
  lastName: 'Man',
  email: 'ironman@hero.com',
  phone: '9848022335',
  image: null,
};

const contactForThumbnail = {
  id: 0,
  firstName: 'Iron',
  lastName: 'Man',
  email: 'ironman@hero.com',
  phone: '9848022335',
  image: defined,
};

const wrapper = renderer.create(<Contact contact={contact} />).toJSON();
const wrapRenderer = renderer
  .create(<Contact contact={contactForThumbnail} />)
  .toJSON();

describe('<Contact />', () => {
  it('Checking contacts Avatar', () => {
    const avatar = wrapRenderer.children[0].children[0].children[0];
    console.log(avatar, 'Avatar');
  });
});

describe('<Contact />', () => {
  it('Checking contacts name', () => {
    const firstName =
      wrapper.children[0].children[0].children[1].children[0].children[0];
    const lastName =
      wrapper.children[0].children[0].children[1].children[0].children[2];
    const name = firstName.concat(' ').concat(lastName);
    expect(name).toBe('Iron Man');
  });
});

describe('<Contact />', () => {
  it('Checking contacts phone number', () => {
    console.log(
      wrapper.children[0].children[0].children[1].children[1].children[0],
      'Contacts Phone number',
    );
    expect(
      wrapper.children[0].children[0].children[1].children[1].children[0],
    ).toBe('9848022335');
  });
});

describe('Checks different TouchableOpacities', () => {
  it('touchable opacity', () => {
    const {getByTestId} = render(<Contact contact={contact} />);
    const touchableNavigation = getByTestId('navigationtodetails');
    fireEvent.press(touchableNavigation);
  });
});

describe('Checks different Icons', () => {
  it('checking Icons and their operations', () => {
    const {getByTestId} = render(<Contact contact={contact} />);
    const iconNavigation = getByTestId('editcontact');
    fireEvent.press(iconNavigation);

    const iconDetails = getByTestId('details');
    fireEvent.press(iconDetails);

    const iconDelete = getByTestId('delete');
    fireEvent.press(iconDelete);
  });
});
