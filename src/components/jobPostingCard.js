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
        <Card className="w-[420px] h-[420px] dark:border-error-white dark:shadow-glow dark:bg-error-black">
            <div className="flex items-center justify-center mt-2">
                <img src= "images/netflix-logo-png-large.png" alt="Search" style={{ width: '300px', height: '60px'} } />
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-base">Company</h1>
                        <CardTitle className="text-lg font-bold">Card Title</CardTitle>
                    </div>
                    <div className="text-right">
                        <h2 className="text-sm font-medium">Starting Pay</h2>
                        <h3 className="text-lg font-semibold">$10/hr</h3>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex justify-center w-[400px] h-[170px] text-wrap overflow-auto mb-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className = "bg-error-darkPink rounded-[32px] w-[400px] h-[50px] text-error-white text-[22px]">Bid</Button>
            </CardFooter>
        </Card>
    );
  }
  export { jobPostingCard };
  