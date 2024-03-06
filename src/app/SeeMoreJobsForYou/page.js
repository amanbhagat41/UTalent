import React from 'react';
import { TestingDemo } from '@/components/job-posting/jobPostCard';
import { NavigationMenuStudentLoggedIn } from "@/components/navbar/navloggedinStudent";
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
              <NavigationMenuStudentLoggedIn />
            </div>
            <div className="w-10 h-10"></div>
          </div>
        </nav>

        
        <div class="container mx-auto px-4 py-8 mt-10 dark:bg-error-black">
          <Label htmlFor="filter" className="text-4xl underline">Jobs For You:</Label>
          <div id="filter" class="flex flex-wrap -mx-4 mt-10">
            {/*!-- Filter Column --*/}
            <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0 rounded-lg ">
              <div class="bg-white p-4 shadow-lg rounded-lg dark:bg-error-darkGray">
                <h2 class="font-bold text-lg mb-4">Filters</h2>
                {/*!-- Filters content here --*/}
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
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />
                <TestingDemo />

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
