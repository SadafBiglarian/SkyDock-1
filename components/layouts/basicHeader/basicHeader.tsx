"use client";
import Linkdialog from "@/components/linkdialog/linkdialog";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";

export default function BasicHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <header className="bg-gradient-to-l z-40  from-[#0C2D42] to-[#1D6B9C] sticky top-0 text-white w-full flex  items-center justify-between md:gap-20  p-2 sm:gap-7">
        <div>
          <Image src="/images/logo.png" alt={"logo"} width={80} height={80} />
        </div>
        <div className="relative">
          <button
            className="flex gap-1  items-center border-2 border-white rounded-2xl px-6 py-2 "
            onClick={() => {
              setShowDialog((prev) => !prev);
            }}
          >
            <Image alt="" src="/images/user-solid.png" width={32} height={32} />
            <p className="text-white text-lg hidden sm:block">
              نام و نام خانوادگی
            </p>
          </button>
          {showDialog && <Linkdialog />}
        </div>
      </header>
      <Sidebar/>
    </div>
  );
}
