const Contact = () => {
  return (
    <>
      <section id="contact-section" className="w-full h-screen flex flex-col bg-zinc-800">
        {/* <div className="h-[5vh] w-full rounded-r-sm z-50 bg-gradient-to-tr from-blue-800 via-blue-400 to-transparent"></div> */}
        <section className="z-50 font-text2 mt-12 flex flex-col items-center">
          <article className="flex flex-col items-center justify-center">
            <h2
              style={{ animation: "appear 2s ease-out" }}
              class="text-5xl text-center font-semibold font-title2  text-white xl:text-6xl"
            >
              CONTACTO
            </h2>

            <p
              style={{ animation: "appear 3s ease-out" }}
              className="text-zinc-300 mt-6 px-3 text-sm  font-title  text-center text-balance xl:text-base max-w-[500px]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi magni qui, sunt id quasi reiciendis provident eos sapiente nobis.
            </p>

          </article>
          <div
            /* id="box-glass" */
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            class="max-w-md w-full rounded-2xl  overflow-hidden py-6 space-y-4"
          >
            <form method="POST" action="#" className="space-y-8 px-6 mt-6 ">
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-blue-500 font-title text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600  2xl:mt-6"
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
                  className="peer h-10 font-title w-full border-b-2 border-blue-500 text-white  bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600"
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
                className="w-full h-[180px] bg-transparent  pt-2 px-3 rounded-2xl border border-zinc-500 text-zinc-200 font-title placeholder-gray-300 font-medium  "
              ></textarea>
              <button
                  id="box-glass" 
                className=" w-full border border-zinc-500 py-1 px-4  rounded-full shadow-md shadow-zinc-800 text-white font-semibold transition duration-200 text-lg font-title "
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
        <footer className="w-full self-center mt-6 lg:mt-1 xl:w-[50%] xl:mt-5 2xl:mt-6 z-50">
          <ul className="flex gap-8 justify-center items-center text-zinc-200 text-4xl xl:text-5xl xl:gap-12  ">
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
