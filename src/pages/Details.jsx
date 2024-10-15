import icon1 from "/icons/phone-audio.png";
import icon2 from "/icons/phone-batery.png";
import icon3 from "/icons/phone-batery2.png";
import icon4 from "/icons/phone-camara.png";
import icon5 from "/icons/phone-fix.png";
import icon6 from "/icons/phone-fix2.png";
import icon7 from "/icons/phone-danger.png";
import icon8 from "/icons/phone-screen.png";
import icon9 from "/icons/phone-secure2.png";
import icon10 from "/icons/phone-water.png";

const Details = () => {
  const iconsTech = [
    { icon: icon8, text: "Reemplazo de pantalla táctil" },
    { icon: icon2, text: "Sustitución de batería" },
    { icon: icon4, text: "Reparación de cámaras (principal y frontal)" },
    { icon: icon7, text: "Solución de problemas de sistema operativo" },
    { icon: icon1, text: "Reparación de audio y altavoces" },
    { icon: icon10, text: "Reparación de dispositivos mojados" },
    { icon: icon6, text: "Solución de cortocircuitos en placa" },
    { icon: icon9, text: "Actualización de sistema Android" },
  ];

  return (
    <>
      <section
        id="third-section"
        className="w-full bg-zinc-800 h-screen text-zinc-600 text-sm flex flex-col justify-center gap-3 items-center lg:items-start "
      >
        {iconsTech?.map((icon, i) => (
          <div
            key={i}
            className="flex justify-center items-center z-50 relative  w-full max-w-[500px] lg:max-w-[600px]  2xl:max-w-[700px] lg:ml-[5%] "
          >
            <figure className="w-20  h-full flex justify-center items-center  to-trasparent p-3 rounded-2xl rounded-r-none max-w-[200px]  shadow-md shadow-zinc-900 bg-gradient-to-tl from-primary via-zinc-800 to-trasparent border border-zinc-700 border-r-0">
              <img className="w-full" src={icon?.icon} alt="icon" />
            </figure>
            <ul className="font-title h-full text-base text-balance flex flex-col justify-center  shadow-md shadow-zinc-900 pl-3 pr-4 py-3 w-[70%] rounded-2xl rounded-l-none  text-zinc-100 gap-1 xl:text-lg xl:py-3 bg-gradient-to-tr from-primary via-zinc-800 to-trasparent border border-zinc-700">
              <li className="flex items-start gap-2   lg:max-w-fit xl:gap-2">
                <i className="text-primary bx bxs-doughnut-chart -mt-[2px] lg:mt-0 text-lg xl:text-lg 2xl:text-xl"></i>{" "}
                {icon?.text}
              </li>
            </ul>
          </div>
        ))}
      </section>

      <section
        id="brand-section"
        className="w-full h-screen flex flex-col z-50  text-balance px-4"
      >
        <article className="flex flex-col items-start mt-8 z-50 w-[90%]">
        <h6 className="text-4xl text-primary font-title2 font-semibold">Cuidamos lo que te conecta</h6>
       <div className="w-full h-[2px] bg-zinc-200 mt-3"></div>
        <p className="text-sm mt-4 text-zinc-400 font-title2 font-medium">En <strong>Infinix Service</strong>, entendemos que los dispositivos móviles son una parte esencial de tu vida diaria. 
        Ya sea para el trabajo, el entretenimiento o la comunicación, tu smartphone Infinix es mucho más que un dispositivo; es una herramienta indispensable. Por eso, te ofrecemos un servicio técnico ágil y eficiente, con la tranquilidad de que tu dispositivo está en buenas manos.</p>
        </article>
      </section>
    </>
  );
};

export default Details;
