import { LOADING, DONE } from "./mainActions";

const initialState = {
    data: [],
    isLoading: false
};

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case DONE:
            return {
                ...state,
                isLoading: false,
            };
        default: 
            return state;
    };
};