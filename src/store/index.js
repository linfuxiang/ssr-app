import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducer";

const reducer = combineReducers({
  info: mainReducer,
});

const getStore = () => createStore(reducer, applyMiddleware(thunk));

const getClientStore = () => {
  const defaultState = window._defaultState ? window._defaultState : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};

export { getStore, getClientStore };
