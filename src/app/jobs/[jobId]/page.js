"use client";

import React, { useEffect, useState } from "react";
import { NavigationMenuStudentLoggedIn } from "@/components/navbar/navloggedinStudent";
import { NavigationMenuEmployerLoggedIn } from "@/components/navbar/navloggedinEmployer";
import { NavigationMenuDemo } from "@/components/navbar/navJobPostingEmployer";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo-no-bg.png";
import { db } from "../../../firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {Loader2} from "lucide-react"

export default function page({ params }) {
    const [role, setRole] = useState(null);
    const [job, setJob] = useState(null);

    const { jobId } = params;
    const auth = getAuth();
    useEffect(() =>{
        const fetchJobs = async () => {
            const jobDoc = await getDoc(doc(db, "jobPostings", jobId));
            setJob(jobDoc.data())
        }
        fetchJobs()

    },[])
    useEffect(() => {
        const fetchUserRole = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, "users", uid);
                getDoc(userRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        setRole(userData.role); // Set fetched data into userDetails
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }
        });
        return () => fetchUserRole();
    }, []);

    if(job === null){
        return(
            <Loader2 className="animate-spin"></Loader2>
        )
    }


    return (
        <>
            <div className="flex flex-col h-[1662px]z dark:bg-[#222]">
                {/*Header*/}
                <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
                    <div className="flex items-center justify-between h-full">
                        <div>
                            <Image
                                src={logo}
                                width="150"
                                height="150"
                                alt="logo"
                            ></Image>
                        </div>
                        
                        <div className="flex justify-end flex-grow ">
                        {role === null ? (
    
                                <Loader2 className="animate-spin" />
                         
                    ) : role === "Student" ? (
                        <NavigationMenuStudentLoggedIn/>
                    ) : (
                        <NavigationMenuEmployerLoggedIn />
                    )}
                            
                        </div>
                        <div className="w-10 h-10"></div>
                    </div>
                </nav>

                <div className=" justify-left ml-64 mr-64">
                    {/*Body*/}
                    <div>
                        {/*Listing*/}
                        <h1 className="flex font-bold text-5xl mt-5">
                            {job.title}
                        </h1>
                    </div>
                    <div>
                        <h3 className="flex text-[#4A4A4A] text-sm mt-5 dark:text-[#FFFFFF]">
                            {job.description}
                        </h3>
                    </div>
                    <div className="flex flex-wrap pt-10">
                        {/*Skills*/}
                        <h3 className="flex font-bold text-[#013C5E] text-base mt-5 mr-2 dark:text-[#FFFFFF]">
                            Skills-
                        </h3>
                        {job.skills.map((skill, index) => (
                        <Button key ={index} className="bg-[#013C5E] dark:bg-[#FFFFFF] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2">
                            {skill}
                        </Button>
                        ))}
                        
                    </div>
                    {role === null ? (
                        <div className="flex justify-center pt-5">
                            <Button className="bg-error-300 rounded-3xl w-40 hover:bg-error-100 text-lg h-12 mt-8 dark:text-[#FFFFFF]">
                                <Loader2 className="animate-spin" />
                            </Button>
                    </div>
                    ) : role === "Student" ? (
                        <div className="flex justify-center pt-5">
                            <Link
                                href={`/bids/${job.jobId}`}
                                legacyBehavior
                                passHref
                            >
                                <Button className="bg-error-300 rounded-3xl hover:bg-error-100 text-lg h-12 mt-8 dark:text-[#FFFFFF]">
                                    Bid
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex justify-center pt-5">
                            {/* <Link
                                href="/student-employersignup"
                                legacyBehavior
                                passHref
                            >
                                <Button className="bg-error-300 rounded-3xl hover:bg-error-100 text-lg h-12 mt-8 dark:text-[#FFFFFF]">
                                    View Candidates
                                </Button>
                            </Link> */}
                        </div>
                    )}
                </div>

                <div>
                    <footer className="bg-error-100 h-20 w-full stickey bottom-0 mt-24 dark:bg-error-black ">
                        {/*Footer*/}
                        <div className="flex items-center justify-between h-full">
                            <h4 className="text-2xl text-error-200 ml-8">
                                UTalent
                            </h4>
                            {/* <h4 className="flex justify-end flex-grow"></h4> */}
                            <div className="flex justify-end flex-grow mr-10  ">
                                <NavigationMenuDemoFooter></NavigationMenuDemoFooter>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
