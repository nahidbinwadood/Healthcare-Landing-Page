import image from "../assets/Media/background.PNG";
import hero from "../assets/Media/Rectangle 32.png";
import shadow from "../assets/Media/Rectangle 33.png";
import logo from "../assets/Media/logo light.png";
import { FiArrowUpRight } from "react-icons/fi";
const Appointment = () => {
  return (
    <div
      id="home"
      className="py-5 lg:py-16 px-5 lg:px-0 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto h-full w-full relative ">
        <div>
          <img
            className="h-96 object-cover lg:h-full w-full rounded-2xl lg:rounded-[40px] "
            src={hero}
            alt=""
          />
          <img
            src={shadow}
            className="absolute inset-0 rounded-2xl lg:rounded-[40px] h-full w-full"
          ></img>
          <img src={logo} className="absolute top-10 right-10 w-24 lg:w-auto lg:top-16 lg:right-16" alt="" />
          <div className="absolute inset-0 pt-12 lg:pt-0 flex flex-col h-full lg:w-1/2 gap-10 justify-center pl-5 lg:pl-20">
            <div className="text-2xl lg:text-4xl text-white font-semibold space-y-2 lg:space-y-5">
              <h2>Get Your</h2>
              <h2>First Appointment</h2>
              <h2>at 50% Off!</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 py-5">
              <button className="flex items-center gap-2 font-semibold px-4 lg:px-8 py-3 bg-[#FFC637] rounded-xl border border-white transition duration-500 hover:text-white hover:bg-transparent hover:border outline-none hover:border-[#fff] ">
                Appointment
                <FiArrowUpRight className="size-6  " />
              </button>
              <button className="flex items-center gap-2 font-semibold px-4 lg:px-8 py-3  rounded-xl border border-white transition duration-500 hover:bg-transparent text-white hover:text-[#020043] hover:bg-[#FFC637] hover:border outline-none hover:border-[#FFC637] ">
                Learn More
                <FiArrowUpRight className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
