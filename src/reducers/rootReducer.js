import { combineReducers } from "redux";
// Reducers
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    // the reducers
    authReducer: authReducer,
    userReducer: userReducer,
});

export default rootReducer;