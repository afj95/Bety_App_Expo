import {
    GET_HOMES_LOADING,
    GET_HOMES_SUCCESS,
    GET_HOMES_FAILED,
    
    ADD_HOME_LOADING,
    ADD_HOME_SUCCESS,
    ADD_HOME_FAILED,
    DELETE_HOME_FAILED,
} from './homesTypes';

import {
    getUserHomesRequest,
    addHomeRequest,
    deleteHomeRequest
} from '../../services/homesService';

const getUserHomes = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_HOMES_LOADING });

            const getUserHomesResponse = await getUserHomesRequest();

            dispatch({
                type: GET_HOMES_SUCCESS,
                homes: getUserHomesResponse?.data?.data?.homes
            })
        } catch (error) {
            dispatch({ type: GET_HOMES_FAILED, error: error.message });
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
            dispatch({ type: ADD_HOME_FAILED, error: error });
        }
    }
}

const deleteHome = async (homeId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_HOMES_LOADING });

            const deleteHomeResponse = await deleteHomeRequest(homeId);

            dispatch({ type: GET_HOMES_SUCCESS })
            dispatch(getUserHomes());
        } catch (error) {
            // console.log(`error`, error)
            dispatch({ type: DELETE_HOME_FAILED, error: error });
        }
    } 
}

export {
    getUserHomes,
    addNewHome,
    deleteHome
}