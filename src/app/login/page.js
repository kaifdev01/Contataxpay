"use client";

import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";
import { IoIosGlobe } from "react-icons/io";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="bg-[#f4edff] min-h-screen relative overflow-hidden">
      {/* Background Polygon */}
      <Image
        src={assets.polygon}
        alt="polygon"
        className="absolute top-0 left-0 hidden md:block"
      />
      <Image
        src={assets.polygon1}
        alt="polygon"
        className="absolute top-0 left-0 md:hidden block"
      />

      <div className="block md:hidden flex items-end justify-end p-4">
        <div
          className="py-1.5 px-2 flex items-center border-2 border-[#0077B64D]
                gap-1 bg-white text-[#0077B6] rounded-lg"
        >
          <IoIosGlobe className="text-lg" />
          <select className="outline-none bg-transparent text-sm cursor-pointer">
            <option>ENG</option>
            <option>URDU</option>
          </select>
        </div>
      </div>
      <h1 className="text-[24px] z-40 mt-4 text-center md:hidden block md:text-[30px] mb-4">
        Log In
      </h1>
      {/* Main Container */}
      <div className="flex items-center min-h-screen justify-center px-4 md:px-0">
        <div
          className="bg-[#F3F8FE] relative flex rounded-[30px] md:rounded-[40px]
          w-full md:w-[85%] my-6 md:my-12
          shadow-none md:shadow-[4px_10px_30px_5px_rgba(0,0,0,0.25)]"
        >
          {/* Decorative Images */}
          <div className="absolute top-[-10px] left-[-30px] hidden md:block h-[378px] w-[667px]">
            <Image
              src={assets.rightForm}
              alt="polygon"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-[-20px] right-[-30px] hidden md:block h-[378px] w-[667px]">
            <Image
              src={assets.leftForm}
              alt="polygon"
              fill
              className="object-cover"
            />
          </div>

          {/* LEFT SECTION (Hidden on Mobile) */}
          <div className="hidden md:flex w-1/2 flex-col items-center justify-end gap-[40%] p-8 z-40">
            <div>
              <h1 className="text-[30px] font-bold">Finances, Simplified.</h1>
              <p className="text-[#4B5563] text-[18px] w-[403px]">
                Where Automation Meets Effortless Finance. Everything you need
                to run your business, in one login.
              </p>
            </div>

            <div className="flex items-center justify-between w-[80%]">
              <div
                className="py-1.5 px-2 flex items-center border-2 border-[#0077B64D]
                gap-1 bg-white text-[#0077B6] rounded-lg"
              >
                <IoIosGlobe className="text-lg" />
                <select className="outline-none bg-transparent text-sm cursor-pointer">
                  <option>ENG</option>
                  <option>URDU</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                {["Terms", "Plans", "Contact Us"].map((item) => (
                  <h3
                    key={item}
                    className="text-[#0077B6] text-[14px] font-medium cursor-pointer"
                  >
                    {item}
                  </h3>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (Form) */}
          <div className="w-full md:w-1/2 p-4 md:p-8 z-40 flex justify-center">
            <div
              className="bg-[transparent] md:bg-[#F8F7FC] w-full max-w-[451px]
              rounded-[24px] md:rounded-[30px]
              md:shadow-[4px_10px_30px_5px_rgba(0,0,0,0.25)]
              p-6 md:p-8"
            >
              <h1 className="text-[24px] hidden md:block md:text-[30px] mb-4">
                Log In
              </h1>

              {/* Buttons */}
              <div className="flex gap-4 mb-6">
                <select
                  className="bg-white h-[40px] p-2 cursor-pointer outline-0  md:w-[200px] text-[#0077B6]
                  border-2 border-[#0077B64D] rounded-[14px]"
                >
                  <option>Select Role</option>
                  <option>Client</option>
                  <option>Accountant</option>
                </select>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-4">
                {["Email or phone", "Password"].map((label) => (
                  <div
                    key={label}
                    className="border-2 border-[#0077B64D] px-4 py-2 rounded-[20px]
                      shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <label className="text-[13px] text-[#00000099]">
                      {label}
                    </label>
                    <input
                      type={label === "Password" ? "password" : "text"}
                      className="w-full outline-none text-[14px] bg-transparent"
                    />
                  </div>
                ))}

                <p className="text-end text-[#0077B6] cursor-pointer font-semibold">
                  Forgot password ?
                </p>

                <button className="bg-[#3D70FE] py-3 text-white rounded-[8px] mt-2">
                  Log In
                </button>

                <p className="text-center font-semibold">
                  Don’t have a account?{" "}
                  <span
                    className="text-[#0077B6] cursor-pointer"
                    onClick={() => router.push("/signup")}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden flex items-center gap-3 p-4 text-center justify-center">
        {["Terms", "Plans", "Contact Us"].map((item) => (
          <h3
            key={item}
            className="text-[#0077B6] text-[14px] font-medium cursor-pointer"
          >
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Page;
