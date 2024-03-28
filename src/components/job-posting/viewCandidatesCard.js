"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function ViewCandidates({candidates, index, startIndex,endIndex,}) {
    // const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            {candidates.map((candidate, index) => (
                <div key={index}>
                    <Card
                        className="w-full h-[300px] dark:text-error-white dark:bg-error-darkGray dark:border-1 dark:border-error-white bg-error-white hover:bg-error-hoveredGray transition duration-150 ease-in-out"
                        // onMouseEnter={() => setIsHovered(true)}
                        // onMouseLeave={() => setIsHovered(false)}
                    >
                        <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ flexBasis: "80%" }}>
                                <CardHeader>
                                     <Link
                                       href={`/viewProfile/${candidate.uid}`}
                                        legacyBehavior
                                        passHref
                                    >
                                    <CardTitle className="cursor-pointer">{candidate.firstName} {candidate.lastName}
                                  
                                    </CardTitle>
                                    </Link>
                                    <CardDescription>
                                        {candidate.email}      
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-3">
                                        
                                    </p>
                                    <h1 className="font-bold text-lg">
                                        Candidate Skills:                                        
                                    </h1>
                                    <h1>
                                        {candidate.skills.join(", ")}                                       
                                    </h1>
                                    <h2 className="mt-2 font-bold text-lg">
                                        Candidate Bio:
                                    </h2>
                                    <h2>
                                    <p className='line-clamp-3'>
                                        {candidate.bio}
                                    </p>
                                    </h2>
                                </CardContent>
                                <CardFooter className="grid grid-rows-2">

                                </CardFooter>
                                    
                            </div>
                            <div style={{ flexBasis: "20%" }}>
                                <div className="grid grid-rows-4 h-[80%] items-center justify-center">
                                    <div className="text-end text-2xl">
                                        {/* {bid.jobNumberOfBids} */}
                                        <span className="ml-1 text-xl">
                                            Bid Amount:
                                            {candidate.bidAmount}
                                        </span>
                                    </div>
                                    <div className="text-end text-xl text-error-red">
                                        {candidate.jobDaysToDeliver}
                                        <span className="ml-1 text-lg">
                                            Days to Deliver
                                            
                                        </span>
                                    </div>
                                    <div>
                                    <Link
                                        href={`/`}
                                        legacyBehavior
                                        passHref
                                    >
                                        <Button
                                            className={`m-auto w-full bg-error-red hover:bg-error-darkRed`}
                                        >
                                           View Resume
                                        </Button>
                                    </Link>
                                    </div>
                                    <div className="mt-4">
                                   
                                        <Button
                                      onClick={() => window.location = `mailto:${candidate.email}`}

                                            className={`m-auto w-full  bg-error-red hover:bg-error-darkRed`}
                                            
                                        >
                                           Message
                                        </Button>
                                    
                                    </div>
                                   
                                    
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </>
    );
}
