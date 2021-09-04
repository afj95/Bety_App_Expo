import React from "react";
// Reducers
import {
  authReducer
} from "./src/reducers";
//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from 'redux-promise';
// import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from "redux-devtools-extension";
import FlashMessage from 'react-native-flash-message';
// import NotificationsConstructor from './src/components/notifications/constructor'
// Navigator
import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import { navigationRef } from './src/navigation/RootNavigation';
import { MainStackScreens } from "./src/navigation/MainNavigator";
import { StatusBar } from "expo-status-bar";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import Loader from "./src/components/Loaders/Loader";

const rootReducer = combineReducers({
  // the reducers
  auth: authReducer,  
});

const persistConfig = {
  key: 'bidMe-v1.0.2',
  storage: AsyncStorage,
  stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware, ReduxThunk))
);

const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Host>
            {/* <NotificationsConstructor /> */}
            <StatusBar style={'auto'} />
            <MainStackScreens />
            <FlashMessage position={'top'} />
          </Host>
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}
