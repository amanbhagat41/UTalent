"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


export function TestingDemo({ jobPosting, index, startIndex, endIndex, }) {
  return (
    <>
      {jobPosting.slice(startIndex, endIndex).map((jobPosting, index) => (
        <div key={index}>
          <Card Card className="w-full h-full dark:text-error-white dark:bg-error-darkGray dark:border-1 dark:border-error-white bg-error-white hover:bg-error-hoveredGray transition duration-150 ease-in-out">
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ flexBasis: '80%' }}>
                <CardHeader>
                  <CardTitle>{jobPosting.title}</CardTitle>
                  <CardDescription>{jobPosting.companyName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{jobPosting.description}</p>
                </CardContent>
                <CardFooter className="grid grid-rows-2">
                  <h1>Skills Required</h1>
                  <p className="text-sm dark:text-error-white" id="skillsReq">{jobPosting.skills}</p>
                </CardFooter>
              </div>
              <div style={{ flexBasis: '20%' }}>
                <div className="grid grid-rows-4 h-[80%] items-center justify-center">
                  <div className="font-bold text-3xl text-error-green">$XXX
                    <span className="ml-2 font-normal text-xl text-error-black dark:text-error-white">Avg Bid</span>
                  </div>
                  <div className="text-end text-2xl">{jobPosting.numberOfBids}
                    <span className="ml-1 text-xl">Bids</span>
                  </div>
                  <div className="text-end text-xl text-error-red">XXX
                    <span className="ml-1 text-lg">Days Left</span>
                  </div>
                  <Link
                    href={`/jobs/${jobPosting.jobId}`}
                    legacyBehavior
                    passHref
                  >
                    <Button className={`m-auto w-full bg-error-green hover:bg-error-lightGreen`}>View Job</Button>
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
