import { authState } from './auhtState';
import {
    RESET_AUTH,
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_FAILED,
    LOGOUT,
} from './authTypes';

const authReducer = (state = authState, action) => {
    switch(action.type) {
        case RESET_AUTH: {
            return {
                ...state,
                authLoading: '',
                authStatus: '',
            }
        }
        case AUTH_LOADING: {
            return {
                ...state,
                authLoading: true,
            };
        }
        case AUTH_SUCCESS: {
            return {
                ...state,
                authLoading: false,
                user: action?.user,
                authStatus: action?.status,
            };
        }
        case AUTH_FAILED: {
            return {
                ...state,
                authLoading: false,
                authStatus: action?.status
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: '',
                authLoading: '',
                authStatus: '',
            }
        }
        default: {
            return { ...state }
        }
    };
};

export default authReducer;