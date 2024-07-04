/* eslint-disable react/no-unescaped-entities */
const Faq = () => {
  return (
    <div className="my-36 container mx-auto px-5 lg:px-0">
      <div className="space-y-6">
        <button className=" font-semibold  px-8 py-3 border border-[#020043] rounded-full">
          Faq
        </button>
        <div className="text-2xl md:text-4xl font-semibold">
          <h2 className="mb-3">Frequently Asked Question</h2>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-12">
        <div className="relative cursor-pointer w-full overflow-hidden">
          <input
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10"
            type="checkbox"
          />
          <div className=" bg-[#FFFFF5] h-16 w-full pl-5 flex items-center">
            <h2 className="text-lg font-semibold cursor-pointer ">
              What are your office hours?
            </h2>
          </div>

          {/* Arrow icon */}
          <div className="absolute top-3 right-3  -  transition-transform duration-500 rotate-0 peer-checked:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
            <div className="p-4">
              <p>
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer w-full overflow-hidden">
          <input
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10"
            type="checkbox"
          />
          <div className=" bg-[#FFFFF5] h-16 w-full pl-5 flex items-center">
            <h2 className="text-lg font-semibold  ">
              How can I schedule an appointment?
            </h2>
          </div>

          {/* Arrow icon */}
          <div className="absolute top-3 right-3  -  transition-transform duration-500 rotate-0 peer-checked:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
            <div className="p-4">
              <p>
                To schedule an appointment, contact the relevant person or
                office via phone, email, or online booking system. Provide your
                availability and be flexible with dates and times. Confirm the
                appointment details, including the date, time, and location or
                platform (if virtual). Add it to your calendar and set
                reminders. Gather any necessary documents or information. Follow
                up closer to the date to reconfirm. Ensure you are punctual and
                prepared for the meeting.
              </p>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer w-full overflow-hidden">
          <input
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10"
            type="checkbox"
          />
          <div className=" bg-[#FFFFF5] h-16 w-full pl-5 flex items-center">
            <h2 className="text-lg font-semibold  ">
            Do you accept insurance?
            </h2>
          </div>

          {/* Arrow icon */}
          <div className="absolute top-3 right-3  -  transition-transform duration-500 rotate-0 peer-checked:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
            <div className="p-4">
              <p>
              Yes, we accept insurance. To confirm coverage, please provide your insurance details when scheduling your appointment. We work with various insurance providers and will verify your benefits before your visit. If you have any questions about specific coverage or out-of-pocket costs, our billing department can assist you. Please bring your insurance card and a photo ID to your appointment. We aim to make the process smooth and ensure you receive the care you need.
              </p>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer w-full overflow-hidden">
          <input
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10"
            type="checkbox"
          />
          <div className=" bg-[#FFFFF5] h-16 w-full pl-5 flex items-center">
            <h2 className="text-lg font-semibold  ">
            What should I bring to my appointment?
            </h2>
          </div>

          {/* Arrow icon */}
          <div className="absolute top-3 right-3  -  transition-transform duration-500 rotate-0 peer-checked:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
            <div className="p-4">
              <p>
              For your appointment, please bring a photo ID and your insurance card. If applicable, also bring any referral documents, a list of current medications, and relevant medical records. If you've completed any forms or questionnaires beforehand, bring those as well. Additionally, prepare a list of questions or concerns you wish to discuss. Arriving with all necessary items ensures a smooth and efficient appointment, allowing the healthcare provider to give you the best possible care.
              </p>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer w-full overflow-hidden">
          <input
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10"
            type="checkbox"
          />
          <div className=" bg-[#FFFFF5] h-16 w-full pl-5 flex items-center">
            <h2 className="text-lg font-semibold  ">
            Do you offer telemedicine appointments?
            </h2>
          </div>

          {/* Arrow icon */}
          <div className="absolute top-3 right-3  -  transition-transform duration-500 rotate-0 peer-checked:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
            <div className="p-4">
              <p>
              Yes, we offer telemedicine appointments for your convenience. You can consult with our healthcare providers from the comfort of your home using a secure video platform. To schedule a telemedicine appointment, contact our office via phone or our online booking system. Ensure you have a stable internet connection and a device with a camera and microphone. Prior to your appointment, you'll receive instructions on how to connect. Telemedicine is a convenient way to receive care without visiting the office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
