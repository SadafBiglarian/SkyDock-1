"use client";

import React from "react";
///
interface PackageCardProps {
  packageName: string;
  price: string;
  details: string;
  showBuyButton?: boolean;
}

export default function PackageCard({
  packageName,
  price,
  details,
  showBuyButton = true,
}: PackageCardProps) {
  return (
    <div
      className="
        bg-white                   
        rounded-lg                 
        border-2 border-solid     
        border-[#0C344D]           
        shadow-md                  
        p-6                        
        flex flex-col items-center 
        text-center                
        w-full max-w-[280px]       
        mx-auto my-4
        hover:shadow-lg hover:border-[#1F6E8C] transition-all 
      "
    >
      <h3 className="font-sans text-xl font-normal text-gray-800 mb-2">
        {packageName}
      </h3>

      <p className="font-vazir text-2xl font-bold text-gray-900 mb-2">
        {price} ریال
      </p>

      <p className="font-vazir text-lg font-normal text-gray-700">{details}</p>

      {showBuyButton && (
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          خرید
        </button>
      )}
    </div>
  );
}
