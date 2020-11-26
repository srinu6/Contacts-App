import * as Actions from '../actions/contactAction';
import * as Types from '../constant/type';

describe('Get Contact action', () => {
  it('should create an action for getContact', () => {
    const id = 2;
    const randomID= Math.random();
    const nullID= null;
    const expectedAction1 = {
      type: Types.GET_CONTACT,
      payload: id,
    };
    const expectedAction2 = {
        type: Types.GET_CONTACT,
        payload: randomID,
    };
    const expectedAction3 = {
        type: Types.GET_CONTACT,
        payload: nullID,
    };  
    expect(Actions.getContact(id)).toEqual(expectedAction1);
    expect(Actions.getContact(randomID)).toEqual(expectedAction2);
    expect(Actions.getContact(nullID)).toEqual(expectedAction3);
  });
});

describe('Delete Contact action', () => {
  it('should create an action for Delete Contact', () => {
    const id = 2;
    const expectedAction = {
      type: Types.DELETE_CONTACT,
      payload: id,
    };
    expect(Actions.deleteContact(id)).toEqual(expectedAction);
  });
});

describe('Add Contact action', () => {
  it('should create an action for Add Contact', () => {
    const contact = {
        id: 2,
        firstName: 'Super',
        lastName: 'Man',
        email: 'superman@hero.com',
        phone: '9876543234',
        image: null,
      };
    const expectedAction = {
      type: Types.CREATE_CONTACT,
      payload: contact,
    };
    expect(Actions.addContact(contact)).toEqual(expectedAction);
  });
});

describe('Update Contact action', () => {
  it('should create an action for Update Contact', () => {
    const contact = {};
    const expectedAction = {
      type: Types.UPDATE_CONTACT,
      payload: contact,
    };
    expect(Actions.updateContact(contact)).toEqual(expectedAction);
  });
});

describe('View Contact action', () => {
  it('should create an action for View Contact', () => {
    const contact = {
        id: Math.random(),
        firstName: 'Super-Test',
        lastName: 'Man-Testing',
        email: 'superman@herotest.com',
        phone: '9876543234100',
        image: null,
    };
    const expectedAction = {
      type: Types.VIEW_CONTACT,
      payload: contact,
    };
    expect(Actions.viewContact(contact)).toEqual(expectedAction);
  });
});
