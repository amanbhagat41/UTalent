"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/UTalent-DarkBlue.png";
import studentBid from "../../../public/images/studentbidding.webp"
import logoDark from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function StudentEmployerSignup() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="bg-error-100 dark:bg-error-black">
            <div className="flex items-center justify-center h-screen">
                <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-2 w-full h-full">
                        <div className="relative flex w-full h-full">
                            <Image
                                src={studentBid}
                                alt="logo"
                                priority
                                layout="fill"
                                objectFit="cover"
                                className="rounded-bl-3xl rounded-tl-3xl"
                            />
                        </div>
                        <div className="flex flex-col p-4 justify-center">
                            <div className="flex w-full justify-center">
                                <Image
                                    src={theme === "dark" ? logoDark : logo}
                                    width="150"
                                    height="150"
                                    alt="logo"
                                    priority
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>
                            
                            <div className="flex flex-col p-4 gap-8">
                                <h1 className="text-center text-3xl font-bold">Are you a Student or an Employer?</h1>
                                
                                <div className="flex justify-center">
                                    <div className="pr-10">
                                        <Link
                                            href="/signupStudent"
                                            legacyBehavior
                                            passHref
                                        >
                                            <Button className="bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12 w-36 dark:text-error-200">
                                                Student
                                            </Button>
                                        </Link>
                                    </div>
                                    <Link
                                        href="/signupEmployer"
                                        legacyBehavior
                                        passHref
                                        >
                                        <Button className="bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12 w-36 dark:text-error-200">
                                            Employer
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
