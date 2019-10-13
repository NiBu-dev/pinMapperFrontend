import { createSelector } from "reselect";
const selectMapper = state => state.mapperState;


export const selectUcData = createSelector(
    [selectMapper],
    state => state ? state.ucData : null
);

export const selectPortsBySignals = createSelector(
    [selectMapper],
    state => state ? state.portsBySignal : null
);