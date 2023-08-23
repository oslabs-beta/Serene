import React, { useContext, useState, useEffect } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSidebar";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import Typography from "@mui/material/Typography";

import { FunctionContext } from "@/App";
import serene from "../assets/serene.png";

const VersionHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { funcName, setFuncName } = useContext(FunctionContext);
  const [versions, setVersions] = useState({});
  const [aliases, setAliases] = useState([]);
  const [aliasArn, setAliasArn] = useState("");
  const [codeLink, setCodeLink] = useState("");


  const navigate = useNavigate();


  const FetchVersions = async () => {
    const body = {
      funcName,
    };
    try {
      const response = await fetch("api/versions/versionList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("fetched versions: ", JSON.stringify(data));
      setVersions(data);
      return data;
    } catch (error) {
      console.log("Error in versions: ", error);
    }
  };

  useEffect(() => {
    if (funcName !== "SELECT A FUNCTION") {
      const fetchVersions = async () => {
        await FetchVersions();
      };
      fetchVersions();
    }
  }, [funcName]);

  const handleAliasArn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAliasArn(e);
  };


  const FetchVersionDetails = async () => {
    const body = {
      functionArn: aliasArn,
    };
    try {
      const response = await fetch("api/versions/functionVersion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log("fetched version details: ", JSON.stringify(data));
      console.log("fetch versions successful");
      setCodeLink(data.linkToFunc);
      return data;
    } catch (error) {
      console.log("Error in versions: ", error);
    }
  };

  useEffect(() => {
    const fetchVersionDetails = async () => {
      await FetchVersionDetails();
    };
    fetchVersionDetails();
  }, [aliasArn]);

  const FetchAliases = async () => {
    const body = {
      funcName,
    };
    try {
      const response = await fetch("api/versions/getAlias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("fetched aliases: ", JSON.stringify(data));
      setAliases(data);
      return data;
    } catch (error) {
      console.log("Error in versions/alias: ", error);
    }
  };

  useEffect(() => {
    if (funcName !== "SELECT A FUNCTION") {
      const fetchAlias = async () => {
        await FetchAliases();
      };
      fetchAlias();
    }
  }, [funcName]);

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

      {/*BODY DIV */}

      <div className="h-screen w-full flex justify-center">
        <div className="flex flex-col my-3 border-2 border-black bg-gray-200 rounded-md h-full w-3/4">
          {aliases.length === 0 ? (
            <div className="flex justify-center my-3 border-4 bg-gray-200 rounded-md h-full w-full ">
              <h3 className="font-semibold">
                NO VERSION OR ALIAS FOR THIS FUNCTION
              </h3>
            </div>
          ) : (
            aliases.map((el) => (
              <div className="group flex items-center my-2 ml-auto w-7/12">
                {/* <button
                  onClick={() => {
                    c;
                  }}
                >
                  HELLO
                </button> */}

                {/* 
<Button aria-describedby={id} variant="contained"onClick={() => {
                   console.log('ARN WILL BE RESET STATE')
                      }} >
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover> */}
                <Popover placement="left">
                  <PopoverHandler className="border-2 border-white w-3/12 h-full p-1 mt-2 mb-1 transition duration-100 ease-in-out group-hover:scale-125 ml-0">
                    <Button className="whitespace-normal max-w-lg mb-2 relative ">
                      <button
                        className=""
                        onClick={() => {
                          handleAliasArn(el.AliasArn);
                        }}
                      >
                        {" "}
                        Alias {el.Name}
                      </button>
                    </Button>
                  </PopoverHandler>
                  <PopoverContent className="border-black border-2 w-1/3">
                    <span>
                      Download code for Alias{" "}
                      <span className="font-bold">{el.Name}</span>
                      <button>
                        <a
                          href={codeLink}
                          className="text-white bg-black hover:bg-white hover:border-black hover:border-2 hover:text-black rounded-md ml-2 p-2"
                        >
                          HERE
                        </a>
                      </button>
                    </span>
                  </PopoverContent>
                </Popover>

                {/* ARROW */}
                <div className="flex relative w-10 h-20 transition-all duration-200 ease-in-out transform-growth ml-5 group-hover:w-1/3">
                  <svg className="w-full h-full overflow-visible">
                    <defs>
                      <marker
                        id="m"
                        markerWidth="4"
                        markerHeight="8"
                        refX="0"
                        refY="1"
                        viewBox="0 0 1 2"
                      >
                        <polygon points="0,0 1,1 0,2" fill="black" />
                      </marker>
                    </defs>
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      strokeWidth="2"
                      markerEnd="url(#m)"
                      stroke="black"
                    />
                  </svg>
                </div>

                <div className="w-1/3 h-full ml-auto  mt-2 mr-2 flex justify-around rounded-md bg-white border-2 border-black group-hover:bg-black group-hover:text-white flex-wrap text-center">
                  version :{" "}
                  <span className="font-bold inline-block">
                    {el.FunctionVersion}{" "}
                  </span>
                  weight :{" "}
                  <span className="font-bold inline-block">
                    {el.weight * 100}%
                  </span>
                  {el.RoutingConfig ? (
                    <div className="border-t-2 border-black">
                      version :{" "}
                      <span className="font-bold">
                        {
                          Object.keys(
                            el.RoutingConfig.AdditionalVersionWeights
                          )[0]
                        }{" "}
                      </span>{" "}
                      <br />
                      weight :{" "}
                      <span className="font-bold">
                        {Object.values(
                          el.RoutingConfig.AdditionalVersionWeights
                        )[0] * 100}
                        %{" "}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
              // EACH VERSION DIV ENDS
            ))
          )}
        </div>
      </div>

      <div className="bg-gray-200 text-black fixed bottom-0 py-4 left-0 w-full">
        <div className="ml-3">&copy; SERENE 2023 </div>
      </div>
    </div>
  );
};

export default VersionHistory;
