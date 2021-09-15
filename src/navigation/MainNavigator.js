import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loader from '../components/Loaders/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from "../i18next";
import {
  AuthStackScreens,
  HomeStackScreen,
  ProfileStuckScreen,
  StuffStuckScreen,
} from './Navigators';
import { ErrorScreen } from '../screens/ErrorScreen/ErrorScreen';
import { Provider, useSelector } from 'react-redux';
// import { store, persistor } from '../reducers';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import { navigationRef } from './RootNavigation';

import { store, persistor } from '../reducers/store';

export default MainNavigator = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        {/* Host for modalize */}
        <Host>
          <NavigationContainer ref={navigationRef}>
            <MainStackScreens />
          </NavigationContainer>
        </Host>
      </PersistGate>
    </Provider>
  )
}

const MainStack = createStackNavigator();
const MainStackScreens = () => {
  const [initialRouteName, setInitialRouteName] = useState('')
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);
  const [screenToShow, setScreenToShow] = useState(<Loader />);
  const user = useSelector((state) => state?.authReducer?.user)

  useEffect(() => {
    // Checking the token
    (async () => {
      await AsyncStorage.getItem('token', (error, result) => {
        if(error) {
          console.log(`error`, error)
          setInitialRouteName('Auth')
        } else if(result) { // In case of there is a token
          // console.log(`result`, result)
          if(user && Object.keys(user).length > 0) {
            setInitialRouteName('Home')
          } else {
            setInitialRouteName('Auth')  
          }
        } else { // In case of no token founded
          setInitialRouteName('Auth')
        }
      })
    })()
    
    // Initializing i18next library for localization.
    i18n.init()
    .then(() => {
      // console.log('initialized')
      setIsI18nInitialized(true)
    })
    .catch((error) => {
      // Restart the app.
      console.log('Error while initializing i18n ' + error);
      setIsI18nInitialized(false);
      setScreenToShow(<ErrorScreen />)
    });
  }, [])

  if(!initialRouteName || !isI18nInitialized) {
    setTimeout(() => {
      setScreenToShow(<ErrorScreen />)
    }, 5000)
    return screenToShow
  } else {
    return (
      <>
        <MainStack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{ headerShown: false }}>

          <MainStack.Screen name='Home'    component={HomeStackScreen} />

          <MainStack.Screen name="Profile" component={ProfileStuckScreen} />

          <MainStack.Screen name="Stuff"   component={StuffStuckScreen} />
          
          <MainStack.Screen name="Auth"    component={AuthStackScreens} />

        </MainStack.Navigator>
      </>
    )
  }
}