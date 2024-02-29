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
    <div className="col-end-2">
      <div className="col-end-2 w-full md:w-1/2 h-full">
        <div className="flex items-center justify-left ml-8 bg-neutral-500">
            <div class="bg-white p-8 rounded-lg shadow-lg ">
                  <div class="mb-4">
                  <h1 className="uppercase text-[1.5vw] mb-4">Filter By:</h1>
                  <label for="fixed-price-min" class="block text-sm font-medium text-gray-700">Fixed Price</label>
                  <div class="mt-4 flex rounded-md shadow-sm">
                  <input type="number" name="fixed-price-min" id="fixed-price-min" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Min">
                  </input>
                      <h1 class="inline-flex items-center px-3  text-sm text-gray-500">
                        to
                      </h1>
                      <input type="number" name="fixed-price-max" id="fixed-price-max" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Max">
                      </input>
                  </div>

                <div class="mb-4">
                  <label for="hourly-rate-min" class="block text-sm font-medium text-gray-700">Hourly Rate</label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="number" name="hourly-rate-min" id="hourly-rate-min" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Min"></input>
                    <span class="inline-flex items-center px-3  text-sm text-gray-500">
                      to
                    </span>
                    <input type="number" name="hourly-rate-max" id="hourly-rate-max" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Max"></input>
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
        <div class="flex flex-col space-y-4 mr-8">
          <div class="bg-white p-4 rounded-lg shadow-lg">
            
            <h3 class="text-lg font-semibold">Innovative Coin-Based Engagement App</h3>
            <span class="text-sm text-gray-600 mt-2">0 bids</span>
            <p class="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu. Duis at tellus at urna condimentum mattis pellentesque id nibh. Placerat orci nulla pellentesque dignissim enim sit. Ullamcorper eget nulla facilisi etiam dignissim. Faucibus in ornare quam viverra. Nulla at volutpat diam ut. Elementum integer enim neque volutpat ac. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Nunc consequat interdum varius sit.
            </p>
            <div class="flex items-baseline mt-2">
              <span class="text-gray-900 font-semibold">$8-15</span>
              <span class="text-sm text-gray-600 ml-2">/ hr</span>
            </div>
          </div>
          <div>
          <div class="bg-white p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-semibold">Dynamic Residential Listings Portal</h3>
            <span class="text-sm text-gray-600 mt-2">6 bids</span>
            <p class="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu. Duis at tellus at urna condimentum mattis pellentesque id nibh. Placerat orci nulla pellentesque dignissim enim sit. Ullamcorper eget nulla facilisi etiam dignissim. Faucibus in ornare quam viverra. Nulla at volutpat diam ut. Elementum integer enim neque volutpat ac. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Nunc consequat interdum varius sit.
            </p>
            <div class="flex items-baseline mt-2">
              <span class="text-gray-900 font-semibold">$300-$500</span>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-semibold">E-commerce Website and Logo Design</h3>
            <span class="text-sm text-gray-600 mt-2">2 bids</span>
            <p class="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu. Duis at tellus at urna condimentum mattis pellentesque id nibh. Placerat orci nulla pellentesque dignissim enim sit. Ullamcorper eget nulla facilisi etiam dignissim. Faucibus in ornare quam viverra. Nulla at volutpat diam ut. Elementum integer enim neque volutpat ac. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Posuere morbi leo urna molestie at elementum eu facilisis sed. Nunc consequat interdum varius sit.
            </p>
            <div class="flex items-baseline mt-2">
              <span class="text-gray-900 font-semibold">$30-$40</span>
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
