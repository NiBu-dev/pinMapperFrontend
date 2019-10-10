import {mapperTypes} from "./mapper.types";
import mockData from "../../backend-mock";

export const setInitUcData = () => {
    return {
        type: mapperTypes.SET_INIT_UC_DATA,
        payload: mockData
    }
};
