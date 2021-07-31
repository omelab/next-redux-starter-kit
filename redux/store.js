import {createStore,  compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

const middleware = [thunk]; 
const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
// const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
// export default store;

export const wrapper = createWrapper(makeStore); 