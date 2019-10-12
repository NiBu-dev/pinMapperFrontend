import signalActionTypes from "./signals.types";

export const addSelectedSignal = signal => {
    return {
        type: signalActionTypes.ADD_SELECTED_SIGNAL,
        payload: signal
    }
};

export const removeSelectedSignal = signal => {
    return {
        type: signalActionTypes.REMOVE_SELECTED_SIGNAL,
        payload: signal
    }
};

