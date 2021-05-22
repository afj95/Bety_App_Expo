import React, { useEffect, useState } from "react";
import { I18nManager as RNI18nManager, } from 'react-native';
// Reducers
import { mainReducer } from "./src/reducers";
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
import { navigationRef } from './src/navigation/RootNavigation';
import { HomeStackScreen } from './src/navigation/StoneNavigator';
import i18n from "./src/i18next";
// import AppLoading from "expo-app-loading";

const rootReducer = combineReducers({
  // the reducers
  main: mainReducer,
  // TODO: Create home reducer
  // home: homesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default function App() {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    i18n.init()
      .then(() => {
        const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';

        // RN doesn't always correctly identify native
        // locale direction, so we force it here.
        if (i18n.dir !== RNDir) {
            const isLocaleRTL = i18n.dir === 'RTL';

            RNI18nManager.forceRTL(isLocaleRTL);

            // RN won't set the layout direction if we
            // don't restart the app's JavaScript.
            // Updates.reloadFromCache();
        }

        setIsI18nInitialized(true)
    })
    .catch((error) => console.warn(error));
  })

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Host>
          <HomeStackScreen />
          <FlashMessage position={'top'} />
        </Host>
      </NavigationContainer>
    </Provider>
  );
}
