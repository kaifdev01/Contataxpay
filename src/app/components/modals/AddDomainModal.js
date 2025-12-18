"use client";
import React from "react";
import { FaBalanceScale, FaTimes } from "react-icons/fa"; // Using balance scale as seen in image

const AddDomainModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
            Add New Domain
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px]">
            Enter domain name, select icon and get your domain entered.
          </p>
        </div>

        {/* Form */}
        <div className="w-full space-y-6">
          {/* Domain Name Input */}
          <div className="space-y-2">
            <label className="text-black text-[14px] md:text-[18px] font-normal block pl-1 ">
              Enter Domain Name
            </label>
            <input
              type="text"
              placeholder="e.g:Legal consulting"
              className="w-full bg-white rounded-[20px] border border-gray-200/50 shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)] px-6 py-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200 text-[16px]"
            />
          </div>

          {/* Icon Input */}
          <div className="space-y-2">
            <label className="text-black text-[14px] md:text-[18px] font-normal block pl-1">
              Add Icon
            </label>
            <div className="w-full bg-white rounded-[20px] border border-gray-200/50 shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)] px-6 py-4 flex items-center">
              <span className="text-orange-400 text-2xl">
                <FaBalanceScale size={28} />
              </span>
              {/* This resembles the selection input in the design */}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row flex-nowrap items-center justify-center gap-3 mt-12 w-full">
          <button
            onClick={() => {}}
            className="w-1/2 md:w-auto bg-[#3B82F6] hover:bg-blue-600 text-white text-[16px] font-medium py-3 px-4 md:px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200"
          >
            Add New Domain
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

export default AddDomainModal;
