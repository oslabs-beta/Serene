import React, { useState, createContext } from 'react'; // div element does not exist on jsx.intrinsic element or something
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


export const FunctionContext = createContext<{ funcName: string; setFuncName: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);
export const FunctionArnContext = createContext<{ funcArn: string; setFuncArn: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);
export const FunctionDataContext = createContext<{ funcData: any[]; setFuncData: React.Dispatch<React.SetStateAction<any[]>> } | undefined>(undefined);
export const WarmingContext = createContext<{ warmArray: any[]; setWarmArray: React.Dispatch<React.SetStateAction<any[]>> } | undefined>(undefined);
export const RegionContext = createContext<{ region: string; setRegion: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);
export const UserContext = createContext<{ currentUser: string; setCurrentUser: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);


function App(): JSX.Element {

  const [funcName, setFuncName] = useState<string>('SELECT A FUNCTION');
  const [currentUser, setCurrentUser] = useState<string>('');
  const [funcArn, setFuncArn] = useState<string>('SELECT FUNC ARN');
  const [region, setRegion] = useState<string>('us-east-1');
  const [funcData, setFuncData] = useState<any[]>([]);
  const [warmArray, setWarmArray] = useState<any[]>([]);


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
