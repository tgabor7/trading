import { Timeseries } from "../../data/types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialTimeSeries : Timeseries = {
    name: "dummy",
    description: "No timeseries found",
    data: []
}

export const reducer = (state: Timeseries = initialTimeSeries, action: Action) => {
    switch (action.type) {
        case (ActionType.SET):
            return action.payload;
        default:
            return state;
    }
}