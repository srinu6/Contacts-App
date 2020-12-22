import 'react-native';
import React from 'react';
import AddEditContact from '../components/addEditContacts';
import renderer from 'react-test-renderer';
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
    contactId: 14,
    addorEdit: true,
  },
};

describe('Should call Add Contact', () => {
  const wrapper = renderer
    .create(
      <AddEditContact route={routeForAddContact} navigation={navigation} />,
    )
    .toJSON();
  console.log(wrapper, 'component');
  console.log(wrapper.children[0], 'Animated view');
  console.log(wrapper.children[0].children[0], 'Scrollview');
  console.log(wrapper.children[0].children[0].children[0], 'Inside Scrollview');
  console.log(wrapper.children[0].children[0].children[0].children[0], 'Title');
  console.log(
    wrapper.children[0].children[0].children[0].children[1],
    'Contacts Photo',
  );
  console.log(
    wrapper.children[0].children[0].children[0].children[2],
    'Testinput fields',
  );
  console.log(
    wrapper.children[0].children[0].children[0].children[2].children[0],
    'Firstname and Lastname',
  );
  console.log(
    wrapper.children[0].children[0].children[0].children[2].children[0]
      .children[0],
    'First Name',
  );
  console.log(
    wrapper.children[0].children[0].children[0].children[2].children[1].props
      .value,
    'Phone Number',
  );
  console.log(
    wrapper.children[0].children[0].children[0].children[2].children[3]
      .children[0],
    'Create or Update Contact touchable opacity',
  );

  it('Adding a Contact, this will check Create Contact', () => {
    expect(
      wrapper.children[0].children[0].children[0].children[2].children[3]
        .children[0].children[0],
    ).toBe('Create Contact');
  });

  it('Adding a Contact, this will check empty First Name field', () => {
    expect(
      wrapper.children[0].children[0].children[0].children[2].children[0]
        .children[0].props.value,
    ).toBe('');
  });

  it('Adding a Contact, this will check empty Last Name field', () => {
    expect(
      wrapper.children[0].children[0].children[0].children[2].children[0]
        .children[1].props.value,
    ).toBe('');
  });

  it('Adding a Contact, this will check empty phone number field', () => {
    expect(
      wrapper.children[0].children[0].children[0].children[2].children[1].props
        .value,
    ).toBe('');
  });

  it('Adding a Contact, this will check empty Email ID field', () => {
    expect(
      wrapper.children[0].children[0].children[0].children[2].children[2].props
        .value,
    ).toBe('');
  });
});

