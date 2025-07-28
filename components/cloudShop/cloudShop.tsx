"use client"; 

import PackageCard from '@/components/packageCard/packageCard';
import React from 'react'; 
//
export default function CloudShop() {
  const packages = [
    { id: 1, name: "20TB Package", price: "39,970,000", details: "20 ترابایت 1 ماهه" },
    { id: 2, name: "23TB Package", price: "39,990,000", details: "23 ترابایت 1 ماهه" },
    { id: 3, name: "22TB Package", price: "39,930,000", details: "22 ترابایت 1 ماهه" },
    { id: 4, name: "21TB Package", price: "39,920,000", details: "21 ترابایت 1 ماهه" },
  ];

  return (
    <div className="flex flex-col items-center p-8"> 
      <h1 className="font-vazir text-black text-3xl text-center mb-8">☁️ سرور ابری</h1> 
      <hr className="my-6 border-gray-400 border-t-2 w-full max-w-2xl" /> 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
        {packages.map(pkg => (
          <PackageCard
            key={pkg.id}
            packageName={pkg.name}
            price={pkg.price}
            details={pkg.details}
          />
        ))}
      </div>
    </div>
  );
}