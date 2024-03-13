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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Loader2 } from "lucide-react";

export default function page({ params }) {
    const [role, setRole] = useState(null);
    const [job, setJob] = useState(null);
    const [userUid, setUserUid] = useState(null);

    const { jobId } = params;
    const auth = getAuth();
    useEffect(() => {
        const fetchJobs = async () => {
            const jobDoc = await getDoc(doc(db, "jobPostings", jobId));
            setJob(jobDoc.data());
        };
        fetchJobs();
    }, []);
    useEffect(() => {
        const fetchUserRole = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, "users", uid);
                getDoc(userRef)
                    .then((docSnap) => {
                        if (docSnap.exists()) {
                            const userData = docSnap.data();
                            setRole(userData.role); // Set fetched data into userDetails
                        } else {
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });
            }
        });
        return () => fetchUserRole();
    }, []);
    useEffect(() => {
        const fetchUserUid = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, "users", uid);
                getDoc(userRef)
                    .then((docSnap) => {
                        if (docSnap.exists()) {
                            const userData = docSnap.data();
                            setUserUid(userData.uid); // Set fetched data into userDetails
                        } else {
                            console.log("No such document!");
                        }
                    })
                    .catch((error) => {
                        console.log("Error getting document:", error);
                    });
            }
        });
        return () => fetchUserUid();
    }, []);

    if (job === null) {
        return <Loader2 className="animate-spin"></Loader2>;
    }

    return (
        <>
            <div className="flex flex-col justify-between min-h-screen dark:bg-[#222]">
                {/*Header*/}
                <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
                    <div className="flex items-center justify-between h-full">
                        {role === null ? (
                            <Loader2 className="animate-spin" />
                        ) : role === "Student" ? (
                            <div>
                                <Link
                                    href="/loggedinStudent"
                                    legacyBehavior
                                    passHref
                                >
                                    <Image
                                        src={logo}
                                        width="150"
                                        height="150"
                                        alt="logo"
                                        className="cursor-pointer"
                                    ></Image>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Link
                                    href="/loggedInEmployer"
                                    legacyBehavior
                                    passHref
                                >
                                    <Image
                                        src={logo}
                                        width="150"
                                        height="150"
                                        alt="logo"
                                        className="cursor-pointer"
                                    ></Image>
                                </Link>
                            </div>
                        )}

                        <div className="flex justify-end flex-grow ">
                            {role === null ? (
                                <Loader2 className="animate-spin" />
                            ) : role === "Student" ? (
                                <NavigationMenuStudentLoggedIn />
                            ) : (
                                <NavigationMenuEmployerLoggedIn />
                            )}
                        </div>
                        <div className="w-10 h-10"></div>
                    </div>
                </nav>
                <main className="flex-grow">
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-5xl mx-auto">
                            {/* Body */}
                            <div>
                                {/* Listing */}
                                <h1 className="font-bold text-5xl mt-5">
                                    {job.title}
                                </h1>
                            </div>
                            <div>
                                <h3 className="text-[#4A4A4A] text-sm mt-5 dark:text-[#FFFFFF]">
                                    {job.description}
                                </h3>
                            </div>
                            <div className="flex flex-wrap pt-10">
                                {/* Skills */}
                                <h3 className="font-bold text-[#013C5E] text-base mt-5 mr-2 dark:text-[#FFFFFF]">
                                    Skills-
                                </h3>
                                {job.skills.map((skill, index) => (
                                    <Button
                                        key={index}
                                        className="bg-[#013C5E] dark:bg-[#FFFFFF] float-end rounded-3xl hover:bg-[#013C5E] cursor-default text-base h-12 font-bold mt-2 mr-2"
                                    >
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
                                        <Button className="bg-error-300 rounded-3xl hover:bg-error-100 text-lg w-36 mb-8 h-12 mt-8 dark:text-[#FFFFFF]">
                                            Bid
                                        </Button>
                                    </Link>
                                </div>
                            ) : role === "Employer" &&
                              userUid === job.companyId ? (
                                <div className="flex justify-center pt-5">
                                    <Link href={`/viewCandidates/${job.jobId}`} legacyBehavior passHref>
                                        <Button className="bg-error-300 rounded-3xl hover:bg-error-100 text-lg h-12 mt-8 dark:text-[#FFFFFF]">
                                            View Candidates
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex justify-center pt-5"></div>
                            )}
                        </div>
                    </div>
                </main>
                <div className="flex flex-end">
                    <footer className="h-20 w-full bottom-0 relative dark:bg-error-black bg-error-reallyDarkBlue">
                        <div className="flex items-center justify-between h-full">
                            <h4 className="text-3xl text-error-200 ml-8 font-extrabold">
                                UTalent
                            </h4>
                            <div className="flex justify-end flex-grow mr-10">
                                <NavigationMenuDemoFooter></NavigationMenuDemoFooter>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
