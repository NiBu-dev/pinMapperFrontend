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


export const selectMappingResultWithPeripheral = createSelector(
    [selectMappingResult, selectCurrentPeripheral, selectUcData],
    (selectMappingResult, selectCurrentPeripheral, selectUcData) => {
    let mappingResult = {};
        for (let majorGroup in selectUcData) {
            if (Object.keys(selectUcData[majorGroup]).includes(selectCurrentPeripheral)) {
                for (let signal of selectUcData[majorGroup][selectCurrentPeripheral]) {
                    if (selectMappingResult) {
                        if (Object.keys(selectMappingResult).includes(signal['primarySignalName'])) {
                            let keyName = signal['primarySignalName'];
                            mappingResult[selectCurrentPeripheral] = {};
                            mappingResult[selectCurrentPeripheral][keyName] = selectMappingResult[signal['primarySignalName']];
                        }
                    }
                }
            }
        }
        return mappingResult
    }
)