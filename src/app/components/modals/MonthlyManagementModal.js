"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { clients, summaryCards } from "@/app/data/Data";

const MonthlyManagementModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl overflow-hidden relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="text-[22px] font-regular text-gray-900">
            Monthly Management Panel - November 2025
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="overflow-y-auto">
          <div>
            {/* Inner Purple Container */}
            <div className="px-6 pb-8">
              {/* Summary Cards */}
              <div className="bg-[#EEE7F8] rounded-2xl p-6 shadow-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {summaryCards.map((card, index) => (
                  <div
                    key={index}
                    className={`${card.bg} p-5 rounded-2xl shadow-sm flex items-start justify-between min-h-[110px]`}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <p className="text-[17px] text-black font-medium -mb-1">
                          {card.title}
                        </p>
                        <h3
                          className={`text-[20px] font-bold text-black ${
                            card.valueClass || ""
                          }`}
                        >
                          {card.value}
                        </h3>
                      </div>
                      <p
                        className={`text-[14px] text-[#6B7280] font-normal -mt-1 ${
                          card.subtextClass || ""
                        }`}
                      >
                        {card.subtext}
                      </p>
                    </div>
                    <div className={`${card.iconBg} pt-1`}>
                      <Image
                        src={card.img}
                        alt={card.title}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Table Header */}
            <div className="bg-[#EEE7F8] w-full rounded-2xl ">
              <div className="px-6 pb-8">
                <div className="hidden md:grid grid-cols-[1.5fr_2fr_1.2fr_2fr_1fr_1fr_1fr] gap-4 px-6 py-2 text-sm font-bold text-black mb-2">
                  <div>Client Name</div>
                  <div>Address</div>
                  <div>Phone</div>
                  <div>Email</div>
                  <div>Amount</div>
                  <div className="text-center">Status</div>
                  <div className="text-center">Actions</div>
                </div>

                {/* Table Rows */}
                <div className="space-y-3">
                  {clients.map((client, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr_1.2fr_2fr_1fr_1fr_1fr] gap-4 items-center bg-[#EADCF8] px-6 py-4 rounded-xl text-sm shadow-sm"
                    >
                      <div>
                        <div className="font-bold text-gray-900">
                          {client.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {client.role}
                        </div>
                      </div>
                      <div className="flex flex-col md:block">
                        <span className="md:hidden font-bold text-gray-700 text-xs mb-1">
                          Address
                        </span>
                        <div
                          className="text-gray-800 truncate"
                          title={client.address}
                        >
                          {client.address}
                        </div>
                      </div>
                      <div className="flex flex-col md:block">
                        <span className="md:hidden font-bold text-gray-700 text-xs mb-1">
                          Phone
                        </span>
                        <div className="text-gray-800">{client.phone}</div>
                      </div>
                      <div className="flex flex-col md:block">
                        <span className="md:hidden font-bold text-gray-700 text-xs mb-1">
                          Email
                        </span>
                        <div
                          className="text-gray-800 truncate"
                          title={client.email}
                        >
                          {client.email}
                        </div>
                      </div>
                      <div className="flex flex-col md:block">
                        <span className="md:hidden font-bold text-gray-700 text-xs mb-1">
                          Amount
                        </span>
                        <div className=" text-gray-800">{client.amount}</div>
                      </div>
                      <div className="flex flex-col md:block justify-center">
                        <span className="md:hidden font-bold text-gray-700 text-xs mb-1">
                          Status
                        </span>
                        <div className="flex justify-start md:justify-center">
                          <select className="bg-white border border-gray-300/80 shadow-sm text-gray-700 px-2 py-2 rounded-lg text-xs hover:bg-gray-50 font-medium w-full max-w-[120px] focus:outline-none focus:ring-2 focus:ring-purple-400">
                            <option value="">Select status</option>
                            <option value="pending">Pending</option>
                            <option value="overdue">Overdue</option>
                            <option value="paid">Paid</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col md:block justify-center">
                        <span className="md:hidden font-bold text-gray-700 text-xs mb-1">
                          Actions
                        </span>
                        <div className="flex justify-start md:justify-center">
                          <select className="bg-white border border-gray-300/80 shadow-sm text-gray-700 px-2 py-2 rounded-lg text-xs hover:bg-gray-50 font-medium w-full max-w-[120px] focus:outline-none focus:ring-2 focus:ring-purple-400">
                            <option value="">Select action</option>
                            <option value="Mark as Paid">Mark as Paid</option>
                            <option value="Mark as archieved">
                              Mark as archieved
                            </option>
                            <option value="Restrict">Restrict</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyManagementModal;
