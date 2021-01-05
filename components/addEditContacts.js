import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateContact, addContact, getContact} from '../actions/contactAction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {
  isValidName,
  isValidPhoneNumber,
  isValidEmail,
} from '../utils/validations';
import {
  FIRST_NAME_ERROR,
  LAST_NAME_ERROR,
  EMAIL_ERROR,
  PHONE_NUMBER_ERROR,
  CONTACT_ADDED,
} from '../constant/type';

function AddContact({route, navigation, store}) {
  const {contactId, addorEdit} = route.params;
  let contact =
    addorEdit === false
      ? useSelector((state) => state.contactStore.contact)
      : null;
  contact =
    store == null ? contact : store.getState().contactStore.contact[contactId];
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);

  if (!addorEdit) {
    useEffect(() => {
      if (contact !== null && contact !== undefined) {
        setFirstName(contact.firstName);
        setLastName(contact.lastName);
        setPhone(contact.phone);
        setEmail(contact.email);
        setImage(contact.image);
      }
      dispatch(getContact(contactId));
    }, [contact]);
  }

  const onUpdateContact = () => {
    const update_contact = {
      id: contactId,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      image: image,
    };
    const validEmailCheck = isValidEmail(email);
    const validFirstNameCheck = isValidName(firstName);
    const validLastNameCheck = isValidName(lastName);
    const validPhoneCheck = isValidPhoneNumber(phone);

    if (
      validEmailCheck &&
      validFirstNameCheck &&
      validLastNameCheck &&
      validPhoneCheck
    ) {
      dispatch(
        addorEdit === true
          ? addContact(update_contact)
          : updateContact(update_contact),
      );
      Alert.alert('Yeah!', CONTACT_ADDED, [{text: 'Ok'}]);
      navigation.navigate('Contacts');
    } else {
      if (!validFirstNameCheck) {
        Alert.alert('OOPS!', FIRST_NAME_ERROR);
      } else if (!validLastNameCheck) {
        Alert.alert('OOPS!', LAST_NAME_ERROR);
      } else if (!validPhoneCheck) {
        Alert.alert('OOPS!', PHONE_NUMBER_ERROR);
      } else if (!validEmailCheck) {
        Alert.alert('OOPS!', EMAIL_ERROR);
      }
    }
  };

  const bottomsheet = React.createRef();
  const animate = new Animated.Value(1);

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={styles.panelHeader}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose a Picture</Text>
      </View>
      <TouchableOpacity
        testID="uploadphoto"
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="libraryphoto"
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bottomsheet.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((response) => {
      setImage(response.path);
      //  console.log(response.path,'image')
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((response) => {
      setImage(response.path);
    });
  };

  const Title = () => {
    return (
      <View style={styles.headingView}>
        <TouchableOpacity
          testID="navigation"
          onPress={() => navigation.navigate('Contacts')}>
          <Icon name="arrow-left" size={30} />
        </TouchableOpacity>
        <Text style={styles.headingText}>
          {addorEdit === true ? 'Add Contact' : 'Edit Contact'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.viewFlex}>
      <BottomSheet
        ref={bottomsheet}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={animate}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(animate, 1.0)),
        }}>
        <ScrollView>
          <Title />

          <View style={styles.bottonSheetCenter}>
            <TouchableOpacity
              testID="bottomsheetsnaps"
              onPress={() => bottomsheet.current.snapTo(0)}>
              <View style={styles.imageBackGroundView}>
                <ImageBackground
                  source={{
                    uri: image,
                  }}
                  style={styles.imageBackGround}
                  imageStyle={styles.backGroundRadius}>
                  <View style={styles.photoIconView}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={styles.photoIcon}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <Text style={styles.photoText}>Photo</Text>
          </View>

          <View>
            <View style={styles.fullNameRow}>
              <TextInput
                testID="firstName"
                style={styles.nameTextInputStyle}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                onBlur={() => isValidName(firstName)}
              />
              <TextInput
                testID="lastName"
                style={styles.nameTextInputStyle}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                onBlur={() => isValidName(lastName)}
              />
            </View>
            <TextInput
              testID="phoneNumber"
              style={styles.phoneEmailTextInputStyle}
              placeholder="Phone Number"
              value={phone}
              keyboardType="phone-pad"
              onChangeText={(text) => setPhone(text)}
              onBlur={() => isValidPhoneNumber(phone)}
            />

            <TextInput
              testID="emailId"
              style={styles.phoneEmailTextInputStyle}
              placeholder="E-mail Address"
              value={email}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              onBlur={() => isValidEmail(email)}
            />

            <TouchableOpacity
              testID="submit"
              style={styles.commandButton}
              onPress={() => onUpdateContact()}>
              <Text style={styles.panelButtonTitle}>
                {addorEdit === true ? 'Create Contact' : 'Update Contact'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}

export default AddContact;

const styles = StyleSheet.create({
  nameTextInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 15,
    flex: 1,
    padding: 10,
  },
  viewFlex: {
    flex: 1,
  },
  bottonSheetCenter: {
    alignItems: 'center',
    marginTop: 10,
  },
  phoneEmailTextInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
  },
  fullNameRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
  },
  headingText: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  headingView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  photoText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
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
    backgroundColor: '#666b68',
    borderRadius: 45,
  },
  backGroundRadius: {
    borderRadius: 45,
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
