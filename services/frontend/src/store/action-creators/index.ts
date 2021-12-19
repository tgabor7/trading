import { Timeseries } from "../../data/types"
import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const setTimeseries = (timeseries : Timeseries[])=>{
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET,
            payload: timeseries
        })
    }
}