import { createSelector } from "reselect";
import { selectCurrentPeripheral } from "../peripherals/peripherals.selectors";
const selectMapper = state => state.mapperState;


export const selectUcData = createSelector(
    [selectMapper],
    state => state ? state.ucData : null
);

export const selectPortsBySignals = createSelector(
    [selectMapper],
    state => state ? state.portsBySignal : null
);

export const selectMappingResult = createSelector(
    [selectMapper],
    state => state ? state.mapping : null
);

export const selectMappingResultObject = createSelector(
    [selectMapper],
    state => state ? state.mappingObject : null
);
