import React from "react";
import Header from "../components/Header";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#1e3593] h-[100px] w-[100%] hidden md:block absolute top-0">
        <div className="bg-[#1e3593] w-[98%] py-1 ml-3 rounded-bl-[50px] rounded-br-[50px]">
          <div className="shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[40px]">
            <Header />
          </div>
        </div>
      </div>

      {/* Hero Section with Contact Us Title */}
      <div className="relative mt-[-40px] -z-10 bg-[#1e3593] pt-32 pb-40">
        <div className="text-center">
          <h1 className="text-[48px] font-bold text-white mb-2">Contact Us</h1>
          <p className="text-[18px] text-white/90">We'd love to talk to you!</p>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="bg-[#E8F3FF] pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-2 md:px-8">
          <div className="grid grid-cols-2 mt-[-100px] md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Phone Card */}
            <div
              className="bg-white rounded-[16px] p-2 sm:p-3
    shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#E8F3FF] p-3 rounded-full shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3593]" />
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-800 mb-1 sm:mb-2">
                    Phone
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-600">
                    +49 030 123 4567
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-gray-600">
                    +49 030 765 4321
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div
              className="bg-white rounded-[16px] p-4 sm:p-6
    shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#E8F3FF] p-3 rounded-full shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3593]" />
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-800 mb-1 sm:mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-600">
                    +49 030 123 4567
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="bg-white rounded-[16px] p-4 sm:p-6
    shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#E8F3FF] p-3 rounded-full shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3593]" />
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-800 mb-1 sm:mb-2">
                    Email
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-600 break-all">
                    info@contataxpay.com
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div
              className="bg-white rounded-[16px] p-4 sm:p-6
    shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#E8F3FF] p-3 rounded-full shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e3593]" />
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-800 mb-1 sm:mb-2">
                    Address
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-600">
                    Berlin, Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="lg:pt-8">
              <h2 className="text-[32px] text-center md:text-left font-bold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-[16px] w-[316px] mx-6 md:mx-0 text-gray-600 leading-relaxed">
                Share your vision or ask us anything. Our support team is here
                to guide you.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#f8f7fc] rounded-[20px] shadow-xl p-8 py-14">
              <form className="space-y-5">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div
                      className="border-2 border-[#0077B64D] px-4 py-2 rounded-[20px]
                      shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)]"
                    >
                      <label className="text-[13px] text-[#00000099]">
                        First Name
                      </label>
                      <input
                        type={"text"}
                        className="w-full outline-none text-[14px] bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="border-2 border-[#0077B64D] px-4 py-2 rounded-[20px]
                      shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)]"
                    >
                      <label className="text-[13px] text-[#00000099]">
                        Last Name
                      </label>
                      <input
                        type={"text"}
                        className="w-full outline-none text-[14px] bg-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Email or Phone */}
                <div>
                  <div
                    className="border-2 border-[#0077B64D] px-4 py-2 rounded-[20px]
                      shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <label className="text-[13px] text-[#00000099]">
                      Email or phone
                    </label>
                    <input
                      type={"text"}
                      className="w-full outline-none text-[14px] bg-transparent"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <div
                    className="border-2 border-[#0077B64D] px-4 py-2 rounded-[20px]
                      shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <label className="text-[13px] text-[#00000099]">
                      Subject
                    </label>
                    <input
                      type={"text"}
                      className="w-full outline-none text-[14px] bg-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Type your message here!"
                    rows="8"
                    className="border-2 border-[#0077B64D] px-4 py-2 rounded-[20px] w-full outline-0 text-[14px]
                      shadow-[0_4px_4px_rgba(0,0,0,0.25),_0_4px_4px_rgba(0,0,0,0.25)]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#3D70FE] hover:bg-[#2d5fd9] text-white font-medium py-3 px-6 rounded-[10px] transition-colors duration-200 text-[16px]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
