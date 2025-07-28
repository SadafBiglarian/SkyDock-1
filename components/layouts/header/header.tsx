"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
///
export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gradient-to-l z-40  from-[#0C2D42] to-[#1D6B9C] sticky top-0 text-white w-full flex  items-center justify-start md:gap-20 p-2  sm:gap-7">
      <div>
        <Image src="/images/logo.png" alt={"logo"} width={80} height={80} />
      </div>
      <Link href="/" className="">
        <p className="text-white md:text-xl sm:text-sm">خانه</p>
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onMouseEnter={() => setIsDropdownOpen(true)}
          className="text-white hover:bg-blue-950
          focus:ring-2  focus:ring-offset-blue-200
          rounded-lg md:text-xl sm:text-sm px-5 py-2.5 text-center inline-flex items-center "
          type="button"
        >
          محصولات
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
          >
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <a href="/cloudShop" className="block px-4 py-2 hover:bg-gray-100">
                  سرویس ابری
                </a>
              </li>
              <li>
                <a href="/storageShop" className="block px-4 py-2 hover:bg-gray-100">
                  فضای ذخیره سازی
                </a>
              </li>
              {/* <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  دیتابیس آنلاین
                </a>
              </li> */}
            </ul>
          </div>
        )}
      </div>

      <Link href="/" className="">
        <p className="text-white  md:text-xl sm:text-sm">درباره ما</p>
      </Link>

      <div className="inline-flex items-center gap-3 md:text-sm ">
        <Link
          href="/signin"
          className="bg-white h-8 w-16 flex justify-center-safe rounded-2xl text-black "
        >
          <p className="py-1.5">ورود</p>
        </Link>
        <Link
          href="/signup"
          className="bg-[#154F74] h-8 w-16 flex justify-center-safe rounded-2xl text-white"
        >
          <p className="py-1.5">ثبت نام</p>
        </Link>
      </div>
    </header>
  );
}
