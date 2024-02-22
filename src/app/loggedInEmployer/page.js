import React from "react";
import { NavigationMenuEmployerLoggedIn } from "@/components/navloggedinEmployer";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import logo from "../../../public/images/logo-no-bg.png";
import { CarouselDemo } from "@/components/carousel";
import { Label } from "@/components/ui/label";
import { NavigationMenuDemoFooter } from "@/components/navfooter";
import { Button } from "@/components/ui/button"
import SearchWithQuickFilters from '@/components/ui/SearchWithQuickFilters'; 
export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen dark:bg-error-black">
        <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
          <div className="flex items-center justify-between h-full">
            <div>
              <Image src={logo} width="150" height="150" alt="logo"></Image>
            </div>
            <div className="flex justify-end flex-grow">
              <NavigationMenuEmployerLoggedIn />
            </div>
            <div className="w-10 h-10"></div>
          </div>
        </nav>


        <div className = "flex mb-10 items-center justify-center">
        <SearchWithQuickFilters/>
        </div>
        
        {/* Main content wrapper adjusted for centering */}
        <div className="flex-grow flex-col items-center justify-center">
          <div className="text-center"> {/* Centering the label horizontally */}
            <Label htmlFor="topJobs" className="text-[32px] font-bold mb-4">Top Jobs</Label>
          </div>
          <div className="flex flex-col items-center justify-center mb-10 z-0">
            <CarouselDemo id="topJobs"></CarouselDemo>
          </div>
        </div>

        {/* Footer */}
        <footer className="h-20 w-full sticky bottom-0 dark:bg-error-black bg-error-reallyDarkBlue">
          <div className="flex items-center justify-between h-full">
            <h4 className="text-3xl text-error-200 ml-8 font-extrabold">UTalent</h4>
            <div className="flex justify-end flex-grow mr-10">
              <NavigationMenuDemoFooter></NavigationMenuDemoFooter>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}