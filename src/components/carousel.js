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
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/firebase";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Loader2 } from "lucide-react";
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

function randomImage() {
    const images = ['dock.jpeg', 'lake.jpg', 'mountain.jpeg', 'valley.jpeg', 'marsh.jpeg', 'mountain_sun.jpeg', 'river.jpeg', 'road.jpeg', 'sahara.jpeg', 'sur.jpeg', 'catalina.jpeg', 'captain.jpeg'];
    let randomIndex = Math.floor(Math.random() * images.length);
    const used = [];

    while (used.includes(randomIndex)){
      randomIndex = Math.floor(Math.random() * images.length);
    }
    used.push(randomIndex);
    return `url('/images/backgrounds/${images[randomIndex]}')`;
}
if (randomJobs.length === 0) {
  return <Loader2 className="animate-spin"></Loader2>;
}
  
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
      <CardContent className="bg-cover flex items-left justify-left p-6 bg-white h-full" style={{ backgroundImage: randomImage(index) }}>
          <span className="font-semibold text-error-200">
           <div className="text-4xl top-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)]">{job.title}</div>
            <div className="text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)]">{job.companyName}</div>
            <div className="flex items-center ml-0">
                            <img
                                src="images/moneySymbol.png"
                                alt=""
                                style={{ width: "24px", height: "24px" }}
                                className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)] justify-start mt-2 bg-error-white rounded-3xl"
                            />
                            <div className="flex items-center space-x-0 ml-2 mt-1">
                                <span className="text-lg font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)]">$</span>
                                <h3 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)] text-lg font-semibold">
                                  {job.rate}
                                </h3>
                                <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)] text-lg font-semibold">
                                  /HR
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center ml-0">
                            <img
                                src="images/briefcase.png"
                                alt=""
                                style={{ width: "24px", height: "24px" }}
                                className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)] justify-start mt-2 rounded-3xl filter brightness-0 dark:brightness-100"
                            />
                            <h3 className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.0)] text-lg font-base ml-2 mt-1">
                                {job.location}
                            </h3>
                        </div>

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
