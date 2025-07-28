"use client";
import Image from "next/image";
///
export default function SigninForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          className="flex px-7 font-vazir flex-col justify-center gap-4 rounded-lg lg:h-screen py-4"
        >
          <h2 className="text-[#154F74] text-3xl font-vazir self-center">
            ورود 
          </h2>
          <label
            htmlFor="email"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="m-2 p-2 text-gray-500 border-[#178AD0] rounded-2xl border-solid border-2
                   border-loginBorder hover:bg-blue-100 focus:outline-none
                    focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60"
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
              className="m-2 p-2 text-gray-500 border-[#178AD0] rounded-2xl border-solid border-2
                   border-loginBorder hover:bg-blue-100 focus:outline-none
                    focus:bg-white  h-14 w-72 max-sm:h-10 max-sm:w-60"
            />
          </label>

          

          <a href="/signup" title="اینجا کلیک کنید" className="text-gray-500 ps-3">
            آیا حساب کاربری ندارید؟
          </a>
          <a href="/password" title="اینجا کلیک کنید" className="text-gray-500 ps-3">
            فراموشی رمز عبور   
          </a>
          <button
            type="submit"
            className="flex justify-center items-center self-center rounded-2xl
                border-solid border-2 bg-loginBorder text-[#12812F] w-20 h-10"
          >
            تایید
          </button>
        </form>
      </div>
    </div>



    
  );
}
