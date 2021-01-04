import 'react-native';
import React from 'react';
import AddEditContact from '../components/addEditContacts';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {render, fireEvent} from 'react-native-testing-library';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-native-image-crop-picker', ()=>({
  
  openCamera: jest.fn().mockImplementation(() => Promise.resolve()),
  openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
 // then: jest.fn(),
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

// jest.mock('react-native-device-info', () => ({
//   getSystemVersion: () => 'iOS 10.2',
//   getVersion: () => '1.1.0',
//   getModel: () => 'iPhone XR',

//   getDeviceId: () => 'test-device-id',
// }));
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

// export default {
//   openPicker: jest.fn().mockImplementation(() => Promise.resolve(result))
// };
const wrapper = mount(
  <AddEditContact
    route={routeForEditContact}
    navigation={navigation}
    store={store}
  />
);

const wrap = renderer
  .create(
    <AddEditContact route={routeForEditContact} navigation={navigation} />,
  )
  .toJSON();

describe('Should call Edit Contact', () => {
  it('Adding a Contact, this will check Create Contact', () => {
    expect(
      wrap.children[0].children[0].children[0].children[2].children[3]
        .children[0].children[0],
    ).toBe('Update Contact');
  });
});


describe('Should call Edit Contact', () => {
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

describe('Checks different TouchableOpacities', () =>{
  it('touchable opacity', () => {

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

})
})

describe('Should call Edit Contact', () => {
  it('this will check name field in Edit Contact', () => {
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .debug(),
      'component',
    );
    console.log(
      renderer
        .create(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(2)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0),
        )
        .toJSON().props.value,
      'name',
    );
    const firstName = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0),
      )
      .toJSON().props.value;
    const lastName = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0),
      )
      .toJSON().props.value;
    const name = firstName.concat(' ').concat(lastName);
    expect(name).toBe('Super Man');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check phone numeber field in Edit Contact', () => {
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .debug(),
      'Phone number',
    );
    const phoneNumber = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(1)
          .childAt(0),
      )
      .toJSON().props.value;
    expect(phoneNumber).toBe('9876543234');
  });
});

describe('Should call Edit Contact', () => {
  it('this will check Email ID field in Edit Contact', () => {
    console.log(
      wrapper
        .childAt(0)
        .childAt(0)
        .childAt(1)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .childAt(2)
        .childAt(0)
        .debug(),
      'Email id',
    );
    const emailID = renderer
      .create(
        wrapper
          .childAt(0)
          .childAt(0)
          .childAt(1)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(0)
          .childAt(2)
          .childAt(0)
          .childAt(2)
          .childAt(0),
      )
      .toJSON().props.value;
    expect(emailID).toBe('superman@hero.com');
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
   // fireEvent(getByTestId('bottomsheet'), 'renderInner')
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
    const bottomSheetFind=wrapshallow.find(BottomSheet)
    const renderHeaderPart=bottomSheetFind.renderProp('renderHeader')();
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
    const bottomSheetFind=wrapshallowinner.find(BottomSheet)
    const renderInnerPart=bottomSheetFind.renderProp('renderContent')();
    expect(renderInnerPart).toMatchSnapshot();
  });
});

describe('Should call Edit Contact', () => {
  it('functions calling, RenderInner, not a snap', () => {
    const wrapshallowinner = shallow(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    const bottomSheetFind=wrapshallowinner.find(BottomSheet)
    const renderInnerPart=bottomSheetFind.renderProp('renderContent')();
    //expect(renderInnerPart).toMatchSnapshot();
    //console.log(renderInnerPart.debug(), 'instance')
    const {getByTestId} = render(renderInnerPart);
    fireEvent.press(getByTestId('uploadphoto'));
    //fireEvent.press(getByTestId('libraryphoto'));
  });
});

describe('Should call Edit Contact, choosePhotoFromLibrary', () => {
  it('functions calling, RenderInner, not a snap, choosePhotoFromLibrary', () => {
    const wrapshallowheader = shallow(
      <AddEditContact
        route={routeForEditContact}
        navigation={navigation}
        store={store}
      />,
    );
    const bottomSheetFindHeader=wrapshallowheader.find(BottomSheet)
    const renderHeaderPart=bottomSheetFindHeader.renderProp('renderContent')();
    //expect(renderInnerPart).toMatchSnapshot();
    //console.log(renderInnerPart.debug(), 'instance')
    const {getByTestId} = render(renderHeaderPart);
   // fireEvent.press(getByTestId('uploadphoto'));
    fireEvent.press(getByTestId('libraryphoto'));
  });
});