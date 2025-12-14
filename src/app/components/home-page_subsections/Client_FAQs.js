"use client";
import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { IoPlayBackSharp, IoPlayForward } from "react-icons/io5";
import { HiPause } from "react-icons/hi2";
import { IoIosArrowUp } from "react-icons/io";

const faqItems = [
  {
    id: 1,
    question: "Kann ich bestehende Daten importieren?",
    answer:
      "Ja, Sie können bestehende Daten aus verschiedenen Formaten importieren. Wir unterstützen CSV, Excel und direkte Datenbankverbindungen.",
  },
  {
    id: 2,
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer:
      "Nein, es gibt keine Mindestvertragslaufzeit. Sie können Ihr Abonnement jederzeit monatlich kündigen.",
  },
  {
    id: 3,
    question: "Wie funktioniert die ELSTER-Integration?",
    answer:
      "Die ELSTER-Integration ermöglicht einen nahtlosen Datenaustausch mit dem deutschen Steuersystem. Ihre Daten werden automatisch im richtigen Format übertragen.",
  },
  {
    id: 4,
    question: "Kann mein Steuerberater auf meine Daten zugreifen?",
    answer:
      "Ja, Sie können Ihrem Steuerberater gezielt Zugriffsrechte erteilen. Die Berechtigungen können jederzeit angepasst oder widerrufen werden.",
  },
  {
    id: 5,
    question: "Wie genau ist die OCR-Erkennung?",
    answer:
      "Unsere OCR-Technologie erreicht eine Genauigkeit von über 98%. Die KI-gestützte Erkennung wird kontinuierlich verbessert und lernt mit jeder Verwendung.",
  },
];

const Client_FAQs = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Customer Says */}
      <div className="bg-[#E8F3FF] min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center pt-16 sm:pt-20 md:pt-24 lg:pt-32 font-normal mb-6 md:mb-8 lg:mb-12">
          What our customers say
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-full max-w-[267px] h-auto min-h-[229px] mx-auto px-4 sm:px-5 py-5 rounded-[16px] flex flex-col justify-center"
              style={{
                backgroundColor: index % 2 === 0 ? "#A9D7F8" : "#DFDCFD",
              }}
            >
              <Image
                src={assets.stars}
                alt="5 stars"
                className="mb-3 sm:mb-4 w-20 sm:w-[217px] h-[20px]"
              />

              <h1 className="text-[13px] sm:text-[14px] font-semibold mb-6 sm:mb-8 leading-relaxed">
                "Die automatische Katego risierungspart mir täglich Stunden."
              </h1>

              {/* profile */}
              <div className="flex items-center gap-2">
                <span
                  className="h-[36px] w-[36px] sm:h-[40px] sm:w-[40px] text-white text-[13px] sm:text-[14px] font-bold rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(59, 130, 246, 1) 0%, rgba(168, 85, 247, 1) 100%)",
                  }}
                >
                  M
                </span>
                <div>
                  <h1 className="text-[#0F172A] text-[13px] sm:text-[14px] font-bold">
                    Michael Wagner
                  </h1>
                  <p className="font-normal text-[#4B5563] text-[11px] sm:text-[12px]">
                    IT-Consultant
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 md:mt-20 lg:mt-24 pb-8 sm:pb-12 md:pb-16">
          <button className="text-4xl sm:text-5xl md:text-6xl text-[#3D70FE] cursor-pointer hover:opacity-80 transition-opacity">
            <IoPlayBackSharp />
          </button>
          <button className="text-4xl sm:text-5xl md:text-6xl text-[#3D70FE] cursor-pointer hover:opacity-80 transition-opacity">
            <HiPause />
          </button>
          <button className="text-4xl sm:text-5xl md:text-6xl text-[#3D70FE] cursor-pointer hover:opacity-80 transition-opacity">
            <IoPlayForward />
          </button>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-around px-4">
        <div
          style={{ backgroundImage: `url(${assets.faqBg.src})` }}
          className="bg-cover bg-center w-full max-w-[451px] h-[150px] sm:h-[180px] md:h-[217px] flex items-center justify-center rounded-lg"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-normal px-4">
            Frequently Asked <br />{" "}
            <span className="text-[#AD4AF4]">Questions</span>
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 w-full">
          <div className="space-y-3 max-w-3xl mx-auto px-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#E8F0FE] rounded-2xl border border-[#93C5FD] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5  flex items-center justify-between text-left hover:bg-[#DDE7F9]  transition-colors cursor-pointer"
                >
                  <span className="text-[#1A3B5D] font-medium text-[14px] sm:text-[15px] leading-relaxed pr-4">
                    {item.question}
                  </span>
                  <span
                    className={`w-5 h-5 text-[#1A3B5D] flex-shrink-0 transition-transform duration-200 ${
                      openItem === item.id ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowUp />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openItem === item.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
                    <p className="text-[#1A3B5D] text-[13px] sm:text-[14px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client_FAQs;
