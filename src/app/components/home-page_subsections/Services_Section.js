import { assets } from "@/app/assets/assets";
import { services } from "@/app/data/Data";
import Image from "next/image";
import React from "react";

const Services_Section = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${assets.serviceBg.src})` }}
        className="bg-cover bg-center bg-no-repeat pb-12 min-h-screen"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pt-32 font-normal mb-6 md:mb-8 lg:mb-12">
          Our Services
        </h1>

        {/* 1st row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mx-3 gap-6 pb-6">
          {services.slice(0, 3).map((service, index) => (
            <React.Fragment key={service.id}>
              <div className="relative flex flex-col items-center justify-center rounded-[30px] bg-white p-6 w-[350px] md:w-[404px] h-[283px]">
                <Image
                  src={assets.blocks}
                  alt="blocks"
                  fill
                  className="object-cover rounded-[30px]"
                />

                {/* Title */}
                <h1 className="text-[22px] mb-4 text-center font-normal text-[#111827] relative z-10">
                  {service.title}
                </h1>

                {/* Desc */}
                <p className="text-[16px] text-center mb-4 font-bold relative z-10">
                  {service.desc}
                </p>

                {service.lists.map((list, i) => (
                  <li
                    key={i}
                    className="text-[#6B7280] text-[14px] font-normal self-start ml-4 relative z-10"
                  >
                    {list}
                  </li>
                ))}

                <Image
                  src={assets.btn}
                  alt="btn"
                  className="absolute right-4 bottom-4 h-[50px] w-[50px] cursor-pointer z-10"
                />
              </div>

              {/* BREAK ROW AFTER 3rd CARD */}
              {index === 2 && <div className="col-span-full"></div>}

              {/* BREAK ROW AFTER 5th CARD */}
              {index === 4 && <div className="col-span-full"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* 2nd row */}
        <div className="flex justify-center flex-col md:flex-row mx-3 gap-6 pb-6">
          {services.slice(3, 5).map((service, index) => (
            <React.Fragment key={service.id}>
              <div className="relative flex flex-col items-center justify-center rounded-[30px] bg-white p-6 w-[350px] md:w-[404px] h-[283px]">
                <Image
                  src={assets.blocks}
                  alt="blocks"
                  fill
                  className="object-cover rounded-[30px]"
                />

                {/* Title */}
                <h1 className="text-[22px] mb-4 text-center font-normal text-[#111827] relative z-10">
                  {service.title}
                </h1>

                {/* Desc */}
                <p className="text-[16px] text-center mb-4 font-bold relative z-10">
                  {service.desc}
                </p>

                {service.lists.map((list, i) => (
                  <li
                    key={i}
                    className="text-[#6B7280] text-[14px] font-normal self-start ml-4 relative z-10"
                  >
                    {list}
                  </li>
                ))}

                <Image
                  src={assets.btn}
                  alt="btn"
                  className="absolute right-4 bottom-4 h-[50px] w-[50px] cursor-pointer z-10"
                />
              </div>

              {/* BREAK ROW AFTER 3rd CARD */}
              {index === 2 && <div className="col-span-full"></div>}

              {/* BREAK ROW AFTER 5th CARD */}
              {index === 4 && <div className="col-span-full"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* 3rd row */}
        <div className="flex justify-center mx-3 gap-6 pb-32">
          {services.slice(5).map((service, index) => (
            <React.Fragment key={service.id}>
              <div className="relative flex flex-col items-center justify-center rounded-[30px] bg-white p-6 w-[350px] md:w-[404px] h-[283px]">
                <Image
                  src={assets.blocks}
                  alt="blocks"
                  fill
                  className="object-cover rounded-[30px]"
                />

                {/* Title */}
                <h1 className="text-[22px] mb-4 text-center font-normal text-[#111827] relative z-10">
                  {service.title}
                </h1>

                {/* Desc */}
                <p className="text-[16px] text-center mb-4 font-bold relative z-10">
                  {service.desc}
                </p>

                {service.lists.map((list, i) => (
                  <li
                    key={i}
                    className="text-[#6B7280] text-[14px] font-normal self-start ml-4 relative z-10"
                  >
                    {list}
                  </li>
                ))}

                <Image
                  src={assets.btn}
                  alt="btn"
                  className="absolute right-4 bottom-4 cursor-pointer h-[50px] w-[50px] z-10"
                />
              </div>

              {/* BREAK ROW AFTER 3rd CARD */}
              {index === 2 && <div className="col-span-full"></div>}

              {/* BREAK ROW AFTER 5th CARD */}
              {index === 4 && <div className="col-span-full"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Flexible */}
      <div className="flex flex-col">
        <div className="my-6 sm:my-8 md:my-12 flex flex-col items-center justify-center px-4">
          <div
            style={{ backgroundImage: `url(${assets.headBg1.src})` }}
            className="bg-cover bg-center w-full max-w-[1000px] h-20 sm:h-24 md:h-[106px] p-4 sm:p-5 flex items-center justify-center"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-normal px-2">
              Flexible Pricing for Businesses Worldwide
            </h1>
          </div>
        </div>

        <div
          className="gradient w-[90%] max-w-[1200px] min-h-[300px] sm:min-h-[320px] md:h-[363px] relative rounded-2xl sm:rounded-[25px] md:rounded-[30px] self-center flex flex-col px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12"
          style={{
            boxShadow: "4px 4px 20px 5px rgba(153, 148, 148, 0.25)",
          }}
        >
          {/* badge */}
          <span className="h-10 sm:h-12 md:h-[50px] w-20 sm:w-[90px] md:w-[95px] bg-[#3D70FE] rounded-2xl sm:rounded-[18px] md:rounded-[20px] text-white text-sm sm:text-base text-center flex items-center justify-center absolute top-4 sm:top-5 left-4 sm:left-5">
            Free
          </span>

          <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-medium text-center mb-6 sm:mb-8 md:mb-12 mt-8 sm:mt-10 md:mt-0 px-2">
            Everything You Need. For Free.
          </h1>
          <p className="font-bold text-base sm:text-lg md:text-xl lg:text-[24px] text-[#6B7280] text-center mb-2 sm:mb-3 md:mb-4 px-2">
            Get full access to all ContaTaxPay features at zero cost.
          </p>
          <p className="font-bold text-base sm:text-lg md:text-xl lg:text-[24px] text-[#6B7280] text-center px-2">
            No plans, no limits, no surprises - just seamless financial
            management for your business.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services_Section;
