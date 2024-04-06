"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getAuth } from 'firebase/auth';
import { collection, addDoc, doc, serverTimestamp, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



export default function JobPostingEmployer() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;

  const [job, setJob] = useState({
    jobPosterId: "",
    jobId: "",
    jobTitle: "",
    description: "",
    jobSkills: "",
    daysToDeliver: "",
    postedDate: "",
    jobLocation: "",
  });

  const onInputChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const onJobPostingSubmit = async (e) => {
    e.preventDefault();

    if (!job.jobTitle || !job.jobSkills || !job.description || !job.jobLocation || !job.daysToDeliver) {
      console.log('All fields are required');
      return;
    }

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();

    const docRef = await addDoc(collection(db, 'jobPostings'), {
      companyId: user.uid,
      companyName: userData.companyName,
      title: job.jobTitle,
      description: job.description,
      rate: job.rate,
      skills: job.jobSkills.split(', '),
      daysToDeliver: job.daysToDeliver,
      postedDate: serverTimestamp(),
      location: job.jobLocation,
      numberOfBids: 0,
    });

    await updateDoc(docRef, {
      jobId: docRef.id,
    });

    router.push('/loggedInEmployer');
  };
  return (
    <div className="bg-error-darkBlue dark:bg-error-black">
      <div className="grid grid-flow-row w-[50%] h-full m-auto pt-12 p-6 rounded-xl bg-error-white border-separate border border-error-gray">
        <div className="border-b-[2px]">
          <Label htmlFor="titleBox" className="text-[16px]">Job Title</Label>
          <Input id="titleBox" type="text" name="jobTitle" onChange={onInputChange} placeholder="Enter a Title" className="h-[56px] mt-[7px] dark:border-1 mb-8 dark:border-error-white dark:bg-error-black" />
        </div>
        <div className="border-b-[2px] mt-4">
          <Label htmlFor="reqSkillsBox" className="text-[16px]">Required Skills (put commas in between)</Label>
          <Input id="reqSkillsBox" name="jobSkills" onChange={onInputChange} placeholder="Enter Skills" className="h-[56px] mt-[7px] dark:border-1 mb-8 dark:border-error-white dark:bg-error-black" />
        </div>
        <div className="border-b-[2px] mt-4">
          <Label htmlFor="jobLocationBox" className="text-[16px]">Location</Label>
          <Input id="jobLocationBox" name="jobLocation" onChange={onInputChange} placeholder="Job Location" className="h-[56px] mt-[7px] dark:border-1 mb-8 dark:border-error-white dark:bg-error-black" />
        </div>
        <div className="grid grid-cols-2 border-b-[2px] mt-4 gap-4">
          <div className="">
            <Label htmlFor="daysToDeliverBox" className="text-[16px]">Days to Deliver</Label>
            <Input id="daysToDeliverBox" name="daysToDeliver" onChange={onInputChange} placeholder="Days to Deliver" className="h-[56px] mt-[7px] dark:border-1 mb-8 dark:border-error-white dark:bg-error-black" />
          </div>
          <div>
              <Label htmlFor="rate" className="text-[16px]">Preferred Rate</Label>
              <Input id = "rate" type="Title" placeholder="$/Hr" name='rate' onChange={onInputChange} className="h-[56px] mt-[7px] dark:border-1 dark:border-error-white dark:bg-error-black"/>
          </div>
        </div>
        
        <div className="editor-container h-auto max-h-[600px] min-h-96 border-b-[2px] mt-4 border-[1px] overflow-y-auto border-error-gray">
        <textarea id = "description" type="Title" placeholder="description" name='description' onChange={onInputChange} className="h-full w-full"/>
        </div>
        <div className="flex justify-center mt-12">
          <button variant="outline" onClick={onJobPostingSubmit} className="bg-error-darkPink rounded-[32px] w-[20%] h-[64px] text-error-white text-[22px]">Post Job</button>
        </div>
      </div>
    </div>
  );
}
