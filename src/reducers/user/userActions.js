import { changeProfileImageRequest } from '../../services/userService';
import {
    USER_LOADING,
    USER_SUCCESS,
    USER_FAILED,
    RESET_USER
} from './userTypes';

const addProfileImage = (params) => {
    return async (dispatch) => {
        try {
            dispatch({ type: USER_LOADING });

            const addImageResponse = await changeProfileImageRequest(params);
            // console.log(`addImageResponse`, addImageResponse)

            dispatch({
                type: USER_SUCCESS,
                userStatus: addImageResponse?.status,
            });

        } catch(error) {
            dispatch({
                type: USER_FAILED,
                userStatus: error,
            });
        }
    }
}

const resetUser = () => {
    return async (dispatch) => {
        dispatch({ type: RESET_USER })
    }
}

export {
    addProfileImage,
    resetUser
}