import { Link } from "react-scroll";
import logo from "../assets/Media/logo dark.png";
import { FiArrowUpRight,   } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="bg-[#C3C6CD80] px-5">
      <div className=" container mx-auto flex items-center  justify-between py-8 ">
        {/* Logo */}
        <div>
          <img className="w-24" src={logo} alt="" />
        </div>

        {/* Nav Items */}
        <div className="hidden lg:flex">
          <div className="flex items-center gap-8  font-medium text-lg">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Blog
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
          </div>
        </div>

        {/* Call to action */}
        <div>
          <button className=" flex items-center gap-2 font-semibold px-3 lg:px-8 py-2 lg:py-4 border border-[#020043] rounded-xl">
            Appointment
            <FiArrowUpRight className="size-6" />
          </button>
        </div>
        {/* <div className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200">
          <FiMenu />
          <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration300">
            <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
              <li className="hover:bg-gray-200 py-4 px-6 w-full">Home</li>
              <li className="hover:bg-gray-200 py-4 px-6 w-full">Services</li>
              <li className="hover:bg-gray-200 py-4 px-6 w-full">Blog</li>
              <li className="hover:bg-gray-200 py-4 px-6 w-full">About</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
