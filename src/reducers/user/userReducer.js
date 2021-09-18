import { userState } from './userState';
import {
    USER_LOADING,
    USER_SUCCESS,
    USER_FAILED,
    RESET_USER
} from './userTypes';

const userReducer = (state = userState, action) => {
    switch(action.type) {
        case USER_LOADING: {
            return {
                ...state,
                userLoading: true,
            };
        }
        case USER_SUCCESS: {
            return {
                ...state,
                userLoading: false,
                userStatus: action?.status,
                homes: action?.homes
            }
        }
        case USER_FAILED: {
            return {
                ...state,
                userLoading: false,
                userStatus: action?.status
            }
        }
        case RESET_USER: {
            return {
                ...state,
                userLoading: '',
                userStatus: ''
            }
        }
        default: {
            return { ...state }
        }
    };
};

export default userReducer;

// import { userState } from './userState';
// import {
//     USER_LOADING,
//     USER_SUCCESS,
//     USER_FAILED,
//     RESET_USER
// } from './userTypes';

// const userReducer = (state = userState, action) => {
//     switch(action.type) {
//         default: {
//             return { ...state }
//         }
//     };
// };

// export default userReducer;