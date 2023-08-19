import React, { useState, useEffect, useContext } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSidebar";
import { FetchLogs } from "../shared";
// import {FuncNameContext} from './FunctionDetails'
import { FunctionContext, FunctionArnContext } from "@/App";
import { Link, useNavigate } from "react-router-dom";
import { Slider } from "@mui/material/";
import { MuiThemeProvider } from 'material-ui'
import { createTheme, ThemeProvider } from '@mui/material/styles';


type Props = {};

const Warming = ({}: Props) => {
  const { funcName, setFuncName } = useContext(FunctionContext);
  const [intervalValue, setIntervalValue] = useState(0);
  const [durationValue, setDurationlValue] = useState(0);
  const { funcArn, setFuncArn } = useContext(FunctionArnContext);

  const changeIntervalValue = (e, val) => {
    setIntervalValue(val);
  };

  const changeDurationValue = (e, val) => {
    setDurationlValue(val);
  }
  console.log(intervalValue);

  const navigate = useNavigate();

  // const muiTheme = getMuiTheme({
  //   slider: {
  //     trackColor: "yellow",
  //     selectionColor: "red"
  //   }
  // });
  return (
    <div>
      {/* TOP SECTION OF EVERY PAGE */}
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />
        <h1 className="font-extrabold text-4xl font-mono"> SERENE </h1>
        <RightSideBar />
      </div>

      {/* <div>CURRENT FUNC NAME STATE IS {funcName}</div> */}

      {/* ENTIRE BODY DIV */}
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <a
            onClick={() => {
              navigate("/home");
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              Home
            </span>
          </a>
          <a
            onClick={() => {
              navigate("/versions");
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              Version History
            </span>
          </a>

          <a
            onClick={() => {
              navigate("/metrics");
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              Metrics
            </span>
          </a>

          <a
            onClick={() => {
              navigate("/logs");
            }}
            className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-black transition duration-200 group-hover:text-white ease">
              Logs
            </span>
          </a>
        </div>
        {/* BOTTOM BODY DIV */}
        CURRENT ARN IS {funcArn}
        <div className="border-2 border-black w-3/4 mt-10 rounded-md text-center">
          <h1 className="font-semibold">Warming Function : {funcName} </h1>
          <div className='flex border-2 border-green-400'> 
          <div className='flex flex-col  border-2 w-1/2 mr-5 bg-black rounded-md'>
          <div className='flex w-1/3 font-semibold text-gray-200 ' >Interval: {intervalValue} </div>
          <Slider
              aria-label="Custom marks"
              // getAriaValueText={valuetext}
              min={0}
              max={50}
              value={intervalValue}
              onChange={changeIntervalValue}
              valueLabelDisplay="auto"
            />
            </div>
            <div className='flex flex-col border-2 w-1/2'>

          <div className='flex w-1/3 font-semibold'>Duration: {durationValue}</div>
            <Slider
              aria-label="Custom marks"
              // getAriaValueText={valuetext}
              min={0}
              max={50}
              value={durationValue}
              onChange={changeDurationValue}
              valueLabelDisplay="auto"
            />
            </div>
            </div>
          <div>

            {/* <label
    htmlFor="warmingInterval"
    className="mb-2 inline-block text-black"
    >Interval</label
  >
  <input
    type="range"
    className="transparent w-1/2 cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
    min="0"
    max="5"
    id="warmingInterval" /> */}
          </div>
        </div>
        {/* END OF BOTTOM BODY DIV */}
      </div>
      {/* END OF ENTIRE BODY DIV */}
      {/* <div>
  <img
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F9273%2Ff%2F2017%2F033%2F4%2Fc%2Fkeeping_warm_by_uradoodlelover2-daxms1b.gif&f=1&nofb=1&ipt=e67139040496533bfaa51a492b4a43800ca0e49dcb328d46986ba905def36c02&ipo=images"
    alt="warming"
  />
</div> */}
    </div>
  );
};

export default Warming;
