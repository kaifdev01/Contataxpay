"use client";
import React from "react";
import {
  FaArrowLeft,
  FaGlobe,
  FaChevronDown,
  FaSearch,
  FaCommentDots,
} from "react-icons/fa";

const Messages = () => {
  const connections = [
    {
      email: "musadaqhanif678@gmail.com",
      status: "Active",
      lastActivity: "Sep 25, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Banner */}
      <div className="bg-[#EEE7F8] p-6 pb-12">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          <div className="flex items-center gap-4">
            <button
              className="text-gray-900 hover:text-black mt-1"
              onClick={() => {
                window.location.reload();
              }}
            >
              <FaArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-[20px] font-bold text-black">
                Chat Connections
              </h1>
              <p className="text-gray-900/80 text-[16px] font-normal">
                Manage your chat conversations with clients
              </p>
            </div>
          </div>
          <button className="bg-white flex items-center gap-2 border border-blue-100 rounded-lg px-4 py-2 text-blue-500 hover:bg-gray-50 text-sm font-medium shadow-sm">
            <FaGlobe size={16} />
            ENG
            <FaChevronDown size={12} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6">
        {/* Search Bar Section */}
        <div className="bg-[#EEE7F8] rounded-[20px] p-4 flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="relative flex-grow w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search Connections..."
              className="w-full bg-white pl-10 pr-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-purple-200 text-sm placeholder-gray-500"
            />
          </div>
          <button className="bg-white text-gray-700 hover:bg-gray-50 font-medium py-3 px-8 rounded-xl shadow-sm text-sm w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Connections List */}
        <div className="space-y-4">
          {connections.map((conn, index) => (
            <div
              key={index}
              className="bg-white rounded-[16px] shadow-[0_4px_20px_rgb(0,0,0,0.08)] p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100/50"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-black font-bold text-[16px]">
                    {conn.email}
                  </h3>
                  <span className="text-green-600 text-xs font-semibold">
                    {conn.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-light">
                  Last Activity: {conn.lastActivity}
                </p>
              </div>
              <button className="bg-[#3B82F6] hover:bg-blue-600 text-white font-medium py-2.5 px-8 rounded-lg shadow-lg shadow-blue-500/30 flex items-center gap-2 text-sm transition-all">
                <FaCommentDots size={16} />
                Chat
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
