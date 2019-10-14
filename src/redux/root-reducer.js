import { combineReducers } from "redux";
import periphReducer from "./peripherals/peripherals.reducer";
import mapperReducer from "./mapper/mapper.reducer";
import signalsReducer from "./signals/signals.reducer";
import loggerReducer from "./logger/logger.reducer";

const rootReducer = combineReducers({
    mapperState: mapperReducer,
    peripheralsState: periphReducer,
    signalsState: signalsReducer,
    loggerState: loggerReducer
});

export default rootReducer;