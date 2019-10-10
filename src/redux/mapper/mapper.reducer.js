import { mapperTypes } from "./mapper.types";

const initialState = {
    ucData: null
};

const mapperReducer = (state=initialState, action) => {
    switch(action.type) {
        case mapperTypes.SET_INIT_UC_DATA:
            return {
                ...state,
                ucData: action.payload
            };
        default:
            return state;
    }
};

export default mapperReducer;