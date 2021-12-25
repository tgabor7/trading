export enum Time {
    INTRADAY = "intraday",
    DAILY = "daily",
    MONTHLY = "monthly",
    YEARLY = "yearly"
}

export interface TimeSeriesData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
}
export interface Timeseries {
    name: string;
    description: string;
    data: TimeSeriesData[]
}