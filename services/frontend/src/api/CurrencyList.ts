import axios from "axios";
import { API_ENDPOINT } from "../config/config";

export const getCurrencyList = () => {
    const url = `${API_ENDPOINT}/currencyList`;

    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        });
    });
}