const Contact = () => {
  return (
    <>
    
      <section
        id="contact-section"
        className="w-full h-screen bg-zinc-800 flex flex-col"
      >
      <div  className="h-[5vh] w-full bg-blue-600"></div>
        <section className="z-50 font-text2 mt-14">
          <article >
            <h2
              style={{ animation: "appear 2s ease-out" }}
              class="text-5xl text-start font-semibold font-title2  text-white  pl-5"
            >
              Contacto
            </h2>
            <div className="w-[80%] h-[2px] bg-pastel mt-3"></div>
            <p
              style={{ animation: "appear 3s ease-out" }}
              className="text-zinc-400 mt-5 text-sm  font-title font-medium text-start text-balance xl:text-lg pl-5"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              asperiores dolores nisi. Soluta, quidem. Veritatis eveniet magnam
              nemo nostrum voluptatem!
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
                  className="peer h-10 w-full border-b-2 border-pastel font-title text-white bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600  2xl:mt-6"
                  required=""
                  id="email"
                  name="email"
                  type="email"
                />
                <label
                  className=" absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-pastel peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-500 peer-focus:text-base font-normal lg:peer-placeholder-shown:text-stone-600 2xl:mt-6"
                  for="email"
                >
                  Email 
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="Password"
                  className="peer h-10 font-title w-full border-b-2 border-pastel text-white  bg-transparent placeholder-transparent focus:outline-none focus:border-blue-600"
                  required=""
                  id="password"
                  name="password"
                />
                <label className="absolute left-0 -top-3.5 text-gray-800 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-pastel peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-500 peer-focus:text-base font-normal lg:peer-placeholder-shown:text-stone-600 ">
                  WhatsApp
                </label>
              </div>
             
              <textarea id="box-glass" placeholder="Escribe tu consulta aquí ..." name="textarea" className="w-full h-[150px] bg-transparent  pt-2 px-3 rounded-2xl border border-pastel text-white  font-title placeholder-pastel focus:border-blue-600"></textarea>
              <button
              id="box-glass"
                className="w-full border border-pastel py-1 px-4  rounded-full shadow-lg text-white font-semibold transition duration-200 text-lg font-title "
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
        <footer className="w-full mt-6 lg:mt-1 xl:w-[50%] xl:mt-5 2xl:mt-6 z-50">
          <ul className="flex gap-8 justify-center items-center text-pastel2 text-4xl xl:text-5xl xl:gap-12  ">
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
      </section>
    </>
  );
};

export default Contact;
