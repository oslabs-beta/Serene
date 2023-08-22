import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FUNCS from '../assets/FUNCS.jpeg';
import waves7 from '../assets/waves7.png';
import serene from '../assets/serene.png';
import kenny from '../assets/kenny.jpeg';
import ari from '../assets/ari.jpeg';
import kyle from '../assets/kyle.jpeg';
import wade from '../assets/wade.jpeg';
import login from '../assets/login.jpeg';
import linkedinlogo from '../assets/linkedinlogo.png';
import githubcat from '../assets/githubcat.png';
import { FaLinkedin, FaLinkedinIn, FaGithubSquare } from 'react-icons/fa';

type Props = {};

const LandingPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-end items-center bg-gray-300 h-24  ">
        {/* left side element -- TBD */}
        <a href='https://github.com/oslabs-beta/Serene'
        target="_blank"
          type="button"
          className="border-none bg-transparent p-0 hover:scale-110  mx-1"
        >
        <img src={githubcat} className='w-16 h-16'/>
        </a>

        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          type="button"
          target="_blank"
          className="border-4 border-black bg-transparent p-2 rounded-full hover:scale-110 mx-1 mr-3"
        >
          <FaLinkedinIn size={40} className=''/>
        </a>

        <button
          onClick={() => {
            navigate('/login');
          }}
          type="button"
          className=" mx-1 hover:scale-110 inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          LOGIN
        </button>
        <button
          onClick={() => {
            navigate('/user/signup');
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
          <div className="text-l w-1/3 text-gray-800 text-xl text-center">
            Unveiling the art of simplicity through technology, our app, Serene,
            stands as a testament to transforming complexity into serenity. With
            intuitive features designed to untangle intricacies, Serene
            harmonizes the chaotic threads of management, offering a tranquil
            haven where efficiency and ease converge.{' '}
          </div>
        </div>
        <div className="bg-gray-200  flex justify-center py-10 h-1/3">
          <div className="w-2/5 text-gray-300 bg-black p-5 -ml-10">
            <img src={FUNCS}></img>
          </div>
          <div className="w-2/5 ml-10 text-xl flex items-center">
            Manage all Lambda functions in one place by providing a centralized
            platform for overseeing logs, versions, and aliases. Experience the
            ease of accessing all key information in one place, streamlining
            your monitoring and enhancing overall efficiency in managing your
            serverless architecture.
          </div>
        </div>
        <div className="bg-gray-200 border-2 border-black flex justify-center py-10">
          <div className="flex items-center">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </div>
          <div className="text-center ml-10">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </div>
        </div>
        <div className="bg-gray-200">
          <h1 className="bg-gray-200 text-center font-semibold text-5xl py-10 ">
            {' '}
            HOW TO GET STARTED
          </h1>
          <div className="flex text-center border-2 border-black justify-center items-center p-2">
            <div className="w-1/3 mr-10">
              Create an account, select your preferred region, and connect your
              AWS account via our Serene stack on CloudFormation
            </div>
            <div className="w-1/4">
              <img src={login} className="border-8 border-black grayscale" />
            </div>
          </div>
          <div className="flex text-center border-2 border-black">
            <div className="w-2/3">IMAGE HERE</div>
            <div className="w-1/3">INSTRUCTIONS HERE</div>
          </div>
          <div className="flex text-center border-2 border-black">
            <div className="w-1/3">INSTRUCTIONS HERE</div>
            <div className="w-2/3">IMAGE HERE</div>
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
              <p className=" font-semibold mt-4 group-hover:text-white "> ARIANNA</p>
              <p className="mb-2 group-hover:text-white">Software Engineer</p>
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className='hover:scale-110'><FaGithubSquare size={60} /></button>
                <button className='hover:scale-110'> <FaLinkedin size={60} /></button>
          
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
              <p className=" font-semibold mt-4 group-hover:text-white"> KYLE</p>
              <p className="mb-2 group-hover:text-white">Software Engineer</p>
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className='hover:scale-110'><FaGithubSquare size={60} /></button>
                <button className='hover:scale-110'> <FaLinkedin size={60} /></button>
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
              <p className=" font-semibold mt-4 group-hover:text-white "> WADE</p>
              <p className="mb-2 group-hover:text-white">Software Engineer</p>
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className='hover:scale-110'><FaGithubSquare size={60} /></button>
                <button className='hover:scale-110'> <FaLinkedin size={60} /></button>
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
              <p className=" font-semibold mt-4 "> KENNY</p>
              <p className="mb-2">Software Engineer</p>
              </div>
              <div className="rounded-md mx-1 group-hover:scale-110 flex items-center justify-center h-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bottom-0 -mb-1 absolute inset-x-0 bg-white z-10">
                <button className='hover:scale-110'><FaGithubSquare size={60} /></button>
                <button className='hover:scale-110'> <FaLinkedin size={60} /></button>
              </div>
            </div>
            

          </div>

          {/* <div className="flex items-center justify-around flex-1 ">
            <div className="flex flex-col w-1/5 h-25 object-cover">
              <img
                className="w-2/3"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wonderwall.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2020%2F06%2Fshutterstock_editorial_10543469az.jpg%3Fx%3D514%26y%3D800%26icq%3D74%26sig%3D639b09155acfa34ee0f71886a1556c55&f=1&nofb=1&ipt=4ba84a2e65ca4eadc5ac18f410a4fd762ba735ac050198f791f0fcef8af146d1&ipo=images"
              />
              Arianna
            </div>
            <div className="flex flex-col w-1/5 h-30 object-cover">
              <img
                className="w-2/3"
                src="https://cdn.discordapp.com/emojis/1024040226139676692.gif?size=96&quality=lossless"
              />
              Kyle
            </div>
            <div className="flex flex-col w-1/5 h-30 object-cover ">
              <img
                className="w-2/3"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5b%2F63%2F9d%2F5b639d10e0aff8d8a955cb7e41d344b4.jpg&f=1&nofb=1&ipt=1e5dd9c577c493809d8e0fd1671027c4d9c017803f1c3c4846f313432fa62adb&ipo=images"
              />
              Wade
            </div>
            <div className="flex flex-col  w-1/5 h-30 object-cover">
              <img
                className="w-2/3"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fsouthpark%2Fimages%2Ff%2Ff4%2FAlter-egos-dead-kenny.png%2Frevision%2Flatest%3Fcb%3D20170601095659&f=1&nofb=1&ipt=6106140dc1524711a387f23b0600f75eaa990921f060a1194ea3653a468981e0&ipo=images"
              />
              Kenny
            </div>
          </div> */}
        </div>
      </div>
      {/* FOOTER */}
      <div className="bg-gray-200 text-black py-4 px-5 flex justify-between">
        <span>&copy; SERENE 2023</span>
        {/* <button className=' w-20 bg-black'><img src={waves7}/></button> */} 
      </div>
    </div>
  );
};

export default LandingPage;
