import React from "react";
import { NavigationMenuDemo } from "@/components/navJobPostingEmployer";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";

export default function jobPostingEmployer() {
  return (
    <>
    <div className="flex flex-col h-[1662px]z dark:bg-error-black">
      <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
        <div className="flex items-center justify-between h-full">
          <div>
            <Image src={logo} width="150" height="150" alt="logo"></Image>
          </div>
          <div className="flex justify-end flex-grow ">
            <NavigationMenuDemo />
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </nav>

      </div>
      </>
  );
}