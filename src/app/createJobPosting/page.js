"use client";
import React, { useState } from 'react'
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
import { collection, addDoc, doc, setDoc, serverTimestamp, documentId, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth } from "firebase/auth";
import { Car } from 'lucide-react'
import { useRouter } from "next/navigation";
import "typeface-poppins"
export default function jobPostingEmployer() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  const[job, setJob] = useState({
    jobPosterId: "",
    jobId: "",
    jobTitle: "",
    jobDescription: "",
    jobSkills: "",
    daysToDeliver: "",
    postedDate: "",
    jobLocation: "",
  })
  const onInputChange = (e) =>{
    setJob({...job, [e.target.name]: e.target.value });
  }
  const onJobPostingSubmit = async(e)=>{
    e.preventDefault();
    if(
      !job.title ||
      !job.skills ||
      !job.description ||
      !job.rate ||
      !job.daysDeliver ||
      !job.jobLocation) {
        console.log("All fields are required");
        return;
      }
      const docRef = await addDoc(collection(db, "jobPostings"), {
        jobPosterId: user.uid,
        jobTitle: job.title,
        jobDescription: job.description,
        jobRate: job.rate,
        jobSkills: job.skills,
        jobDaysToDeliver: job.daysDeliver,
        postedDate: serverTimestamp(),
        jobLocation: job.jobLocation,
      });
      await updateDoc(docRef, {
        jobId: docRef.id,
      });
      router.push("/loggedInEmployer")
    }
  return (
    <body className="bg-error-darkBlue dark:bg-error-black">
      <div className="flex justify-center items-center min-h-screen">
      <Card className="w-auto h-auto rounded-[24px] dark:bg-error-black dark:border-1 dark:border-error-white dark:shadow-glow">
        <CardHeader>
          <Label htmlFor="form"className="text-[32px] ml-[81px] mt-[45px] ">Create a New Job Posting</Label>
        </CardHeader>
        <CardContent id = "form" className="ml-[81px] mr-[81px] ">
          <div className="flex gap-[16px] mb-[55px] ">
            <div>
              <Label htmlFor="titleBox" className="text-[16px] ">Title</Label>
              <Input id = "titleBox"type="Title" name='title' onChange={onInputChange} placeholder="Enter a Title" className="w-[420px] h-[56px] mt-[7px] dark:border-1 dark:border-error-white dark:bg-error-black "/>
            </div>
            <div>
              <Label htmlFor="reqSkillsBox" className="text-[16px]">Required Skills</Label>
              <Input id = "reqSkillsBox" name='skills' onChange={onInputChange} placeholder="Enter Skills"className="w-[420px] h-[56px] mt-[7px] dark:border-1 dark:border-error-white dark:bg-error-black"/>
            </div>
          </div>
          <Label htmlFor="decription" className="text-[16px]">Describe Your Job Posting</Label>
          <Textarea id = "decription"type="description" name='description' onChange={onInputChange} className="justify-start items-start w-[856px] h-[300px] mt-[7px] dark:border-1 dark:border-error-white dark:bg-error-black"/>
          <div className="flex gap-[16px] mb-[108px] mt-[55px]">
          <div>
              <Label htmlFor="rate" className="text-[16px]">Preferred Rate</Label>
              <Input id = "rate" type="Title" placeholder="$/Hr" name='rate' onChange={onInputChange} className="w-[259px] h-[56px] mt-[7px] dark:border-1 dark:border-error-white dark:bg-error-black"/>
            </div>
            <div>
              <Label htmlFor="daystodeliver" className="text-[16px]">Days to Deliver</Label>
              <Input id = "daystodeliver" name='daysDeliver' placeholder="Days" onChange={onInputChange} className="w-[259px] h-[56px] mt-[7px] dark:border-1 dark:border-error-white dark:bg-error-black"/>
            </div>
            <div>
              <Label htmlFor="location" className="text-[16px]">Location</Label>
              <Input id = "location" name='jobLocation' placeholder="Virtual/OnSite" onChange={onInputChange} className="w-[259px] h-[56px] mt-[7px] dark:border-1 dark:border-error-white dark:bg-error-black"/>
            </div>
          </div>
        </CardContent>
        <CardFooter>
        <Button variant="outline" onClick={onJobPostingSubmit} className = "bg-error-darkPink rounded-[32px] w-[259px] h-[64px] text-error-white ml-[688px] text-[22px]">Post Job</Button>
        </CardFooter>
      </Card>
    </div>
    </body>
  )
}
