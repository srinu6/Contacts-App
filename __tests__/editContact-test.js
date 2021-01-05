import 'react-native';
import React from 'react';
import AddEditContact from '../components/addEditContacts';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {render, fireEvent} from 'react-native-testing-library';
import BottomSheet from 'reanimated-bottom-sheet';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
jest.mock('react-native-image-crop-picker', () => ({
  openCamera: jest.fn().mockImplementation(() => Promise.resolve()),
  openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
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
const routeForEditContact = {
  params: {
    contactId: 1,
    addorEdit: false,
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

const storeConditionFirstName = mockStore({
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
        firstName: 'Super3',
        lastName: 'Man',
        email: 'superman@hero.com',
        phone: '9876543234',
        image: null,
      },
    ],
  },
});

const storeConditionLastName = mockStore({
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
        lastName: 'Man1',
        email: 'superman@hero.com',
        phone: '9876543234',
        image: null,
      },
    ],
  },
});

const storeConditionPhoneNumber = mockStore({
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
        phone: '9876543234f',
        image: null,
      },
    ],
  },
});

const storeConditionEmail = mockStore({
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
        email: 'superman@herocom',
        phone: '9876543234',
        image: null,
      },
    ],
  },
});


describe('Should call Edit Contact', () => {
  it('Updating a Contact, this will check Update Contact', () => {
    const {queryByText} = render(
      <AddEditContact route={routeForEditContact} navigation={navigation} />,
    );
    expect(queryByText('Update Contact')).not.toBeNull();
  });
});

describe('Should call Edit Contact for checking TestInput', () => {
  it('change input First Name, Last Name, Phone Number, EmailID', () => {
    const {getByTestId} = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );

    fireEvent.changeText(getByTestId('firstName'), 'Srinu');
    expect(getByTestId('firstName').props.value).toEqual('Srinu');

    fireEvent.changeText(getByTestId('lastName'), 'Maripi');
    expect(getByTestId('lastName').props.value).toEqual('Maripi');

    fireEvent.changeText(getByTestId('phoneNumber'), '0123456789');
    expect(getByTestId('phoneNumber').props.value).toEqual('0123456789');

    fireEvent.changeText(getByTestId('emailId'), 'srinu@gmail.com');
    expect(getByTestId('emailId').props.value).toEqual('srinu@gmail.com');
  });
});

describe('Checks different TouchableOpacities', () => {
  it('Update & Navigation touchable opacity', () => {
    const componentTouch = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    const touchableSubmit = componentTouch.getByTestId('submit');
    fireEvent.press(touchableSubmit);

    const touchableNavigation = componentTouch.getByTestId('navigation');
    fireEvent.press(touchableNavigation);
  });
});

describe('Checking submit TouchableOpacity, conditions, validFirstNameCheck', () => {
  it('if else condition checking ', () => {
    const componentTouch = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={storeConditionFirstName}
      />,
    );
    const touchableSubmit = componentTouch.getByTestId('submit');
    fireEvent.press(touchableSubmit);
  });
});

describe('Checking submit TouchableOpacity, conditions, validLastNameCheck', () => {
  it('if else condition checking, validLastNameCheck ', () => {
    const componentTouch = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={storeConditionLastName}
      />,
    );
    const touchableSubmit = componentTouch.getByTestId('submit');
    fireEvent.press(touchableSubmit);
  });
});

describe('Checking submit TouchableOpacity, conditions, validPhoneCheck', () => {
  it('if else condition checking, validPhoneCheck ', () => {
    const componentTouch = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={storeConditionPhoneNumber}
      />,
    );
    const touchableSubmit = componentTouch.getByTestId('submit');
    fireEvent.press(touchableSubmit);
  });
});

describe('Checking submit TouchableOpacity, conditions, validEmailCheck', () => {
  it('if else condition checking, validEmailCheck ', () => {
    const componentTouch = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={storeConditionEmail}
      />,
    );
    const touchableSubmit = componentTouch.getByTestId('submit');
    fireEvent.press(touchableSubmit);
  });
});

describe('Should call Edit Contact, to check branch', () => {
  it('useSelector branch checking', () => {
    const wrapperMount = mount(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={null}
      />,
    );
    console.log(wrapperMount, 'useSelector branch');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check name field in Edit Contact', () => {
    const {getByTestId} = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    expect(getByTestId('firstName').props.value).toEqual('Super');
    expect(getByTestId('lastName').props.value).toEqual('Man');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check phone numeber field in Edit Contact', () => {
    const {getByTestId} = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    expect(getByTestId('phoneNumber').props.value).toEqual('9876543234');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check Email ID field in Edit Contact', () => {
    const {getByTestId} = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    expect(getByTestId('emailId').props.value).toEqual('superman@hero.com');
  });
});

describe('Should call Edit Contact', () => {
  it('onBlur First Name, Last Name, Phone Number, EmailID', () => {
    const {getByTestId} = render(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );

    fireEvent(getByTestId('firstName'), 'blur');
    fireEvent(getByTestId('lastName'), 'blur');
    fireEvent(getByTestId('phoneNumber'), 'blur');
    fireEvent(getByTestId('emailId'), 'blur');
  });
});

describe('Should call Edit Contact', () => {
  it('functions calling, RenderHeader', () => {
    const wrapshallow = shallow(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    const bottomSheetFind = wrapshallow.find(BottomSheet);
    const renderHeaderPart = bottomSheetFind.renderProp('renderHeader')();
    expect(renderHeaderPart).toMatchSnapshot();
  });
});

describe('Should call Edit Contact', () => {
  it('functions calling, RenderInner', () => {
    const wrapshallowinner = shallow(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    const bottomSheetFind = wrapshallowinner.find(BottomSheet);
    const renderInnerPart = bottomSheetFind.renderProp('renderContent')();
    expect(renderInnerPart).toMatchSnapshot();
  });
});

describe('Should call Edit Contact', () => {
  it('functions calling, RenderInner, not a snap', () => {
    const wrapShallowInner = shallow(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    const bottomSheetFind = wrapShallowInner.find(BottomSheet);
    const renderInnerPart = bottomSheetFind.renderProp('renderContent')();
    const {getByTestId} = render(renderInnerPart);
    fireEvent.press(getByTestId('uploadphoto'));
  });
});

describe('Should call Edit Contact & choosePhotoFromLibrary function', () => {
  it('functions calling, RenderInner, choosePhotoFromLibrary', () => {
    const wrapShallowHeader = shallow(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    const bottomSheetFindHeader = wrapShallowHeader.find(BottomSheet);
    const renderHeaderPart = bottomSheetFindHeader.renderProp(
      'renderContent',
    )();
    const {getByTestId} = render(renderHeaderPart);
    fireEvent.press(getByTestId('libraryphoto'));
  });
});
