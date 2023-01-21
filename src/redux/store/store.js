import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, legacy_createStore as reduxCreateStore } from "redux";



import { picReducer } from "../about_slide/reducers";

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            pics: picReducer,
        }),
        compose(
            applyMiddleware(routerMiddleware(history), thunk),
            // DEBUG MODE
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
}
