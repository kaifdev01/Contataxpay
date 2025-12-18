"use client";
import React from "react";
import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaSearch,
  FaPlus,
  FaArrowLeft,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";

const MyAssistantPage = () => {
  const assistantsData = [
    {
      domain: "Test company",
      email: "abc@gmail.com",
      contact: "12345678910",
      iban: "DE11 1111 1111 1111 11 11",
      regNum: "CDBOX222",
      assignedClients: 3,
      status: "Active",
    },
    {
      domain: "Test company",
      email: "abc@gmail.com",
      contact: "12345678910",
      iban: "DE11 1111 1111 1111 11 11",
      regNum: "CDBOX222",
      assignedClients: 3,
      status: "Active",
    },
    {
      domain: "Test company",
      email: "abc@gmail.com",
      contact: "12345678910",
      iban: "DE11 1111 1111 1111 11 11",
      regNum: "CDBOX222",
      assignedClients: 3,
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans p-6 md:p-8">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[22px] md:text-[24px] font-normal text-black">
          Monthly Management Panel - November 2025
        </h1>
        <button className="flex items-center gap-2 border border-blue-200 rounded-lg px-4 py-2 text-blue-500 hover:bg-blue-50 text-sm font-medium">
          <FaGlobe size={16} />
          ENG
          <FaChevronDown size={12} />
        </button>
      </div>

      {/* Summary Cards Section */}
      <div className="bg-[#EEE7F8] rounded-[20px] p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-start min-h-[110px]">
            <div>
              <p className="text-gray-900 font-medium text-[16px]">
                Total Assistants
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">6</h3>
              <p className="text-gray-500 text-xs mt-1">6 active assistants</p>
            </div>
            <div className="text-gray-800">
              <FaUsers size={24} />
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-start min-h-[110px]">
            <div>
              <p className="text-gray-900 font-medium text-[16px]">
                Assigned Clients
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">2</h3>
              <p className="text-gray-500 text-xs mt-1">
                0.3 avg per assistant
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-start min-h-[110px]">
            <div>
              <p className="text-green-600 font-medium text-[16px]">
                Active Assistants
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">0</h3>
              <p className="text-green-600 text-xs mt-1">Ready to work</p>
            </div>
            <div className="text-gray-800">
              <FaUserCheck size={24} />
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-start min-h-[110px]">
            <div>
              <p className="text-red-500 font-medium text-[16px]">
                Inactive Assistants
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">0</h3>
              <p className="text-red-500 text-xs mt-1">Not available</p>
            </div>
            <div className="text-gray-800">
              <FaUserTimes size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Controls Section */}
      <div className="bg-[#EEE7F8] rounded-[20px] p-6 mb-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            className="text-gray-700 hover:text-black"
            onClick={() => {
              window.location.reload();
            }}
          >
            <FaArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-[20px] font-medium text-black">
              Filters & Controls
            </h2>
            <p className="text-gray-500 text-sm">
              Search and filter your assistants
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search by name, company or email..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border-none focus:ring-2 focus:ring-purple-200 text-sm"
            />
          </div>
          {/* Dropdown */}
          <div className="relative w-full md:w-48">
            <select className="w-full appearance-none bg-white py-2.5 px-4 rounded-lg border border-gray-200 text-sm text-gray-700 focus:outline-none cursor-pointer">
              <option>Select Assistant</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
              <FaChevronDown size={12} />
            </div>
          </div>
          {/* Add Button */}
          <button className="w-full md:w-auto bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 font-medium py-2.5 px-6 rounded-lg shadow-sm flex items-center justify-center gap-2 text-sm whitespace-nowrap">
            <FaPlus size={12} />
            Add new Assistant
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-[#EEE7F8] rounded-[20px] p-6 shadow-sm overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="text-left text-black font-semibold text-sm border-b border-purple-200/50">
              <th className="pb-4 pl-4">Domain</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Contact Number</th>
              <th className="pb-4">IBAN</th>
              <th className="pb-4">Registration Number</th>
              <th className="pb-4 text-center">Assigned Clients</th>
              <th className="pb-4">Status</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            {assistantsData.map((item, index) => (
              <tr
                key={index}
                className="group hover:bg-purple-100/50 transition-colors"
              >
                <td className="py-4 pl-4 text-sm text-gray-800">
                  {item.domain}
                </td>
                <td className="py-4 text-sm text-gray-800">{item.email}</td>
                <td className="py-4 text-sm text-gray-800">{item.contact}</td>
                <td className="py-4 text-sm text-gray-800">{item.iban}</td>
                <td className="py-4 text-sm text-gray-800">{item.regNum}</td>
                <td className="py-4 text-sm text-gray-800 text-center">
                  {item.assignedClients}
                </td>
                <td className="py-4 text-sm font-medium text-green-600">
                  {item.status}
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="bg-[#3B82F6] hover:bg-blue-700 text-white text-xs font-medium py-1.5 px-4 rounded-md shadow-md transition-all">
                      Hire
                    </button>
                    <button className="bg-[#3B82F6] hover:bg-blue-700 text-white text-xs font-medium py-1.5 px-4 rounded-md shadow-md flex items-center gap-1 transition-all">
                      View Details <span className="text-[10px] ml-0.5">→</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssistantPage;
