import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  agentLoginReducer,
  agentRegisterReducer,
  agentUpdateReducer,
} from "./reducers/agentReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  agentLogin: agentLoginReducer,
  agentRegister: agentRegisterReducer,
  agentUpdate: agentUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


  const agentInfoFromStorage = localStorage.getItem("agentInfo")
  ? JSON.parse(localStorage.getItem("agentInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  agentLogin: {agentInfo: agentInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
