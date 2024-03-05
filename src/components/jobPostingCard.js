import * as React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button";
  
  function jobPostingCard(index) {
    return (
        <Card className="w-[420px] h-[420px] dark:border-error-white dark:shadow-glow dark:bg-error-black rounded-3xl">
            <img src= "images/jobPostIcon.png" alt="" style={{ width: '48px', height: '48px'} } className="justify-start mt-2 ml-5 bg-transparent rounded-3xl"/>
            <CardHeader className="-mt-5">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-2xl font-bold line-clamp-1 ">Job Title</CardTitle>
                        <h1 className="text-lg line-clamp-1">Company</h1>
                        <h2 className="text-base line-clamp-1">Location</h2>
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center ml-0">
                            <img src="images/moneySymbol.png" alt="" style={{ width: '24px', height: '24px' }} className="justify-start mt-2 bg-error-white rounded-3xl"/>
                            <div className="flex items-center space-x-0 ml-2 mt-1">
                                <span className="text-lg font-semibold">$</span>
                                <h3 className="text-lg font-semibold">10</h3>
                                <span className="text-lg font-semibold">/HR</span>
                            </div>
                        </div>
                        <div className="flex items-center ml-0">
                            <img src="images/briefcase.png" alt="" style={{ width: '24px', height: '24px' }} className="justify-start mt-2 rounded-3xl filter brightness-0 dark:brightness-100"/>
                            <h3 className="text-lg font-base ml-2 mt-1">Job Type</h3>
                        </div>
                    </div>
                </div>
                
            </CardHeader>
            <CardContent className="justify-center w-full z-1">
                <p className="text-wrap line-clamp-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className = "bg-error-darkPink rounded-[32px] w-[100%] h-auto text-error-white text-[22px] z-10">Bid</Button>
            </CardFooter>
        </Card>
    );
  }
  export { jobPostingCard };
  