import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

interface Props {
    symbols: string[] | undefined;
    open: boolean;
    setOpen: (b: boolean) => void
    handleSelect: (symbol: string) => void;
    selected: string;
}

const CurrencyList = ({ symbols, open, setOpen, handleSelect, selected }: Props): JSX.Element => {

    const ref = useRef<HTMLDivElement>(null);

    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {

        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }

    }, [ref, setOpen]);

    return (<>
        <div ref={ref} className={`dropdown ${open ? "is-active" : ""}`}>
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
                <div className="dropdown-search">
                    <input value={searchTerm} onChange={(event: any) => {
                        setSearchTerm(event.target.value);
                    }} type="text" placeholder="Search" />
                    <FontAwesomeIcon onClick={()=>{
                        setSearchTerm("");
                    }} className="icon" icon={faTimes} />
                </div>
                <div className="dropdown-content">
                    {symbols?.filter(e => e.toLowerCase().includes(searchTerm.toLowerCase())).map((e, index) => <div key={index} className="dropdown-item" onClick={() => {
                        handleSelect(e);
                    }}>{e}</div>)}
                </div>
            </div>
        </div>
    </>)
}

export default CurrencyList;