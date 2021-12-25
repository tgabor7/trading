import { ActionType } from "../action-types";
import { Action } from "../actions";

export const reducer = (state: string = "CRYPTO_INTRADAY", action: Action) => {
    switch (action.type) {
        case (ActionType.SETTIMEFUNCTION):
            return action.payload;
        default:
            return state;
    }
}