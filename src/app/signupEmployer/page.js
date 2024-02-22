import React from "react";

export default function signupEmployer() {
  return (
    <>
      <body className="bg-error-100 dark:bg-error-black">
        <div className="flex items-center justify-center h-screen">
          <div className=" bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-6/12 h-4/6 rounded-3xl">
            <div>
              <h1 className="flex pt-16 text-2xl pl-10 justify-start dark:text-error-200">
                Create an Account
              </h1>
              <form className="">
                <label for='cName' className="flex pt-10 pl-10">Company Name</label>
                <div className="flex pl-10 ">
                <input type="text" id="cName" name="cName" className="border border-gray-400 border-opacity-35 rounded-xl  text-center h-8"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
