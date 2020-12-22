import {contactReducer, intialState} from '../reducers/contactReducers';
import * as Types from '../constant/type';

describe('contacts reducer', () => {
  it('should return initial state', () => {
    expect(contactReducer(undefined, {})).toEqual(intialState);
  });
});

describe('contacts reducer test for deleting contact', () => {
  it('should return state after deleting', () => {
    expect(
      contactReducer(undefined, {
        type: Types.DELETE_CONTACT,
        payload: 3,
      }),
    ).toEqual({
      contacts: [
        {
          id: 13,
          firstName: 'Iron',
          lastName: 'Man',
          email: 'ironman@hero.com',
          phone: '9848022335',
          image: null,
        },
        {
          id: 12,
          firstName: 'Super',
          lastName: 'Man',
          email: 'superman@hero.com',
          phone: '9876543234',
          image: null,
        },
        {
          id: 11,
          firstName: 'Thor',
          lastName: 'God',
          email: 'Thor@hero.com',
          phone: '1234567898',
          image: null,
        },
        {
          id: 10,
          firstName: 'Thanos',
          lastName: 'Conqurer',
          email: 'Thanos@powerfull.com',
          phone: '5432145678',
          image: null,
        },
        {
          id: 9,
          firstName: 'Hulk',
          lastName: 'Blaster',
          email: 'Hulk@distory.com',
          phone: '2100676132',
          image: null,
        },
        {
          id: 8,
          firstName: 'Captain',
          lastName: 'America',
          email: 'cap@world.com',
          phone: '4345567345',
          image: null,
        },
        {
          id: 7,
          firstName: 'Captain',
          lastName: 'Marvel',
          email: 'lady@hero.com',
          phone: '7504932732',
          image: null,
        },
        {
          id: 6,
          firstName: 'Srinu',
          lastName: 'Haha',
          email: 'srinu@sri.com',
          phone: '9014326315',
          image: null,
        },
        {
          id: 5,
          firstName: 'Ant',
          lastName: 'Man',
          email: 'antman@hero.com',
          phone: '9848022345',
          image: null,
        },
        {
          id: 4,
          firstName: 'Spyder',
          lastName: 'Man',
          email: 'Spyderman@hero.com',
          phone: '9548022354',
          image: null,
        },
        {
          id: 2,
          firstName: 'Bat',
          lastName: 'Man',
          email: 'Batman@hero.com',
          phone: '9848036435',
          image: null,
        },
        {
          id: 1,
          firstName: 'Iron',
          lastName: 'Fist',
          email: 'ironfist@hero.com',
          phone: '9848066335',
          image: null,
        },
        {
          id: 0,
          firstName: 'Krish',
          lastName: 'Local',
          email: 'Krish@hero.com',
          phone: '9832022335',
          image: null,
        },
      ],
      contact: [],
    });
  });
});

describe('contacts reducer test for adding contact', () => {
  it('should return new state with added contact', () => {
    const contact = {
      id: 14,
      firstName: 'Krishcreated',
      lastName: 'Localcreated',
      email: 'Krish@hero.comcreated',
      phone: '983202233534',
      image: null,
    };
    expect(
      contactReducer(undefined, {
        type: Types.CREATE_CONTACT,
        payload: contact,
      }),
    ).toEqual({
      contacts: [
        {
          id: 14,
          firstName: 'Krishcreated',
          lastName: 'Localcreated',
          email: 'Krish@hero.comcreated',
          phone: '983202233534',
          image: null,
        },
        {
          id: 13,
          firstName: 'Iron',
          lastName: 'Man',
          email: 'ironman@hero.com',
          phone: '9848022335',
          image: null,
        },
        {
          id: 12,
          firstName: 'Super',
          lastName: 'Man',
          email: 'superman@hero.com',
          phone: '9876543234',
          image: null,
        },
        {
          id: 11,
          firstName: 'Thor',
          lastName: 'God',
          email: 'Thor@hero.com',
          phone: '1234567898',
          image: null,
        },
        {
          id: 10,
          firstName: 'Thanos',
          lastName: 'Conqurer',
          email: 'Thanos@powerfull.com',
          phone: '5432145678',
          image: null,
        },
        {
          id: 9,
          firstName: 'Hulk',
          lastName: 'Blaster',
          email: 'Hulk@distory.com',
          phone: '2100676132',
          image: null,
        },
        {
          id: 8,
          firstName: 'Captain',
          lastName: 'America',
          email: 'cap@world.com',
          phone: '4345567345',
          image: null,
        },
        {
          id: 7,
          firstName: 'Captain',
          lastName: 'Marvel',
          email: 'lady@hero.com',
          phone: '7504932732',
          image: null,
        },
        {
          id: 6,
          firstName: 'Srinu',
          lastName: 'Haha',
          email: 'srinu@sri.com',
          phone: '9014326315',
          image: null,
        },
        {
          id: 5,
          firstName: 'Ant',
          lastName: 'Man',
          email: 'antman@hero.com',
          phone: '9848022345',
          image: null,
        },
        {
          id: 4,
          firstName: 'Spyder',
          lastName: 'Man',
          email: 'Spyderman@hero.com',
          phone: '9548022354',
          image: null,
        },
        {
          id: 3,
          firstName: 'Bahubali',
          lastName: 'Mahismati',
          email: 'ironman@hero.com',
          phone: '9848022335',
          image: null,
        },
        {
          id: 2,
          firstName: 'Bat',
          lastName: 'Man',
          email: 'Batman@hero.com',
          phone: '9848036435',
          image: null,
        },
        {
          id: 1,
          firstName: 'Iron',
          lastName: 'Fist',
          email: 'ironfist@hero.com',
          phone: '9848066335',
          image: null,
        },
        {
          id: 0,
          firstName: 'Krish',
          lastName: 'Local',
          email: 'Krish@hero.com',
          phone: '9832022335',
          image: null,
        },
      ],
      contact: [],
    });
  });
});

describe('contacts reducer test for updating contact', () => {
  it('should return state after updating contact', () => {
    const updatedContact = {
      id: 13,
      firstName: 'Iron',
      lastName: 'Man Updated',
      email: 'ironman@hero.com',
      phone: '9848022335',
      image: null,
    };
    expect(
      contactReducer(undefined, {
        type: Types.UPDATE_CONTACT,
        payload: updatedContact,
      }),
    ).toEqual({
      contacts: [
        {
          id: 13,
          firstName: 'Iron',
          lastName: 'Man Updated',
          email: 'ironman@hero.com',
          phone: '9848022335',
          image: null,
        },
        {
          id: 12,
          firstName: 'Super',
          lastName: 'Man',
          email: 'superman@hero.com',
          phone: '9876543234',
          image: null,
        },
        {
          id: 11,
          firstName: 'Thor',
          lastName: 'God',
          email: 'Thor@hero.com',
          phone: '1234567898',
          image: null,
        },
        {
          id: 10,
          firstName: 'Thanos',
          lastName: 'Conqurer',
          email: 'Thanos@powerfull.com',
          phone: '5432145678',
          image: null,
        },
        {
          id: 9,
          firstName: 'Hulk',
          lastName: 'Blaster',
          email: 'Hulk@distory.com',
          phone: '2100676132',
          image: null,
        },
        {
          id: 8,
          firstName: 'Captain',
          lastName: 'America',
          email: 'cap@world.com',
          phone: '4345567345',
          image: null,
        },
        {
          id: 7,
          firstName: 'Captain',
          lastName: 'Marvel',
          email: 'lady@hero.com',
          phone: '7504932732',
          image: null,
        },
        {
          id: 6,
          firstName: 'Srinu',
          lastName: 'Haha',
          email: 'srinu@sri.com',
          phone: '9014326315',
          image: null,
        },
        {
          id: 5,
          firstName: 'Ant',
          lastName: 'Man',
          email: 'antman@hero.com',
          phone: '9848022345',
          image: null,
        },
        {
          id: 4,
          firstName: 'Spyder',
          lastName: 'Man',
          email: 'Spyderman@hero.com',
          phone: '9548022354',
          image: null,
        },
        {
          id: 3,
          firstName: 'Bahubali',
          lastName: 'Mahismati',
          email: 'ironman@hero.com',
          phone: '9848022335',
          image: null,
        },
        {
          id: 2,
          firstName: 'Bat',
          lastName: 'Man',
          email: 'Batman@hero.com',
          phone: '9848036435',
          image: null,
        },
        {
          id: 1,
          firstName: 'Iron',
          lastName: 'Fist',
          email: 'ironfist@hero.com',
          phone: '9848066335',
          image: null,
        },
        {
          id: 0,
          firstName: 'Krish',
          lastName: 'Local',
          email: 'Krish@hero.com',
          phone: '9832022335',
          image: null,
        },
      ],
      contact: [],
    });
  });
});

describe('contacts reducer test for viewing contact', () => {
  it('should return contacts', () => {
    expect(
      contactReducer(undefined, {
        type: Types.VIEW_CONTACT,
        payload: 5,
      }),
    ).toEqual(intialState);
  });
});

describe('contacts reducer for getting a particular contact', () => {
  it('should get a contact & total contacts', () => {
    const combainedState = {
      contact: {
        id: 11,
        firstName: 'Thor',
        lastName: 'God',
        email: 'Thor@hero.com',
        phone: '1234567898',
        image: null,
      },
      contacts: [
        {
          id: 13,
          firstName: 'Iron',
          lastName: 'Man',
          email: 'ironman@hero.com',
          phone: '9848022335',
          image: null,
        },
        {
          id: 12,
          firstName: 'Super',
          lastName: 'Man',
          email: 'superman@hero.com',
          phone: '9876543234',
          image: null,
        },
        {
          id: 11,
          firstName: 'Thor',
          lastName: 'God',
          email: 'Thor@hero.com',
          phone: '1234567898',
          image: null,
        },
        {
          id: 10,
          firstName: 'Thanos',
          lastName: 'Conqurer',
          email: 'Thanos@powerfull.com',
          phone: '5432145678',
          image: null,
        },
        {
          id: 9,
          firstName: 'Hulk',
          lastName: 'Blaster',
          email: 'Hulk@distory.com',
          phone: '2100676132',
          image: null,
        },
        {
          id: 8,
          firstName: 'Captain',
          lastName: 'America',
          email: 'cap@world.com',
          phone: '4345567345',
          image: null,
        },
        {
          id: 7,
          firstName: 'Captain',
          lastName: 'Marvel',
          email: 'lady@hero.com',
          phone: '7504932732',
          image: null,
        },
        {
          id: 6,
          firstName: 'Srinu',
          lastName: 'Haha',
          email: 'srinu@sri.com',
          phone: '9014326315',
          image: null,
        },
        {
          id: 5,
          firstName: 'Ant',
          lastName: 'Man',
          email: 'antman@hero.com',
          phone: '9848022345',
          image: null,
        },
        {
          id: 4,
          firstName: 'Spyder',
          lastName: 'Man',
          email: 'Spyderman@hero.com',
          phone: '9548022354',
          image: null,
        },
        {
          id: 3,
          firstName: 'Bahubali',
          lastName: 'Mahismati',
          email: 'ironman@hero.com',
          phone: '9848022335',
          image: null,
        },
        {
          id: 2,
          firstName: 'Bat',
          lastName: 'Man',
          email: 'Batman@hero.com',
          phone: '9848036435',
          image: null,
        },
        {
          id: 1,
          firstName: 'Iron',
          lastName: 'Fist',
          email: 'ironfist@hero.com',
          phone: '9848066335',
          image: null,
        },
        {
          id: 0,
          firstName: 'Krish',
          lastName: 'Local',
          email: 'Krish@hero.com',
          phone: '9832022335',
          image: null,
        },
      ],
    };
    expect(
      contactReducer(undefined, {
        type: Types.GET_CONTACT,
        payload: 11,
      }),
    ).toEqual(combainedState);
  });
});
