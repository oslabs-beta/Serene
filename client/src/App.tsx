import React, { useState, createContext, useEffect } from 'react'; // div element does not exist on jsx.intrinsic element or something
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import VersionHistory from './components/VersionHistory';
import Metric from './components/Metric';
import Warming from './components/Warming';
import Logs from './components/Logs';
import LandingPage from './components/LandingPage'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FetchFunctions } from './shared'




export const FunctionContext = createContext();
export const UserContext = createContext();
export const FunctionArnContext = createContext();
export const FunctionDataContext = createContext();

function App() {
  // const [data, setData] = useState([]);
  // const [clickedFunction, setClickedFunction] = useState([]);

  const [funcName, setFuncName] = useState('SELECT A FUNCTION');
  const [currentUser, setCurrentUser] = useState('');
  const [funcArn, setFuncArn] = useState('SELECT FUNC ARN')
  const [funcData, setFuncData] = useState([])


  return (
    <div className="bg-red-20">
      <FunctionContext.Provider value={{ funcName, setFuncName }}>
      <FunctionArnContext.Provider value={{ funcArn, setFuncArn }}>
      <FunctionDataContext.Provider value={{ funcData, setFuncData }}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/versions" element={<VersionHistory />} />
            <Route path="/metrics" element={<Metric />} />
            <Route path="/warming" element={<Warming />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </FunctionDataContext.Provider>
      </FunctionArnContext.Provider>
      </FunctionContext.Provider>
    </div>
  );
}

export default App;
