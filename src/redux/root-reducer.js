import { combineReducers } from "redux";
import periphReducer from "./peripherals/peripherals.reducer";
import mapperReducer from "./mapper/mapper.reducer";
import signalsReducer from "./signals/signals.reducer";

const rootReducer = combineReducers({
    mapperState: mapperReducer,
    peripheralsState: periphReducer,
    signalsState: signalsReducer
});

export default rootReducer;