import React from "react";

import { NavigationMenuStudentLoggedIn } from "@/components/navloggedinStudent";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import logo from "../../../public/images/logo-no-bg.png";

import { CarouselDemo } from "@/components/carousel";
import { JobPostingCarousel } from "@/components/jobPostingCarousel";
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
              <Image src={logo} width="150" height="150" alt="logo" ></Image>
            </div>
            <div className="flex justify-end flex-grow">
              <NavigationMenuStudentLoggedIn />
            </div>
            <div className="w-10 h-10"></div>
          </div>
        </nav>


        <div className = "flex mb-10 items-center justify-center ">
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
        


       <div className="flex items-center justify-center w-full h-full bg-error-100 dark:bg-error-black">
        <div className="mt-12 w-full flex flex-col items-center">
          {/* Jobs For You Section */}
          <div className="w-[88%] flex flex-col items-start">
            <Label htmlFor="jobsforyou" className="text-[48px] text-error-white font-bold mb-4 underline">Jobs For You:</Label>
            <div id="jobsforyou" className="w-full flex justify-center">
              <JobPostingCarousel/>
            </div>
          </div>

          {/* Fresh Jobs Section */}
          <div className="w-[88%] flex flex-col items-start mt-10">
            <Label htmlFor="freshjobs" className="text-[48px] text-error-white font-bold mb-4 underline">Fresh Jobs:</Label>
            <div id="freshjobs" className="w-full flex justify-center">
              <JobPostingCarousel/>
            </div>
          </div>

          {/* Popular Jobs Section */}
          <div className="w-[88%] flex flex-col items-start mt-10">
            <Label htmlFor="popularjobs" className="text-[48px] text-error-white font-bold mb-4 underline">Popular Jobs:</Label>
            <div id="popularjobs" className="w-full flex justify-center">
              <JobPostingCarousel/>
            </div>
          </div>
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
