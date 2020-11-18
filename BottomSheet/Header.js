import React, { useState } from "react";
import {View,TextInput,Text,Alert,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
import BottomSheetOriginal from 'reanimated-bottom-sheet';
import {choosePhotoFromLibrary, takePhotoFromCamera} from '../components/AddContact'

const bottomsheet = React.createRef();
// let req=true;
// export const FromCamera=()=>{
  
//   return true;
// }
//{req == true? false: null}
// export const FromLibrary=()=>{
// if(!req){
//   return true;
// }
// return false;
// }



  const styles = StyleSheet.create({
    nameTextInputStyle: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 3, 
      borderRadius:15, 
      flex:1, 
      padding:10  
    },
    phoneEmailTextInputStyle: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 3, 
      marginTop:10,
      borderRadius:15, 
      padding:10  
    },
    fullNameRow:{ 
      flexDirection: "row", 
      marginTop:20 
    },
    errorText:{
      color:'red' 
    },
    photoText: {
      marginTop: 10, 
      fontSize: 18, 
      fontWeight: 'bold'
    },
    photoIcon: {
      opacity: 0.7,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 10,
    },
    photoIconView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBackGround: {
      height: 100, 
      width: 100, 
      backgroundColor:'#666b68', 
      borderRadius: 45
    },
    imageBackGroundView: {
      height: 100,
      width: 100,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    commandButton: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginTop: 10,
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
  });