import iconPhone from "../assets/iconPhone.png";
import iconPc from "../assets/iconPc.png";
import iconPcGamer from "../assets/iconPcGamer.png";

const Details = () => {
  return (
    <>
      <section id="third-section" className="w-full h-screen bg-white lg:pl-[10%] text-zinc-600 font-medium">
        <div className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[100px]">
            <img className="w-full" src={iconPhone} alt="" />
          </figure>
          <ul className="font-title text-balance mt-3 pl-3 ">
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-700 bx bxs-doughnut-chart text-xl'></i> Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-700 bx bxs-doughnut-chart text-xl'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-700 bx bxs-doughnut-chart text-xl'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
          </ul>
        </div>

        <div className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[100px] ml-3 ">
            <img className="w-full" src={iconPcGamer} alt="" />
          </figure>
          <ul className="font-title text-balance mt-3 pl-3 ">
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-700 bx bxs-doughnut-chart text-xl'></i> Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-700 bx bxs-doughnut-chart text-xl'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-700 bx bxs-doughnut-chart text-xl'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
          </ul>
        </div>

        <div className="flex flex-col  z-50 relative h-1/3">
          <figure className="w-[100px] ml-3">
            <img className="w-full" src={iconPc} alt="" />
          </figure>
          <ul className="font-title text-balance mt-3 pl-3 ">
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-900 bx bxs-doughnut-chart text-xl'></i> Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-900 bx bxs-doughnut-chart text-xl'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
            <li className="flex items-start gap-1 max-w-[200px] lg:max-w-fit">
            <i className='text-blue-900 bx bxs-doughnut-chart text-xl'></i>  Lorem ipsum dolor sit amet
              consectetur.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Details;
