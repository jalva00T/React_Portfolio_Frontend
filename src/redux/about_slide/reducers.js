import initialState from "../store/initialState";
import * as Actions from "./actions";

export const picReducer = (state = initialState.pics, action) => {
    switch (action.type) {
        case Actions.FETCH_PICS:
            return {
                ...state,
                ...action.payload.pics,
                results: [...action.payload.pics.results],
            };
        default:
            return state;
    }
};