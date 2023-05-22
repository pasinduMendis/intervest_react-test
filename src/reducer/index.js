import reducer from "./getDataReducer";
import reducerDark from "./darModeReduce";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    result:reducer,
    darkMode:reducerDark,
})

export default rootReducer 