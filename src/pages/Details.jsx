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
       {/*  <div className="w-[60%] h-screen bg-blue-500 absolute left-0 rounded-3xl "></div> */}
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
        className="w-full h-auto flex flex-col z-50  text-balance py-4 2xl:py-6"
      >
        <p className="text-4xl font-title2 font-extrabold z-50 text-zinc-600 mt-5 pl-4 max-w-[400px] lg:pl-[6%] xl:text-5xl xl:max-w-[600px] 2xl:text-7xl 2xl:max-w-[900px]">
          Alguien en <br />
          quien confiar. <span className="text-blue-500">Lorem Ipsum</span>{" "}
        </p>
        <figure className="w-[60%] flex  items-center z-50  mt-6 py-3 px-6 bg-white border-r-[3px]  border-b-[3px] border-blue-500 shadow-lg shadow-zinc-800  rounded-2xl max-w-[220px] lg:ml-[6%]xl:max-w-[600px] xl:ml-[6%] 2xl:max-w-[300px]">
          <img
            className="w-full object-cover rounded-2xl"
            src={imgGif}
            alt=""
          />
        </figure>
        <p className="text-2xl font-title2 font-extrabold z-50 text-zinc-200 mt-4 ml-4 w-[70%] max-w-[410px] lg:ml-[6%] xl:max-w-[500px] 2xl:text-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          reiciendis.
          <button className="z-50 bg-zinc-800 mt-3 py-[2px] relative flex items-center justify-center rounded-2xl w-[80%] font-medium font-text2 text-base border border-zinc-500 shadow-md shadow-zinc-800 text-white max-w-[300px] 2xl:mt-6 xl:text-lg 2xl:text-xl">
            Button
          </button>
        </p>
      </section>
    </>
  );
};

export default Details;
