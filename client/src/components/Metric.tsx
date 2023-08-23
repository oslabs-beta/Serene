import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LineGraph from "./LineGraph";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSidebar";
import { FetchMetrics } from "@/shared";
import { FunctionContext } from "@/App";
import serene from "../assets/serene.png";

type Props = {};

const Metric = ({}: Props) => {
  const [currentChart, setCurrentChart] = useState("pie");
  const [metricsData, setMetricsData] = useState({});
  const [sortBy, setSortBy] = useState("TimestampAscending");
  const [period, setPeriod] = useState("5 minutes");
  const [startDate, setStartDate] = useState("1w");
  const { funcName, setFuncName } = useContext(FunctionContext);

  const navigate = useNavigate();

  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  const handlePeriod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(e.target.value);
  };
  const handleStartDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartDate(e.target.value);
  };

  const handleClick = (chart: string) => {
    setCurrentChart(chart);
  };

  const FetchMetrics = async () => {
    const body = {
      funcName,
      sortBy,
      period,
      startDate,
    };
    try {
      const response = await fetch("/api/cloudwatch/getMetrics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("NOW Error: ", error);
    }
  };

  useEffect(() => {
    FetchMetrics().then((metricsData) => {
      setMetricsData(metricsData);
    });
  }, [funcName, sortBy, period, startDate]);

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
        </button>{" "}
        <RightSideBar />
      </div>

      <div className="flex justify-center">
        <a
          onClick={() => {
            navigate("/home");
          }}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
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
            navigate("/warming");
          }}
          className="w-64 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black text-black text-white text-center"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-200 group-hover:text-white ease">
            Warm Functions
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
            View Logs
          </span>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* START OF DROPDOWN MENUS */}
        <div className="flex mt-5 mb-2 ">
          <select
            className="mx-1 w-full p-1 text-black bg-white border-2 border-black rounded-md shadow-sm outline-none appearance-none transition duration-100 ease-in-out hover:bg-black hover:border-2 hover:text-white"
            onChange={handleSortBy}
          >
            <option value="TimestampAscending" className="text-center">
              {" "}
              -- SortBy --{" "}
            </option>
            <option value="TimestampDescending"> TimestampDescending </option>
            <option value="TimestampAscending">TimestampAscending</option>
          </select>
          <select
            className="mx-1 w-full p-1 text-black bg-white border-2 rounded-md shadow-sm outline-none appearance-none transition duration-100 ease-in-out hover:bg-black hover:border-2 border-black hover:text-white"
            onChange={handlePeriod}
          >
            <option value="5 minutes" className="text-center">
              {" "}
              -- Period --{" "}
            </option>
            <option value="5 seconds">5 seconds </option>
            <option value="1 minute">1 minute</option>
            <option value="5 minutes">5 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="6 hours">6 hours</option>
            <option value="1 day">1 day</option>
            <option value="7 days">7 days</option>
            <option value="30 days">30 days</option>
          </select>
          <select
            className="mx-1 w-full p-1 text-black bg-white border-2 rounded-md shadow-sm outline-none appearance-none transition duration-100 ease-in-out hover:bg-black hover:border-2 border-black hover:text-white"
            onChange={handleStartDate}
          >
            <option value="1w" className="text-center">
              {" "}
              -- Start Date --
            </option>
            <option value="1h">1h</option>
            <option value="3h">3h</option>
            <option value="12h">12h</option>
            <option value="1d">1d</option>
            <option value="3d">3d</option>
            <option value="1w">1w</option>
          </select>
        </div>
        {/* END OF DROPDOWN MENUS */}
        <div className=" flex w-full flex-wrap mx-5">
          {Object.keys(metricsData).map(
            (eachMetric) =>
              eachMetric !== "concurrentExecutions" && (
                <div
                  key={eachMetric}
                  className="border-4 border-gray-300 h-full w-1/2 flex justify-center"
                >
                  {metricsData[eachMetric].map((each) => (
                    <div className="py-5 w-9/12" key={each.Id}>
                      <LineGraph
                        TimeStamps={each.Timestamps}
                        Values={each.Values}
                        metric={eachMetric}
                      />
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
      <div className="bg-gray-200 text-black fixed bottom-0 py-4 left-0 w-full">
        <div className="ml-3">&copy; SERENE 2023 </div>
      </div>
    </div>
  );
};

export default Metric;
