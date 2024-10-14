const Contact = () => {
  return (
    <>
      <section id="contact-section" className="w-full h-screen md:h-auto flex flex-col bg-zinc-800 pb-8 rounded-2l xl:pb-20 2xl:h-screen lg:w-[80%] lg:self-center lg:rounded-r-3xl">
       <div className="z-20 hidden lg:flex absolute h-screen right-0 w-[10%] bg-white"></div>
        <section className="z-50 font-text2 mt-12 flex flex-col items-center">
          <article className="flex flex-col items-center justify-center">
            <h2
              style={{ animation: "appear 2s ease-out" }}
              class="text-5xl text-center font-bold font-title2  text-primary lg:text-7xl xl:text-8xl 2xl:text-9xl"
            >
              CONTACTO
            </h2>

            <p
              style={{ animation: "appear 3s ease-out" }}
              className="text-zinc-300 mt-4 px-3 text-sm  font-title  text-center text-balance xl:text-base  xl:max-w-[600px] 2xl:text-lg 2xl:max-w-[700px]"
            >
              Elige Infinix Service para una experiencia donde la tecnología, la eficiencia y la satisfacción del cliente se combinan.
            </p>
            <p
              className="text-white mt-6 px-3 text-base  font-title  text-center text-balance xl:text-base max-w-[500px] xl:max-w-[600px] 2xl:text-lg 2xl:max-w-[700px]"
            >
             Ponte en contacto con nosotros o dejanos tu consulta. 
            </p>
          </article>
          <div
            /* id="box-glass" */
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            class="max-w-md w-full rounded-2xl  overflow-hidden py-6 space-y-4"
          >
            <form method="POST" action="#" className="space-y-8 px-6   lg:mt-2">
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-primary font-title text-white bg-transparent placeholder-transparent focus:outline-none focus:border-whiteCustom  2xl:mt-6"
                  required=""
                  id="email"
                  name="email"
                  type="email"
                />
                <label
                  className=" absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-300 peer-focus:text-base font-normal  2xl:mt-6"
                  for="email"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="Password"
                  className="peer h-10 font-title w-full border-b-2 border-primary text-white  bg-transparent placeholder-transparent focus:outline-none focus:border-whiteCustom"
                  required=""
                  id="password"
                  name="password"
                />
                <label className="absolute left-0 -top-3.5 text-gray-800 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-zinc-300 peer-focus:text-base font-normal  ">
                  WhatsApp
                </label>
              </div>

              <textarea
                id="box-glass"
                placeholder="Escribe tu consulta aquí ..."
                name="textarea"
                className="border-[2px] border-whiteCustom text-white rounded-2xl w-full h-[150px] placeholder:text-zinc-400 p-2 bg-transparent  focus:border-primary focus:outline-none"
              ></textarea>
              <button
                  id="box-glass" 
                className=" w-full border border-whiteCustom py-1 px-4  rounded-full shadow-md shadow-zinc-800 text-primary font-semibold transition duration-200 text-lg font-title "
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
        <footer className="w-full self-center mt-6 lg:w-auto z-50 lg:mt-2">
          <ul className="flex gap-8 justify-center items-center text-primary text-4xl lg:text-5xl  xl:gap-12 ">
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              <i className="bx bxl-youtube"></i>
            </li>
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              <i className="bx bxl-facebook-circle"></i>
            </li>
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              <i className="bx bxl-instagram-alt"></i>
            </li>
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              {" "}
              <i className="bx bxl-tiktok"></i>
            </li>
          </ul>
        </footer>
        <div className="absolute bottom-0 text-zinc-700 text-base font-normal flex justify-center items-center gap-1 w-full font-text">
        <i className='bx bx-copyright text-xl'></i>ACOYTESERVICE

        </div>
      </section>
    </>
  );
};

export default Contact;
