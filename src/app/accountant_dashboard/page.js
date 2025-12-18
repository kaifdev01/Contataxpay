"use client";
import React, { useState } from "react";
import { IoIosGlobe } from "react-icons/io";
import { HiX } from "react-icons/hi";
import { accountantButtons } from "../data/Data";
import Tab1 from "../components/accountant_subsections/Tab1";
import ConnectClientModal from "../components/modals/ConnectClientModal";
import MyAssistantPage from "../components/accountant_subsections/My_assistents";
import Messages from "../components/accountant_subsections/Messages";
import { MdMenu } from "react-icons/md";

const Page = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 shadow">
        <h1 className="font-semibold">Dashboard</h1>
        <button onClick={() => setOpenSidebar(true)}>
          <MdMenu className="text-2xl" />
        </button>
      </div>

      {/* Sidebar */}

      {!(activeBtn === 2 || activeBtn === 3) && (
        <div
          className={`fixed md:static inset-y-0 left-0 z-50
            gradient w-[80%] md:self-center sm:w-[60%] md:w-[20%] h-full md:h-[90vh]
            rounded-tr-[30px] rounded-br-[30px]
            shadow-[4px_4px_25px_3px_rgba(153,161,175,1)]
            p-4 flex flex-col
            transform transition-transform duration-300
            ${
              openSidebar
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
            md:justify-center`} // vertical center on desktop
        >
          {/* Close button (mobile) */}
          <div className="md:hidden flex justify-end mb-4">
            <HiX
              className="text-2xl cursor-pointer"
              onClick={() => setOpenSidebar(false)}
            />
          </div>

          {/* Language Switch */}
          <div
            className="py-1.5 px-2 flex items-center border-2 border-[#0077B64D]
            gap-1 bg-white text-[#0077B6] rounded-lg self-end"
          >
            <IoIosGlobe className="text-lg" />
            <select className="outline-none cursor-pointer text-xs bg-transparent">
              <option>ENG</option>
              <option>URDU</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col mt-6">
            {accountantButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => {
                  setActiveBtn(btn.id);
                  setOpenSidebar(false); // hide sidebar
                  if (btn.id === 1) setIsModalOpen(true);
                }}
                className={`h-[53px] w-full p-[14px] text-start border-b cursor-pointer border-[#EFE6F7]
                  ${
                    activeBtn === btn.id
                      ? "bg-white font-bold text-[14px] border-l-4 border-l-[black]"
                      : "text-[16px] font-normal"
                  }`}
              >
                {btn.title}
              </button>
            ))}

            <button
              className="mt-12 py-[12px] px-[46px] bg-[#3D70FE]
              text-white rounded-[8px] self-start"
            >
              Log Out
            </button>
          </div>
        </div>
      )}

      {/* Overlay for mobile */}
      {openSidebar && !(activeBtn === 2 || activeBtn === 3) && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Content */}
      <div
        className={`w-full md:p-6 p-4 transition-all duration-300 ${
          activeBtn === 2 || activeBtn === 3 ? "md:w-full" : "md:w-[80%]"
        }`}
      >
        {activeBtn === 0 && <Tab1 />}
        {activeBtn === 1 && <Tab1 />}
        {activeBtn === 2 && <MyAssistantPage />}
        {activeBtn === 3 && <Messages />}
      </div>

      {/* Modal */}
      <ConnectClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Page;
