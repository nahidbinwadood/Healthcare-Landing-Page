import graph from "../assets/Media/chart.png";
import certificate from "../assets/Media/certificate.png";
import image from "../assets/Media/bgBanner.PNG";
import star from "../assets/Media/fi-sr-star.png";
import people from "../assets/Media/persons.png";
import coin from "../assets/Media/coin.png";
import camera from "../assets/Media/video.png"
const BannerCards = () => {
  return (
    <div className="px-5 lg:px-0 pb-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 container mx-auto lg:-mt-44 ">
        <div className="space-y-5 p-6 rounded-3xl bg-white border border-gray-200">
          <h2 className="text-2xl lg:text-5xl font-semibold">90%</h2>
          <p className="w-3/4 text-[#020043CC]">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img className="mx-auto" src={graph} alt="" />
        </div>

        <div className="space-y-5 p-6 rounded-3xl border bg-[#FFFFF5] lg:mt-32 border-gray-200">
          <h2 className="text-2xl lg:text-5xl font-semibold">500+</h2>
          <p className="w-3/4 text-[#020043CC]">Board-certified doctors</p>
          <img className="ml-auto" src={certificate} alt="" />
        </div>

        <div className="space-y-5 p-6 rounded-3xl border bg-white lg:mt-44 border-gray-200">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl lg:text-5xl font-semibold">4.8</h2>
            <img src={star} alt="" />
          </div>
          <p className="w-3/4 text-[#020043CC]">Over 20,000 Patient</p>
          <img src={people} alt="" />
        </div>

        <div className="space-y-5 p-6 rounded-3xl border bg-[#FFFFF5] lg:mt-32 border-gray-200">
          <h2 className="text-2xl lg:text-5xl font-semibold">$5000</h2>
          <p className="w-2/4 text-[#020043CC]">Money spend for poor patient</p>
          <img className="ml-auto" src={coin} alt="" />
        </div>

        <div className="space-y-5 p-6 rounded-3xl bg-white border border-gray-200">
          <h2 className="text-2xl lg:text-5xl font-semibold">50+</h2>
          <p className="w-3/5 text-[#020043CC]">
          Free lesions video 
          for patient
          </p>
          <img className="mx-auto" src={camera} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
