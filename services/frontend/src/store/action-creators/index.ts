import { Timeseries } from "../../data/types"
import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const setTimeseries = (timeseries: Timeseries) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET,
            payload: timeseries
        })
    }
}
export const setSymbol = (symbol: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SETSYMBOL,
            payload: symbol
        })
    }
}
export const setTimeFunction = (timeFunction: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SETTIMEFUNCTION,
            payload: timeFunction
        })
    }
}
