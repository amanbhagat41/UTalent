import React from 'react';
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

import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";

export default function Page() {
  
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

        
        <div class="container mx-auto px-4 py-8 mt-10 dark:bg-error-black">
          <Label htmlFor="filter" className="text-4xl underline">Your Posted Jobs:</Label>
          <div id="filter" class="flex flex-wrap -mx-4 mt-10">
            {/*!-- Filter Column --*/}
            <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0 rounded-lg">
              <div class="bg-white p-4 shadow-lg rounded-lg dark:bg-error-darkGray">
                <h2 class="font-bold text-lg mb-4">Filters</h2>
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

            <div class="w-full md:w-3/4 px-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="#">9</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

              {/*!-- Cards Container --*/}
              <div class="grid grid-cols-1 gap-y-9">
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>
                <ViewJobPostCard/>

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
