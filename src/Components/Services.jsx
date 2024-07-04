import { FiArrowUpRight } from "react-icons/fi";
import img1 from "../assets/Media/Rectangle 27-2.png";
import img2 from "../assets/Media/Rectangle 27-1.png";
import img3 from "../assets/Media/Rectangle 27.png";
const Services = () => {
  return (
    <div id="services" className="mt-16 lg:mt-56 container mx-auto rounded-3xl bg-[#FFFFF5] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0 lg:gap-y-12  md:px-12 md:py-8 px-5 lg:px-0">
      <div className="space-y-6">
        <button className=" font-semibold  px-8 py-3 border border-[#020043] rounded-full">
          Service
        </button>
        <div className="text-2xl md:text-4xl font-semibold tracking-wide leading-snug">
          <h2 className="mb-3">Empowering Health,</h2> <h2>Enriching Lives</h2>
        </div>
        <p className="text-[#020043CC] md:w-4/5 pb-5 ">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className="flex items-center gap-2 font-semibold  px-8 py-3 bg-[#FFC637] rounded-xl border border-white transition duration-500 hover:bg-transparent hover:border outline-none hover:border-[#020043] ">
          Appointment
          <FiArrowUpRight className="size-6" />
        </button>
      </div>
      <div className="w-full md:relative">
        <div>
          <img
            className="md:w-11/12 rounded-3xl object-cover"
            src={img1}
            alt=""
          />
        </div>
        <div className="lg:max-w-[400px] mt-6 lg:mt-0 space-y-3 text-white p-4 lg:px-5 lg:py-8 rounded-3xl lg:absolute lg:bottom-8 lg:left-8 bg-opacity-80 lg:bg-opacity-60 bg-[#020043]">
          <h2 className="font-semibold text-xl">Advanced Technology</h2>
          <div className="flex gap-3">
            <p className="text-[#e2e2df]">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <div className="flex items-end">
              <button className="bg-[#FFC637] p-2 rounded-full">
                <FiArrowUpRight className="size-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:relative">
        <div>
          <img
            className="md:w-11/12 rounded-3xl object-cover"
            src={img2}
            alt=""
          />
        </div>
        <div className="md:max-w-[400px] ] mt-6 lg:mt-0 space-y-3 text-white p-4 lg:px-5 lg:py-8 rounded-3xl lg:absolute lg:bottom-8 lg:left-8 bg-opacity-80 lg:bg-opacity-60 bg-[#020043]">
          <h2 className="font-semibold text-xl">Online Doctor Meet</h2>
          <div className="flex gap-3">
            <p className="text-[#e2e2df]">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <div className="flex items-end">
              <button className="bg-[#FFC637] p-2 rounded-full">
                <FiArrowUpRight className="size-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <img
          className="md:w-11/12 rounded-3xl object-cover"
          src={img3}
          alt=""
        />
        <div className="md:max-w-[400px] ] mt-6 lg:mt-0 space-y-3 text-white p-4 lg:px-5 lg:py-8 rounded-3xl lg:absolute lg:bottom-8 lg:left-8 bg-opacity-80 lg:bg-opacity-60 bg-[#020043]">
          <h2 className="font-semibold text-xl">Consultancy your health</h2>
          <div className="flex gap-3">
            <p className="text-[#e2e2df]">
            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
            </p>
            <div className="flex items-end">
              <button className="bg-[#FFC637] p-2 rounded-full">
                <FiArrowUpRight className="size-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
