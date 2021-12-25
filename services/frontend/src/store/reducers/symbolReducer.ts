import { ActionType } from "../action-types";
import { Action } from "../actions";

export const reducer = (state: string = "btc", action: Action) => {
    switch (action.type) {
        case (ActionType.SETSYMBOL):
            return action.payload;
        default:
            return state;
    }
}