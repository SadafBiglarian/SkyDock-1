"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

////

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");
    setIsError(false);

    if (password !== confirmPassword) {
      setMessage("رمز عبور و تکرار آن مطابقت ندارند!");
      setIsError(true);
      return;
    }

    try {
      const response = await axios.post(
        "/api/auth/register/user",
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("ثبت‌نام با موفقیت انجام شد! حالا می‌توانید وارد شوید.");
      setIsError(false);
      router.push("/signin");
    } catch (error: any) {
      setIsError(true);
      if (axios.isAxiosError(error) && error.response) {
        setMessage(
          `خطا در ثبت‌نام: ${
            error.response.data?.message || error.response.statusText
          }`
        );
      } else {
        setMessage(`خطای شبکه: ${error.message}`);
      }
      console.error("Signup error:", error);
    }
  }

  return (
    <div
      className="container min-h-screen bg-white flex flex-col
       lg:flex-row-reverse items-center justify-center gap-4"
    >
      <Image src="/images/login.jpg" alt="" width={400} height={700} />

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex px-7 font-vazir flex-col justify-center gap-4 rounded-lg py-4"
        >
          <h2 className="text-[#154F74] text-3xl font-vazir self-center">
            ثبت نام
          </h2>

          {message && (
            <div
              className={`p-2 rounded text-center ${
                isError
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {message}
            </div>
          )}

          <label
            htmlFor="username"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <input
              id="username"
              name="username"
              type="text"
              placeholder="نام کاربری خود را وارد کنید"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="m-2 p-2 text-black border-[#178AD0] rounded-2xl border-solid border-2
                border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60"
              required
            />
          </label>

          <label
            htmlFor="email"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="m-2 p-2 text-black border-[#178AD0] rounded-2xl border-solid border-2
                border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60"
              required
            />
          </label>

          <label
            htmlFor="password"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <input
              id="password"
              name="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="m-2 p-2 text-black border-[#178AD0] rounded-2xl border-solid border-2
                border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60"
              required
            />
          </label>

          <label
            htmlFor="confirmPassword"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="تکرار رمز عبور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="m-2 p-2 text-black border-[#178AD0] rounded-2xl border-solid border-2
                border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60"
              required
            />
          </label>

          <Link
            href="/signin"
            title="اینجا کلیک کنید"
            className="text-gray-500 ps-3"
          >
            آیا حساب کاربری دارید؟
          </Link>
          <button
            type="submit"
            className="flex justify-center items-center self-center rounded-2xl
            border-solid border-2 bg-loginBorder text-[#12812F] w-20 h-10"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
}
