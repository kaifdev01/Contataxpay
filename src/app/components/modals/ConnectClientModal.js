"use client";
import React from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

const ConnectClientModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const inputClasses =
    "w-full bg-white rounded-[20px] border border-gray-200/50 shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)] px-6 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200 text-[14px]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
      <div className="bg-[#EEE7F8] rounded-[30px] shadow-2xl w-full max-w-[600px] p-8 md:p-12 relative flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[22px] md:text-[32px] font-normal text-black mb-2">
            Connect New Client
          </h2>
          <p className="text-[#6B7280] text-[12px] md:text-[14px]">
            Enter client's connection code, select domain and set service price
          </p>
        </div>

        {/* Form */}
        <div className="w-full space-y-4">
          {/* Connection Code */}
          <div>
            <input
              type="text"
              placeholder="Connection Code"
              className={inputClasses}
            />
          </div>

          {/* Domain Select */}
          <div className="relative">
            <select
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option disabled selected className="text-gray-400">
                Domain
              </option>
              <option value="Construction">Construction</option>
              <option value="Transport">Transport </option>
              <option value="Ceaning">Ceaning </option>
              <option value="It & Software">It & Software </option>
              <option value="Restaurant">Restaurant </option>
              <option value="Others">Others </option>
            </select>
            <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-black">
              <FaChevronDown size={14} />
            </div>
          </div>

          {/* Service Price */}
          <div>
            <input
              type="text"
              placeholder="Service Price(Monthly)"
              className={inputClasses}
            />
          </div>

          {/* Currency Select */}
          <div className="relative">
            <select
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" disabled selected>
                Currency
              </option>
              <option value="eur">EUR (€)</option>
              <option value="ron">RON (lei)</option>
              <option value="usd">USD ($)</option>
            </select>
            <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-black">
              <FaChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row flex-nowrap items-center justify-center gap-3 mt-10 w-full">
          <button
            onClick={() => {}}
            className="w-1/2 md:w-auto bg-[#3B82F6] hover:bg-blue-600 text-white text-[16px] font-medium py-3 px-4 md:px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200"
          >
            Connect Client
          </button>

          <button
            onClick={onClose}
            className="w-1/2 md:w-auto bg-white hover:bg-gray-50 text-[#3B82F6] text-[16px] font-medium py-3 px-4 md:px-12 rounded-lg shadow-sm border border-gray-100 transition-all duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectClientModal;
