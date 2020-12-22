import 'react-native';
import React from 'react';
import Contact from '../components/contacts';
import renderer from 'react-test-renderer';
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
const contact = {
  id: 0,
  firstName: 'Iron',
  lastName: 'Man',
  email: 'ironman@hero.com',
  phone: '9848022335',
  image: null,
};
const wrapper = renderer.create(<Contact contact={contact} />).toJSON();
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
