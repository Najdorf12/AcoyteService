import gsap from "gsap";
import iconTech from "../assets/iconTech.png";
import iconTech2 from "../assets/iconTech2.png";
import iconTech3 from "../assets/iconTech3.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-screen  font-title overflow-hidden relative flex flex-col justify-between"
      >
        <div className=" z-50 flex gap-2 flex-col justify-center items-center pt-16 py-1 lg:pt-2 xl:pt-12">
          <div
            
            id="box-glass"
            className="border-[2px] border-pastel2 flex w-[91%] h-[170px] z-50 rounded-2xl md:h-[200px] max-w-[700px] 2xl:max-w-[800px] 2xl:h-[200px]  md:justify-between"
          >
            <article className="font-text3 text-balance flex flex-col pl-3 pt-3 relative text-zinc-800">
              <h6 className="text-lg font-medium md:text-xl text-blue-600">Lorem Impsum dolor</h6>
              <p className="text-sm mt-1 md:text-base max-w-[300px] ">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
              <button className="mt-6 flex justify-start items-center gap-1 text-base text-zinc-500">
                Ver más
                <i className="bx bx-chevron-right text-2xl text-pastel"></i>
              </button>
            </article>
            <figure className="absolute right-[2%] mt-5 z-50 w-[150px] md:w-[170px] md:relative   md:self-end md:mt-4 ">
              <img className="w-full" src={iconTech} alt="" />
            </figure>
          </div>

          <section className="flex w-full justify-center gap-2 z-50">
            <div
              id="box-glass"
              className="border-[2px] border-pastel2 w-[45%] h-[190px] rounded-2xl max-w-[348px] 2xl:max-w-[400px] 2xl:h-[200px]"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2">
                <h6 className="text-lg font-medium md:text-xl text-blue-600">Support 24/7</h6>
                <p className="text-sm mt-1 md:text-base  ">
                  Some random text. <br /> Lorem ipsum
                </p>
              </article>
              <figure className="w-full mt-2 flex justify-end md:mt-0">
                <img className="w-[90px] mr-2 xl:w-[100px] md:mr-8 " src={iconTech3} alt="" />
              </figure>
            </div>

            <div
              id="box-glass"
              className="border-[2px] border-pastel2 w-[45%] h-[190px]  rounded-2xl max-w-[348px] 2xl:max-w-[400px] 2xl:h-[200px]"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2">
                <h6 className="text-lg font-medium md:text-xl text-blue-600">Computer</h6>
                <p className="text-sm mt-1   md:text-base">
                  Some random text. <br /> Lorem ipsum
                </p>
              </article>
              <figure className="w-full mt-2 flex justify-end md:mt-0">
                <img className="w-[90px] mr-2 xl:w-[100px] md:mr-8 " src={iconTech2} alt="" />
              </figure>
            </div>
          </section>
        </div>

        {/* El último artículo toma el espacio restante */}
        <article className=" w-full z-50 text-balance flex flex-col justify-center items-center relative flex-grow px-4">
          <h5 className="font-title2 text-4xl font-medium z-50  text-center leading lg:text-4xl 2xl:text-6xl text-pastel">
            Lorem Impsum dolor sit amet
          </h5>
          <p className="font-title  text-sm font-medium text-center max-w-[450px] mt-4 lg:text-base lg:mt-6 lg:max-w-[550px] 2xl:text-lg 2xl:max-w-[1000px] 2xl:mt-8 text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aperiam maiores nemo. Ratione explicabo velit eius
            aliquid quaerat quasi quidem delectus totam in blanditiis dolor,
            fuga cumque quod nisi architecto!
          </p>
        </article>
      </section>
    </>
  );
};

export default About;

