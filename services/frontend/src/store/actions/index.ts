import { Timeseries } from "../../data/types";
import { ActionType } from "../action-types";

interface SetTimeSeriesAction {
    type: ActionType.SET;
    payload: Timeseries
}

interface SetSymbolAction {
    type: ActionType.SETSYMBOL;
    payload: string
}

interface SetTimeFunction {
    type: ActionType.SETTIMEFUNCTION,
    payload: string
}

export type Action = SetTimeSeriesAction | SetSymbolAction | SetTimeFunction;