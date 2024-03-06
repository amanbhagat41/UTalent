import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import  JobPostingCard  from "./jobPostingCard"
// First we will have too look through all job postings in the db
// Match the users' skills to required skills and return all jobID's into an array

export function JobPostingCarousel({jobs}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex items-center justify-center w-full"
    >
      <CarouselContent>
        {jobs.map((job, index) => (
          <CarouselItem key={index} className="md:basis-auto lg:basis-auto">
            <div className="p-2">
              <JobPostingCard job={job} index={index}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
