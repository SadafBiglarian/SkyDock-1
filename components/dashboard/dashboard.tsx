"use client";

import React from "react";
import PackageCard from "../packageCard/packageCard";
///
export default function Dashboard() {
  const packages = [
    {
      id: 1,
      name: "20TB Package",
      price: "39,970,000",
      details: "20 ترابایت 1 ماهه",
      showBuyButton: false,
    },
  ];

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="font-vazir text-black text-3xl text-center mb-8">
        {" "}
        👨🏻‍💻 دسترسی سریع{" "}
      </h1>
      <hr className="my-6 border-gray-400 border-t-2 w-full max-w-2xl" />

      <p className="text-black self-start ms-22 text-2xl font-vazir">
         محصولات من:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            packageName={pkg.name}
            price={pkg.price}
            details={pkg.details}
            showBuyButton={pkg.showBuyButton}
          />
        ))}
      </div>
    </div>
  );
}
