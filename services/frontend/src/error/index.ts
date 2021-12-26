import React from "react"
import { ErrorContextType, ErrorMessage, ErrorSeverity } from "./types"

const defaultValue : ErrorMessage = {
    severity: ErrorSeverity.INFO,
    message: "Everything's fine"
}

const ErrorContext = React.createContext<ErrorContextType>({errorMessage: defaultValue, setErrorMessage: ()=>{}});

export default ErrorContext;