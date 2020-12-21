import 'react-native';
import React from 'react';
import ContactList from '../components/contactsList';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
const navigation = {navigate: jest.fn()};
describe('<ContactList />', () => {
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
  it('should contain Add New Contact', () => {
    const wrapper = renderer
      .create(<ContactList navigation={navigation} store={store} />)
      .toJSON();
    console.log(
      wrapper[2].children[0].children[0].children[0].children[0],
      'Butoon Text',
    );
    expect(wrapper[2].children[0].children[0].children[0].children[0]).toBe(
      'Add New Contact',
    );
  });
});
