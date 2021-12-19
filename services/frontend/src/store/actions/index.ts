import { Timeseries } from "../../data/types";
import { ActionType } from "../action-types";

interface SetAction {
    type: ActionType.SET;
    payload: Timeseries[]
}

export type Action = SetAction