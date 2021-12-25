export enum ActionType {
    SET = "set",
    SETSYMBOL = "set-symbol",
    SETTIMEFUNCTION = "set-time-function"
}

export enum TimeFunction {
    DAILY = "DIGITAL_CURRENCY_DAILY",
    MONTHLY = "DIGITAL_CURRENCY_MONTHLY"
}
export interface APIProps {
    symbol: string;
    function: TimeFunction;
    currency: string;
}