import { initialState } from './auhtState';
import {
    RESET_AUTH,
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_FAILED,
} from './authTypes';

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESET_AUTH:
            return {
                ...state,
                isLoading: '',
                error: ''
            }
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action?.user?.data?.data?.user,
                error: false
            };
        case AUTH_FAILED:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default: 
            return state;
    };
};