import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { jobPostingCard } from "./jobPostingCard"
export function JobPostingCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="flex items-center justify-center w-full"
    >
      <CarouselContent>
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-auto lg:basis-auto">
            <div className="p-2">
              {jobPostingCard(index)}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
