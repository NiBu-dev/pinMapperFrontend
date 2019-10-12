import { createSelector } from "reselect";
const selectSignals = state => state.signalsState;


export const selectChosenSignals = createSelector(
    [selectSignals],
    state => state ? state.selectedSignals : null
);
