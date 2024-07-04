/* eslint-disable react/no-unescaped-entities */
import rev1 from "../assets/Media/review-1.png";
import rev2 from "../assets/Media/review-2.png";
import rev3 from "../assets/Media/review-3.png";
import star from "../assets/Media/review-star.png";
const Testimonials = () => {
  return (
    <div className="my-36 container mx-auto px-5 lg:px-0">
      <div className="space-y-6">
        <button className=" font-semibold  px-8 py-3 border border-[#020043] rounded-full">
          Testimonial
        </button>
        <div className="text-2xl md:text-4xl font-semibold">
          <h2 className="mb-3">What they say about us</h2>
        </div>

        {/* Reviews */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#FFFFF5] px-6 py-8 space-y-5">
            <div className="font-semibold text-2xl">
              <h2>
                Expertise and Compassion{" "}
                <span className="md:hidden">Combined</span>
              </h2>{" "}
              <span className="hidden md:flex pt-2">Combined</span>
            </div>
            <p className="">
              I can't thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div>
                <img className="mdd:size-12" src={rev1} alt="" />
              </div>
              <div className="flex flex-col gap-2  ">
                <h2 className="font-semibold">
                  Sarah D,<span className="font-normal">IT Professional</span>{" "}
                </h2>
                <div>
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFF5] px-6 py-8 space-y-5">
            <div className="font-semibold text-2xl ">
              <h2>
                Life-Saving Care, Life-Changing{" "}
                <span className="md:hidden">Experience</span>
              </h2>{" "}
              <span className="hidden md:flex pt-2">Experience</span>
            </div>
            <p className="">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div>
                <img className="md:size-12" src={rev2} alt="" />
              </div>
              <div className="flex flex-col gap-2  ">
                <h2 className="font-semibold">
                  Michael R,{" "}
                  <span className="font-normal">Business Executive</span>{" "}
                </h2>
                <div>
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFF5] px-6 py-8 space-y-5">
            <div className="font-semibold text-2xl">
              <h2>
                A Partner in Health and{" "}
                <span className="md:hidden">Wellness</span>
              </h2>{" "}
              <span className="hidden md:flex pt-2">Wellness</span>
            </div>
            <p className="">
              As a busy professional, I appreciate the convenience and quality
              of care I receive at [Healthcare Provider Name]. From telemedicine
              consultations to routine check-ups, they've become my trusted
              partner in health and
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div>
                <img className="md:size-12" src={rev3} alt="" />
              </div>
              <div className="flex flex-col gap-2  ">
                <h2 className="font-semibold">
                  Sarah D,<span className="font-normal">IT Professional</span>{" "}
                </h2>
                <div>
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="hidden pt-12 md:flex cursor-pointer justify-center items-center gap-4  ">
            <div className="p-2 bg-gray-300 rounded-full"></div>
            <div className="p-2 bg-[#FFC637] rounded-full"></div>
            <div className="p-2 bg-gray-300 rounded-full"></div>
             
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
