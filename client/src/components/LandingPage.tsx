import React from "react";
import { useNavigate, Link } from "react-router-dom";
import lambdaFuncs from "../assets/lambdaFuncs.jpeg";
import waves7 from "../assets/waves7.png";
import serene from "../assets/serene.png";
import kenny from "../assets/kenny.jpeg";
import ari from "../assets/ari.jpeg";
import kyle from "../assets/kyle.jpeg";
import wade from "../assets/wade.jpeg";
import signup from "../assets/signup.jpeg";
import signupdemo from "../assets/signupdemo.gif";
import aws from "../assets/aws.jpeg";
import demo1 from "../assets/demo1.gif";
import demo2 from "../assets/demo2.gif";
import warmingdemo from "../assets/warmingdemo.gif";
import versionsdemo from "../assets/versionsdemo.gif";
import logsdemo from "../assets/logsdemo.gif";
import metricsdemo from "../assets/metricsdemo.gif";
import linkedinlogo from "../assets/linkedinlogo.png";
import githubcat from "../assets/githubcat.png";
import { FaLinkedin, FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

type Props = {};

const LandingPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-end items-center bg-gray-300 h-24  ">
        {/* left side element -- TBD */}
        <a
          href="https://github.com/oslabs-beta/Serene"
          target="_blank"
          type="button"
          className="border-none bg-transparent p-0 hover:scale-110  mx-1"
        >
          <img src={githubcat} className="w-16 h-16" />
        </a>

        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          type="button"
          target="_blank"
          className="border-4 border-black bg-transparent p-2 rounded-full hover:scale-110 mx-1 mr-2"
        >
          <FaLinkedinIn size={40} className="" />
        </a>

        <a
          href="https://medium.com/@kennykim0824/serene-88d6a9685133"
          type="button"
          target="_blank"
          className="border-4 border-black bg-transparent p-2 rounded-full hover:scale-110 mx-1 mr-3"
        >
          <FaMedium size={40} className="" />
        </a>

        <button
          onClick={() => {
            navigate("/login");
          }}
          type="button"
          className=" mx-1 hover:scale-110 inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          LOGIN
        </button>
        <button
          onClick={() => {
            navigate("/user/signup");
          }}
          type="button"
          className=" mx-1 hover:scale-110 inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          SIGNUP
        </button>
        {/* right side element -- linkedin for Serene, Github for Serene, LOGIN option */}
        <div></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col ">
        <div className="h-1/4 flex bg-gray-200  justify-around items-center py-20">
          {/* <div className="font-extrabold font-sans text-9xl">SERENE</div> */}
          <img src={serene} alt="Serene image" className="w-1/2" />
          <div className="text-l w-1/3 text-gray-800 text-xl text-center font-Inconsolata">
            AN OPEN-SOURCE APPLICATION FOR METRICS VISUALIZATION AND LAMBDA COLD
            START PREVENTION
          </div>
        </div>
        <div className="bg-gray-200  flex justify-center py-10 h-1/3">
          <div className="w-1/3 text-gray-300 bg-black p-5 -ml-10">
            <img src={lambdaFuncs} />
          </div>
          <div className="w-2/5 ml-10 text-lg items-center justify-center flex flex-col">
            <p className="mb-5">
              Manage all your Lambda functions in one place by utilizing a
              centralized platform for overseeing logs, versions, and aliases.
              Experience the ease of accessing all key information in one place,
              streamlining your monitoring and enhancing overall efficiency in
              managing your serverless architecture.
            </p>
            <p>
              At Serene, we are committed to providing you with a seamless and
              enriched AWS journey. Let Serene be your guide as you navigate the
              complexities of AWS, leveraging our array of features to enhance
              your development and monitoring processes.
            </p>
          </div>
        </div>

        <div className="bg-gray-200">
          <h1 className="bg-gray-200 text-center font-semibold text-6xl py-20 ">
            {" "}
            HOW TO GET STARTED
          </h1>
          <div className="flex text-center justify-center items-center p-2">
            <div className="w-1/3 mr-10">
              Create an account, select your preferred region, and connect your
              AWS account via our Serene stack on CloudFormation
            </div>
            <div className="w-1/2">
              <img src={signupdemo} className="border-8 border-black" />
            </div>
          </div>
          <div className="flex text-center justify-center items-center my-20">
            <div className="mr-20">
              <img src={demo1} className="border-8 border-black" />
            </div>
            <div className="">Select a Lambda function to begin</div>
          </div>
          <div className="flex text-center justify-center items-center my-20">
            <div className="">
              View your version history and alias <br /> with a click of a
              button
            </div>
            <div className="ml-20">
              <img src={versionsdemo} className="border-8 border-black" />
            </div>
          </div>
          <div className="flex text-center justify-center items-center my-20">
          <div className="mr-20">
            <img src={logsdemo} className="border-8 border-black" />
          </div>
          <div className="">
            Access all your log streams and timestamps in one place
          </div>
        </div>
          <div className="flex text-center justify-center items-center my-20 ">
            <div className="">
              Prevent cold start latency with our warming feature
            </div>
            <div className="ml-20 ">
              <img src={warmingdemo} className="border-8 border-black  " />  
            </div>
          </div>
        </div>

        <div></div>

        <div className="flex-col bg-gray-200 text-center ">
          <h1 className="font-semibold text-4xl my-5">MEET THE TEAM</h1>

          <div className="bg-gray-200 flex justify-center ">
            {/* ARI */}

            <div className="relative w-1/4 h-1/2 group  rounded-md mx-1 transition duration-100 ease-in-out bg-white">
              <div className="group-hover:shadow-[0_20px_50px_rgba(0,0,0,_0.7)] group:hover:z-40 z-0 rounded-md mx-1 transition duration-100 ease-in-out bg-white group-hover:scale-110  ">
                <div>
                  <img
                    src={ari}
                    alt="ari image"
                    className="p-4 rounded-md grayscale group-hover:grayscale-0 transition duration-300 z-0"
                  />
                </div>
                <p className=" font-semibold mt-4 group-hover:text-white ">
                  {" "}
                  ARIANNA
                </p>
                <p className="mb-2 group-hover:text-white flex justify-center items-center">
                  {/* <img src={aws} className="w-2/12 group-hover:opacity-0" /> */}
                  Software Engineer</p>
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className="hover:scale-110">
                  <FaGithubSquare size={60} />
                </button>
                <button className="hover:scale-110">
                  {" "}
                  <FaLinkedin size={60} />
                </button>
              </div>
            </div>
            {/* KYLE */}
            <div className="group-hover:scale-110 relative w-1/4 h-1/2 group group-hover:animate-bounce rounded-md mx-1 transition duration-100 ease-in-out bg-white">
              <div className="group-hover:shadow-[0_20px_50px_rgba(0,0,0,_0.7)] z-0 rounded-md mx-1 transition duration-100 ease-in-out bg-white group-hover:scale-110">
                <div>
                  <img
                    src={kyle}
                    alt="kyle image"
                    className="w-full p-4 rounded-md grayscale group-hover:grayscale-0 transition duration-300 z-0"
                  />
                </div>
                <p className=" font-semibold mt-4 group-hover:text-white">
                  {" "}
                  KYLE
                </p>
                <p className="mb-2 group-hover:text-white flex justify-center items-center">
                  {/* <img src={aws} className="w-2/12 group-hover:opacity-0" /> */}
                  Software Engineer</p>
              
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className="hover:scale-110">
                  <FaGithubSquare size={60} />
                </button>
                <button className="hover:scale-110">
                  {" "}
                  <FaLinkedin size={60} />
                </button>
              </div>
            </div>

            {/* WADE */}
            <div className="group-hover:scale-110 relative w-1/4 h-1/2 group group-hover:animate-bounce rounded-md mx-1 transition duration-100 ease-in-out bg-white">
              <div className="group-hover:shadow-[0_20px_50px_rgba(0,0,0,_0.7)] rounded-md mx-1 transition duration-100 ease-in-out bg-white group-hover:scale-110">
                <div>
                  <img
                    src={wade}
                    alt="wade image"
                    className="p-4 rounded-md grayscale group-hover:grayscale-0 transition duration-300 z-0"
                  />
                </div>
                <p className=" font-semibold mt-4 group-hover:text-white ">
                  {" "}
                  WADE
                </p>
                <p className="mb-2 group-hover:text-white flex justify-center items-center">
                  {/* <img src={aws} className="w-2/12 group-hover:opacity-0" /> */}
                  Software Engineer</p>
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className="hover:scale-110">
                  <FaGithubSquare size={60} />
                </button>
                <button className="hover:scale-110">
                  {" "}
                  <FaLinkedin size={60} />
                </button>
              </div>
            </div>
            {/* KENNY */}
            <div className="group-hover:scale-110 relative w-1/4 h-1/2 group group-hover:animate-bounce rounded-md mx-1 transition duration-100 ease-in-out bg-white">
              <div className="group-hover:shadow-[0_20px_50px_rgba(0,0,0,_0.7)] rounded-md mx-1 transition duration-100 ease-in-out bg-white group-hover:scale-110">
                <div>
                  <img
                    src={kenny}
                    alt="kenny image"
                    className="p-4 rounded-md grayscale group-hover:grayscale-0 transition duration-300 z-0"
                  />
                </div>
                <p className=" font-semibold mt-4 group-hover:text-white  ">
                  {" "}
                  KENNY
                </p>
                <p className="mb-2 group-hover:text-white flex justify-center items-center">
                  {/* <img src={aws} className="w-2/12 group-hover:opacity-0" /> */}
                  Software Engineer</p>
           
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className="hover:scale-110">
                  <FaGithubSquare size={60} />
                </button>
                <button className="hover:scale-110">
                  {" "}
                  <FaLinkedin size={60} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* FOOTER */}
      <div className="bg-gray-200 text-black py-4 px-5 flex justify-between">
        <span>&copy; SERENE 2023</span>
        {/* <a href='https://www.baridakmil.com/'
          type="button"
          target="_blank"
          className=" w-20 bg-black"
        >
          <img src={waves7}/>
        </a> */}
      </div>
    </div>
  );
};

export default LandingPage;
