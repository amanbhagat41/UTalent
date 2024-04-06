'use client'

import React, { useState, useEffect } from "react";
import Head from 'next/head';
import { MessageSquareText } from 'lucide-react';
import Image from "next/image";
import logo from "../../../../public/images/logo-no-bg.png";
import BubbleSkills from "@/components/ui/bubbleSkills";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { collection, getDocs, limit, orderBy ,query,doc, getDoc, where} from "firebase/firestore";
import { db } from "../../../firebaseKey";
import {Loader2} from "lucide-react"
import { ViewProfileNavBar } from "@/components/navbar/navViewOtherProfile";

export default function Page({params}) {
    const {userId}=params
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const fetchUserInfo = async () => {
            const jobDoc = await getDoc(doc(db, "users", userId));
            setUserData(jobDoc.data());
        };
        fetchUserInfo();
    }, []);
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className="dark:bg-error-darkGray">
        <div className="flex flex-col h-auto dark:bg-error-black">
            <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
                <div className="flex items-center justify-between h-auto">
                <div>
                    <Link href="/loggedInEmployer" legacyBehavior passHref>
                    <Image src={logo} width="150" height="150" alt="logo" className="cursor-pointer"></Image>
                    </Link>
                </div>
                <div className="flex justify-end flex-grow ">
                    <ViewProfileNavBar />
                </div>
                <div className="w-10 h-10"></div>
                </div>
            </nav>
        </div>
        
        <div className="h-[35vh] w-auto bg-error-darkBlue dark:bg-error-black"></div>

        <div className="grid grid-rows-2 -mt-[10vh] h-screen">
            <div className="w-full">
                <div className="flex items-center justify-center h-auto ">
                    <div className="">
                        <Avatar className="w-[10vw] h-[10vw] m-auto">
                            <AvatarImage src={userData?.profileImageUrl || 'https://github.com/shadcn.png'} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="grid grid-flow-row auto-rows-max justify-items-center mt-8">
                            <h1 id="firstName" className="font-semibold text-[1.5vw]">{userData.firstName} {userData.lastName}</h1>
                            <h3 id="location" className="font-normal mt-2 text-[1vw]">{userData.location}</h3>
                            <span id="bio" className="mt-4 text-center w-[20vw] h-[10vw] text-[.7vw] leading-relaxed">{userData.bio}</span>
                            <Button className="w-[10vw] h-[2vw] text-[.7vw] -mt-[5vw] dark:bg-error-black text-error-white dark:border-2 dark:border-error-white dark:shadow-glow mt-10">
                                <MessageSquareText/>
                                <div className="ml-[.5vw]">Message</div>
                            </Button>
                            <div className="bg-error-darkBlue w-[15vw] h-[2vw] text-center text-[1.2vw] dark:bg-error-black text-error-white rounded-xl mt-10">Skills</div>
                            
                            <BubbleSkills skills={userData.skills}></BubbleSkills>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}
