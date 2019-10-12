import signalsActionTypes from "./signals.types";

const initialState = {
    selectedSignals: []
};

const signalsReducer = (state=initialState, action) => {
    switch(action.type) {
        case signalsActionTypes.ADD_SELECTED_SIGNAL:
            return {
                ...state,
                selectedSignals: state.selectedSignals.includes(action.payload) ? [...state.selectedSignals] : [...state.selectedSignals, action.payload]
            };
        case signalsActionTypes.REMOVE_SELECTED_SIGNAL:
            return {
                ...state,
                selectedSignals: state.selectedSignals.filter((signal) => signal !== action.payload)
            };
        default:
            return state;
    }
};

export default signalsReducer;