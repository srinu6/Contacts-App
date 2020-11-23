import {ListItem, Left, Right, Body, Thumbnail} from 'native-base';
import React from 'react';
import Avatar from 'react-native-user-avatar';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../actions/contactAction';
import {useNavigation} from '@react-navigation/native';
import {deletePopup} from '../constant/type';

const Contact = ({contact}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {firstname, lastname, phone, id, image} = contact;
  const avatarName = firstname.concat(' ').concat(lastname);
  const deleting = () => {
    Alert.alert('DELETING!', deletePopup, [
      {text: 'YES', onPress: () => dispatch(deleteContact(id))},
      {text: 'NO'},
    ]);
  };
  let avatarImage = null;
  if (image === null) {
    avatarImage = <Avatar name={avatarName} size={45} round={true} />;
  } else {
    const source = {uri: image};
    avatarImage = <Thumbnail source={source} style={styles.thumbStyle} />;
  }
  return (
    <>
      <ListItem avatar>
        <TouchableOpacity
          style={styles.detailsOpacity}
          onPress={() => navigation.navigate('Details', {contactId: id})}>
          <Left>{avatarImage}</Left>
          <Body style={styles.bodyStyle}>
            <Text style={styles.textStyle}>
              {firstname} {lastname}
            </Text>
            <Text style={styles.textColor}>{phone}</Text>
          </Body>
          <Right style={styles.iconStyle}>
            <IconEntypo name="trash" size={20} onPress={() => deleting()} />
            <IconEntypo
              name="info-with-circle"
              size={20}
              onPress={() => navigation.navigate('Details', {contactId: id})}
            />
            <IconEntypo
              name="pencil"
              size={20}
              onPress={() =>
                navigation.navigate('AddContact', {
                  contactId: id,
                  addorEdit: false,
                })
              }
            />
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
    flexDirection: 'row',
  },
  bodyStyle: {
    padding: 5,
  },
  iconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbStyle: {
    width: 50,
    height: 50,
  },
});
