"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const Hero_Section = () => {
  const [bg, setBg] = useState("");
  const [smallStarBg, setSmallStarBg] = useState("");

  useEffect(() => {
    const handleBackgrounds = () => {
      if (window.innerWidth < 768) {
        // 📱 Mobile
        setBg(assets.heroBgMobile.src);
        setSmallStarBg(assets.smallStarMobile.src);
      } else {
        // 💻 Desktop / Laptop
        setBg(assets.heroBg.src);
        setSmallStarBg(assets.smallStar.src);
      }
    };

    handleBackgrounds(); // initial run
    window.addEventListener("resize", handleBackgrounds);

    return () => window.removeEventListener("resize", handleBackgrounds);
  }, []);

  return (
    <>
      {/* HERO BACKGROUND */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="min-h-[100vh] w-full bg-cover bg-center pb-12"
      >
        {/* STAR OVERLAY */}
        <div
          style={{ backgroundImage: `url(${smallStarBg})` }}
          className="min-h-[100vh] w-full bg-cover bg-center flex flex-col"
        >
          {/* HEADINGS */}
          <h1 className="text-[26px] md:text-[48px] text-[#111827] mt-12 text-center font-medium">
            Modern Accounting, Automated
          </h1>
          <h1 className="text-[26px] md:text-[48px] text-[#111827] text-center font-medium">
            and Ready for the World
          </h1>

          {/* DESCRIPTION */}
          <p className="text-center text-[#4B5563] mt-8 md:mt-12 text-[16px] md:text-[18px] w-[350px] md:w-[901px] self-center">
            Contataxpay is your digital platform for seamless accounting in all
            European and non-European countries. From Germany to Moldova and
            beyond, automate invoices, track finances, and stay compliant, now
            available in 50+ countries with core features free for everyone.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center self-center mt-10 md:mt-12 gap-6 md:gap-8">
            <button className="bg-[#3D70FE] text-[14px] md:text-[16px] text-white rounded-[8px] py-[12px] px-[30px] md:px-[46px]">
              Register for Free
            </button>
            <button className="text-[#2563EB] bg-white text-[14px] md:text-[16px] rounded-[8px] py-[12px] px-[30px] md:px-[46px] shadow-[4px_4px_15px_-3px_rgba(0,0,0,0.25)]">
              Learn More
            </button>
          </div>

          {/* BENEFITS SECTION */}
          <div
            style={{ backgroundImage: `url(${assets.headBg1.src})` }}
            className="bg-cover bg-center relative mt-12"
          >
            {/* SHADOW IMAGES FOR FLOATING EFFECT */}
            <Image
              alt="hero-bg-shadow"
              className="hidden md:block w-[593px] h-[300px] z-0 absolute top-[20%] left-[10%] opacity-60"
              src={assets.heroBgShadow}
            />
            <Image
              alt="hero-shadow-small"
              src={assets.heroShadowSmall}
              className="hidden md:block w-[282px] h-[173px] absolute top-[60%] left-[5%] z-0 opacity-50"
            />
            <Image
              alt="hero-bg-shadow-small"
              src={assets.heroBgShadowSmall}
              className="w-[248px] h-[245px] absolute top-[-5%] left-[15%] z-0 opacity-40"
            />
            <Image
              alt="hero-bg-right-shadow-small"
              src={assets.heroBgRightShadowSmall}
              className="w-[451px] h-[217px] absolute right-[5%] top-[10%] z-0 opacity-50"
            />
            <Image
              alt="bg-right-shadow"
              src={assets.bgRightShadow}
              className="absolute right-[10%] top-[50%] z-0 opacity-60"
            />
            <Image
              alt="hero-right-shadow"
              src={assets.heroRightShadow}
              className="hidden md:block absolute right-[0%] top-[30%] z-0 opacity-30"
            />
            <Image
              alt="benifits-shadow"
              src={assets.benifitsShadow}
              className="hidden md:block w-[400px] h-[200px] absolute top-[70%] left-[30%] z-0 opacity-40"
            />

            {/* 1st Row */}
            <div className="flex items-center justify-between mx-2 md:mx-7 mt-10 gap-2">
              <div
                className="bg-white rounded-[12px] p-[12px] md:p-[17px] w-[180px] md:w-[225px] shadow-[10px_10px_10px_0px_#E7EFFE] flex items-center gap-2"
                style={{ zIndex: 1 }}
              >
                <Image src={assets.img1} alt="Encrypted Data" />
                <h3 className="text-[12px] md:text-[16px] text-[#1F2937]">
                  Encrypted Data
                </h3>
              </div>

              <div
                className="bg-white rounded-[12px] p-[12px] md:p-[17px] w-[180px] md:w-[237px] shadow-[10px_10px_10px_0px_#E7EFFE] flex items-center gap-2"
                style={{ zIndex: 1 }}
              >
                <Image src={assets.img2} alt="GDPR Compliance" />
                <h3 className="text-[12px] md:text-[14px] text-[#1F2937]">
                  GDPR Compliance
                </h3>
              </div>
            </div>

            {/* 2nd Row */}
            <h1
              className="text-[26px] text-center mt-12 font-medium md:hidden"
              style={{ zIndex: 9999 }}
            >
              Key Benefits
            </h1>
            <div className="flex flex-row md:flex-row md:w-[84%] md:ml-20 items-center justify-between mx-2 md:mx-7 mt-10 gap-6">
              <div
                className="bg-white rounded-[12px] p-[17px] w-[286px] shadow-[10px_10px_10px_0px_#E7EFFE] flex items-center gap-2"
                style={{ zIndex: 1 }}
              >
                <Image src={assets.img3} alt="Multi Currency" />
                <h3 className="text-[14px] md:text-[16px] text-[#1F2937]">
                  Multi-Currency Support
                </h3>
              </div>

              <h1 className="hidden md:block text-[28px] font-medium">
                Key Benefits
              </h1>

              <div
                className="bg-white rounded-[12px] p-[17px] w-[286px] md:w-[250px] shadow-[10px_10px_10px_0px_#E7EFFE] flex items-center gap-2"
                style={{ zIndex: 1 }}
              >
                <Image src={assets.img4} alt="Scalable" />
                <h3 className="text-[14px] text-[#1F2937]">
                  Scalable for All Businesses
                </h3>
              </div>
            </div>

            {/* shadow */}
            <div
              style={{
                backgroundImage: `url(${assets.heroBenifitsShadow.src})`,
              }}
              className="bg-cover bg-center w-[350px] md:w-[557px] lg:w-[650px] xl:w-[680px] h-[254px] absolute top-[57%] left-[10%] md:top-[40%] md:left-[0%] lg:left-[27%] xl:left-[36.5%] "
            />

            {/* 3rd Row */}
            <div className="flex justify-center mt-12 ">
              <div
                className="bg-white/80 p-[25px] rounded-[16px] w-[300px] md:w-[550px] shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
                style={{ zIndex: 1 }}
              >
                <h1 className="text-[18px] font-normal">
                  Precision You Can Trust – Setup in 2 Minutes
                </h1>
                <Image src={assets.graph} alt="Graph" className="mt-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="bg-[#F4EDFF] h-[100px]" />
    </>
  );
};

export default Hero_Section;
