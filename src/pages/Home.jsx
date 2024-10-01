import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="z-50 w-full h-screen relative">
        <nav className="w-full  flex justify-evenly text-zinc-800 pt-2 font-text lg:justify-center lg:gap-12">
          <button className=" border border-pastel px-6 rounded-xl bg-zinc-800 flex justify-center items-center py-[2px] text-white shadow-md shadow-zinc-600 lg:px-9">
            Contacto
          </button>
          <button className="border border-blue-00 px-6 rounded-xl  flex justify-center items-center py-[2px]  shadow-md shadow-zinc-800 lg:px-9">
            Lorem
          </button>
          <button className="border border-blue-00 px-6 rounded-xl  flex justify-center items-center py-[2px]  shadow-md shadow-zinc-800 lg:px-9">
            Lorem
          </button>
        </nav>
        <article className="z-50 px-3 flex flex-col text-balance text-center justify-center items-center mt-10">
          <h1 className="text-6xl font-title2 font-bold text-zinc-800 z-50 leading-[3.5rem] xl:text-8xl 2xl:text-9xl">
            ACOYTE SERVICE
          </h1>
          <h5 className="text-lg mt-3 leading-5 font-text3 text-zinc-500 z-50 max-w-[390px] xl:text-xl xl:max-w-[450px] 2xl:text-2xl 2xl:max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            nulla.
          </h5>
        </article>

        <div className="w-full absolute bottom-2 flex justify-between text-balance">
          <div className="h-[150px] w-[45%] max-w-[350px] bg-gradient-to-tr from-zinc-800 via-blue-800 to-trasparent p-3 text-base font-title text-white rounded-r-2xl lg:h-[200px] lg:w-[25%]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="w-[50%] h-[2.5px] bg-white mt-4 relative flex items-center justify-center">
              <i className="bx bx-right-arrow-alt absolute -right-2 text-2xl mt-[.98px]"></i>
            </div>
          </div>
          <div className="h-[150px]  bg-blue-900"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
