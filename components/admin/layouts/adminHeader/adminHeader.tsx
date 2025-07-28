"use client";
import Linkdialog from "@/components/linkdialog/linkdialog";
import Image from "next/image";
import { useState } from "react";
///
export default function AdminHeader() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <header className="bg-gradient-to-l z-40  from-[#0C2D42] to-[#5B9FC9] sticky top-0 text-white w-full flex  items-center justify-between md:gap-20  p-2 sm:gap-7">
        <div>
          <Image src="/images/logo.png" alt={"logo"} width={80} height={80} />
        </div>
        <div className="relative">
          <button
            className="flex gap-1  items-center text-[#0C344D] border-2 bg-white border-white rounded-2xl px-6 py-2 "
            onClick={() => {
              setShowDialog((prev) => !prev);
            }}
          >
            <Image
              alt=""
              src="/images/user-solid 1(1).png"
              width={32}
              height={32}
            />
            <p className="text-[#0C344D] text-lg hidden sm:block">
              نام و نام خانوادگی
            </p>
          </button>
          {showDialog && <Linkdialog showButton={false} />}
        </div>
      </header>
    </div>
  );
}
