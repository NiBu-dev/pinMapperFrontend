import { mapperTypes } from "./mapper.types";

const initialState = {
    ucData: null,
    portsBySignal: null,
    mapping: null,
    mappingObject: []
};

const transformData = (oldData) => {
    let signalsTransformedData = {};
    for (let majorGroup of Object.keys(oldData)) {
        for (let minorGroup of Object.keys(oldData[majorGroup])) {
            for (let signal of oldData[majorGroup][minorGroup]) {
                if (!Object.keys(signalsTransformedData).includes(signal.primarySignalName)) {
                    signalsTransformedData[signal.primarySignalName] = [signal.port];
                } else {
                    signalsTransformedData[signal.primarySignalName].push(signal.port)
                }
            }
        }
    }
    return signalsTransformedData;
};

const mapperReducer = (state = initialState, action) => {
    switch (action.type) {
        case mapperTypes.SET_INIT_UC_DATA:
            return {
                ...state,
                ucData: action.payload,
                portsBySignal: transformData(action.payload)
            };
        case mapperTypes.SET_MAPPING_RESULT:
            return {
                ...state,
                mapping: action.payload
            }
        case mapperTypes.SET_MAPPING_RESULT_OBJECT:
            return {
                ...state,
                mappingObject: action.payload
            }
        case mapperTypes.DELETE_MAPPING_RESULT_OBJECT_KEY:
            return {
                ...state,
                mappingObjectKey:  action.payload 
            }
        default:
            return state;
    }
};

export default mapperReducer;