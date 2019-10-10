import { combineReducers } from "redux";
import periphReducer from "./peripherals/peripherals.reducer";
import mapperReducer from "./mapper/mapper.reducer";

const rootReducer = combineReducers({
    mapperState: mapperReducer,
    peripheralsState: periphReducer
});

export default rootReducer;