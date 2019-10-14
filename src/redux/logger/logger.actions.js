import { LoggerActionTypes } from "./logger.types";


export const addMessage = (message) => {
    return {
        type: LoggerActionTypes.PRINT_LOG,
        payload: message
    }
};


