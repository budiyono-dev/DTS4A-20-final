import { combineReducers } from "redux";
import * as ActionType from "../actions/ActionType";
import AuthReducer from "./authReducer";
// import pageLeaveReducer from "./pageLeaveReducer";
// import PageReducer from "./PageReducer";
// import PermissionReducer from "./PermissionReducer";
// import ReportReducer from "./ReportReducer";
// import trainingMaterialReducer from "./trainingMaterialReducer";

const appReducer = combineReducers({
  auth: AuthReducer,
  // page: PageReducer,
  // permission: PermissionReducer,
  // pageLeave: pageLeaveReducer,
  // reportData: ReportReducer,
  // trainingMaterial: trainingMaterialReducer

  //TODO add redux for permission reducer
});

const rootReducer = (state, action) => {
  if (action.type === ActionType.RESET_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
