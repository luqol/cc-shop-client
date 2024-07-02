import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import initialState from './initState';
import { thunk } from "redux-thunk";
import productsReducer from "./productsRedux";



const subreducers = {
    products: productsReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;