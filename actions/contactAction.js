import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    VIEW_CONTACT,
    PHONE_ERROR,
  } from "../constant/types";
  
  // actions
  export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
  });
  // get a contact
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
  }); 
  // update a contact
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
  });
  // delete a contact
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
  });
  // view selected contact
  export const viewContact = (contact) => ({
    type: VIEW_CONTACT,
    payload: contact,
  });

  export const phoneError = (string) => ({
    type: PHONE_ERROR,
    payload: string,
  });


  