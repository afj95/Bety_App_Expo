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

import {
    getUserHomesRequest,
    addHomeRequest,
    deleteHomeRequest,
    searchMemberRequest,
    addMemberRequest
} from '../../services/homesService';

const getUserHomes = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_HOMES_LOADING });

            const getUserHomesResponse = await getUserHomesRequest();

            dispatch({
                type: GET_HOMES_SUCCESS,
                homesList: getUserHomesResponse?.data?.data?.homes
            })
        } catch (error) {
            dispatch({ type: GET_HOMES_FAILED, getHomesError: error.message });
        }
    }
}

const addNewHome = async (homeName) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ADD_HOME_LOADING })

            const addHomeResponse = await addHomeRequest(homeName);

            dispatch({ type: ADD_HOME_SUCCESS, status: addHomeResponse?.status });
            dispatch(getUserHomes());

        } catch (error) {
            dispatch({ type: ADD_HOME_FAILED, addHomeError: error });
        }
    }
}

const deleteHome = async (homeId) => {
    return async (dispatch) => {
        try {
            // dispatching the same types as getting homes
            // cuz in the same screen no other screen will affect.
            dispatch({ type: GET_HOMES_LOADING });

            const deleteHomeResponse = await deleteHomeRequest(homeId);

            dispatch({ type: GET_HOMES_SUCCESS })
            dispatch(getUserHomes());
        } catch (error) {
            dispatch({ type: DELETE_HOME_FAILED, error: error });
        }
    } 
}

const searchMember = async (searchValue) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SEARCH_MEMBER_LOADING });

            const searchMemberResponse = await searchMemberRequest(searchValue);

            dispatch({
                type: SEARCH_MEMBER_SUCCESS,
                searchMemberList: searchMemberResponse?.data?.data?.members
            })

        } catch (error) {
            dispatch({ type: SEARCH_MEMBER_FAILED });
        }
    }
}

const resetSearchList = () => {
    return async (dispatch) => {
        dispatch({ type: RESET_SEARCH_LIST })
    }
}

const addMember = (id, username) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ADD_MEMBER_LOADING });

            const addMemberResponse = await addMemberRequest(id, username);

            dispatch({ type: ADD_MEMBER_SUCCESS, addMemberStatus: addMemberResponse?.status })

        } catch (error) {
            dispatch({ type: ADD_MEMBER_FAILED, addMemberStatus: error }); //, addMemberStatus: error });
        }
    }
}

const resetAddMemberStatus = () => {
    return async (dispatch) => {
        dispatch({ type: RESET_ADD_MEMBER_STATUS });
    }
}

export {
    getUserHomes,
    addNewHome,
    deleteHome,
    searchMember,
    resetSearchList,
    addMember,
    resetAddMemberStatus
}