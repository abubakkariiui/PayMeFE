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
import {
  loginFranchise,
  registerFranchise,
  updateFranchiseProfile,
} from "./actions/franchiseActions";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  agentLogin: agentLoginReducer,
  agentRegister: agentRegisterReducer,
  agentUpdate: agentUpdateReducer,
  fRegister: registerFranchise,
  franchiseLogin: loginFranchise,
  fUpdate: updateFranchiseProfile,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const agentInfoFromStorage = localStorage.getItem("agentInfo")
  ? JSON.parse(localStorage.getItem("agentInfo"))
  : null;

const franchiseInfoFromStorage = localStorage.getItem("testInfo")
  ? JSON.parse(localStorage.getItem("testInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  agentLogin: { agentInfo: agentInfoFromStorage },
  franchiseLogin: { testInfo: franchiseInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
