import { createStore, applyMiddleware } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "react-redux";
import rootReducer from "./reducers";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
