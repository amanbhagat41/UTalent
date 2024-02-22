import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Car } from 'lucide-react'
import "typeface-poppins"
export default function jobPostingEmployer() {
  return (
    <body class="bg-error-darkBlue  dark:bg-error-black dark:border-1">
      <div className="flex justify-center items-center min-h-screen">
      <Card className="w-auto h-auto rounded-[24px]  dark:bg-error-black dark:border-1 dark:border-error-white dark:shadow-glow">
        <CardHeader>
          <Label htmlFor="form"className="text-[32px] ml-[81px] mt-[45px]">Place a Bid on This Project</Label>
        </CardHeader>
        <CardContent id = "form" className="ml-[81px] mr-[81px]">
          <div className="flex gap-[16px] mb-[55px]">
            <div>
              <Label htmlFor="bidAmount" className="text-[16px]">Bid Amount</Label>
              <Input id = "bidAmount" placeholder="Amount" className="w-[420px] h-[56px] mt-[7px]  dark:border-error-white dark:bg-error-black dark:border-1"/>
            </div>
            <div>
              <Label htmlFor="daystoDeliver" className="text-[16px]">Days to Deliver</Label>
              <Input id = "daystoDeliver" placeholder="Days"className="w-[420px] h-[56px] mt-[7px]  dark:border-error-white dark:bg-error-black dark:border-1"/>
            </div>
          </div>
          <Label htmlFor="decription" className="text-[16px]">Describe Your Proposal</Label>
          <Textarea id = "decription" className="justify-start items-start w-[856px] h-[300px] mt-[7px]  dark:border-error-white dark:bg-error-black dark:border-1"/>
          <div className="flex gap-[16px] mb-[108px] mt-[55px]">
            <div>
              <Label htmlFor="attachResume" className="text-[16px]">Attach Resume/CV</Label>
              <Input id = "attachResume" type="file" className="w-[259px] h-[56px] mt-[7px]  dark:border-error-white dark:bg-error-black dark:border-1"/>
            </div>
          </div>
        </CardContent>
        <CardFooter>
        <Button variant="outline" className = "bg-error-darkPink rounded-[32px] w-[259px] h-[64px] text-error-white ml-[688px] text-[22px] ">Place Bid</Button>
        </CardFooter>
      </Card>
    </div>
    </body>
  )
}
