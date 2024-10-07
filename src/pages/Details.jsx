import iconPhone from "../assets/iconPhone.png";
import iconPc from "../assets/iconPc.png";
import iconGamer from "../assets/iconGamer.png";
import imgBrand from "../assets/img1.png";
import imgGif from "../assets/phonegif.gif";
import imgGifEdit from "../assets/editphonegif.mp4";
const Details = () => {
  return (
    <>
      <section
        id="third-section"
        className="w-full h-[110vh] 2xl:h-screen  lg:pl-[10%] text-zinc-600 text-sm flex flex-col justify-center  "
      >
        <div className="flex flex-col justify-center  z-50 relative h-1/3">
          <figure className="w-[30%] max-w-[130px] bg-gradient-to-tr from-zinc-800 via-zinc-700 to-trasparent rounded-tr-3xl p-3 border-blue-400 border-r-[6px] 2xl:max-w-[170px] ">
            <img className="w-full" src={iconPhone} alt="" />
          </figure>
          <ul
            className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border max-w-[420px] xl:text-lg xl:max-w-[520px] xl:py-3 "
          >
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center  z-50 relative h-1/3">
          <figure className="w-[30%] max-w-[130px] bg-gradient-to-tr from-zinc-800 via-zinc-700 to-trasparent rounded-tr-3xl p-3 border-blue-400 border-r-[6px] 2xl:max-w-[170px]">
            <img className="w-full" src={iconPc} alt="" />
          </figure>
          <ul
            className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border max-w-[420px] xl:text-lg xl:max-w-[520px] 2xl:gap-2 xl:py-3"
          >
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl "></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center  z-50 relative h-1/3">
          <figure className="w-[33%] max-w-[140px] bg-gradient-to-tr from-zinc-800 via-zinc-700 to-trasparent rounded-tr-3xl p-3 border-blue-400 border-r-[6px] 2xl:max-w-[170px]">
            <img className="w-full" src={iconGamer} alt="" />
          </figure>
          <ul
            className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border max-w-[420px] xl:text-lg xl:max-w-[520px] xl:py-3"
          >
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit xl:gap-2">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base xl:text-lg 2xl:text-xl"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </div>
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
