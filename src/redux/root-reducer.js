import { combineReducers } from "redux";
import periphReducer from "./peripherals/peripherals.reducer";

const rootReducer = combineReducers({
    peripheralsState: periphReducer
});

export default rootReducer;