"use client";

import React, { useState, useEffect } from "react";

import { NavigationMenuStudentLoggedIn } from "@/components/navbar/navloggedinStudent";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import { collection, getDocs, limit, orderBy ,query} from "firebase/firestore";
import { db } from "../../firebase";

import { CarouselDemo } from "@/components/carousel";
import { JobPostingCarousel } from "@/components/job-posting/jobPostingCarousel";
import { Label } from "@/components/ui/label";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import SearchWithQuickFilters from '@/components/ui/SearchWithQuickFilters'; 
export default function Page() {
  const [freshJobs, setFreshJobs] = useState([]);
  const [popularJobs, setPopularJobs] = useState([])

  useEffect(()=> {
    const fetchJobs = async () => {
      const q = query(collection(db, "jobPostings"), orderBy("postedDate", "desc"), limit(10))
      const jobDoc = await getDocs(q);
      const jobsData = []
      jobDoc.forEach((doc) => {
        jobsData.push(doc.data())
      })
      setFreshJobs(jobsData)
    }
    fetchJobs()
  },[]);

  useEffect(()=> {
    const fetchPopularJobs = async () => {
      const q = query(collection(db, "jobPostings"), orderBy("numberOfBids", "desc"), limit(10))
      const jobDoc = await getDocs(q);
      const jobsData = []
      jobDoc.forEach((doc) => {
        jobsData.push(doc.data())
      })
      setPopularJobs(jobsData)
    }
    fetchPopularJobs()
  },[]);
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
          {/* Jobs For You Section
          <div className="w-[88%] flex flex-col items-start">
            <Label htmlFor="jobsforyou" className="text-[48px] text-error-white font-bold mb-4 underline">Jobs For You:</Label>
            <div id="jobsforyou" className="w-full flex justify-center">
              <JobPostingCarousel/>
            </div>
          </div> */}

          {/* Fresh Jobs Section */}
          <div className="w-[88%] flex flex-col items-start mt-10">
            <Label htmlFor="freshjobs" className="text-[48px] text-error-white font-bold mb-4 underline">Fresh Jobs:</Label>
            <div id="freshjobs" className="w-full flex justify-center">
              <JobPostingCarousel jobs={freshJobs}/>
            </div>
          </div>

          {/* Popular Jobs Section */}
          <div className="w-[88%] flex flex-col items-start mt-10">
            <Label htmlFor="popularjobs" className="text-[48px] text-error-white font-bold mb-4 underline">Popular Jobs:</Label>
            <div id="popularjobs" className="w-full flex justify-center">
              <JobPostingCarousel jobs={popularJobs}/>
            </div>
          </div>
        </div>
      </div>

          


        {/* Footer */}
        <footer className="h-20 w-full sticky dark:bg-error-black bg-error-reallyDarkBlue">
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
