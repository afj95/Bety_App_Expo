import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import promiseMiddleware from "redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from './rootReducer';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

const persistConfig = {
    key: 'bidMe-v1.0.2',
    // key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware, thunk))
);

const persistor = persistStore(store);

export { store, persistor }