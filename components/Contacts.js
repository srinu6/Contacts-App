import { TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Item, Input, Icon, List, Text, Button } from 'native-base';
import {StyleSheet} from 'react-native';
import React,{useState} from "react";
import { ScrollView } from 'react-native';
import { useSelector } from "react-redux";
import Contact from "./Contact";
const Device = require('react-native-device-detection');

function Contacts({navigation}) {
  let idr=Math.random();
  let differentphonestyle=null;
  let SearchedContacts=null;
  const contacts = useSelector((state) => state.contact.contacts);
  const [search, setsearch] = useState("");
  if(search===""){
    SearchedContacts= contacts.map((contact) => (
                       <Contact contact={contact} key={contact.id} />
                      ))
  }else{
    SearchedContacts = contacts.filter((contact) => {
                        const contactLowercase=(contact.firstname+' '+contact.lastname).toLowerCase();
                        const searchLowercase = search.toLowerCase();
                        return contactLowercase.indexOf(searchLowercase)> -1
                      })
                      .map((contact) => (
                        <Contact contact={contact} key={contact.id} />
                      ))
  }
    const LogoTitle=()=>{
      return(
        <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search"
                       value={search} 
                       onChangeText={(text)=>setsearch(text)} 
                       keyboardType='ascii-capable'  
                       />
                <Icon name="ios-people" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
        </Header>
      )
    }
    if(Device.isIphoneX){
      differentphonestyle = <TouchableOpacity
                              style={styles.foriphoneX}
                              onPress={() => navigation.navigate('AddContact', {id: idr, boolvalue: true} )}>
                              <Text style={styles.bottonStyle}>
                                Add new Contact
                              </Text>
                            </TouchableOpacity>
    }else{
      differentphonestyle = <TouchableOpacity
                              style={styles.othenThanIphoneX}
                              onPress={() => navigation.navigate('AddContact', {id: idr, boolvalue: true} )}>
                              <Text style={styles.bottonStyle}>
                                Add new Contact
                              </Text>
                            </TouchableOpacity>
    }  
    return (
      <>
         <LogoTitle />
          <ScrollView>
              <List>
                      {SearchedContacts}
              </List>
          </ScrollView>
          {differentphonestyle}
      </>
    );
}
 
export default Contacts;

const styles = StyleSheet.create({ 
  othenThanIphoneX:{
    padding:10,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10
  },
  foriphoneX:{
    padding:20,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10
  },
  bottonStyle:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  }

})