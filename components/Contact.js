import { ListItem, Left, Right, Body, Thumbnail } from "native-base";
import React from "react";
import Avatar from 'react-native-user-avatar';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from "react-redux";
import { deleteContact } from "../actions/contactAction";
import { useNavigation } from "@react-navigation/native";
const Contact = ({contact}) => {
  const navigation= useNavigation();
  const dispatch = useDispatch();
  const { firstname, lastname, phone, id, image } = contact;
  const AvatarFirstName= firstname;
  const AvatarLastName= lastname;
  const AvatarName= AvatarFirstName.concat(" ").concat(AvatarLastName);
  const deleting=()=>{
    Alert.alert('DELETING!', 'Are you sure, you want yo delete?', [
      {text: 'YES', onPress:() => dispatch(deleteContact(id))},
      {text: 'NO'}
    ])
  }
  let AvatarImage=null;
  if(image === null ){
    AvatarImage= <Avatar name={AvatarName} size={45} round={true} /> 
  }else{
    const source={uri: image}
    AvatarImage= <Thumbnail source={source} style={styles.thumbStyle} />
  }
  return ( 
  <>
      <ListItem avatar>
            <TouchableOpacity style={styles.detailsOpacity} onPress={() => navigation.navigate('Details', {id: id} )}>
                <Left> 
                  {AvatarImage}
                </Left>
                <Body style={styles.bodyStyle}>
                  <Text style={styles.textStyle}>{firstname} {lastname}</Text>
                  <Text style={styles.textColor}>{phone}</Text>
                </Body>
                <Right style={styles.iconStyle}>
                  <IconEntypo name="trash" size={20} onPress={() => deleting()} />
                  <IconEntypo name="info-with-circle" size={20} onPress={() => navigation.navigate('Details', {id: id} )} /> 
                  <IconEntypo name="pencil" size={20} onPress={() => navigation.navigate('AddContact', {id: id, boolvalue: false} )} /> 
                </Right>
            </TouchableOpacity>
      </ListItem>     
  </>   
  );
};
export default Contact;

const styles = StyleSheet.create({
  bottomView: {
    width: '30%',
    height: 40,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 30,
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
  },
  textColor: {
    fontSize: 16,
    color: 'red',
  },
  detailsOpacity: { 
    flexDirection:'row'
  },
  bodyStyle: {
    padding:5
  },
  iconStyle: { 
    flexDirection:'row', 
    alignItems:'center'
  },
  thumbStyle:{
    width:50, 
    height:50
  }
});