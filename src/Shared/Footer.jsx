import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import linkedin from "../assets/Media/linkedin.png"
import logo from "../assets/Media/logo light.png";

const Footer = () => {
  return (
    <div className="py-5 lg:py-16 mt-16 px-6 lg:px-0 bg-[#020043] text-white ">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between py-6 lg:px-56 lg:py-24">
        <div className="space-y-8">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>123 Main Street Anytown, USA</h2>
            <h2>Postal Code: 12345</h2>
          </div>
          <div>
            <h2>Support: support@oyolloo.com</h2>
            <h2>(Available : 10:00am to 07:00pm)</h2>
          </div>
        </div>
        <div className="">
          <div className="space-y-5">
            <h2>Home</h2>
            <h2>About Us</h2>
            <h2>Success Page</h2>
            <h2>Terms and Condition</h2>
          </div>
        </div>
        <div>
          <div className="space-y-5">
            <h2>Services</h2>
            <h2>Scheduling</h2>
            <h2>Contact Us</h2>
            <h2>Patient Portal</h2>
          </div>
        </div>
        <div>
          <div className="space-y-5">
            <div className="pb-8">
              <h2 className="pb-4">Follow Us</h2>
              <div className="flex items-center gap-8">
                <FaFacebook className="size-8 text-white" />
                <FaInstagram className="size-8 text-white" />
                 <img  className="size-8" src={linkedin} alt="" />
                <FaYoutube className="size-8 text-white" />
              </div>
            </div>
            <h2>@docplus 2024</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
