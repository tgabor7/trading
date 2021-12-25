import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../store";
import "./styles.css";

const ChartHeader = (): JSX.Element => {

    const [selected, setSelected] = useState(2);

    const dispatch = useDispatch();
    const { setTimeFunction } = bindActionCreators(ActionCreators, dispatch);

    return (<>
        <div className="flex">
            <div className={`chart-header-button ${selected === 0 ? "selected" : ""}`} onClick={()=>{
                setSelected(0);
                setTimeFunction("DIGITAL_CURRENCY_DAILY");
            }}>
                Monthly
            </div>
            <div className={`chart-header-button ${selected === 1 ? "selected" : ""}`} onClick={()=>{
                setSelected(1);
                setTimeFunction("DIGITAL_CURRENCY_MONTHLY");
            }}>
                Daily
            </div>
            <div className={`chart-header-button ${selected === 2 ? "selected" : ""}`} onClick={()=>{
                setSelected(2);
                setTimeFunction("CRYPTO_INTRADAY");
            }}>
                Intraday
            </div>
        </div>
    </>)
}

export default ChartHeader;