"use client";
import Image from "next/image";
import Link from "next/link";
///
export default function Footer() {
  return (
    <>
      <footer
        className="relative overflow-hidden   pb-[95px] 
 lg:max-h-[620px] before:absolute before:content-[''] before:left-0
  before:top-0 sm:top-0 before:w-full before:h-full before:rotate-y-180
         before:bg-[url('/images/footer-mobile.jpg')] md:before:bg-[url('/images/footer-web.jpg')] 
         before:bg-center sm:before:bg-cover md:before:bg-auto before:bg-no-repeat"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div
              className="max-w-full sm:max-w-[400px] md:max-w-[460px] 
            lg:max-w-[560px] xl:max-w-[584px] xl:ltr:max-w-[668px] 
            text-start lg:text-start z-20 "
            >
              <div className="flex-row py-5 ">
                <Link href={""} className="flex gap-5 font-vazir text-xl m-2 ">
                  <Image
                    src={"/images/phone.svg"}
                    alt={"phone"}
                    width={25}
                    height={40}
                  />
                  <p>تماس با ما</p>
                </Link>
                <Link href={""} className="flex gap-5 font-vazir text-xl m-2 ">
                  <Image
                    src={"/images/message.svg"}
                    alt={"phone"}
                    width={25}
                    height={40}
                  />
                  <p>نظرات کاربران </p>
                </Link>
                <Link href={""} className="flex gap-5 font-vazir text-xl m-2">
                  <Image
                    src={"/images/email.svg"}
                    alt={"phone"}
                    width={25}
                    height={40}
                  />
                  <p> Sadaf.biglarian02@gmail.com </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
