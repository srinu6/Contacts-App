import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, VIEW_CONTACT } from '../constant/types';
  
  const intialState = {
    contacts: [
      {
        id: 1,
        firstname: "Iron",
        lastname:"Man",
        email: "ironman@hero.com", 
        phone: "9848022335", 
        image: null,
      },
      {
        id: 2,
        firstname: "Super",
        lastname:"Man",
        email: "superman@hero.com",
        phone: "9876543234",
        image: null,
      },
      {
        id: 5,
        firstname: "Thor",
        lastname: "God",
        email: "Thor@hero.com",
        phone: "1234567898",
        image: null,
      },
      {
        id: 9,
        firstname: "Thanos",
        lastname: "Conqurer",
        email: "Thanos@powerfull.com",
        phone: "5432145678",
        image: null,
      },
      {
        id: 7,
        firstname: "Hulk",
        lastname: "Blaster",
        email: "Hulk@distory.com",
        phone: "2100676132",
        image: null,
      },
      {
        id: 8,
        firstname: "Captain",
        lastname: "America",
        email: "cap@world.com",
        phone: "4345567345",
        image: null,
      },
      {
        id: 3,
        firstname: "Captain",
        lastname: "Marvel",
        email: "lady@hero.com",
        phone: "7504932732",
        image: null,
      },
      {
        id: 10,
        firstname: "Srinu",
        lastname: "Haha",
        email: "srinu@sri.com",
        phone: "9014326315",
        image: null,
      },
      {
        id: 11,
        firstname: "Ant",
        lastname:"Man",
        email: "antman@hero.com", 
        phone: "9848022345", 
        image: null, 
      },
      {
        id: 12,
        firstname: "Spyder",
        lastname:"Man",
        email: "Spyderman@hero.com", 
        phone: "9548022354",  
        image: null,
      },
      {
        id: 13,
        firstname: "Bahubali",
        lastname:"Mahismati",
        email: "ironman@hero.com", 
        phone: "9848022335",  
        image: null,
      },
      {
        id: 14,
        firstname: "Bat",
        lastname:"Man",
        email: "Batman@hero.com", 
        phone: "9848036435",  
        image: null,
      },
      {
        id: 15,
        firstname: "Iron",
        lastname:"Fist",
        email: "ironfist@hero.com", 
        phone: "9848066335", 
        image: null, 
      },
      {
        id: 16,
        firstname: "Krish",
        lastname:"Local",
        email: "Krish@hero.com", 
        phone: "9832022335",  
        image: null,
      },
    ],   
  };
  
  export const contactReducer = (state = intialState, action) => {
    switch (action.type) {
      case CREATE_CONTACT:
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };
      case GET_CONTACT:
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          contact: arr,
        };
      case UPDATE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id == action.payload.id ? action.payload : contact
          ),
        };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };
        case VIEW_CONTACT:
          return {
            ...state,
            contacts: state.contacts.map((contact)  =>
            contact.id == action.payload.id ? action.payload : contact
            )
          };
  
        default:
          return state;
    }
  };
  