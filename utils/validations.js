import React from 'react';

export const isValidName = (name) => {
  const regexName = /^[a-zA-Z_ .-]+$/;
  const nameCheck = regexName.test(name);
  if (!nameCheck) {
    return false;
  }
  return true;
};

export const isValidPhoneNumber = (phoneNumber) => {
  const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  const phoneValid = regexPhone.test(phoneNumber);
  if (!phoneValid) {
    return false;
  }
  return true;
};

export const isValidEmail = (email) => {
  const regexMail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]+$/;
  const mailValid = regexMail.test(email);
  if (!mailValid) {
    return false;
  }
  return true;
};
