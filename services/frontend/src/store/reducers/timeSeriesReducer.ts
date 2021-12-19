import { Timeseries } from "../../data/types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const reducer = (state: Timeseries[] = [], action: Action) => {
    switch (action.type) {
        case (ActionType.SET):
            return action.payload;
        default:
            return state;
    }
}