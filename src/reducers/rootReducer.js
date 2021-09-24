import { combineReducers } from "redux";
// Reducers
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';
import homesReducer from './home/homesReducer';

const rootReducer = combineReducers({
    // the reducers
    authReducer: authReducer,
    userReducer: userReducer,
    homesReducer: homesReducer,
});

export default rootReducer;