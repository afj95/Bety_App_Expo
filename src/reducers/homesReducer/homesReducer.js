import {
    LOADING,
    DONE
} from "./homesActions";

const initialState = {
    data: [],
    isLoading: false
};

export const homesReducer = (state = initialState, action) => {
    // switch(action.type) {
    //     case LOADING:
    //         return {
    //             ...state,
    //             isLoading: true,
    //         };
    //     case DONE:
    //         return {
    //             ...state,
    //             isLoading: false,
    //         };
    //     default: 
    //     return state;
    // }
};