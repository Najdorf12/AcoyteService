import iconPhone from "../assets/iconPhone.png";
import iconPc from "../assets/iconPc.png";
import iconGamer from "../assets/iconGamer.png";
import imgBrand from "../assets/img1.png";
import imgGif from "../assets/phonegif.gif";
import imgGifEdit from "../assets/editphonegif.mp4";
const Details = () => {
  const iconsTech = [iconPhone, iconPc, iconGamer];

  return (
    <>
      <section
        id="third-section"
        className="w-full bg-zinc-800 h-screen text-zinc-600 text-sm flex flex-col justify-evenly items-center lg:items-start "
      >
        {iconsTech?.map((icon, i) => (
          <div
            key={i}
            className="flex justify-center items-center z-50 relative  w-fit max-w-[500px] lg:max-w-[600px]  2xl:max-w-[700px] lg:ml-[5%] "
          >
            <figure className="w-[35%]  h-full flex justify-center items-center  to-trasparent p-3 rounded-2xl rounded-r-none max-w-[200px]  shadow-md shadow-zinc-900 bg-gradient-to-tl from-blue-800 via-zinc-800 to-trasparent border border-zinc-700 border-r-0">
              <img className="w-full" src={icon} alt="icon" />
            </figure>
            <ul
              className="font-title h-full text-base text-balance flex flex-col justify-center  shadow-md shadow-zinc-900 pl-3 py-3 w-[60%] rounded-2xl rounded-l-none  text-zinc-100 gap-1 xl:text-lg xl:py-3 bg-gradient-to-tr from-blue-800 via-zinc-800 to-trasparent border border-zinc-700"
            >
              <li className="flex items-start gap-2  lg:max-w-fit xl:gap-2">
                <i className="text-blue-500 bx bxs-doughnut-chart -mt-[2px] lg:mt-0 text-lg xl:text-lg 2xl:text-xl"></i>{" "}
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-start gap-2  lg:max-w-fit xl:gap-2">
                <i className="text-blue-500 bx bxs-doughnut-chart -mt-[2px] lg:mt-0 text-lg xl:text-lg 2xl:text-xl"></i>{" "}
                Lorem ipsum dolor sit amet consectetur.
              </li>
              <li className="flex items-start gap-2  lg:max-w-fit xl:gap-2">
                <i className="text-blue-500 bx bxs-doughnut-chart -mt-[2px] lg:mt-0 text-lg xl:text-lg 2xl:text-xl"></i>{" "}
                Lorem ipsum dolor sit amet consectetur.
              </li>
            </ul>
          </div>
        ))}
      </section>

      <section
        id="brand-section"
        className="w-full h-screen flex flex-col z-50  text-balance py-4 2xl:py-6"
      >
      
      </section>
    </>
  );
};

export default Details;
