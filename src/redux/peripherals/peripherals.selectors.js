import { createSelector } from "reselect";
const selectPeriph = state => state.peripheralsState;


export const selectCurrentPeripheral = createSelector(
    [selectPeriph],
    state => state ? state.selectedPeripheral : null
);
