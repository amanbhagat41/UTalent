"use client"
import React, { useState, useEffect } from "react";


import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { collection, getDocs, limit, orderBy ,query} from "firebase/firestore";
import { db } from "@/firebase";
import { Poppins } from "next/font/google";
import Link from "next/link";
function CarouselDemo() {
  const [randomJobs, setRandomJobs] = useState([]);
  useEffect(() => {
    const fetchRandomJobs = async () => {
      const jobPostingsRef = collection(db, "jobPostings");
      const jobPostingsSnapshot = await getDocs(jobPostingsRef);
      const jobPostingsData = [];
      jobPostingsSnapshot.forEach((doc) => {
        jobPostingsData.push(doc.data());
      });
      const shuffledJobs = jobPostingsData.sort(() => Math.random() - 0.5);
      const randomJobs = shuffledJobs.slice(0, 5); 
      setRandomJobs(randomJobs);
      console.log(randomJobs);
    };
    fetchRandomJobs();
  }, []);
  
  return (
   
    <Carousel className="w-full max-w-xl">
      <CarouselContent className="cursor-pointer">
      {randomJobs.map((job, index) => (
       
  <CarouselItem key={index}>
     <Link href={`/jobs/${job.jobId}`}
       legacyBehavior
        passHref>
    <div className="p-1" >
      <Card className="rounded-lg overflow-hidden bg-error-black h-96 dark:border-error-white dark:shadow-glow">
        <CardContent className="flex items-center justify-center p-6 bg-gray-200 h-full">
          <span className="text-4xl font-semibold text-error-200">
            {job.title}
          </span>
        </CardContent>
      </Card>
    </div>
    </Link>
  </CarouselItem>

))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   
  );
 
}

export { CarouselDemo };
