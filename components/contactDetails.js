import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getContact} from '../actions/contactAction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Communications from 'react-native-communications';

const ShowContact = ({route, navigation, store}) => {
  const {contactId} = route.params;
  const dispatch = useDispatch();
  const contact =
    store == null
      ? useSelector((state) => state.contactStore.contact)
      : store.getState().contactStore.contact[contactId];
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(image);

  useEffect(() => {
    if (contact != null) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setPhone(contact.phone);
      setEmail(contact.email);
      setImage(contact.image);
    }
    dispatch(getContact(contactId));
  }, [contact]);

  return (
    <View style={styles.topView}>
      <View style={styles.bottonSheetCenter}>
        <View style={styles.imageBackGroundView}>
          <ImageBackground
            source={{
              uri: image,
            }}
            style={styles.imageBackGround}
            imageStyle={{borderRadius: 45}}></ImageBackground>
        </View>
        <Text style={styles.photoText}>Photo</Text>
      </View>

      <View style={styles.photoDownGap}>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="account-box" color="#511e31" size={20} />
            <Text testID="name" style={styles.detailsText}>
              {firstName} {lastName}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#4b51fc" size={20} />
            <Text style={styles.detailsText}>{phone}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#f25c95" size={20} />
            <Text style={styles.detailsText}>{email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSectionOptions}>
        <TouchableOpacity
          testID="phonecall"
          style={styles.userInfoSectionDesign}
          onPress={() => Communications.phonecall(phone, true)}>
          <Icon name="phone" color="#111111" size={60} />
        </TouchableOpacity>
        <TouchableOpacity
          testID="textmessage"
          style={styles.userInfoSectionDesign}
          onPress={() => Communications.text(phone, null)}>
          <Icon name="message-text" color="#111111" size={60} />
        </TouchableOpacity>
        <TouchableOpacity
          testID="emailid"
          style={styles.userInfoSectionDesign}
          onPress={() => Communications.email([email], null, null, null, null)}>
          <Icon name="email" color="#111111" size={60} />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfoSection}>
        <TouchableOpacity
          testID="editcontact"
          style={styles.commandButton}
          onPress={() =>
            navigation.navigate('AddContact', {
              contactId: contactId,
              addorEdit: false,
            })
          }>
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
  bottonSheetCenter: {
    alignItems: 'center',
  },
  topView: {
    flex: 1,
  },
  photoText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageBackGround: {
    height: 100,
    width: 100,
    backgroundColor: '#666b68',
    borderRadius: 45,
  },
  imageBackGroundView: {
    height: 100,
    width: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  photoDownGap: {
    marginTop: 20,
  },
  detailsText: {
    color: '#777777',
    fontWeight: 'bold',
    marginLeft: 20,
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
  userInfoSectionOptions: {
    paddingHorizontal: 30,
    marginBottom: 25,
    flexDirection: 'row',
  },
  userInfoSectionDesign: {
    borderRadius: 15,
    backgroundColor: '#4b51fc',
    marginHorizontal: 30,
  },
});
