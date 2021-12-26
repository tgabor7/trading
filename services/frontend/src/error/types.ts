export enum ErrorSeverity {
    INFO,
    WARNING,
    ERROR
}

export interface ErrorMessage {
    severity: ErrorSeverity;
    message: string;
}
export interface ErrorContextType {
    errorMessage: ErrorMessage;
    setErrorMessage: (errorMessage: ErrorMessage) => void;
}