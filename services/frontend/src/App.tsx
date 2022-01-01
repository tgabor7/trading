import { useState } from 'react';
import "./App.css"
import { Provider } from 'react-redux';
import { store } from './store';
import MainPage from './pages/MainPage';
import ErrorContext from './error';
import { ErrorMessage, ErrorSeverity } from './error/types';
import ErrorModal from './components/ErrorModal';
import SignupPage from './pages/SignupPage';

function App() {

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({severity: ErrorSeverity.INFO, message: ""});

  return (
    <ErrorContext.Provider value={{errorMessage: errorMessage, setErrorMessage: setErrorMessage}}>
      <Provider store={store}>
        {/* <div className="App">
        <div className="chart-container">
          <Chart data={data} labels={labels}></Chart>
        </div>
      </div> */}
      <ErrorModal />
        {/* <MainPage /> */}
        <SignupPage />
      </Provider>
    </ErrorContext.Provider>


  );
}

export default App;
