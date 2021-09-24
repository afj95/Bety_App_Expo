import { homesState } from './homesState';
import {
    GET_HOMES_LOADING,
    GET_HOMES_SUCCESS,
    GET_HOMES_FAILED,

    ADD_HOME_LOADING,
    ADD_HOME_SUCCESS,
    ADD_HOME_FAILED,

    DELETE_HOME_FAILED,

    SEARCH_MEMBER_LOADING,
    SEARCH_MEMBER_SUCCESS,
    SEARCH_MEMBER_FAILED,
    RESET_SEARCH_LIST,

    ADD_MEMBER_LOADING,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_FAILED,
    RESET_ADD_MEMBER_STATUS
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
                homesList: action?.homesList
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

        case SEARCH_MEMBER_LOADING: {
            return {
                ...state,
                searchMemberLoading: true
            }
        }
        case SEARCH_MEMBER_SUCCESS: {
            return {
                ...state,
                searchMemberLoading: false,
                searchMemberList: action?.searchMemberList
            }
        }
        case SEARCH_MEMBER_FAILED: {
            return {
                ...state,
                searchMemberLoading: false
            }
        }
        case RESET_SEARCH_LIST: {
            return {
                ...state,
                searchMemberList: null,
                searchMemberLoading: false,
            }
        }

        case ADD_MEMBER_LOADING: {
            return {
                ...state,
                addMemberLoading: true,
            }
        }
        case ADD_MEMBER_SUCCESS: {
            return {
                ...state,
                addMemberLoading: false,
                addMemberStatus: action?.addMemberStatus
            }
        }
        case ADD_MEMBER_FAILED: {
            return {
                ...state,
                addMemberStatus: action?.addMemberStatus
            }
        }
        case RESET_ADD_MEMBER_STATUS: {
            return {
                ...state,
                addMemberStatus: '',
            }
        }

        default: {
            return { ...state }
        }
    };
};

export default homesReducer;