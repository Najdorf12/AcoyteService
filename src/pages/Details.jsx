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
        className="w-full h-screen bg-white lg:pl-[10%] text-zinc-600 text-sm"
      >
        <div className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[30%] bg-gradient-to-tr from-zinc-800 via-zinc-700 to-trasparent rounded-tr-3xl p-3 border-blue-400 border-r-[6px]">
            <img className="w-full" src={iconPhone} alt="" />
          </figure>
          <ul
            className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border"
          >
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </div>

        <div className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[30%] bg-gradient-to-tr from-zinc-800 via-zinc-700 to-trasparent rounded-tr-3xl p-3 border-blue-400 border-r-[6px]">
            <img className="w-full" src={iconPc} alt="" />
          </figure>
          <ul
            className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border"
          >
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </div>

        <div className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[33%] bg-gradient-to-tr from-zinc-800 via-zinc-700 to-trasparent rounded-tr-3xl p-3 border-blue-400 border-r-[6px]">
            <img className="w-full" src={iconGamer} alt="" />
          </figure>
          <ul
            className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border"
          >
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
              <i className="text-blue-500 bx bxs-doughnut-chart text-base"></i>{" "}
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </div>
      </section>

      <section
        id="brand-section"
        className="w-full h-screen flex flex-col z-50  text-balance"
      >
        <p className="text-4xl font-title2 font-extrabold z-50 text-zinc-600 mt-8 pl-4">
          Alguien en <br />
          quien confiar. <span className="text-blue-500">Lorem Ipsum</span>{" "}
        </p>
        <figure className="w-[60%] flex  items-center z-50  mt-6 py-3 px-6 bg-white border-r-[3px]  border-b-[3px] border-blue-500 shadow-lg shadow-zinc-800  rounded-2xl max-w-[280px]">
          <img
            className="w-full object-cover rounded-2xl"
            src={imgGif}
            alt=""
          />
        </figure>
        <p className="text-2xl font-title2 font-extrabold z-50 text-zinc-200 mt-4 pl-4 w-[70%] max-w-[410px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          reiciendis.
          <button className="z-50 bg-zinc-800 mt-3 py-[2px] relative flex items-center justify-center rounded-2xl w-[80%] font-medium font-text2 text-base border border-zinc-500 shadow-md shadow-zinc-800 text-white">
            Button
          </button>
        </p>
      </section>
    </>
  );
};

export default Details;
