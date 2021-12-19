import { combineReducers } from "redux";
import { reducer } from "./timeSeriesReducer";

const reducers = combineReducers({
    timeSeries: reducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;