import React, { useEffect, useState } from "react";
import { I18nManager as RNI18nManager, } from 'react-native';
// Reducers
import {
  authReducer
} from "./src/reducers";
//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import FlashMessage from 'react-native-flash-message';
// import NotificationsConstructor from './src/components/notifications/constructor'
// Navigator
import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import * as Updates from 'expo-updates';
import { navigationRef } from './src/navigation/RootNavigation';
import { AuthStackScreens, HomeStackScreen } from './src/navigation/MainNavigator';
import i18n from "./src/i18next";
import Loader from "./src/components/Loaders/Loader";
import { StatusBar } from "expo-status-bar";
// import AppLoading from "expo-app-loading";

const rootReducer = combineReducers({
  // the reducers
  auth: authReducer,  
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default function App() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    // Initializing i18next library for localization.
    i18n.init()
    .then(() => setIsI18nInitialized(true))
    .catch((error) => {
      // TODO: Show error message to user.
      // Restart the app.
      console.log('Error while initializing i18n ' + error);
      setIsI18nInitialized(false)
    });
  })

  if(!isI18nInitialized) {
    return <Loader />
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Host>
            {/* <NotificationsConstructor /> */}
            <StatusBar style={'auto'} />
            <AuthStackScreens />
            {/* <HomeStackScreen /> */}
            <FlashMessage position={'top'} />
          </Host>
        </NavigationContainer>
      </Provider>
    );
  }
}
