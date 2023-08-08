import React, { useState, useEffect } from 'react'; // div element does not exist on jsx.intrinsic element or something
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import VersionHistory from './components/VersionHistory';
import Metric from './components/Metric';
import Warming from './components/Warming';
import Logs from './components/Logs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const UserContext = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [clickedFunction, setClickedFunction] = useState([]);

  const FetchFunctions = async () => {
    try {
      const response = await fetch('/api/aws/funcs');
      const data = response.json();
      // DO SOMETHIGN WITH DATA
      return data;
    } catch (error) {
      console.log('Error is: ', error);
    }
  }
   
  useEffect(() => {
      // console.log('beginning to fetch')
      FetchFunctions().then((funcData) => {
        // console.log('setting data now')
        setData(funcData);
        console.log('data is reset: ', funcData);
      });
      //data logic here
    }, []);

    console.log('data from App: ', data)

    return (
      <div className="bg-red-20">
        <UserContext.Provider value={[data,setData,clickedFunction, setClickedFunction]}>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/versions" element={<VersionHistory />} />
            <Route path="/metrics" element={<Metric />} />
            <Route path="/warming" element={<Warming />} />
            <Route path="/logs" element={<Logs />} />
          </Routes>
        </UserContext.Provider>
      </div>
    );
  };


export default App;
