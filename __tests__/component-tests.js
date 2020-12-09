import 'react-native';
import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
import AddEditContact from '../components/addEditContacts';
import renderer from 'react-test-renderer';
//import {useNavigation} from '@react-navigation/native';
//import {navigationProps} from 'testing';
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
// navigation={navigation.navigate('AddContact', {
//   contactId: 5,
//   addorEdit: false,
// })}

describe('should call Add Contact or edit contact', () => {
  it('should call Add Contact', () => {
    let addEdit = renderer
      .create(<AddEditContact navigation={navigation} />)
      .getInstance();
    expect(addEdit.onUpdateContact().validEmailCheck).toBeTruthy();
  });
});
