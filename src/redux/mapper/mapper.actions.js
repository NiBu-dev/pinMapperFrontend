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

export const runMapper = (chosenSignals, portsBySignals) => {
    return dispatch => {
        const results = Mapper(chosenSignals, portsBySignals);
        dispatch(setMappingResults(results));
    }
}