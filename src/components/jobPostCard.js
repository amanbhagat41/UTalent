"use client";
import React, { useState } from 'react';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  export function TestingDemo() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Card Card className="w-full h-full dark:text-error-white dark:bg-error-darkGray dark:border-1 dark:border-error-white bg-error-white hover:bg-error-hoveredGray transition duration-150 ease-in-out" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ flexBasis: '80%' }}>
                      <CardHeader>
                          <CardTitle>Job Title</CardTitle>
                          <CardDescription>Company</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </CardContent>
                      <CardFooter className="grid grid-rows-2">
                          <h1>Skills Required</h1>
                          <p className="text-sm dark:text-error-white" id="skillsReq">Data analysis Adaptability and flexibility Financial planning and analysis Time management</p>
                      </CardFooter>
                    </div>
                    <div style={{ flexBasis: '20%' }}>
                      <div className="grid grid-rows-4 h-[80%] items-center justify-center">
                        <div className="font-bold text-3xl text-error-green">$XXX
                          <span className="ml-2 font-normal text-xl text-error-black dark:text-error-white">Avg Bid</span>
                        </div>
                        <div className="text-end text-2xl">XXX
                          <span className="ml-1 text-xl">Bids</span>
                        </div>
                        <div className="text-end text-xl text-error-red">XXX
                          <span className="ml-1 text-lg">Days Left</span>
                        </div>
                        <Button className={`m-auto w-full bg-error-green hover:bg-error-lightGreen ${isHovered ? 'block' : 'hidden'}`}>Bid</Button>
                      </div>
                    </div>
                  </div>
                </Card>
    );
  }
  