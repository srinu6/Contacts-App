/**
 * @jest-environment jsdom
*/

import 'react-native';
import React from 'react';
import ReactDOM from 'react-dom';
//import { render, fireEvent, screen } from '@testing-library/react';
import AddEditContact from '../components/addEditContacts';
import renderer from 'react-test-renderer';
//import {useNavigation} from '@react-navigation/native';
//import {navigationProps} from 'testing';
import Enzyme, { shallow, render, mount } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux'; 
//import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() })
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
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

// navigation={navigation.navigate('AddContact', {
//   contactId: 5,
//   addorEdit: false,
// })}

const route = {
  params:{
    contactId: 14,
    addorEdit: true,
  }
}

describe('should call Add Contact or edit contact',()=>{
  it('should call Add Contact', () => {
    const wrapper = renderer.create(
        <AddEditContact
          route={route}
          navigation={navigation}
        />
      ).toJSON();
      //const inst = wrapper.getInstance();
      console.log(wrapper, 'component')
      //console.log(wrapper.type, 'type')
      console.log(wrapper.props, 'props')
      //console.log(wrapper.children, 'children')
      console.log(wrapper.children[0], 'Animated view')
      console.log(wrapper.children[0].children[0], 'Scrollview')
      console.log(wrapper.children[0].children[0].children[0], 'inside scrollview')
      console.log(wrapper.children[0].children[0].children[0].children[0], 'title')
      console.log(wrapper.children[0].children[0].children[0].children[1], 'contacts photo')
      console.log(wrapper.children[0].children[0].children[0].children[2], 'testinputs fields')
      console.log(wrapper.children[0].children[0].children[0].children[2].children[0], 'firstname and lastname')
      console.log(wrapper.children[0].children[0].children[0].children[2].children[0].children[0], 'First name')
      console.log(wrapper.children[0].children[0].children[0].children[2].children[1], 'phonenumber')

  //  expect(addEdit.onUpdateContact().validEmailCheck).toBeTruthy();
  });  
})
