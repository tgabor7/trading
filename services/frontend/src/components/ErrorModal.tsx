import { faExclamation, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import ErrorContext from "../error";

const ErrorModal = (): JSX.Element => {

    const { errorMessage } = useContext(ErrorContext);
    const [show, setShow] = useState(true);

    useEffect(()=>{
        setShow(true);
    }, [errorMessage])

    return (<>
        {(errorMessage.message !== "" && show) && <div className="error-modal-container">
            <div className="error-modal">
                <FontAwesomeIcon className="close-icon" icon={faTimes} onClick={()=>{
                    setShow(false);
                }} />
                <p><FontAwesomeIcon className="warning-icon" icon={faExclamation} />{errorMessage.message}</p>
            </div>
        </div>}
    </>)
}

export default ErrorModal;