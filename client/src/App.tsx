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
import TestToggle from './components/TestToggle'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FetchFunctions } from './shared'




export const FunctionContext = createContext();
export const UserContext = createContext();
export const FunctionArnContext = createContext();
export const FunctionDataContext = createContext();
export const WarmingContext = createContext();
export const RegionContext = createContext();

function App() {
  // const [data, setData] = useState([]);
  // const [clickedFunction, setClickedFunction] = useState([]);

  const [funcName, setFuncName] = useState('SELECT A FUNCTION');
  const [currentUser, setCurrentUser] = useState('');
  const [funcArn, setFuncArn] = useState('SELECT FUNC ARN')
  const [region, setRegion] = useState('us-east-1')
  const [funcData, setFuncData] = useState([])
  const [warmArray, setWarmArray] = useState([]);


  return (
    <div className="bg-red-20">
      <FunctionContext.Provider value={{ funcName, setFuncName }}>
      <FunctionArnContext.Provider value={{ funcArn, setFuncArn }}>
      <FunctionDataContext.Provider value={{ funcData, setFuncData }}>
      <RegionContext.Provider value={{ region, setRegion}}>
      <WarmingContext.Provider value={{ warmArray, setWarmArray}}>
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
            <Route path="/testing" element={<TestToggle /> } />
          </Routes>
        </UserContext.Provider>
      </WarmingContext.Provider>
      </RegionContext.Provider>
      </FunctionDataContext.Provider>
      </FunctionArnContext.Provider>
      </FunctionContext.Provider>
    </div>
  );
}

export default App;
