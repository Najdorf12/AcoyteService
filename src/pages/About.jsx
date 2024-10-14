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
            id="box-glass2"
            className="border-[2px] border-pastel2 flex w-[91%] h-[180px] z-50 rounded-2xl md:h-[200px] max-w-[700px] 2xl:max-w-[800px] 2xl:h-[200px]  md:justify-between"
          >
            <article className="font-text3 text-balance flex flex-col pl-3 pt-2 relative text-zinc-800">
              <h6 className="text-lg font-medium md:text-xl text-primary">
                Soluciones rápidas y eficientes
              </h6>
              <p className="text-sm mt-1 md:text-base max-w-[300px] ">
                Tecnología de punta para identificar y resolver cualquier
                problema
              </p>
              <button className="mt-8 flex justify-start items-center gap-1 text-base text-zinc-600">
                Ver más
                <i className="bx bx-chevron-right text-2xl text-primary"></i>
              </button>
            </article>
            <figure className="absolute right-0 -bottom-2 z-50 w-[130px] md:w-[170px] md:relative   md:self-end md:mt-4 ">
              <img className="w-full" src={iconTech} alt="" />
            </figure>
          </div>

          <section className="flex w-full justify-center gap-2 z-50">
            <div
              id="box-glass2"
              className="border-[2px] border-pastel2 w-[45%] h-[200px] rounded-2xl max-w-[348px] 2xl:max-w-[400px] 2xl:h-[200px]"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2">
                <h6 className="text-lg font-medium md:text-xl text-primary">
                  Soporte 24/7
                </h6>
                <p className="text-sm mt-1 text-zinc-800 md:text-base pr-3 ">
                  Equipo listo para asistirte cuando lo necesites.
                </p>
              </article>
              <figure className="w-full flex justify-end md:mt-0">
                <img
                  className="w-[90px] mr-1 xl:w-[100px] md:mr-8 "
                  src={iconTech3}
                  alt=""
                />
              </figure>
            </div>

            <div
              id="box-glass2"
              className="border-[2px] border-pastel2 w-[45%] h-[200px]  rounded-2xl max-w-[348px] 2xl:max-w-[400px] 2xl:h-[200px]"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2">
                <h6 className="text-lg font-medium md:text-xl text-primary">
                  Garantía
                </h6>
                <p className="text-sm mt-1 text-zinc-800  md:text-base">
                  Nos especializamos en una amplia gama de reparaciones
                </p>
              </article>
              <figure className="w-full  flex justify-end md:mt-0">
                <img
                  className="w-[90px] mr-1 xl:w-[100px] md:mr-8 "
                  src={iconTech2}
                  alt=""
                />
              </figure>
            </div>
          </section>
        </div>

        {/* El último artículo toma el espacio restante */}
        <article
          
          className=" w-[95%] self-center z-50 text-balance flex flex-col justify-center items-center relative flex-grow "
        >
          <div id="box-glass3" className="py-5 rounded-2xl border-[2px] border-pastel2">
            <h5 className="font-title2 text-4xl font-medium z-50  text-center leading lg:text-4xl 2xl:text-6xl text-zinc-500 ">
              ¿Por qué elegir Infinix Service?
            </h5>
            <p className="font-title px-3 text-balance text-sm font-semibold text-center max-w-[450px] mt-4 lg:text-base lg:mt-6 lg:max-w-[550px] 2xl:text-lg 2xl:max-w-[1000px] 2xl:mt-8 text-zinc-700">
              Con un servicio técnico especializado y confiable, garantizamos
              reparaciones precisas y duraderas. Desde simples ajustes hasta las
              reparaciones más complejas, nos aseguramos de brindarte una
              experiencia excepcional en todo momento. La combinación de
              rapidez, calidad y tecnología de vanguardia es lo que nos
              distingue en el sector, asegurando que cada cliente reciba un
              servicio hecho a medida.
              {/*   nuestro equipo está listo para ofrecerte un servicio de calidad y confianza. 
          
      Nuestra misión es mantener tu dispositivo Infinix funcionando como nuevo, utilizando solo piezas originales y garantizando cada reparación. 
     
      En <strong>Infinix Service</strong>, entendemos que los dispositivos móviles son una parte esencial de tu vida diaria. 
      Ya sea para el trabajo, el entretenimiento o la comunicación, tu smartphone Infinix es mucho más que un dispositivo; es una herramienta indispensable. 
      Por eso, nuestro servicio técnico está diseñado para ofrecer soluciones rápidas y eficientes, con el más alto estándar de calidad.
      Nos especializamos en una amplia gama de reparaciones: desde cambios de pantalla hasta soluciones más complejas como la reparación de placas y diagnósticos avanzados. 
      Nuestro equipo técnico trabaja con tecnología de punta para identificar y resolver cualquier problema, asegurando que cada reparación mantenga la integridad de tu dispositivo.
      Utilizamos exclusivamente repuestos originales de Infinix para garantizar una durabilidad óptima y la mejor experiencia posible para nuestros clientes.
     
       */}
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
