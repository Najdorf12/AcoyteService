import iconPhone from "../assets/iconPhone.png";
import iconPc from "../assets/iconPc.png";
import iconGamer from "../assets/iconGamer.png";

const Details = () => {
  return (
    <>
      <section id="third-section" className="w-full h-screen bg-white lg:pl-[10%] text-zinc-600 text-sm">
        <div  className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[30%] bg-gradient-to-tr from-zinc-800 via-blue-800 to-trasparent rounded-tr-3xl p-3 border-zinc-400 border">
            <img className="w-full" src={iconPhone} alt="" />
          </figure>
          <ul className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border">
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i> Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
          </ul>
        </div>

        <div  className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[30%] bg-gradient-to-tr from-zinc-800 via-blue-800 to-trasparent rounded-tr-3xl p-3 border-zinc-400 border">
            <img className="w-full" src={iconPc} alt="" />
          </figure>
          <ul className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border">
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i> Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
          </ul>
        </div>

        <div  className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[30%] bg-gradient-to-tr from-zinc-800 via-blue-800 to-trasparent rounded-tr-3xl p-3 border-zinc-400 border">
            <img className="w-full" src={iconGamer} alt="" />
          </figure>
          <ul className="font-title text-balance  pl-3 shadow-md shadow-zinc-800 w-[60%] py-2
          bg-gradient-to-tr from-zinc-800 via- to-trasparent rounded-2xl rounded-l-none
          text-zinc-100 gap-1 border-zinc-400 border">
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i> Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-500 bx bxs-doughnut-chart text-base'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Details;
