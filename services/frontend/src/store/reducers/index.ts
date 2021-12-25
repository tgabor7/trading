import { combineReducers } from "redux";
import { reducer as timeSeries } from "./timeSeriesReducer";
import { reducer as symbol } from "./symbolReducer";
import { reducer as timeFunction } from "./timeFunctionReducer";

const reducers = combineReducers({
    timeSeries,
    symbol,
    timeFunction
});

export default reducers;

export type State = ReturnType<typeof reducers>;