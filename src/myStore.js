import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { middleware } from "./navigation/containers";
// const middleware = createReactNavigationReduxMiddleware(state => state.nav);

let logger = createLogger({
  timestamps: true,
  duration: true
});

const store = createStore(rootReducer, applyMiddleware(thunk, middleware));

export default store;
