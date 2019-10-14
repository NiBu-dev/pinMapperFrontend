import { LoggerActionTypes } from "./logger.types";

const initialState = [
    'Logger initialization.................'
];

const loggerReducer = (state={initialState}, action) => {
    switch (action.type) {
        case LoggerActionTypes.PRINT_LOG:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};

export default loggerReducer;


