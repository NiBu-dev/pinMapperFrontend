import {PeripheralsTypes} from "./peripherals.types";

export const setSelectedPeripheral = peripheral => {
    return {
        type: PeripheralsTypes.SET_SELECTED_PERIPHERAL,
        payload: peripheral
    }
};
