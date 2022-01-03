import { useState } from 'react';
import "./App.css"
import { Provider } from 'react-redux';
import { store } from './store';
import MainPage from './pages/MainPage';
import ErrorContext from './error';
import { ErrorMessage, ErrorSeverity } from './error/types';
import ErrorModal from './components/ErrorModal';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { APOLLO_ENDPOINT } from './config/config';
import { AuthProvider } from './auth/AuthProvider'

function App() {

  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({ severity: ErrorSeverity.INFO, message: "" });

  return (
    <AuthProvider>
      <ErrorContext.Provider value={{ errorMessage: errorMessage, setErrorMessage: setErrorMessage }}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
          <ErrorModal />
        </Provider>
      </ErrorContext.Provider>
    </AuthProvider>
  );
}

export default App;
