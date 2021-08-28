import {
    loginRequest
} from '../../services/auhtService';
import {
    RESET_AUTH,
    AUTH_FAILED,
    AUTH_LOADING,
    AUTH_SUCCESS
} from './authTypes';

const login = (username, password) => {
    return async (dispatch) => {
        try {
            dispatch({ type: AUTH_LOADING });
    
            const loginResponse = await loginRequest(username, password);

            dispatch({ type: AUTH_SUCCESS, user: loginResponse});
            
        } catch (error) {
            console.log(`error`, error)
            dispatch({ type: AUTH_FAILED });
        }
    }
}

const resetAuth = () => {
    return { type: RESET_AUTH }
}

export {
    login,
    resetAuth
}