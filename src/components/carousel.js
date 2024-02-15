import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="rounded-lg overflow-hidden bg-error-black h-96">
                <CardContent className="flex items-center justify-center p-6 bg-gray-200 h-full">
                  <span className="text-4xl font-semibold text-error-200 ">{'Job Posting '+(index + 1)}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export { CarouselDemo };
