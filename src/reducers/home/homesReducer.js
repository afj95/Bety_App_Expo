import { homesState } from './homesState';
import {
    GET_HOMES_LOADING,
    GET_HOMES_SUCCESS,
    GET_HOMES_FAILED,

    ADD_HOME_LOADING,
    ADD_HOME_SUCCESS,
    ADD_HOME_FAILED,
    DELETE_HOME_FAILED,
} from './homesTypes';

const homesReducer = (state = homesState, action) => {
    switch(action.type) {
        case GET_HOMES_LOADING: {
            return {
                ...state,
                getHomesLoading: true
            };
        }
        case GET_HOMES_SUCCESS: {
            return {
                ...state,
                getHomesLoading: false,
                homes: action?.homes
            };
        }
        case GET_HOMES_FAILED: {
            return {
                ...state,
                getHomesLoading: false,
                error: action?.error,
            };
        }

        case ADD_HOME_LOADING: {
            return {
                ...state,
                addHomeLoading: false,
            }
        }
        case ADD_HOME_SUCCESS: {
            return {
                ...state,
                addHomeLoading: false,
                addHomeStatus: action?.status,
            }
        }
        case ADD_HOME_FAILED: {
            return {
                ...state,
                addHomeLoading: false,
                error: action?.error
            }
        }

        case DELETE_HOME_FAILED: {
            return {
                ...state,
                getHomesLoading: false,
                error: action?.error
            }
        }

        default: {
            return { ...state }
        }
    };
};

export default homesReducer;