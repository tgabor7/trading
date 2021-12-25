import axios from "axios";
import { API_ENDPOINT } from "../config/config";
import { Time } from "../data/types";

interface ApiProps {
    time: Time;
    symbol: string;
    currency: string;
}

export const getTimeseries = (apiProps: ApiProps) => {
    const url = `${API_ENDPOINT}/?function=DIGITAL_CURRENCY_DAILY&symbol=${apiProps.symbol}&interval=5min`;

    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        });
    });
}