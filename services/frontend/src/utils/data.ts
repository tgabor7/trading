import { Timeseries, TimeSeriesData } from "../data/types";

export const parseTimeseries = (data: any): Timeseries => {
    const response = data["response"];
    const meta_data = response["Meta Data"];

    const time_series = Object.values(response)[1];

    const parsedTimeSeries = {
        name: String(Object.values(meta_data)[2]),
        description: String(Object.values(meta_data)[0]),
        data: Object.entries(time_series as Object).map(e => {
            return {
                open: parseFloat(Object.values(e[1])[0] as string),
                close: parseFloat(Object.values(e[1])[6] as string),
                high: parseFloat(Object.values(e[1])[2] as string),
                low: parseFloat(Object.values(e[1])[4] as string),
                date: String(e[0])
            }
        })
    };

    return parsedTimeSeries;
}
export const getDates = (time_series: Timeseries, offset: number) => {
    return time_series.data.map((e: TimeSeriesData) => String(e.date));
}
export const getValues = (time_series: Timeseries) => {
    return time_series.data;
}
export const getOpen = (time_series: Timeseries) => {
    return getValues(time_series).map((e: any) => parseFloat(Object.values(e)[0] as string));
}
export const getClose = (time_series: Timeseries)=>{
    return getValues(time_series).map((e:any)=> parseFloat(Object.values(e)[6] as string));
}