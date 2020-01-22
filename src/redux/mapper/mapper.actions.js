import { mapperTypes } from "./mapper.types";
import axios from "axios";
// import mockData from "../../backend-mock";
import Mapper from "../../algorithm/algorithm";


export const setInitUcData = (data) => {    
    return {
        type: mapperTypes.SET_INIT_UC_DATA,
        payload: data
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

export const runMapper = (chosenSignals, portsBySignals) => {
    return dispatch => {
        const results = Mapper(chosenSignals, portsBySignals);
        dispatch(setMappingResults(results));
    }
};

const setError = (error) => {
    return {
        type: mapperTypes.SET_ERROR_ON_API_CALL,
        payload: error
    }
}

export const getUcData = (ucName) => {
    return dispatch => {
        dispatch(setError(null))
        axios.get(`/microcontrollers/${ucName}`).then(
            res => {
                dispatch(setInitUcData(res.data.data))
            },
            err => {
                dispatch(setError(err.message))
                console.log(err)
            }
        )
    }
}