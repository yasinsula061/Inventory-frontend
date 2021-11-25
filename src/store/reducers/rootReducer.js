import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import authReducer from './authReducer';

let rootReducer = combineReducers({ 
    auth: authReducer,
    mainReducer,

});

export default rootReducer;
