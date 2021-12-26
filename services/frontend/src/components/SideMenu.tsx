import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { getExchangeRate } from "../api/CurrencyExchange";
import { getCurrencyList } from "../api/CurrencyList";
import { ActionCreators } from "../store";
import { State } from "../store/reducers";
import { parseCurrencyList, parseExchangeRate } from "../utils/data";
import CurrencyList from "./CurrencyList";


const SideMenu = (): JSX.Element => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("btc");
    const [exchangeRate, setExchangeRate] = useState<number | undefined>();
    const [date, setDate] = useState<string | undefined>();
    const [symbols, setSymbols] = useState<string[] | undefined>([]);

    const dispatch = useDispatch();
    const { setSymbol } = bindActionCreators(ActionCreators, dispatch);

    const time_series = useSelector((state: State) => state.timeSeries);
    const symbol = useSelector((state: State) => state.symbol);

    const handleSelect = (symbol: string) => {
        setSelected(symbol);
        setOpen(false);
        setSymbol(symbol);
    }

    useEffect(() => {
        getExchangeRate({ symbol, currency: "usd" }).then(res => {
            const parsed = parseExchangeRate(res);
            setExchangeRate(parsed?.exchangeRate);
            setDate(parsed?.date);
        })
        getCurrencyList().then(res => {
            parseCurrencyList(res);
            setSymbols(parseCurrencyList(res)?.map(e => e.symbol));
        })
    }, [symbol])

    return (<>
        <div className="side-menu">
            <CurrencyList selected={selected} setOpen={setOpen} handleSelect={handleSelect} open={open} symbols={symbols} />
            <div>
                <h2>{time_series.name}</h2>
                <p>{time_series.description}</p>
            </div>
            <div>
                <div className="exchange-rate">
                    {exchangeRate}
                </div>
                Last updated: {date}
            </div>
        </div>
    </>)
}

export default SideMenu;