"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 ">
      <div
        className="relative overflow-hidden   pb-[95px] md:py-[10px]
 lg:max-h-[620px] before:absolute before:content-[''] before:left-0
  before:top-0 sm:top-0 before:w-full before:h-full before:rotate-y-180
         before:bg-[url('/images/cloudsUP-mobile.jpg')] md:before:bg-[url('/images/cloudsUP.jpg')] 
         before:bg-center sm:before:bg-cover md:before:bg-auto before:bg-no-repeat"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div
              className="max-w-full sm:max-w-[400px] md:max-w-[460px] 
            lg:max-w-[560px] xl:max-w-[584px] xl:ltr:max-w-[668px] 
            text-start lg:text-start z-20 "
            >
              <p className=" font-vazir lg:text-3xl  text-[28px] xl:leading-[56px]!">
                <span
                  className="
                text-white text-shadow-lg text-shadow-[#0B2A3D]  "
                >
                  ذخیره سازی ابری امن و سریع با{" "}
                </span>
                <span className=" font-extrabold text-[#0B293C]">SkyDock</span>
              </p>
              <div
                className="font-vazir text-2xl ltr:text-xl lg:text-[36px] text-[#0B293C] 
              text-shadow-md text-shadow-white mb-8"
              >
                همین حالا فضای ابری خود را سفارشی کنید
              </div>
              <div
                className="hid flex gap-x-4 justify-start sm:justify-center before:content-[''] 
                before:absolute before:w-full before:h-[60px]
               before:bg-white sm:before:hidden before:blur-2xl"
              >
                <a
                  href=""
                  className="flex items-center justify-center w-44 lg:w-auto h-12 
                  rounded-lg text-sm lg:text-base font-semibold border-[1.5px
                   border-white py-4 px-6 bg-[#536F80] text-white hover:bg-white
                   hover:text-[#536F80] hover:border-[#536F80] hover:border-[1.5px]
                     transition-all z-20"
                  id=""
                >
                  شروع SkyDock
                </a>
                <a
                  href=""
                  className=" flex items-center justify-center w-44 
                  lg:w-auto h-12 py-4 px-6 gap-x-2 rounded-lg text-sm lg:text-base
                   font-semibold bg-[#154F74] text-white border-[1.5px]
                   border-white hover:bg-white hover:text-[#154F74] hover:border-[#154F74] hover:border-[1.5px]
                   transition-all z-20"
                  id=""
                >
                  مشاهده تعرفه ها
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden mt-16 pb-[95px] md:py-[10px]
 lg:max-h-[620px] before:absolute before:content-[''] before:left-0
  before:top-0 sm:top-0 before:w-full before:h-full before:rotate-y-180
         before:bg-[url('/images/cloudsMidMobile.jpg')] md:before:bg-[url('/images/cloudsMidWeb1.jpg')] 
         before:bg-center sm:before:bg-cover md:before:bg-auto before:bg-no-repeat"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div
              className="max-w-full sm:max-w-[400px] md:max-w-[460px] 
            lg:max-w-[560px] xl:max-w-[584px] xl:ltr:max-w-[668px] 
            text-start lg:ms-[650px] md:ms-[400px] sm:ms-[15px] lg:text-start z-20 "
            >
              <p className="font-vazir text-white lg:text-3xl xl:text-3xl text-[25px] xl:leading-[56px]!">
                ترافیک سایت شما را کند کرده است؟
              </p>
              <p className="font-vazir text-[#0B2A3D] text-shadow-lg text-shadow-amber-50 font-semibold lg:text-3xl xl:text-4xl text-[25px] xl:leading-[56px]!">
                با سرویس CDN ما سرعت را تجربه کنید{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden mt-2 pb-[50px] md:py-[10px]
 lg:max-h-[620px] before:absolute before:content-[''] before:left-0
  before:top-0 sm:top-0 before:w-full before:h-full before:rotate-y-180
         "
      >
        <div className="container mb-5 mt-10">
          <div className="flex-row ">
            <p className="text-blue-950 font-vazir mb-5 text-3xl">
              محبوب ترین سرویس ها
            </p>
            <div
              className="flex-row md:flex gap-10 w-fit 
            text-start lg:text-start "
            >
              <Link
                href={"/"}
                className="font-vazir w-full text-2xl text-white text-shadow-lg text-shadow-[#178AD0]"
              >
                <p> ☁️ سرور ابری</p>
              </Link>
              <Link
                href={"/cloudPannel"}
                className="font-vazir w-full text-2xl text-white text-shadow-lg text-shadow-[#178AD0]"
              >
                <p> 💾 فضای ذخیره سازی </p>
              </Link>
              <Link
                href={""}
                className=" font-vazir w-full text-2xl text-white text-shadow-lg text-shadow-[#178AD0]"
              >
                <p> 🛢 دیتابیس آنلاین </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
