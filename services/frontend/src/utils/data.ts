import { Timeseries } from "../data/types";
import { convertDate } from "./time";

export const parseTimeseries = (data: any) : Timeseries[] => {
    const response = data["response"];
    const meta_data = response["Meta Data"];

    const time_series = Object.values(response)[1];

    return Object.entries(time_series as Object).map(e=>{
        return {
            date: e[0],
            data: e[1]
        }
    });
}
export const getDates = (time_series: Timeseries[], offset: number) => {
    return time_series.map((e: Timeseries) => e.date).concat(["asd","qwe"]);
}
export const getValues = (time_series: Timeseries[]) => {
    return time_series.map((e: Timeseries) => e.data).concat({open: 0,close: 1},{open: 0,close: 1},);
}
export const getOpen = (time_series: any) => {
    return getValues(time_series).map((e: any)=>parseFloat(Object.values(e)[0] as string));
}