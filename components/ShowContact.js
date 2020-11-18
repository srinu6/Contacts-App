import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact} from "../actions/contactAction";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import {View,Text,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native';
const ShowContact = ({route, navigation}) => {
  const {id} = route.params; 
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(image);
  
  useEffect(() => {
    if (contact != null) {
      setFirstName(contact.firstname);
      setLastName(contact.lastname);
      setPhone(contact.phone);
      setEmail(contact.email);
      setImage(contact.image);
    }
    dispatch(getContact(id));
  }, [contact]);

  return (
    <View style={styles.topView}>
      <View style={styles.bottonSheetCenter}>        
            <View
              style={styles.imageBackGroundView}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={styles.imageBackGround}
                imageStyle={{borderRadius: 45}}>            
              </ImageBackground>
            </View>        
          <Text style={styles.photoText}>
            Photo
          </Text>
        </View>

      <View style={styles.photoDownGap}>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="account-box" color="#777777" size={20}/>
          <Text style={styles.detailsText}>{firstname} {lastname}</Text>
        </View>
        <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20}/>
            <Text style={styles.detailsText}>{phone}</Text>
        </View>
        <View style={styles.row}>
            <Icon name="email" color="#777777" size={20}/>
            <Text style={styles.detailsText}>{email}</Text>
        </View>
      </View>
      </View>
      <View style={styles.userInfoSection}>
      <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate('AddContact', {id: id, boolvalue: false} )}>
          <Text style={styles.panelButtonTitle}>Edit Contact</Text>
      </TouchableOpacity>
      </View>
    </View>       
  );
};
export default ShowContact;

const styles = StyleSheet.create({ 
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  bottonSheetCenter:{
    alignItems: 'center'
  },
  topView:{
    flex:1
  },
  photoText: {
    marginTop: 10, 
    fontSize: 18, 
    fontWeight: 'bold'
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
    marginTop: 20,
  },
  photoDownGap:{ 
    marginTop:20 
  },
  detailsText:{
    color:"#777777", 
    marginLeft: 20
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  
});