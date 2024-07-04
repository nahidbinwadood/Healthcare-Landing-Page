import image from "../assets/Media/background.PNG";
import hero from "../assets/Media/Rectangle 5.png";
import shadow from "../assets/Media/Rectangle 6.png";
 
const Banner = () => {
  return (
    <div
      id="home"
      className="pb-16 px-5 lg:px-0 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)),url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
         
      }}
    >
      <div className="container mx-auto h-full w-full  relative ">
        <div>
          <img className="object-cover h-full w-full " src={hero} alt="" />
          <img src={shadow} className="absolute inset-0 h-full w-full  "></img>
        </div>
      </div>
      <div className="text-2xl md:text-4xl lg:text-6xl font-semibold text-center pt-16">
        <h2>
          Comprehensive Care <br />
          for Every Patient
        </h2>
      </div>
     
    </div>
  );
};

export default Banner;
