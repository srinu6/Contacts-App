import 'react-native';
import React from 'react';
import {
  isValidName,
  isValidEmail,
  isValidPhoneNumber,
} from '../utils/validations';

// Note: test renderer must be required after react-native.
// const valid= require('../utils/validations')
test('Valid Email', () => {
  expect(isValidEmail('sri@gmail.com')).toBeTruthy();
  expect(isValidEmail('s3@g.c')).toBeTruthy();
  expect(isValidEmail('s3@g.')).toBeFalsy();
  expect(isValidEmail('')).toBeFalsy();
  expect(isValidEmail(null)).toBeFalsy();
  expect(isValidEmail(undefined)).toBeFalsy();
});

test('Valid Name', () => {
  expect(isValidName('sriMaripi')).toBeTruthy();
  expect(isValidName('sri4')).toBeFalsy();
  // expect(isValidName(null)).toBeFalsy();
  //expect(isValidName(undefined)).toBeFalsy();
});

test('Valid Phone number', () => {
  expect(isValidPhoneNumber('9086315')).toBeTruthy();
  expect(isValidPhoneNumber('9086315r')).toBeFalsy();
  expect(isValidPhoneNumber(null)).toBeFalsy();
  expect(isValidPhoneNumber(undefined)).toBeFalsy();
});
