import { invoicing } from "@/app/data/Data";
import React from "react";

const Invoicing = () => {
  return (
    <div className="py-8 md:py-12 ">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal mb-6 md:mb-8 lg:mb-12">
          Start E invoicing today
        </h1>
        <p className="text-sm md:text-base text-center max-w-4xl leading-relaxed px-4">
          Generate fully compliant electronic invoices in multiple languages,
          customized for every country's tax rules—directly from ContaTaxPay.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mt-8 md:mt-12 max-w-full mx-4">
        {invoicing.map((data) => (
          <div
            key={data.id}
            className={`rounded-3xl flex flex-col gap-4 md:gap-6 items-center justify-center p-6 min-h-[160px] md:h-[191px] md:w-[190px] ${
              [1, 3, 5].includes(data.id) ? "lg:mt-16" : "lg:mt-0"
            }`}
            style={{ backgroundColor: data.color }}
          >
            <h2 className="text-center text-lg md:text-xl font-bold">
              {data.title}
            </h2>
            <p className="text-xs md:text-sm font-normal text-center">
              {data.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-12 md:mt-16 lg:mt-24 px-4">
        <button className="bg-[#3D70FE] rounded-lg py-3 px-8 md:py-3 md:px-12 text-sm md:text-base font-normal text-white cursor-pointer hover:bg-[#2d5fde] transition-colors w-full sm:w-auto">
          Start Sending E Invoices Today
        </button>
        <p className="text-base md:text-lg lg:text-xl font-normal mt-4 md:mt-6 text-center">
          No setup fees | Fully compliant in minutes.
        </p>
      </div>
    </div>
  );
};

export default Invoicing;
