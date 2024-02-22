import React from "react";
import { NavigationMenuDemo } from "@/components/navjobviewingemployer";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemoFooter } from "@/components/navfooter";

export default function JobViewingEmployer() {
  return (
    <div className="flex flex-col h-[1662px]z dark:bg-error-white">
      <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-white">
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

      <div>
        <footer className="bg-error-100 h-20 w-full stickey left-0 bottom-0 mt-24 dark:bg-error-white">
        <div className="flex items-center justify-between h-full">
          <h4 className="text-2xl text-error-200 ml-8">UTalent</h4>
          {/* <h4 className="flex justify-end flex-grow"></h4> */}
          <div className="flex justify-end flex-grow mr-10  ">
          <NavigationMenuDemoFooter ></NavigationMenuDemoFooter>
          </div>
          </div>
        </footer>
      </div>
    </div>

    
  )
}
