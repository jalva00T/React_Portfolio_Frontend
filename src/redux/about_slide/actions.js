export const FETCH_PICS = "FETCH_PICS";
export const fetchPicsAction = (pics) => {
    return {
        type: FETCH_PICS,
        payload: { pics }
    };
};