import { initialState } from './auhtState';
import {
    RESET_AUTH,
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_FAILED,
    LOGOUT,
} from './authTypes';

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESET_AUTH: {
            return {
                ...state,
                isLoading: '',
                status: '',
            }
        }
        case AUTH_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case AUTH_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action?.user,
                status: action?.status,
            };
        }
        case AUTH_FAILED: {
            return {
                ...state,
                isLoading: false,
                status: action?.status
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: '',
                isLoading: '',
                status: '',
            }
        }
        default: {
            return {
                ...state
            }
        }
    };
};