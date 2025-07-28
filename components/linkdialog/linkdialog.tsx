"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
///
interface LinkDialogProps {
  showButton?: boolean;
}

export default function Linkdialog({ showButton = true }: LinkDialogProps) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center 
         absolute  left-40 -translate-x-1/2
          p-6 bg-white rounded-lg border-2
     border-[#185982] shadow-md w-[320px] mx-auto my-10"
      >
        <div className="flex items-center gap-4 mb-6 ">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="hidden"
          />

          <button
            onClick={triggerFileInput}
            className="relative w-20 h-20 rounded-full overflow-hidden flex items-center
          justify-center cursor-pointer border-2
           border-[#185982] hover:border-blue-800 transition-all flex-shrink-0"
            title="آپلود عکس پروفایل"
          >
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <svg
                className="w-12 h-12 text-[#0C344D]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </button>
          <span className="w-3 h-3 bg-[#0C344D] rounded-full flex-shrink-0"></span>
          <p className="font-bold text-2xl text-gray-800 flex-grow text-right">
            صدف بیگ لریان
          </p>
        </div>
        {showButton && (
          <Link
            href="/editInfo"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 mb-4 rounded-lg border-2 border-blue-500 text-[#178AD0] font-semibold text-lg shadow-md hover:bg-blue-50 hover:border-blue-600 transition-all"
          >
            <Image src="/images/edit.svg" alt={""} width={25} height={25} />
            <span>ثبت و ویرایش اطلاعات</span>
          </Link>
        )}

        <button className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg border-2 border-red-500 text-[#E23939] font-semibold text-lg shadow-md hover:bg-red-50 hover:border-red-600 transition-all">
          <Image src="/images/exite.svg" alt={""} width={25} height={25} />

          <span>خروج</span>
        </button>
      </div>
    </div>
  );
}
