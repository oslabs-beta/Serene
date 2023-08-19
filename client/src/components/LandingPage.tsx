import React from "react";
import { useNavigate } from "react-router-dom";
type Props = {};

const LandingPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-end items-center bg-gray-300 h-24 border-red-400 border-2 ">
        {/* left side element -- TBD */}
        <button
          type="button"
          className="border-none bg-transparent p-0 hover:scale-110"
        >
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vhv.rs%2Ffile%2Fmax%2F8%2F80805_linkedin-logo-white-png.png&f=1&nofb=1&ipt=44f330d4d9414e2fc69d51ad09044e03294dbc0dc7a5e86c465b0843ab14c98e&ipo=images"
            alt="LinkedIn Button Image"
            className="w-14 h-14"
          />
        </button>

        <button
          type="button"
          className="border-none bg-transparent p-0 hover:scale-110"
        >
          <img
            src="https://pngimg.com/uploads/github/github_PNG40.png"
            alt="Button Image"
            className="w-16 h-16"
          />
        </button>

        <button
          onClick={() => {
            navigate("/login");
          }}
          type="button"
          className=" hover:scale-110 inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
        >
          LOGIN
        </button>
        {/* right side element -- linkedin for Serene, Github for Serene, LOGIN option */}
        <div></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col ">
        <div className="h-1/4 flex bg-gray-200 border-2 border-black justify-around items-center py-20">
          <div className="border-2 border-blue-400 font-extrabold font-sans text-9xl">
            SERENE
          </div>
          <div className="border-2 border-pink-400 text-l">
            Transforming complexity into Serenity{" "}
          </div>
        </div>
        <div className="bg-gray-200 border-2 border-green-400 flex justify-center py-10 h-1/3">
          <div className="w-3/5  text-gray-300 bg-black px-10 py-5">
            <p className="mb-4">
              {" "}
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte.
            </p>
            <p className="mb-4">
              Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté
              à la bureautique informatique, sans que son contenu n'en soit
              modifié. Il a été popularisé dans les années 1960 grâce à la vente
              de feuilles
            </p>
            <p className="mb-4">
              {" "}
              Letraset contenant des passages du Lorem Ipsum, et, plus
              récemment, par son inclusion dans des applications de mise en page
              de texte, comme Aldus PageMaker.{" "}
            </p>
            <p>
              {" "}
              Contrairement à une opinion répandue, le Lorem Ipsum n'est pas
              simplement du texte aléatoire. Il trouve ses racines dans une
              oeuvre de la littérature latine classique datant de 45 av. J.-C.,
              le rendant vieux de 2000 ans.{" "}
            </p>
          </div>
          <div className="ml-10 text-2xl flex items-center">
            Qu'est-ce que le Lorem Ipsum?
          </div>
        </div>
        <div className="bg-gray-200 border-2 border-black flex justify-center py-10">
          <div className="text-2xl flex items-center">QUICK START INFO </div>
          <div className="w-3/5 text-center ml-10">
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
        <div className="bg-gray-200 border-2 border-black flex justify-center">
          SOMETHING SOMETHING{" "}
        </div>
        <div className="flex-col bg-gray-200 border-2 border-black text-center ">
          <div>MEET THE TEAM</div>
          <div className="flex items-center flex-1 border-2 border-pink-500">
            <div className="flex flex-col border-2 border-red-400 w-full h-30 object-cover">
              <img
                className=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wonderwall.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2020%2F06%2Fshutterstock_editorial_10543469az.jpg%3Fx%3D514%26y%3D800%26icq%3D74%26sig%3D639b09155acfa34ee0f71886a1556c55&f=1&nofb=1&ipt=4ba84a2e65ca4eadc5ac18f410a4fd762ba735ac050198f791f0fcef8af146d1&ipo=images"
              />
              Arianna
            </div>
            <div className="flex flex-col border-2 border-red-400 w-full h-30 object-cover">
              <img
                className=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fsouthpark%2Fimages%2F9%2F95%2FKyle-broflovski.png%2Frevision%2Flatest%3Fcb%3D20181115135504%26path-prefix%3Dit&f=1&nofb=1&ipt=174dc9d638217a25d6ba313b4f0ae56f0c28698812d3c459f64966788867271f&ipo=images"
              />
              Kyle
            </div>
            <div className="flex flex-col border-2 border-red-400 w-full h-30 object-cover ">
              <img
                className=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.interbasket.net%2Fwp-content%2Fuploads%2FDywane-Wade-in-Miami-Heat-city-jersey.png&f=1&nofb=1&ipt=14a401a6ae4392725d07a1695a4a07d4b81335da4132affb5718648f7d9f800a&ipo=images"
              />
              Wade
            </div>
            <div className="flex flex-col border-2 border-red-400 w-full h-30 object-cover">
              <img
                className=""
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F2-28478_official-south-park-studios-wiki-kenny-south-park.png&f=1&nofb=1&ipt=4966373aa45d9cfa3eb7b6fe3d581b2f7e47094e878bb2c40ed37bdca02f7eea&ipo=images"
              />
              Some Guy
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="bg-gray-200 text-black py-4">&copy; SERENE 2023 </div>
    </div>
  );
};

export default LandingPage;
