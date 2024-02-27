import React from "react";
import { NavigationMenuDemo } from "@/components/navjobviewingemployer";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { NavigationMenuDemoFooter } from "@/components/navfooter";

export default function JobViewingEmployer() {
  return (
    <div>
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
      </div>

  <div className="w-full h-screen dark:bg-error-black">
    <div className="grid grid-cols-2 h-full">
      <div className="w-full h-full">
      <div className="flex items-center justify-left ml-8 bg-neutral-500">
          <div class="bg-white p-8 rounded-lg shadow-lg ">
            <div class="mb-4">
            <h1 className="uppercase text-[1.5vw] mb-4">Filter By:</h1>
            <label for="fixed-price-min" class="block text-sm font-medium text-gray-700">Fixed Price</label>
            <div class="mt-4 flex rounded-md shadow-sm">
            <input type="number" name="fixed-price-min" id="fixed-price-min" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-l-md" placeholder="Min">
            </input>
                <h1 class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                  to
                </h1>
                <input type="number" name="fixed-price-max" id="fixed-price-max" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-r-md" placeholder="Max">
                </input>
            </div>

          <div class="mb-4">
            <label for="hourly-rate-min" class="block text-sm font-medium text-gray-700">Hourly Rate</label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <input type="number" name="hourly-rate-min" id="hourly-rate-min" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-l-md" placeholder="Min"></input>
              <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                to
              </span>
              <input type="number" name="hourly-rate-max" id="hourly-rate-max" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-r-md" placeholder="Max"></input>
            </div>
          </div>

          <div class="mb-4">
            <label for="duration" class="block text-sm font-medium text-gray-700">Duration</label>
            <select id="duration" name="duration" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Less than 1 week</option>
              <option>1-2 weeks</option>
              <option>2-3 weeks</option>
              <option>3-4 weeks</option>
              <option>1-2 months</option>
              <option>3+ months</option>
            </select>
          </div>

          <div class="mb-4">
            <fieldset>
              <legend class="text-sm font-medium text-gray-700">Type</legend>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input id="local-jobs" name="type" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                  <label for="local-jobs" class="ml-3 block text-sm font-medium text-gray-700">Local Jobs</label>
                </div>
                <div class="flex items-center">
                  <input id="featured-jobs" name="type" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                  <label for="featured-jobs" class="ml-3 block text-sm font-medium text-gray-700">Featured Jobs</label>
                </div>
                <div class="flex items-center">
                  <input id="featured-jobs" name="type" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                  <label for="featured-jobs" class="ml-3 block text-sm font-medium text-gray-700">Recruiter Jobs</label>
                </div>
                <div class="flex items-center">
                  <input id="featured-jobs" name="type" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                  <label for="featured-jobs" class="ml-3 block text-sm font-medium text-gray-700">Remote Jobs</label>
                </div>
                <div class="flex items-center">
                  <input id="featured-jobs" name="type" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"></input>
                  <label for="featured-jobs" class="ml-3 block text-sm font-medium text-gray-700">University Jobs</label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
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
  </div>

  )
}
