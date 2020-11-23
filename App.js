/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Contacts from './components/contactsList';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddContact from './components/addEditContacts';
import ShowContact from './components/contactDetails';
const Stack = createStackNavigator();
function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Contacts">
            <Stack.Screen
              name="Contacts"
              component={Contacts}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddContact"
              component={AddContact}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Details"
              component={ShowContact}
              options={{title: 'Show Contact'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
