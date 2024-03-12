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

export function ViewBidPostCard({bids, index, startIndex,endIndex,}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            {bids.map((bid, index) => (
                <div key={index}>
                    <Card
                        className="w-full h-[300px] dark:text-error-white dark:bg-error-darkGray dark:border-1 dark:border-error-white bg-error-white hover:bg-error-hoveredGray transition duration-150 ease-in-out"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ flexBasis: "80%" }}>
                                <CardHeader>
                                    <CardTitle>{bid.jobTitle}</CardTitle>

                                    <CardDescription>
                                        {bid.jobCompanyName}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-3">
                                        {bid.jobDescription}
                                    </p>
                                </CardContent>
                                <CardFooter className="grid grid-rows-2">
                                    <h1>
                                        Skills Required:{" "}
                                        {bid.jobSkills.join(", ")}
                                    </h1>
                                </CardFooter>
                            </div>
                            <div style={{ flexBasis: "20%" }}>
                                <div className="grid grid-rows-4 h-[80%] items-center justify-center">
                                    <div className="text-end text-2xl">
                                        {bid.jobNumberOfBids}
                                        <span className="ml-1 text-xl">
                                            Bids
                                        </span>
                                    </div>
                                    <div className="text-end text-xl text-error-red">
                                        {bid.jobDaysToDeliver}
                                        <span className="ml-1 text-lg">
                                            Days to Deliver
                                        </span>
                                    </div>
                                    <Link
                                        href={`/jobs/${bid.jobId}`}
                                        legacyBehavior
                                        passHref
                                    >
                                        <Button
                                            className={`m-auto w-full bg-error-red hover:bg-error-darkRed ${
                                                isHovered ? "block" : "hidden"
                                            }`}
                                        >
                                            View Job
                                        </Button>
                                    </Link>
                                
                                         <Link
                                         href={`/bidProposal/${bid.bidId}`}
                                         legacyBehavior
                                         passHref
                                     >
                                    <Button
                                        className={`m-auto w-full bg-error-red hover:bg-error-darkRed ${
                                            isHovered ? "block" : "hidden"
                                        }`}
                                    >
                                        View Proposal
                                    </Button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </>
    );
}
