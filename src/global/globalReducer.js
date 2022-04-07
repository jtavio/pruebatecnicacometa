import { types } from "../types/types";

export const globalReducer = (state = {}, action) => {
    switch (action.type) {
        case types.prices:
            return {
                ...action.payload
            }
    
        default:
            return state;
    }
}