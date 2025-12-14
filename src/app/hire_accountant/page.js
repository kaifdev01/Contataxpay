import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-[150vh] "
        style={{ backgroundImage: `url(${assets.hireBg.src})` }}
      >
        <div
          className="bg-cover bg-center pt-12 p-4"
          style={{ backgroundImage: `url(${assets.hireShadow.src})` }}
        >
          <div className="flex flex-col gap-[24px] items-center justify-center ">
            <h1 className="text-[48px] font-semibold text-center mb-4 text-white ">
              Find the ideal accountant for your business, <br />
              anywhere
            </h1>
            <p className="text-[24px] font-semibold text-center mb-4 text-white ">
              Connect with verified, certified, and specialized accountants
              familiar with local <br /> laws, industry requirements, and
              business needs.
            </p>
            <button className="bg-[#3D70FE] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10),_0_10px_15px_-3px_rgba(0,0,0,0.10)] py-[12px] px-[46px] text-white font-normal text-[16px] rounded-[8px] cursor-pointer ">
              Find perfect accountant →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-center mt-32 items-center ">
          <div className="w-[945px] flex justify-between">
            {/* 1st */}
            <div className="flex ">
              <div className="bg-white flex items-center gap-2 rounded-[12px] px-2 text-black h-[72px] w-[237px] ">
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
              <div className="bg-white flex items-center gap-2 rounded-[12px] px-2 text-black h-[72px] w-[237px] ">
                <Image src={assets.img2} alt="" />
                <h1 className="text-[14px] font-normal ">
                  Experts specialized in your industry
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          {/* 2nd */}
          <div className="bg-white mt-[-7px] flex items-center gap-2 rounded-[12px] px-2 text-black h-[72px] w-[237px] ">
            <Image src={assets.img2} alt="" />
            <h1 className="text-[14px] font-normal ">
              GDPR-compliant, secure & trusted network
            </h1>
          </div>
        </div>
      </div>

      {/* Benifits */}
      <div
        className="bg-cover bg-center h-[800px] flex flex-row items-center justify-between mb-12 mx-8 rounded-[30px] px-16 relative"
        style={{ backgroundImage: `url(${assets.benifitsBg.src})` }}
      >
        <div
          className="bg-cover bg-center absolute w-[762px] h-[686px] left-0 top-1/2 -translate-y-1/2"
          style={{
            backgroundImage: `url(${assets.benifitsShadow.src})`,
            zIndex: 1,
          }}
        />

        {/* 1st container */}
        <div className="w-[231px] h-[196px] bg-white border flex flex-col items-center justify-center gap-[16px] border-[white] rounded-[30px] shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] backdrop-blur-[16px] relative z-10">
          <Image src={assets.tick} alt="" className="" />
          <p className="text-[14px] font-normal text-center px-4">
            Certified professionals
          </p>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-[24px] items-center justify-center relative z-10">
          <h1 className="text-[28px] font-bold text-center">Benefits</h1>
          <p className="text-[18px] font-normal text-center w-[700px]">
            Connect with verified, certified, and specialized accountants
            familiar with local laws, industry requirements, and business needs.
          </p>
        </div>

        {/* 2nd container */}
        <div className="w-[231px] h-[196px] bg-white border flex flex-col items-center justify-center gap-[16px] border-[white] rounded-[30px] shadow-[0_8px_32px_0_rgba(31,38,135,0.10)] backdrop-blur-[16px] relative z-10">
          <Image src={assets.tick} alt="" className="" />
          <p className="text-[14px] font-normal text-center px-4">
            Certified professionals
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
