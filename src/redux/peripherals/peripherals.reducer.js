import {PeripheralsTypes} from "./peripherals.types";

const initialState = {
    selectedPeripheral: null
};

const periphReducer = (state=initialState, action) => {
    switch (action.type) {
        case PeripheralsTypes.SET_SELECTED_PERIPHERAL:
            return {
                ...state,
                selectedPeripheral: action.payload
            };
        default:
            return {...state};
    }
};

export default periphReducer;