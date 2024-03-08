"use client"
import React, { useState, useEffect } from "react";
import { ViewJobPostCard } from '@/components/job-posting/viewJobPostCard';
import { NavViewJobPostingsEmployerLoggedIn } from '@/components/navbar/navViewJobPostings';
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import { Label } from "@/components/ui/label"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import { collection, getDocs, limit, orderBy ,query,doc, getDoc, where} from "firebase/firestore";
import { db } from "../../firebase";
import {Loader2} from "lucide-react"



export default function Page() {
  const itemsPerPage = 5;

  const [companyJobs, setCompanyJobs] = useState([]);
  const auth = getAuth();
  const [userUid, setUserUid] = useState(null);
  const user = auth.currentUser
  
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
 

  useEffect(() => {
    const fetchUserUid = onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const userRef = doc(db, "users", uid);
            getDoc(userRef).then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setUserUid(userData.uid); // Set fetched data into userDetails
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    });
    return () => fetchUserUid();
}, []);

useEffect(()=> {
  const fetchCompanyJobs = async () => {
    if (userUid) {
      const q = query(collection(db, "jobPostings"),where("companyId", "==", userUid),orderBy("postedDate", "desc"));
      const jobDoc = await getDocs(q);
      const jobsData = []
      jobDoc.forEach((doc) => {
        jobsData.push(doc.data())
      })
      setCompanyJobs(jobsData)
      setTotalJobs(jobsData.length)
      
      
    }
  }
  fetchCompanyJobs()
},[userUid]);

if(companyJobs === null || userUid === null){
  return(
      <Loader2 className="animate-spin"></Loader2>
  )
}
  return (
    <>
    <div className="dark:bg-error-black">

    
      <div className="flex flex-col justify-between min-h-screen dark:bg-black">
        <nav className="bg-error-100 dark:bg-error-black h-20 sticky top-0 z-40 dark:bg-black">
          <div className="flex items-center justify-between h-full">
            <div>
              <Image src={logo} width="150" height="150" alt="logo"></Image>
            </div>
            <div className="flex justify-end flex-grow">
              <NavViewJobPostingsEmployerLoggedIn />
            </div>
            <div className="w-10 h-10"></div>
          </div>
        </nav>

        
        <div className="container mx-auto px-4 py-8 mt-10 dark:bg-error-black min-h-full">
          <Label htmlFor="filter" className="text-4xl underline">Your Posted Jobs:</Label>
          <div id="filter" className="flex flex-wrap -mx-4 mt-10">
            {/*!-- Filter Column --*/}
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 rounded-lg">
              <div className="bg-white p-4 shadow-lg rounded-lg dark:bg-error-darkGray">
                <h2 className="font-bold text-lg mb-4">Filters</h2>
                {/*!-- Filters content here --*/}
                  <div className='mb-8'>
                    <label htmlFor="hourly-rate-min" className="block text-sm font-medium text-gray-700">Hourly Rate</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input type="number" name="hourly-rate-min" id="hourly-rate-min" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Min"></input>
                      <span className="inline-flex items-center px-3  text-sm text-gray-500">
                        to
                      </span>
                      <input type="number" name="hourly-rate-max" id="hourly-rate-max" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Max"></input>
                    </div>
                  </div>

                  <div className='mb-8'>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
                    <select id="duration" name="duration" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option>Less than 1 week</option>
                      <option>1-2 weeks</option>
                      <option>2-3 weeks</option>
                      <option>3-4 weeks</option>
                      <option>1-2 months</option>
                      <option>3+ months</option>
                    </select>
                  </div>
                  <div className="mb-8">
                  <fieldset>
                    <legend className="text-sm font-medium text-gray-700">Type</legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input id="local-jobs" name="type" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                        <label htmlFor="local-jobs" className="ml-3 block text-sm font-medium text-gray-700">Local Jobs</label>
                      </div>
                      <div className="flex items-center">
                        <input id="featured-jobs" name="type" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                        <label htmlFor="featured-jobs" className="ml-3 block text-sm font-medium text-gray-700">Featured Jobs</label>
                      </div>
                      <div className="flex items-center">
                        <input id="featured-jobs" name="type" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                        <label htmlFor="featured-jobs" className="ml-3 block text-sm font-medium text-gray-700">Recruiter Jobs</label>
                      </div>
                      <div className="flex items-center">
                        <input id="featured-jobs" name="type" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                        <label htmlFor="featured-jobs" className="ml-3 block text-sm font-medium text-gray-700">Remote Jobs</label>
                      </div>
                      <div className="flex items-center">
                        <input id="featured-jobs" name="type" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                        <label htmlFor="featured-jobs" className="ml-3 block text-sm font-medium text-gray-700">University Jobs</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4 px-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={startIndex === 0 ? "pointer-events-none opacity-50" : undefined
                    }
                    onClick={() => {
                      setStartIndex(startIndex - itemsPerPage);
                      setEndIndex(endIndex - itemsPerPage);
                      setPageIndex(pageIndex - 1)
                      setTotalPages(Math.ceil(totalJobs / itemsPerPage))
                    }}
                  />
                </PaginationItem>
                <PaginationContent>
                  <PaginationItem>
                    {pageIndex} of {totalPages}
                  </PaginationItem>
                </PaginationContent>
                <PaginationItem>
                  <PaginationNext
                    className={pageIndex === totalPages ? "pointer-events-none opacity-50" : undefined
                    }
                    onClick={() => {
                      setStartIndex(startIndex + itemsPerPage);
                      setEndIndex(endIndex + itemsPerPage);
                      setPageIndex(pageIndex + 1)
                      setTotalPages(Math.ceil(totalJobs / itemsPerPage))
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

              {/*!-- Cards Container --*/}
              <div className="grid grid-cols-1 gap-y-9">
                <ViewJobPostCard  jobs={companyJobs} startIndex={startIndex} endIndex={endIndex}/>
              </div>
            </div>
          </div>
        </div>




        <footer className="h-20 w-full dark:bg-error-black bg-error-reallyDarkBlue">
          <div className="flex items-center justify-between h-full">
            <h4 className="text-3xl text-error-200 ml-8 font-extrabold">UTalent</h4>
            <div className="flex justify-end flex-grow mr-10">
              <NavigationMenuDemoFooter />
            </div>
          </div>
        </footer>
      </div>
      </div>
    </>
  );
}