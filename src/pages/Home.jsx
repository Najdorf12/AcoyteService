import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  return (
    <>
      <section className="z-50 w-full h-screen relative flex flex-col justify-between items-center">
        <nav className="bg-gradient-to-tr from-zinc-800 via-zinc-800 to-trasparent w-full absolute top-0 shadow-md shadow-zinc-200 flex justify-evenly py-2 font-title text-base text-white  rounded-b-full md:w-[80%] self-center   xl:text-lg 2xl:text-xl">
          <button className="flex items-center justify-center  rounded-full ">
            Logo
          </button>{" "}
          <button className="flex items-center justify-center rounded-full">
            Button1
          </button>{" "}
          <button className="flex items-center justify-center rounded-full ">
            Button2
          </button>
        </nav>
        <article className="z-50 px-3 flex flex-col text-balance text-center justify-center items-center mt-16">
          <h1 className="text-6xl font-title2 font-bold text-zinc-800 z-50 leading-[3.5rem] xl:text-8xl 2xl:text-9xl">
            ACOYTE SERVICE
          </h1>
          <h5 className="text-base mt-3 leading-5 font-text3 text-zinc-500 z-50 max-w-[390px] lg:text-lg xl:text-xl xl:max-w-[500px] 2xl:text-2xl 2xl:max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            nulla.
          </h5>
        </article>

        <div className="w-full self-start flex justify-between text-balance absolute bottom-20 max-w-[400px] md:bottom-2 lg:max-w-[550px] xl:max-w-[650px]">
          <div className="border-l-0 shadow-md shadow-zinc-800 h-[130px] w-[45%] max-w-[350px] bg-gradient-to-tr from-zinc-800 via-zinc-800 to-trasparent p-3 text-base font-title text-white rounded-r-2xl lg:h-[200px] lg:text-xl xl:text-2xl xl:h-[200px] xl:p-4">
            <p className="lg:w-[80%]">Some random text or link. Lorem ipsum</p>
            <div className="w-[50%] h-[2.5px] bg-blue-500 mt-4 relative flex items-center justify-center lg:mt-16 lg:w-[80%]">
              <i className="bx bx-right-arrow-alt absolute -right-2 text-2xl mt-[.98px] text-blue-500 xl:text-4xl xl:mt-0"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
