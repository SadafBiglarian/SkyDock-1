"use client";
///
export default function EditInfo() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="font-vazir text-black text-3xl text-center mb-8">
        ℹ️ اطلاعات کاربری
      </h1>
      <hr className="my-6 border-gray-400 border-t-2 w-full max-w-2xl mb-10 " />
      <div className="flex flex-col w-full  max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex font-vazir flex-col justify-center  gap-4 rounded-lg "
        >
          <label
            htmlFor="username"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <p className="text-black mx-2 px-2">نام و نام خانوادگی</p>
            <input
              id="username"
              name="username"
              type="username"
              className="mx-2 px-2 text-gray-500 border-[#178AD0] rounded-2xl border-solid border-2
               border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60"
            />
          </label>

          <label
            htmlFor="email"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <p className="text-black mx-2 px-2"> ایمیل</p>
            <input
              id="email"
              name="email"
              type="email"
              className="mx-2 px-2 text-gray-500 border-[#178AD0] rounded-2xl border-solid border-2
               border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white h-14 w-72 max-sm:h-10 max-sm:w-60"
            />
          </label>

          <label
            htmlFor="password"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <p className="text-black mx-2 px-2">رمز عبور</p>
            <input
              id="password"
              name="password"
              type="password"
              className="mx-2 px-2 text-gray-500 border-[#178AD0] rounded-2xl border-solid border-2
               border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white  h-14 w-72 max-sm:h-10 max-sm:w-60"
            />
          </label>

          <label
            htmlFor="number"
            className="text-username text-right text-xl font-bold max-sm:text-lg"
          >
            <p className="text-black mx-2 px-2">شماره تماس</p>

            <input
              id="number"
              name="number"
              type="number"
              className="mx-2 px-2 text-gray-500 border-[#178AD0] rounded-2xl border-solid border-2
               border-loginBorder hover:bg-blue-100 focus:outline-none
                focus:bg-white  h-14 w-72 max-sm:h-10 max-sm:w-60 hide-number-spinner"
            />
          </label>

          <button
            type="submit"
            className="flex justify-center items-center self-start  mx-4 rounded-2xl
            border-solid border-2 bg-loginBorder text-[#12812F] w-20 h-10"
          >
            تایید
          </button>
        </form>
      </div>
    </div>
  );
}
