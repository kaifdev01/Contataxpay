"use client";
import { assets } from "@/app/assets/assets";
import { accountantDashCards, dashboardCards } from "@/app/data/Data";
import Image from "next/image";
import React, { useState } from "react";
import AddDomainModal from "../modals/AddDomainModal";
import MonthlyManagementModal from "../modals/MonthlyManagementModal";

const Tab1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  return (
    <div className="w-full">
      {/* Greeting */}
      <h1 className="text-[18px] sm:text-[22px] font-semibold text-[#6B7280]">
        Hello Musaddiq, Welcome!
      </h1>

      {/* Top section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          {accountantDashCards.map((item) => (
            <div
              key={item.id}
              className="flex justify-between p-4 rounded-[15px]
              shadow-[4px_4px_25px_3px_rgba(153,161,175,1)]
              w-full min-h-[105px]"
            >
              <div className="flex flex-col">
                <h1 className="text-[14px] sm:text-[16px]">{item.title}</h1>
                <h1
                  className={`text-[18px] sm:text-[20px] font-bold ${
                    item.id === 3 ? "text-[#FF0000]" : "text-black"
                  }`}
                >
                  {item.count}
                </h1>
                <p
                  className={`text-[12px] sm:text-[14px] ${
                    item.id === 3 ? "text-[#FF0000]" : "text-[#6B7280]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
              <Image src={item.img} alt="" className="w-10 h-10" />
            </div>
          ))}
        </div>

        {/* Period management */}
        <div
          className="w-full lg:w-[450px] gradient rounded-[15px]
        shadow-[4px_4px_25px_3px_rgba(153,161,175,1)] p-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-[18px] sm:text-[22px] font-normal">
                Period Management
              </h1>
              <p className="text-[13px] sm:text-[14px] text-[#6B7280]">
                Filter and analyze data by specific time periods
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen1(true)}
              className="self-start sm:self-auto text-[#2563EB] bg-white
              px-6 py-3 rounded-[8px] text-[14px]
              shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),4px_4px_15px_-3px_rgba(37,99,235,1)] cursor-pointer"
            >
              View Clients
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <select className="w-full sm:w-[150px] p-[10px] border rounded-[8px]">
              <option>Select Year</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>

            <select className="w-full sm:w-[150px] p-[10px] border rounded-[8px]">
              <option>Select Month</option>
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
            </select>
          </div>

          <h1 className="text-[14px] sm:text-[16px] mt-4">
            Selected Period{" "}
            <span className="text-[#6B7280] text-[13px] sm:text-[14px]">
              November 2025
            </span>
          </h1>
        </div>
      </div>

      {/* Activity domains header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
        <h1 className="text-[22px] sm:text-[26px] font-normal">
          Activity Domains
        </h1>

        <div className="flex flex-wrap gap-4">
          <select className="w-full sm:w-[180px] h-[37px] border rounded-[8px] px-2">
            <option>Select</option>
            <option>Show All Clients</option>
            <option>Archived Clients</option>
            <option>Restricted Clients</option>
          </select>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-[191px] h-[36px] bg-white text-[#2563EB]
            rounded-[8px] text-[16px]
            shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),4px_4px_15px_-3px_rgba(37,99,235,1)] cursor-pointer"
          >
            Add New Domain +
          </button>
        </div>
      </div>

      {/* Domain cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {dashboardCards.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[15px]
            shadow-[4px_4px_25px_3px_rgba(153,161,175,1)]
            p-6 flex flex-col items-center text-center"
          >
            <Image src={item.shadow} alt="" className="absolute z-10" />
            <Image src={assets.file} alt="" className="z-40" />
            <h1 className="text-[18px] sm:text-[22px] mt-2 z-40">
              {item.title}
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#6B7280] z-40">
              {item.count}
            </p>
            <button
              className="mt-6 bg-[#3D70FE] text-white
            px-10 py-3 rounded-[8px] z-40 cursor-pointer"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>

      <AddDomainModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <MonthlyManagementModal
        isOpen={isModalOpen1}
        onClose={() => setIsModalOpen1(false)}
      />
    </div>
  );
};

export default Tab1;
