import { mapperTypes } from "./mapper.types";
import mockData from "../../backend-mock";
import Mapper from "../../algorithm/algorithm";


export const setInitUcData = () => {
    return {
        type: mapperTypes.SET_INIT_UC_DATA,
        payload: mockData
    }
};

export const setMappingResults = (mapping) => {
    return {
        type: mapperTypes.SET_MAPPING_RESULT,
        payload: mapping
    }
};

export const setMappingResultObject = (mapping) => {
    return {
        type: mapperTypes.SET_MAPPING_RESULT_OBJECT,
        payload: mapping
    }
};

export const deleteMappingResultObject = (mapping) => {
    return {
        type: mapperTypes.DELETE_MAPPING_RESULT_OBJECT_KEY,
        payload: mapping
    }
};

export const runMapper = (chosenSignals, portsBySignals) => {
    return dispatch => {
        const results = Mapper(chosenSignals, portsBySignals);
        dispatch(setMappingResults(results));
    }
};