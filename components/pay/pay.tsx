"use client";

import React from "react";
import PackageCard from "../packageCard/packageCard";
///
export default function Pay() {
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
        💳 پرداخت الکترونیکی{" "}
      </h1>
      <hr className="my-6 border-gray-400 border-t-2 w-full max-w-2xl" />

      <p className="text-black self-start ms-22 text-2xl font-vazir">
        بسته انتخابی
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
      <form className="rounded-2xl p-5 bg-white w-full max-w-6xl">
        <label
          htmlFor="email"
          className=" text-username text-right text-xl font-bold max-sm:text-lg"
        >
          <input
            id="price"
            name="price"
            type="number"
            placeholder="مبلغ را وارد کنید"
            className=" flex justify-center items-center self-center mb-4 p-2 text-gray-500 border-[#178AD0] rounded-2xl border-solid border-2
                   border-loginBorder hover:bg-blue-100 focus:outline-none
                    focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60 hide-number-spinner"
          />
        </label>
        <button
          type="submit"
          className="flex justify-center items-center self-center rounded-2xl
                border-solid border-2 bg-loginBorder text-[#12812F] w-20 h-10"
        >
          تایید
        </button>
      </form>
    </div>
  );
}
