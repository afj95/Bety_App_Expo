import React from "react";
// Reducers
import { mainReducer } from "./src/reducers";
//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import NotificationsConstructor from './src/components/notifications/constructor'
// Navigator
import { AppNavigator } from "./src/navigation";
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
  return (
    <Provider store={store}>
      {/* <Notifications /> */}
      <AppNavigator />
    </Provider>
  );
}
