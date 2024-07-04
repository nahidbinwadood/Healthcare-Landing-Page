import { FiArrowUpRight } from "react-icons/fi";
import about from "../assets/Media/Rectangle 24.png";
const About = () => {
  return (
    <div className="container mx-auto  mt-16 lg:mt-44  flex flex-col md:flex-row items-center gap-6 px-5 lg:px-0">
      <div className="space-y-6 lg:w-1/2 ">
        <button className=" font-semibold  px-8 py-3 border border-[#020043] rounded-full">
          Who we are
        </button>
        <div className="text-2xl md:text-4xl font-semibold tracking-wide leading-snug">
          <h2 className="mb-5">We Help To Get</h2> <h2>Solutions</h2>
        </div>
        <p className="text-[#020043CC] md:w-4/5 pb-5 ">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="flex items-center gap-2 font-semibold  px-8 py-3 bg-[#FFC637] rounded-xl border border-white transition duration-500 hover:bg-transparent hover:border outline-none hover:border-[#020043] ">
          Learn More
          <FiArrowUpRight className="size-6" />
        </button>
      </div>
      <div className="space-y-6 h-full lg:w-1/2 relative">
        <div className="w-full relative">
          <img className="ml-auto lg:w-4/5 object-contain" src={about} alt="" />
        </div>
        <div className="max-w-lg bg-[#343268] px-7 py-12 space-y-3 rounded-3xl text-white lg:absolute lg:-bottom-12 lg:-left-2">
          <h2 className="text-2xl font-medium">Our mission is simple</h2>
          <p className="text-gray-200">
            To provide high-quality healthcare services <br /> that are
            accessible, personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
