import React from 'react';
import {StyleSheet} from 'react-native'

export const isValidFirstName=(firstName)=>{
  const regexName=/^[a-zA-Z_.-]+$/;
  const firstNameCheck= regexName.test(firstName)
  if(!firstNameCheck){
    return false;
  }      
  return true; 
}

export const isValidLastName=(lastName)=>{
  const regexName=/^[a-zA-Z_.-]+$/;
  const lastNameValid= regexName.test(lastName)
  if(!lastNameValid){
    return false;
  }      
  return true; 
}

export const isValidPhoneNumber = (phoneNumber) => {
  const regexPhone=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  const phoneValid= regexPhone.test(phoneNumber)
  if(!phoneValid){
    return false;
  }
  return true;  
}

export const isValidEmail=(email)=>{
  const regexMail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z]+$/; 
  const mailValid= regexMail.test(email);
    if(!mailValid){
      return false;
    }
    return true;
}



const styles = StyleSheet.create({
    errorText:{
        color:'red',
        padding:50, 
        marginBottom:20 
      },
})