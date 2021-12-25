import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../store";
import { State } from "../store/reducers";


const SideMenu = (): JSX.Element => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("btc");

    const symbols = ["btc", "shib"];

    const dispatch = useDispatch();
    const { setSymbol } = bindActionCreators(ActionCreators, dispatch);

    const time_series = useSelector((state: State) => state.timeSeries);

    const handleSelect = (symbol: string) => {
        setSelected(symbol);
        setOpen(false);
        setSymbol(symbol);
    }

    return (<>
        <div className="side-menu">
            <div className={`dropdown ${open ? "is-active" : ""}`}>
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => {
                        setOpen(!open);
                    }}>
                        <span>{selected}</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {symbols.map(e => <a className="dropdown-item" onClick={() => {
                            handleSelect(e);
                        }}>{e}</a>)}
                    </div>
                </div>
            </div>
            <div>
                <h2>{time_series.name}</h2>
                <p>{time_series.description}</p>
            </div>
        </div>
    </>)
}

export default SideMenu;