import React, { useState, useEffect, useContext } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSidebar";
import { FetchLogs } from "../shared";
// import {FuncNameContext} from './FunctionDetails'
import { FunctionContext, FunctionArnContext, WarmingContext } from "@/App";
import { Link, useNavigate } from "react-router-dom";
import { Slider } from "@mui/material/";
import { MuiThemeProvider } from "material-ui";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import serene from "../assets/serene.png";

type Props = {};

const Warming = ({}: Props) => {
  const { funcName, setFuncName } = useContext(FunctionContext);
  const [intervalValue, setIntervalValue] = useState(0);
  const [durationValue, setDurationlValue] = useState(0);
  const { funcArn, setFuncArn } = useContext(FunctionArnContext);
  const { warmArray, setWarmArray } = useContext(WarmingContext);

  const changeIntervalValue = (e, val) => {
    setIntervalValue(val);
  };

  const changeDurationValue = (e, val) => {
    setDurationlValue(val);
  };

  const FetchWarmFunction = async () => {
    const body = {
      functionArn: funcArn,
      intervalVar: intervalValue,
      maxDuration: durationValue,
    };
    try {
      const response = await fetch("/api/warming/functions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("response from warming ", data);
      return data;
    } catch (error) {
      console.log("Warming Func Error: ", error);
    }
  };

  const handleStartButton = async () => {
    //make fetch request
    if (!warmArray.includes(funcName)) {
      console.log("warm array is, ", warmArray);
      setWarmArray([...warmArray, funcName]);
      console.log("warm array NOW is, ", warmArray);
    }
    console.log("warm array NOW is, ", warmArray);
  };


  const navigate = useNavigate();

  return (
    <div>
      {/* TOP SECTION OF EVERY PAGE */}
      <div className="flex justify-between items-center bg-gray-300 h-24">
        <LeftSideBar />
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="w-1/6"
        >
          <img src={serene} alt="Serene image" className="py-1" />
        </button>
        <RightSideBar />
      </div>

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
        {/* CURRENT ARN IS {funcArn} */}
        <div className="border-2 border-black w-3/4 mt-10 rounded-md text-center">
          <h1 className="font-semibold text-2xl mt-10">
            WARMING FUNCTION: {funcName.toUpperCase()}{" "}
          </h1>
          <p className="mb-10">
            EVERY {intervalValue} MINUTE(S) FOR {durationValue} HOUR(S)
          </p>
          <div className="flex mx-2">
            <div className="flex flex-col  w-1/2 mr-5 bg-black rounded-md ">
              <div className="flex w-1/3 font-semibold text-gray-200 pl-3">
                Interval: {intervalValue}{" "}
              </div>
              <Slider
                aria-label="Custom marks"
                min={0}
                max={60}
                value={intervalValue}
                onChange={changeIntervalValue}
                valueLabelDisplay="auto"
              />
            </div>
            <div className="flex flex-col w-1/2 bg-black rounded-md ">
              <div className="flex w-1/3 font-semibold text-gray-200 pl-3">
                Duration: {durationValue}
              </div>
              <Slider
                aria-label="Custom marks"
                min={0}
                max={50}
                value={durationValue}
                onChange={changeDurationValue}
                valueLabelDisplay="auto"
              />
            </div>
          </div>
          <button
            className="items-center justify-center z-20 overflow-y-auto h-[40%]  my-5 
            border-2 shadow-md bg-neutral-100 bg-opacity-40 p-2 rounded-md border-black hover:bg-black hover:text-white transition duration-200 ease-in-out
            mt-6 
            "
            onClick={handleStartButton}
          >

            Start Warming
          </button>

          <div>
            <h1 className="font-semibold">Currently Warming</h1>
            <div>
              {warmArray.length !== 0
                ? warmArray.map((el) => <div>{el}</div>)
                : null}
            </div>
          </div>
        </div>
      </div>
      {/* END OF ENTIRE BODY DIV */}

      <div className="bg-gray-200 text-black fixed bottom-0 py-4 left-0 w-full">
        <div className="ml-3">&copy; SERENE 2023 </div>
      </div>
    </div>
  );
};

export default Warming;
