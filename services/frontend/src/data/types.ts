export enum Time {
    DAILY = "DIGITAL_CURRENCY_DAILY",
    MONTHLY = "DIGITAL_CURRENCY_MONTHLY",
    INTRADAY = "CRYPTO_INTRADAY"
}

export interface Currency {
    symbol: string;
    name: string;
}
export interface ExchangeRateData {
    exchangeRate: number;
    date: string;
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