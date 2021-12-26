import axios from "axios";
import { API_ENDPOINT } from "../config/config";

interface ApiProps {
    symbol: string;
    currency: string;
}

export const getExchangeRate = (apiProps: ApiProps) => {
    const url = `${API_ENDPOINT}/exchange_rate/?symbol=${apiProps.symbol}`;
    console.log(url);
    
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        });
    });
}