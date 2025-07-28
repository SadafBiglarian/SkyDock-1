"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminHeader from "../layouts/adminHeader/adminHeader";
///
export default function AdminDashboard() {
  const [packageName, setPackageName] = useState("");
  const [packageType, setPackageType] = useState("CloudServer");
  const [price, setPrice] = useState("");

  const [storageTB, setStorageTB] = useState("");
  const [durationMonths, setDurationMonths] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const getAuthHeaders = () => {
    const token = localStorage.getItem("user_token");
    if (!token) {
      router.push("/admin/login");
      throw new Error("User not authenticated.");
    }
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      const headers = getAuthHeaders();
      const newPackage: any = {
        name: packageName,
        type: packageType,
        price: parseFloat(price),
        storageTB: parseInt(storageTB),
        durationMonths: parseInt(durationMonths),
      };

      const response = await axios.post("/api/packages", newPackage, {
        headers,
      });

      setMessage(`بسته "${response.data.name}" با موفقیت اضافه شد!`);
      setIsError(false);
      setPackageName("");
      setPrice("");
      setStorageTB("");
      setDurationMonths("");
    } catch (err: any) {
      setIsError(true);
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 401 || err.response.status === 403) {
          setMessage("شما اجازه دسترسی به این بخش را ندارید. (فقط ادمین)");
          router.push("/dashboard");
        } else {
          setMessage(
            `خطا در افزودن بسته: ${
              err.response.data?.message || err.response.statusText
            }`
          );
        }
      } else {
        setMessage(`خطای شبکه: ${err.message}`);
      }
      console.error(err);
    }
  };

  return (
    <div className="bg-[#E6EDEF] h-screen font-vazir ">
      <AdminHeader />
      <div className="flex flex-col items-center p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          پنل ادمین - افزودن بسته جدید
        </h1>
        <hr className="my-6 border-gray-400 border-t-2 w-full max-w-2xl" />

        {message && (
          <div
            className={`p-3 mb-4 rounded ${
              isError
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label
              htmlFor="packageType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              نوع بسته:
            </label>
            <select
              id="packageType"
              value={packageType}
              onChange={(e) =>
                setPackageType(e.target.value as "CloudServer" | "Storage")
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="CloudServer">سرور ابری</option>
              <option value="Storage">فضای ذخیره‌سازی</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="packageName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              نام بسته:
            </label>
            <input
              type="text"
              id="packageName"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              قیمت (ریال):
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border hide-number-spinner rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              min="0"
            />
          </div>

          <div>
            <label
              htmlFor="storageTB"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              فضای ذخیره‌سازی (TB):
            </label>
            <input
              type="number"
              id="storageTB"
              value={storageTB}
              onChange={(e) => setStorageTB(e.target.value)}
              className="shadow appearance-none border hide-number-spinner rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="0"
              required
            />
          </div>
          <div>
            <label
              htmlFor="durationMonths"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              مدت زمان (ماه):
            </label>
            <input
              type="number"
              id="durationMonths"
              value={durationMonths}
              onChange={(e) => setDurationMonths(e.target.value)}
              className="shadow appearance-none border hide-number-spinner rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-fit "
          >
            افزودن بسته
          </button>
        </form>
      </div>
    </div>
  );
}
