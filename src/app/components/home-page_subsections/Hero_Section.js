import Image from "next/image";
import { assets } from "../../assets/assets";

const Hero_Section = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${assets.heroBg.src})` }}
        className="min-h-[100vh] w-full bg-cover pb-12 "
      >
        <div
          style={{ backgroundImage: `url(${assets.smallStar.src})` }}
          className="min-h-[100vh] w-full bg-cover flex flex-col "
        >
          <h1 className="text-[26px] md:text-[48px] text-[#111827] mt-12 text-center font-medium ">
            Modern Accounting, Automated
          </h1>
          <h1 className="text-[26px] md:text-[48px] text-[#111827] text-center font-medium ">
            and Ready for the World
          </h1>

          <p className="text-center text-[#4B5563] mt-12 text-[16px] md:text-[18px] w-[350px] md:w-[901px] self-center ">
            Contataxpay is your digital platform for seamless accounting in all
            European and non-European countries. From Germany to Moldova and
            beyond, automate invoices, track finances, and stay compliant, now
            available in 50+ countries with core features free for everyone.
          </p>

          {/* Buttons */}
          <div className="flex items-center self-center mt-12 gap-8 ">
            <button className="bg-[#3D70FE] text-[14px] md:text-[16px] text-white font-normal rounded-[8px] py-[12px] px-[30px] md:px-[46px] cursor-pointer ">
              Register for Free
            </button>
            <button className="text-[#2563EB] bg-white text-[14px] md:text-[16px] font-normal rounded-[8px] py-[12px] px-[30px] md:px-[46px] cursor-pointer shadow-[4px_4px_15px_-3px_rgba(0,0,0,0.25)] shadow-[#2563EB] ">
              Learn More
            </button>
          </div>

          {/* Benifits Containers */}
          <div
            style={{ backgroundImage: `url(${assets.headBg1.src})` }}
            className="bg-cover bg-center "
          >
            {/* 1st row */}
            <div className="flex items-center justify-between mx-2 md:mx-7 md:gap-0 gap-2 mt-12 ">
              <div
                className="
      bg-white 
      rounded-[12px] 
      p-[24px]
      md:p-[17px]
      w-[180px] 
      md:w-[225px] 
      border border-[#FFFFFF4D]
      shadow-[10px_10px_10px_0px_#E7EFFE]
      backdrop-blur-[80px]
      flex items-center gap-1
    "
              >
                <Image src={assets.img1} alt="img" className="w-auto h-auto " />
                <h3 className="text-[14px] md:text-[16px] text-[#1F2937] font-normal">
                  Encrypted Data
                </h3>
              </div>

              <div
                className="
      bg-white 
      rounded-[12px] 
      p-[10px]
      md:p-[17px] 
      w-[180px]
      md:w-[237px] 
      border border-[#FFFFFF4D]
      shadow-[10px_10px_10px_0px_#E7EFFE]
      backdrop-blur-[80px]
      flex items-center gap-2
    "
              >
                <Image src={assets.img2} alt="img" className="h-auto w-auto " />
                <h3 className="text-[12px] md:text-[14px] text-[#1F2937] font-normal">
                  GDPR Compliance (global security emphasis)
                </h3>
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex items-center flex-col md:flex-row gap-6 md:gap-0 justify-between mx-2 md:mx-7 mt-12 ">
              <h1 className="text-[26px] font-medium md:hidden block ">
                Key Benefits
              </h1>
              <div
                className="
      bg-white 
      rounded-[12px] 
      p-[17px] 
      w-[286px] 
      border border-[#FFFFFF4D]
      shadow-[10px_10px_10px_0px_#E7EFFE]
      backdrop-blur-[80px]
      flex items-center ml-0 md:ml-14 gap-2
    "
              >
                <Image src={assets.img3} alt="img" className="h-auto w-auto " />
                <h3 className="text-[14px]  md:text-[16px] text-[#1F2937] font-normal">
                  Multi-Currency Support for International Businesses.
                </h3>
              </div>

              <h1 className="text-[28px] font-medium hidden md:block ">
                Key Benefits
              </h1>
              <div
                className="
      bg-white 
      rounded-[12px] 
      p-[17px]
      w-[286px] 
      md:w-[250px] 
      border border-[#FFFFFF4D]
      shadow-[10px_10px_10px_0px_#E7EFFE]
      backdrop-blur-[80px]
      flex items-center gap-2 mr-0 md:mr-14
    "
              >
                <Image src={assets.img4} alt="img" className="h-auto w-auto " />
                <h3 className="text-[14px] text-[#1F2937] font-normal">
                  Scalable for Entrepreneurs, SMEs, and Enterprises.
                </h3>
              </div>
            </div>

            {/* 3rd row */}
            <div className="flex items-center justify-center ">
              <div
                className="
      p-[25px] 
      rounded-[16px] 
      w-[300px]
      md:w-[550px] 
      border border-[#FFFFFF4D]
      shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
      backdrop-blur-[16px] self-center mt-12 h-[278px]
    "
              >
                <h1 className="text-[18px] font-normal ">
                  Precision You Can Trust - Quick Setup in 2 Minutes
                </h1>
                <Image src={assets.graph} alt="img" className="mt-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Border */}
      <div className="bg-[#F4EDFF] h-[100px] "></div>
    </>
  );
};

export default Hero_Section;
