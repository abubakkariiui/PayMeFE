import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  adminLoginReducer,
  adminRegisterReducer,
  adminUpdateReducer,
} from "./reducers/adminReducers";
import {
  agentLoginReducer,
  agentRegisterReducer,
  agentUpdateReducer,
} from "./reducers/agentReducers";
import {
  franchiseLoginReducer,
  franchiseRegisterReducer,
  franchiseUpdateReducer,
} from "./reducers/franchiseReducers";
import {
  accountantLoginReducer,
  accountantRegisterReducer,
  accountantUpdateReducer,
} from "./reducers/accountantReducers";
import {
  csrLoginReducer,
  csrRegisterReducer,
  csrUpdateReducer,
} from "./reducers/csrReducers";
import {
  handlerLoginReducer,
  handlerRegisterReducer,
  handlerUpdateReducer
} from "./reducers/handlerReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  adminLogin: adminLoginReducer,
  AdminRegister: adminRegisterReducer,
  adminUpdate: adminUpdateReducer,
  agentLogin: agentLoginReducer,
  agentRegister: agentRegisterReducer,
  agentUpdate: agentUpdateReducer,
  franchiseLogin: franchiseLoginReducer,
  franchiseRegister: franchiseRegisterReducer,
  franchiseUpdate: franchiseUpdateReducer,
  accountantLogin: accountantLoginReducer,
  accountantRegister: accountantRegisterReducer,
  accountantUpdate: accountantUpdateReducer,
  csrLogin: csrLoginReducer,
  csrRegister: csrRegisterReducer,
  csrUpdate: csrUpdateReducer,
  handlerLogin: handlerLoginReducer,
  handlerRegister: handlerRegisterReducer,
  handlerUpdate: handlerUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const agentInfoFromStorage = localStorage.getItem("agentInfo")
  ? JSON.parse(localStorage.getItem("agentInfo"))
  : null;
const franchiseInfoFromStorage = localStorage.getItem("fInfo")
  ? JSON.parse(localStorage.getItem("fInfo"))
  : null;
const accountantInfoFromStorage = localStorage.getItem("accountantInfo")
  ? JSON.parse(localStorage.getItem("accountantInfo"))
  : null;
const csrInfoFromStorage = localStorage.getItem("csrInfo")
  ? JSON.parse(localStorage.getItem("csrInfo"))
  : null;
const handlerInfoFromStorage = localStorage.getItem("handlerInfo")
  ? JSON.parse(localStorage.getItem("handlerInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminLogin: { adminInfo: adminInfoFromStorage },
  agentLogin: { agentInfo: agentInfoFromStorage },
  franchiseLogin: { fInfo: franchiseInfoFromStorage },
  accountantLogin: { accountantInfo: accountantInfoFromStorage },
  csrLogin: { csrInfo: csrInfoFromStorage },
  handlerLogin: { handlerInfo: handlerInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
