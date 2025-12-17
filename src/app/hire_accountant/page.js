import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import Header from "../components/Header";
import { benifits } from "../data/Data";

const page = () => {
  return (
    <>
      <div className="bg-[#1e3593] md:block hidden h-[100px] w-[100%] absolute top-0 ">
        <div className="bg-[#E8F3FF] w-[98%] py-1 ml-3 rounded-bl-[50px] rounded-br-[50px] ">
          <Header />
        </div>
      </div>
      <div
        className="relative mt-[-10px] -z-10  bg-[#1e3593] pb-0 overflow-visible"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 200px), 50% 100%, 0 calc(100% - 200px))",
        }}
      >
        <Image
          src={assets.hireShadow}
          alt=""
          className="bg-cover bg-center h-[353px] w-[840px] mt-[-200px] left-[200px] absolute p-4"
          fill
        />
        <div className="flex flex-col pt-16 gap-[24px] items-center justify-center ">
          <h1 className="text-[32px] md:text-[48px] font-semibold text-center mb-4 text-white ">
            Find the ideal accountant for your business, <br />
            anywhere
          </h1>
          <p className="text-[18px] hidden md:block md:text-[24px] font-semibold text-center mb-4 text-white ">
            Connect with verified, certified, and specialized accountants
            familiar with local <br /> laws, industry requirements, and business
            needs.
          </p>
          <p className="text-[18px] md:hidden w-[367px] block md:text-[24px] font-semibold text-center mb-4 text-white ">
            Connect with verified, certified, and specialized accountants .
          </p>
          <button className="bg-[#3D70FE] z-40 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10),0_10px_15px-3px_rgba(0,0,0,0.10)] py-[12px] px-[46px] text-white font-normal text-[16px] rounded-[8px] cursor-pointer ">
            Find perfect accountant →
          </button>
        </div>
        {/* </div> */}

        {/* Decorative V-Shape Divider */}
        <div className="relative mt-32 pb-32">
          {/* Cards positioned on the shape */}
          <div className="relative z-10 flex justify-center items-center">
            <div className="w-[945px] flex justify-between">
              {/* 1st */}
              <div className="flex ">
                <div className="bg-white flex items-center gap-2 rounded-[12px] px-2 text-black h-[57px] w-[186px] md:h-[72px] md:w-[237px] shadow-lg">
                  <Image src={assets.img2} alt="" />
                  <h1 className="text-[14px] font-normal ">
                    Verified & certified professionals
                  </h1>
                </div>
                <Image src={assets.leftLine} alt="" className="mt-[65px] " />
              </div>

              {/* 3rd */}
              <div className="flex ">
                <Image src={assets.rightLine} alt="" className="mt-[65px] " />
                <div className="bg-white flex items-center gap-2 rounded-[12px] px-2 text-black h-[57px] w-[186px] md:h-[72px] md:w-[237px] shadow-lg">
                  <Image src={assets.img2} alt="" />
                  <h1 className="text-[14px] font-normal ">
                    Experts specialized in your industry
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center mt-[-7px]">
            {/* 2nd */}
            <div className="bg-white flex items-center gap-2 rounded-[12px] px-2 text-black h-[72px] w-[237px] shadow-lg">
              <Image src={assets.img2} alt="" />
              <h1 className="text-[14px] font-normal ">
                GDPR-compliant, secure & trusted network
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Benifits */}
      <div
        className="bg-cover bg-center min-h-[1000px] md:min-h-[850px] mb-12 mx-4 sm:mx-8
  rounded-[20px] sm:rounded-[30px] px-4 sm:px-10 relative overflow-hidden"
        style={{ backgroundImage: `url(${assets.benifitsBg.src})` }}
      >
        {/* Background Shadow Image */}
        <div
          className="absolute hidden md:block
    w-[762px] h-[686px] left-0 top-1/2 -translate-y-1/2
    bg-cover bg-center"
          style={{
            backgroundImage: `url(${assets.benifitsShadow.src})`,
            zIndex: 1,
          }}
        />

        <h1 className="text-[22px] text-center mt-[300px] md:mt-0 sm:text-[28px] font-bold">
          Benefits
        </h1>
        {/* Top Section */}
        <div
          className="flex flex-row md:flex-row items-center justify-between
    pt-4 md:pt-52 gap-8 relative z-10"
        >
          {/* Left Card */}
          <div
            className="w-full max-w-[231px] h-[180px] sm:h-[196px]
      bg-white flex flex-col items-center justify-center gap-4
      rounded-[20px] sm:rounded-[30px]
      shadow-[0_8px_32px_0_rgba(31,38,135,0.10)]
      backdrop-blur-[16px]"
          >
            <Image src={assets.tick} alt="" />
            <p className="text-[13px] sm:text-[14px] text-center px-4">
              Certified professionals
            </p>
          </div>

          {/* Center Text */}
          <div
            className="hidden md:block flex flex-col gap-4 items-center justify-center
      text-center max-w-[700px]"
          >
            <h1 className="text-[22px] sm:text-[28px] font-bold">Benefits</h1>
            <p className="text-[14px] sm:text-[18px]">
              Connect with verified, certified, and specialized accountants
              familiar with local laws, industry requirements, and business
              needs.
            </p>
          </div>

          {/* Right Card */}
          <div
            className="w-full max-w-[231px] h-[180px] sm:h-[196px]
      bg-white flex flex-col items-center justify-center gap-4
      rounded-[20px] sm:rounded-[30px]
      shadow-[0_8px_32px_0_rgba(31,38,135,0.10)]
      backdrop-blur-[16px]"
          >
            <Image src={assets.tick} alt="" />
            <p className="text-[13px] sm:text-[14px] text-center px-4">
              Certified professionals
            </p>
          </div>
        </div>

        {/* Bottom Grid Section */}
        <div className="flex justify-center mt-5 relative z-10">
          <div
            className="w-full max-w-[1000px]
      grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-4 sm:gap-6"
          >
            {benifits.map((item) => (
              <div
                key={item.id}
                className="w-full max-w-[231px] h-[180px] sm:h-[196px]
          bg-white flex flex-col items-center justify-center gap-4
          rounded-[20px] sm:rounded-[30px]
          shadow-[0_8px_32px_0_rgba(31,38,135,0.10)]
          backdrop-blur-[16px] mx-auto"
              >
                <Image src={item.img} alt="" />
                <p className="text-[13px] sm:text-[14px] text-center px-4">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Launched */}
      <div className="mt-[-240px] ">
        <div
          className="bg-white relative top-[250px] left-[50%] h-[300px] w-[300px] md:w-[451px] md:h-[427px] flex items-center justify-center rounded-full "
          style={{ transform: "translateX( -50%)" }}
        >
          <Image
            src={assets.globe}
            alt=""
            className="w-[220px] h-[250px] md:w-[320px] md:h-[350px] "
          />
        </div>
        <div
          style={{ backgroundImage: `url(${assets.bg.src})` }}
          className="bg-cover min-h-[580px] md:min-h-[480px] "
        >
          <Image
            src={assets.text}
            alt=""
            className="mx-auto h-[380px] w-[400px] md:h-[400px] md:w-[460px] "
          />
          <h1 className="text-center font-bold text-[14px] md:text-[24px] mt-[-30px] ">
            Global Accounting & Compliance, Built for Every Business
          </h1>
        </div>
      </div>

      {/* Actionable Steps Section */}
      <div className="bg-[linear-gradient(180deg,#E8F3FF_0%,#EFE6F7_50%,#D0DDFE_100%)] py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto py-12 sm:py-28">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-normal text-[#111827] mb-3 sm:mb-4">
              Fill Out the form
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#000000]">
              Answer a few essential questions and get the perfect accountant
              for your business.
            </p>
          </div>

          {/* Step Indicators */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-8 relative overflow-x-auto sm:overflow-visible gap-6 sm:gap-0">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((step, index) => (
                <div
                  key={step}
                  className="flex flex-col items-center relative z-10 shrink-0"
                >
                  {/* Connecting Line (Desktop only) */}
                  {index < 7 && (
                    <div className="absolute left-[50%] top-6 w-[calc(100%+60px)] h-[2px] bg-[#E8F3FF] -z-10 hidden sm:block"></div>
                  )}

                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-semibold text-[14px] sm:text-[16px] ${
                      step === 1
                        ? "bg-[#1e3593] text-white"
                        : "bg-[#E8F3FF] text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                  <p className="text-[11px] sm:text-[12px] text-gray-500 mt-1 sm:mt-2">
                    Step {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-lg p-4 sm:p-8 mb-6">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-800 mb-2">
                  Where do you need an accountant?
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 mb-4">
                  Select the country where you need accounting services
                </p>
              </div>

              {/* Dropdown */}
              <div className="relative">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-[8px] text-gray-700 bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3D70FE] focus:border-transparent">
                  <option value="">Select country...</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                </select>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Next Button */}
              <div className="flex justify-end pt-4">
                <button className="w-full sm:w-auto bg-[#E8F3FF] hover:bg-[#3D70FE] hover:text-white transition-colors duration-200 text-gray-700 font-medium py-3 px-8 rounded-[8px]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
