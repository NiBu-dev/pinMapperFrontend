import { createSelector } from "reselect";
const selectLogger = state => state.loggerState;


export const selectMessages = createSelector(
    [selectLogger],
    state => state ? state : null
);
