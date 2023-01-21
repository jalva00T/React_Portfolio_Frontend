import API from "/../API";
import { fetchPicsAction } from "/actions";

const api = new API();

export const fetchPics = (query = {}) => {
    return async (dispatch) => {
        return api.getProducts(query).then((pics) => {
            dispatch(fetchPicsAction(pics));

        });
    };
};