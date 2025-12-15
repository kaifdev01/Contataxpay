import { assets } from "@/app/assets/assets";
import { features } from "@/app/data/Data";
import Image from "next/image";
import React from "react";

const Feature_Section = () => {
  return (
    <>
      <div className="pt-12 px-4 md:px-8 lg:px-12">
        <h1 className="text-2xl md:text-3xl lg:text-[36px] text-center font-normal mb-8 md:mb-12">
          Explore Our Features
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {features.map((data, index) => (
            <div key={data.id} className="relative">
              {/* Dashed Border Line with exact specifications */}
              {/* On mobile: hide every 2nd item (index 1, 3, 5...) */}
              {(index + 1) % 2 !== 0 && (
                <div
                  className="absolute lg:hidden"
                  style={{
                    width: "89.05px",
                    height: "14.71px",
                    top: "50px",
                    right: "-65px",
                  }}
                >
                  <Image src={assets.line} alt="line" />
                </div>
              )}

              {/* On desktop: hide every 3rd item (index 2, 5, 8...) */}
              {(index + 1) % 3 !== 0 && (
                <div
                  className="hidden lg:block absolute"
                  style={{
                    width: "129.05px",
                    height: "24.71px",
                    top: "50px",
                    right: "-65px",
                  }}
                >
                  <Image src={assets.line} alt="line" />
                </div>
              )}

              {/* bg-shadow */}
              <div
                style={{
                  backgroundImage: `url(${assets.featureIconBg.src})`,
                  zIndex: -1,
                }}
                className="bg-cover bg-center w-[214px] md:w-[397px] h-[156px] md:h-[205px] absolute left-[-10%] md:left-0 top-[-20%] "
              />

              {/* Content Container */}
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-center mb-4 md:mb-6 bg-cover bg-center ">
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] object-contain"
                  />
                </div>

                <h2 className="text-[#1F2937] text-base md:text-lg lg:text-[22px] font-medium mb-3 md:mb-4 text-center w-full">
                  {data.title}
                </h2>

                <p className="text-[#6B7280] text-xs md:text-sm lg:text-[14px] text-center leading-relaxed">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Launched */}
      <div className="mt-[-120px] ">
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
    </>
  );
};

export default Feature_Section;
