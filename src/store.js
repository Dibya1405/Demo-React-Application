// import react from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
